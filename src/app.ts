import express, { json } from 'express'
import cors from 'cors'
import 'express-async-errors'
import 'dotenv/config'
import commentRouter from './router/commentRouter.js'

const app = express()
app.use(cors())
app.use(json())

app.use(commentRouter)

export default app
