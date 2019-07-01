const { Question } = require('./questionModel')

module.exports = async (req, res) => {
  const page = Number(req.query.page) || 0
  const limit = Number(req.query.limit) || 10
  const skip = page * limit

  try {
    const coordinates = req
      .params
      .coordinates
      .split(',')
      .map(parseFloat)

    const AllQuestionsByDistance = await Question
      .find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates
            },
            $minDistance: 0
          }
        }
      })
      .skip(skip)
      .limit(limit)
      .exec()

    if (!AllQuestionsByDistance) {
      return res.status(400).json({
        msg: 'something went wrong!'
      })
    }

    return res.status(200).json({
      page: page,
      AllQuestionsByDistance
    })
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({
      error: err.message
    })
  }
}
