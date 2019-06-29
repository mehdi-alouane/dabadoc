const express = require('express')
const logger = require('morgan')

const v1Router = require('./v1')

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use('/api/v1', v1Router)

module.exports = app
