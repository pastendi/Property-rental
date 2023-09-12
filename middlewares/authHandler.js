const { UnauthorizedError, BadRequestError } = require('../errors')
const { verifyAccessToken } = require('../utils/tokenUtils')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization
  if (!authHeader?.startsWith('Bearer ')) {
    throw new BadRequestError('No access token on header')
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = verifyAccessToken(token)
    req.userId = payload.id
    next()
  } catch (error) {
    throw new UnauthorizedError('Not authorized')
  }
}

module.exports = auth
