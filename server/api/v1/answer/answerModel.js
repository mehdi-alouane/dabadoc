const mongoose = require('mongoose')

const Schema = mongoose.Schema

const answerSchema = new Schema({
  content: String
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = {
  Answer
}
