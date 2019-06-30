const userRouter = require('express').Router()

const registerCtrl = require('./register/registerCtrl')
const loginCtrl = require('./login/loginCtrl')

userRouter.route('/register')
  .post(registerCtrl)
userRouter.route('/login')
  .post(loginCtrl)

module.exports = userRouter
