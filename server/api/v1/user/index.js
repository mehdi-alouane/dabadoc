const userRouter = require('express').Router()
const jwt = require('express-jwt')
const validate = require('express-validation')
const config = require('../../../config/config.json')
const validateUser = require('./validateUser')

const registerCtrl = require('./register/registerCtrl')
const loginCtrl = require('./login/loginCtrl')

userRouter.route('/register')
  .post(validate(validateUser.register), registerCtrl)
userRouter.route('/login')
  .post(validate(validateUser.login), loginCtrl)

userRouter.use(jwt({
  secret: config.jwt.secret,
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
}).unless({
  path: [
    '/api/v1/user/register',
    '/api/v1/user/login'
  ]
}))

userRouter.route('/me')
  .get((req, res) => res.status(200).json(req.user))

module.exports = userRouter
