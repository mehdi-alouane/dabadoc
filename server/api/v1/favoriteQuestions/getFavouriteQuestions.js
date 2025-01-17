const { User } = require('../user/userModel')

module.exports = async (req, res) => {
  try {
    const { userID } = req.params
    const favouriteQuestions = await User
      .findOne({ _id: userID })
      .populate({
        path: 'questions',
        model: 'Question',
        select: '_id title content location'
      })
      .select('questions')
      .exec()

    if (!favouriteQuestions) {
      res.status(400).json({
        msg: 'Enter a valide question'
      })
    }
    console.log(favouriteQuestions)

    return res.status(200).json(favouriteQuestions)
  } catch (err) {
    console.log(`AddToFavouritesCtrl: ${err.message}`)
    return res.status(500).json({
      msg: err.message
    })
  }
}
