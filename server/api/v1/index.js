const v1Router = require('express').Router()

v1Router.get('/echo', (req, res) => res.send('echo!'))

module.exports = v1Router
