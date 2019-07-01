const { User } = require('../user/userModel')

module.exports = async (req, res) => {
  try {
    const { userID } = req.params
    const favouriteQuestions = await User
      .find({ _id: userID }, '_id')
      .populate({
        path: 'questions',
        model: 'Question',
        select: '_id title content location'
      })
      .exec()

    if (!favouriteQuestions) {
      res.status(400).json({
        msg: 'Enter a valide question'
      })
    }

    return res.status(200).json(...favouriteQuestions)
  } catch (err) {
    console.log(`AddToFavouritesCtrl: ${err.message}`)
    return res.status(500).json({
      msg: err.message
    })
  }
}
