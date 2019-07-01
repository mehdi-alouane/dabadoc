const { Question } = require('./questionModel')
const { User } = require('../user/userModel')

module.exports = async (req, res) => {
  const { userID, title, content, location } = req.body
  try {
    const newQuestion = new Question({
      title,
      content,
      location: {
        type: 'Point',
        coordinates: location.split(',').map(Number)
      }
    })

    await newQuestion.save()
    const PostQuestion = await User.updateOne({ _id: userID }, {
      $addToSet: {
        questions: newQuestion._id
      }
    })

    console.log(PostQuestion)

    if (!PostQuestion) {
      return res.status(400).json({
        msg: 'something went wrong'
      })
    }

    return res.status(200).json({
      msg: 'question added successfully'
    })
  } catch (err) {
    console.log(`QuestionPostCtrl Error: ${err.message}`)
    return res.status(500).json({
      msg: err.message
    })
  }
}
