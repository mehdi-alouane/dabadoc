const { Question } = require('./questionModel')

module.exports = async (req, res) => {
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
      .populate({
        path: 'answers',
        select: '_id content'
      })

    return res.status(200).json(AllQuestionsByDistance)
  } catch (err) {
    console.log(err.message)
    return res.send(err.message)
  }
}
