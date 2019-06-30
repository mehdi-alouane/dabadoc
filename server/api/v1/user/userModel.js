const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }],
  created_At: {
    type: Date,
    default: Date.now()
  }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema, 'users')

module.exports = {
  User
}
