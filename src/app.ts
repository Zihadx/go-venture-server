import express, { Application, Request, Response } from 'express'

import cors from 'cors'
import { userRoutes } from './routes/user.route'
import { destinationRouter } from './routes/destination.route'
import { hotelRoutes } from './routes/hotel.route'
import { countryRoutes } from './routes/country.route'
import { blogRoutes } from './routes/blog.route'
import { offerRoutes } from './routes/offer.route'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/destinations', destinationRouter)
app.use('/api/v1/hotels', hotelRoutes)
app.use('/api/v1/countries', countryRoutes)
app.use('/api/v1/blogs', blogRoutes)
app.use('/api/v1/offers', offerRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to go-venture family!')
})

export default app

// console.log(process.cwd())
