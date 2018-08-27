var pValid = [
  {
    $group: {
      _id: "$id",
      valid: { $push: {
          $and: [
              { $gte: [ { $avg: "$fps" }, 20 ] },
              { $gte: [ 17, { $max: "$trial" } ] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'blacklist',
      localField: "_id",
      foreignField: "id",
      as: 'blacklist'
    }
  },
  {
    $addFields: {
      valid: {
        $and: [
          { $allElementsTrue: [ "$valid" ] },
          { $gt: [ { $size: ['$blacklist'] }, 0 ] }
        ]
      }
    }
  },
  {
    $project: {
      blacklist: 0
    }
  },
  {
    $out: 'player_validation'
  }
]
