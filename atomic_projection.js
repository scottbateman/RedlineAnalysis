var aValid = [
  {
    $lookup: {
      from: 'trial_validation',
      let: { cid: "$id", cset: "$set", clevel: "$level" },
      pipeline: [
        { $match: {
          $expr: { $and: [
            { $eq: [ "$id", "$$cid" ] },
            { $and: [
              { $eq: [ "$set", "$$cset" ] },
              { $eq: [ "$level", "$$clevel" ] }
            ]}
          ]}
        } }
      ],
      as: "valid"
    }
  },
  {
    $addFields: {
      valid: { $arrayElemAt: [ "$valid", 0 ] },
      time: { $subtract: [ 60, "$counter" ] }
    }
  },
  {
    $addFields: {
      valid: "$valid.valid"
    }
  },
  {
    $project: {
      _id: 0,
      date: 0,
      mturk_id: 0,
      __v: 0,
    }
  },
  {
    $out: 'atomic_validation'
  }
]
