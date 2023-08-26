import express from 'express'
import {
  getAllProperties,
  addProperty,
  updateProperty,
  deleteProperty,
  findProperty,
} from '../controllers/propertyController.js'
const router = express.Router()

router.route('/').get(getAllProperties).post(addProperty)
router
  .route('/:id')
  .get(findProperty)
  .patch(updateProperty)
  .delete(deleteProperty)

export default router
