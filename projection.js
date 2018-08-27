var projection = [
  {
    $lookup: {
      from: 'trial_validation',
      let: { cid: "$id", ctrial: "$trial" },
      pipeline: [
        { $match: {
          { $eq: [ "$id", "$$cid" ] },
          { $eq: [ "$trial", "$$ctrial" ] }
        } }
      ],
      as: "valid"
    }
  },
  { $addFields: {
      valid: { $arrayElemAt: [ "$valid": 0 ] },
      time: { $subtract: [ 60, "$counter" ] }
  },
    $addFields: {
      valid: "$valid.valid",
      scoreRate: { $divide: [ "$score", "$time" ] }
    }
  },
  {
    $project: {
      _id: 0,
      date: 0,
      mturk_id: 0
    }
  },
  {
    $out: 'validated_entries'
  }
]
