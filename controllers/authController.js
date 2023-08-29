const bcrypt = require('bcrypt')
const User = require('../models/User.js')

const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors/index.js')

const register = async (req, res) => {
  const { name, email, password } = req.body
  const alreadyExist = await User.findOne({ email })
  if (alreadyExist) {
    throw BadRequestError('This email is already registered to another account')
  }
  const hashedPassword = bcrypt.hashSync(password, 10)
  const user = await User.create({ name, email, password: hashedPassword })
  res.status(StatusCodes.CREATED).json({ user })
}
const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).select('+password')
  const isPasswordCorrect = bcrypt.compareSync(password, user.password)
  if (!isPasswordCorrect) {
    throw BadRequestError('Invalid credentials')
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res
    .cookie('token', token, { httpOnly: true })
    .status(StatusCodes.OK)
    .json(user)
}
module.exports = { register, login }
