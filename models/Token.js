const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  verificationToken: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: [String],
  },
  loginCode: {
    type: String,
  },
})

module.exports = mongoose.model('Token', tokenSchema)
