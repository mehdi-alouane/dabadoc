const userRouter = require('express').Router()

const registerCtrl = require('./register/registerCtrl')

userRouter.route('/register')
  .post(registerCtrl)

module.exports = userRouter
