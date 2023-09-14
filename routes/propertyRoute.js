const express = require('express')
const {
  getAllProperties,
  addProperty,
  updateProperty,
  deleteProperty,
  findProperty,
} = require('../controllers/propertyController')
const uploadImage = require('../middlewares/uploadImage')
const resizeImage = require('../middlewares/resizeImage')
const auth = require('../middlewares/authHandler')
const router = express.Router()

router
  .route('/')
  .get(auth, getAllProperties)
  .post(auth, uploadImage.single('image'), resizeImage, addProperty)
router
  .route('/:id')
  .get(findProperty)
  .patch(updateProperty)
  .delete(deleteProperty)

module.exports = router
