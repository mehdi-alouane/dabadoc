const app = require('../api/app')
const http = require('http')
const { port, host } = require('../config/config.json')
const startDB = require('../db')

const server = http.createServer(app)

startDB()

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port} 🚀️`)
})
