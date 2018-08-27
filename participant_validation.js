[{
  $lookup: {
    from: 'player_validation',
    localField: 'id',
    foreignField: '_id',
    as: 'validation'
  }
}, {
  $addFields: {
    validation: {
      $arrayElemAt: [
        "$validation", 0
      ]
    }
  }
}, {
  $addFields: {
    valid: {
      $and: [{
        $or: [{
          $and: [{
            $eq: [
              "$set", 0
            ]
          }, {
            $lte: [
              "$level", 9
            ]
          }]
        }, {
          $and: [{
            $eq: [
              "$set", 1
            ]
          }, {
            $lte: [
              "$level", 8
            ]
          }]
        }]
      }, "$validation.valid"]
    }
  }
}, {
  $project: {
    id: 1,
    trial: 1,
    valid: 1
  }
}, {
  $out: 'trial_validation'
}]
