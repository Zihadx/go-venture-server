import express, { Application, Request, Response } from 'express'

import cors from 'cors'
import { userRoutes } from './routes/user.route'
import { destinationRouter } from './routes/destination.route'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/destinations', destinationRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to go-venture family!')
})

export default app

// console.log(process.cwd())
