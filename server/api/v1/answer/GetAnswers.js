const { Question } = require('../question/questionModel')

module.exports = async (req, res) => {
  try {
    const { questionID } = req.params
    const answers = await Question
      .findOne({ _id: questionID })
      .populate({
        path: 'answers',
        select: '_id content'
      })
      .select('answers -_id')

    if (!answers) {
      console.log('something went wront!')
    }

    return res.status(200).send(answers)
  } catch (err) {
    console.log(err.message)
  }
}
