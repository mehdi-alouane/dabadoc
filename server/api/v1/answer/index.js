const answerRouter = require('express').Router()

const postAnswerCtrl = require('./PostAnswer')

answerRouter.route('/create')
  .post(postAnswerCtrl)

module.exports = answerRouter
