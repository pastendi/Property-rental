const express = require('express')
const {
  getAllUsers,
  updateUser,
  findUserById,
} = require('../controllers/userController')
const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/:id').get(findUserById).post(updateUser)

module.exports = router
