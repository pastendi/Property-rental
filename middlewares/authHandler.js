const { UnauthorizedError, BadRequestError } = require('../errors')
const { verifyAccessToken } = require('../utils/tokenUtils')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization
  if (!authHeader?.startsWith('Bearer ')) {
    throw new BadRequestError('No access token on header')
  }
  const token = authHeader.split(' ')[1]
  console.log(token)
  const payload = verifyAccessToken(token)
  if (!payload?.id) {
    throw new UnauthorizedError('Not authorized')
  }
  req.userId = payload.id
  console.log(payload.id)
  next()
}

module.exports = auth
