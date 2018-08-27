var pValid = [
  {
    $group: {
      _id: "$id",
      valid: {
        $avg: "$fps"
      }
    }
  }, {
    $addFields: {
      valid: {
        $gte: [
          "$valid", 20
        ]
      }
    }
  },
  {
    $out: 'player_validation'
  }
]
