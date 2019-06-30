const questionRouter = require('express').Router()

const questionPostCtrl = require('./questionPost')
const listQuestionsCtrl = require('./questionGet')

questionRouter.route('/create')
  .post(questionPostCtrl)
questionRouter.route('/list/:coordinates')
  .get(listQuestionsCtrl)

module.exports = questionRouter
