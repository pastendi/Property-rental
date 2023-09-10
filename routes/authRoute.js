const express = require('express')
const {
  register,
  login,
  manageToken,
  logout,
} = require('../controllers/authController')
const router = express.Router()

router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/register').post(register)
router.route('/renewToken').get(manageToken)
module.exports = router
