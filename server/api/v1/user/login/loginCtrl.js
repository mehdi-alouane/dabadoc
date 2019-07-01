const { User } = require('../userModel')
const bcrypt = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { jwt } = require('../../../../config/config.json')

module.exports = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        auth: false,
        msg: 'Unauthorized!'
      })
    }

    const isPasswordValid = bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({
        auth: false,
        msg: 'Unauthorized!'
      })
    }

    const token = sign({
      id: user.id
    }, jwt.secret)

    return res.status(200).json({
      auth: true,
      token: token
    })
  } catch (err) {
    console.log(`Login Auth: ${err.message}`)
    return res.status(500).json({
      auth: false,
      msg: err.message
    })
  }
}
