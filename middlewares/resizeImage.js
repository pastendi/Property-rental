const sharp = require('sharp')
const path = require('path')
const resizeImage = async (req, res, next) => {
  if (!req.file) return next()
  req.file.fileName = `${Date.now()}-${req.file.originalname}`
  await sharp(req.file.buffer)
    .resize(720, 404, {
      kernel: sharp.kernel.nearest,
      fit: 'cover',
      position: 'top',
    })
    .toFormat('jpeg')
    .toFile(path.join(`temp/${req.file.fileName}`))
  next()
}

module.exports = resizeImage
