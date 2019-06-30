const v1Router = require('express').Router()
const userRouter = require('./user')
const questionRouter = require('./question')
const answerRouter = require('./answer')

v1Router.get('/echo', (req, res) => res.send('echo!'))

v1Router.use('/user', userRouter)
v1Router.use('/question', questionRouter)
v1Router.use('/answer', answerRouter)

module.exports = v1Router
