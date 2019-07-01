const { User } = require('../userModel')
const bcrypt = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { jwt } = require('../../../../config/config.json')

module.exports = async (req, res) => {
  const { email, password } = req.body
  const hashedPasswd = await bcrypt.hash(password, 10)
  try {
    const user = await User.create({
      email: email,
      password: hashedPasswd
    })

    if (!user) {
      return res.status(401).json({
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
    console.log(`Register Error: ${err.message}`)
    return res.statsus(500).json({
      auth: false,
      msg: err.message
    })
  }
}
