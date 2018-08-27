[
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
      valid: { $arrayElemAt: [ "$valid": 0 ] }
  },
    $addFields: {
      valid: "$valid.valid",
      time: { $subtract: [ 60, "$counter" ] }
    }
  },
  {
    $project: {
      _id: 0,
      date: 0,
      mturk_id: 0
    }
  }
]
