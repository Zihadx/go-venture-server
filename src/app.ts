import express, { Application, Request, Response } from 'express'

import cors from 'cors'
import globalErrorHandler from './middlewares/globalErrorHandler'
import notFound from './middlewares/notFound'
import globalRoute from './routes'

const app: Application = express()
app.use(express.json())
app.use(cors())

//---Managed global route for organized code----
app.use('/api/v1', globalRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to go-venture family!')
})

app.use(notFound)
app.use(globalErrorHandler)

export default app

// console.log(process.cwd())
