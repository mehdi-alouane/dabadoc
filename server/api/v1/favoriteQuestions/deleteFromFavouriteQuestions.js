const { User } = require('../user/userModel')

module.exports = async (req, res) => {
  try {
    const { userID, quesionID } = req.body

    const questions = await User
      .updateOne({ _id: userID }, {
        $pull: {
          favoriteQuestions: quesionID
        }
      })
      .exec()

    if (!questions) {
      return res.status(400).json({
        msg: 'could not remove your item, please try again!'
      })
    }

    console.log(questions)

    return res.status(200).json(questions)
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({
      error: err.message
    })
  }
}
