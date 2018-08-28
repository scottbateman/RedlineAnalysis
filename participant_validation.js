var pValid = [
  {
    $group: {
      _id: "$id",
      fps: { $avg: "$fps" },
      trialCount: { $max: "$trial" }
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
          { $and: [
            { $gte: [ "$fps", 20 ] },
            { $gte: [ "$trialCount", 17 ] }
          ] },
          { $lte: [ { $size: ['$blacklist'] }, 0 ] }
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
