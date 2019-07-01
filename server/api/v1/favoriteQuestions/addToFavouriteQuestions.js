const { User } = require('../user/userModel')
const mongoose = require('mongoose')

const ObjectId = mongoose.Types.ObjectId

module.exports = async (req, res) => {
  try {
    const { userID, quesionID } = req.body

    const questions = await User
      .updateOne({ _id: userID }, {
        $addToSet: {
          favoriteQuestions: new ObjectId(quesionID)
        }
      })

    if (!questions) {
      return res.status(400).json({
        msg: 'we could not added your question, please try!'
      })
    }

    return res.status(200).json(questions)
  } catch (err) {
    console.log(`PostToFavouriteCtrl: ${err.message}`)
    return res.status(500).json({
      msg: err.message
    })
  }
}
