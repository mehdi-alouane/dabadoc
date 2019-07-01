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
      console.log('something went wrong!')
      return res.status(400).json({
        msg: 'something wrong, we could not find the answers'
      })
    }

    return res.status(200).send(answers)
  } catch (err) {
    console.log(`GetAnswersCtrl: ${err.message}`)
    return res.status(500).json({
      msg: err.message
    })
  }
}
