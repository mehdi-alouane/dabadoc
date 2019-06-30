const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  location: {
    type: {
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }]
})

questionSchema.index({ location: '2dsphere' })

const Question = mongoose.model('Question', questionSchema)

module.exports = {
  Question
}
