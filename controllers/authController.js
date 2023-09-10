const bcrypt = require('bcrypt')
const User = require('../models/User.js')
const Token = require('../models/Token.js')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthorizedError } = require('../errors/index.js')
const {
  createRefreshToken,
  createAccessToken,
  verifyRefreshToken,
} = require('../utils/tokenUtils.js')

const register = async (req, res) => {
  const { name, email, password } = req.body
  const alreadyExist = await User.findOne({ email })
  if (alreadyExist) {
    throw new BadRequestError(
      'This email is already registered to another account'
    )
  }
  const hashedPassword = bcrypt.hashSync(password, 10)
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })
  const accessToken = createAccessToken(user._id)
  const refreshToken = createRefreshToken(user._id)
  await Token.create({ userId: user._id, accessToken, refreshToken })
  const { password: userPassword, ...rest } = user._doc
  res.cookie('token', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 24 * 60 * 60 * 1000,
  })
  res.status(StatusCodes.CREATED).json({ user: rest, accessToken })
}

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new BadRequestError('Invalid credentials')
  }
  const isPasswordCorrect = bcrypt.compareSync(password, user.password)
  if (!isPasswordCorrect) {
    throw new BadRequestError('Invalid credentials')
  }
  const accessToken = createAccessToken(user._id)
  const refreshToken = createRefreshToken(user._id)
  const userToken = await Token.findOne({ userId: user._id })
  userToken.refreshToken = [...userToken.refreshToken, refreshToken]
  userToken.accessToken = accessToken
  await userToken.save()
  res.cookie('token', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 24 * 60 * 60 * 1000,
  })
  const { password: userPassword, ...rest } = user._doc
  res.status(StatusCodes.OK).json({ user: rest, accessToken })
}

const manageToken = async (req, res) => {
  const oldRefreshToken = req.cookies.token
  if (!oldRefreshToken) {
    throw new UnauthorizedError('Not authorized, please login')
  }
  res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true })
  const payload = verifyRefreshToken(oldRefreshToken)
  const user = await User.findById(payload.id)
  if (!user) {
    throw new UnauthorizedError('Not authorized, please login')
  }
  let userToken = await Token.findOne({ userId: payload.id })
  userToken.refreshToken = userToken.refreshToken.filter(
    (rt) => rt !== oldRefreshToken
  )

  // renewing tokens
  const accessToken = createAccessToken(user._id)
  const refreshToken = createRefreshToken(user._id)
  userToken.accessToken = accessToken
  userToken.refreshToken = [...userToken.refreshToken, refreshToken]

  await userToken.save()
  res.cookie('token', refreshToken, {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
  })
  res.status(StatusCodes.OK).json({ accessToken, user })
}
const logout = async (req, res) => {
  const token = req.cookies.token
  const payload = verifyRefreshToken(token)
  const userToken = await Token.findOne({ userId: payload.id })
  userToken.refreshToken = userToken.refreshToken.filter((rt) => rt !== token)
  userToken.accessToken = ''
  userToken.save()
  res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true })
  res.status(StatusCodes.OK).json({ msg: 'logout successful' })
}
module.exports = { register, login, manageToken, logout }
