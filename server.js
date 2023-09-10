const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('express-async-errors')
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')
const propertyRouter = require('./routes/propertyRoute')
const connectDB = require('./connectDB.js')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const corsOptions = require('./utils/corsOptions')
const credentials = require('./middlewares/credentials')
require('dotenv').config()

const app = express()
app.use(credentials)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello world')
})
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/property', propertyRouter)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    connectDB()
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
