const v1Router = require('express').Router()
const userRouter = require('./user')
const questionRouter = require('./question')
const answerRouter = require('./answer')
const favoriteQuestionsRouter = require('./favoriteQuestions')

v1Router.get('/echo', (req, res) => res.send('echo!'))

v1Router.use('/user', userRouter)
v1Router.use('/question', questionRouter)
v1Router.use('/answer', answerRouter)
v1Router.use('/favourite', favoriteQuestionsRouter)

module.exports = v1Router
