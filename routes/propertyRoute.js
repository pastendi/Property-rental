const express = require('express')
const {
  getAllProperties,
  addProperty,
  updateProperty,
  deleteProperty,
  findProperty,
} = require('../controllers/propertyController')
const router = express.Router()

router.route('/').get(getAllProperties).post(addProperty)
router
  .route('/:id')
  .get(findProperty)
  .patch(updateProperty)
  .delete(deleteProperty)

module.exports = router
