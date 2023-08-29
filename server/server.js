import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import 'express-async-errors'
import connectDB from './connectDB.js'
import userRouter from './routes/userRoute.js'
import propertyRouter from './routes/propertyRoute.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { notFound } from './middlewares/notFound.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  res.send('Hello world')
})
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
