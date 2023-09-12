const fs = require('fs')
const removeTempImageFile = (storagePath) => fs.unlinkSync(storagePath)
module.exports = removeTempImageFile
