const { Answer } = require('./answerModel')
const { Question } = require('../question/questionModel')

module.exports = async (req, res) => {
  const { questionID, content } = req.body
  try {
    const newAnswer = new Answer({
      content
    })

    await newAnswer.save()
    const PostQuestion = await Question.updateOne({ _id: questionID }, {
      $addToSet: {
        answers: newAnswer._id
      }
    })

    if (!PostQuestion) {
      return res.status(400).json({
        msg: 'something went wrong!'
      })
    }

    return res.status(200).send('answer added successfully')
  } catch (err) {
    console.log(`PostAnswerCtrl Error: ${err.message}`)
    return res.status(500).json({
      msg: err.message
    })
  }
}
