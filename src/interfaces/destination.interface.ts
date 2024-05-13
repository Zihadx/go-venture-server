import { Schema } from 'mongoose'

interface IDestination {
  id: string
  title: string
  description: string
  image: string[]
  coverImage: string
  createAt: Date
  startDate: Date[]
  endDate: Date
  durationHour: number
  startLocation: string
  locations: {
    city: string
    country: {
      countryId: string
    }
  }
  ratingAverage: number
  ratingQuantity: number
  category: string
  packagePrice: number
  nearbyHotels: Schema.Types.ObjectId[]
  attractions: string[]
}

export { IDestination }
