const answerRouter = require('express').Router()

const postAnswerCtrl = require('./PostAnswer')
const getAnswerCtrl = require('./GetAnswers')

answerRouter.route('/create')
  .post(postAnswerCtrl)
answerRouter.route('/list/:questionID')
  .get(getAnswerCtrl)

module.exports = answerRouter
