import express from 'express'
import {
  getAllUsers,
  createUser,
  findUserById,
} from '../controllers/userController.js'
const router = express.Router()

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(findUserById)

export default router
