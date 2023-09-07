const express = require('express')
const {
  register,
  login,
  manageToken,
} = require('../controllers/authController')
const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/renewToken').get(manageToken)
module.exports = router
