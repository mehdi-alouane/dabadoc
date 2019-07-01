const favoriteQuestionRouter = require('express').Router()

const addToFavouriteQuestionsCtrl = require('./addToFavouriteQuestions')
const getFavouriteQuestionsCtrl = require('./getFavouriteQuestions')
const deleteFromFavouriteQuestionsCtrl = require('./deleteFromFavouriteQuestions')

favoriteQuestionRouter.route('/add')
  .post(addToFavouriteQuestionsCtrl)
favoriteQuestionRouter.route('/list/:userID')
  .get(getFavouriteQuestionsCtrl)
favoriteQuestionRouter.route('/delete-question')
  .post(deleteFromFavouriteQuestionsCtrl)

module.exports = favoriteQuestionRouter
