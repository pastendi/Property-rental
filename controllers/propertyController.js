const { UnauthorizedError } = require('../errors')
const Property = require('../models/Property')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { cloudinaryUpload, cloudinaryDelete } = require('../utils/cloudinary')
const removeTempImageFile = require('../utils/removeTempImageFile')
require('dotenv').config()

const getAllProperties = async (req, res) => {
  const properties = await Property.find({ agent: req.userId }).sort(
    '-createdAt'
  )
  res.status(StatusCodes.OK).json({ properties })
}
const addProperty = async (req, res) => {
  const user = await User.findById(req.userId)
  if (!user) {
    throw new UnauthorizedError('Not authorized')
  }
  const storagePath = `temp/${req.file?.fileName}`
  const upload = await cloudinaryUpload(storagePath)
  if (upload) {
    removeTempImageFile(storagePath)
  }
  try {
    const property = await Property.create({
      ...req.body,
      photo: upload?.url,
      imageCloudinaryName: upload?.cloudinaryName,
      agent: req.userId,
    })
    res.status(StatusCodes.CREATED).json({ property })
  } catch (error) {
    await cloudinaryDelete(upload.cloudinaryName)
    throw new Error(error)
  }
}
const updateProperty = async (req, res) => {
  const user = await User.findById(req.userId)
  if (!user) {
    throw new UnauthorizedError('Not authorized')
  }
  if (req.file) {
    const storagePath = `temp/${req.file?.fileName}`
    const upload = await cloudinaryUpload(storagePath)
    if (upload) {
      removeTempImageFile(storagePath)
    }
    try {
      const property = await Property.findByIdAndUpdate(
        req.body.id,
        {
          ...req.body,
          photo: upload?.url,
          imageCloudinaryName: upload?.cloudinaryName,
        },
        { runValidators: true }
      )
      res.status(StatusCodes.OK).json({ property })
      await cloudinaryDelete(property.imageCloudinaryName)
    } catch (error) {
      await cloudinaryDelete(upload.cloudinaryName)
      throw new Error(error)
    }
  } else {
    const property = await Property.findByIdAndUpdate(
      req.body.id,
      {
        ...req.body,
      },
      { runValidators: true }
    )
    res.status(StatusCodes.OK).json({ property })
  }
}
const deleteProperty = async (req, res) => {}
const findProperty = async (req, res) => {
  const property = await Property.findById(req.params.id)
  res.status(StatusCodes.OK).json({ property })
}

module.exports = {
  getAllProperties,
  addProperty,
  deleteProperty,
  findProperty,
  updateProperty,
}
