var pValid = [
  {
    $group: {
      _id: "$id",
      valid: {
        $and: [
            { $avg: "$fps" },
            { $expr: {
              $gte: [ 17, $max: "$trial" ]
            }}
        ]
      }
    }
  },
  {
    $lookup: {
      from: 'blacklist',
      localField: "$id",
      foreignField: "$id",
      as: 'blacklisted'
    }
  },
  {
    $addFields: {
      valid: {
        $and: [
          { $gte: [ "$valid", 20 ] },
          { $gt: [ { $size: ['$blacklist'] }, 0 ] }
        ]
      }
    }
  },
  {
    $project: {
      blacklisted: 0
    }
  },
  {
    $out: 'player_validation'
  }
]
