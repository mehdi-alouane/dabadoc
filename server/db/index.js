const mongoose = require('mongoose')
const { db } = require('../config/config.json')

const dbURI = process.env.NODE_ENV === 'production' ? db.prod.uri : db.dev.uri

module.exports = async () => {
  await mongoose.connect(dbURI, {
    useNewUrlParser: true
  }).then(_ => console.log(`MongoDB connected successfully 🍀️`))
    .catch(err => console.warn(`MongoDB Error: ${err.message}`))
}
