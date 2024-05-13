import mongoose, { Schema } from 'mongoose'
import { IDestination } from '../interfaces/destination.interface'

const destinationsSchema = new Schema<IDestination>({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  startDate: {
    type: [Date],
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  durationHour:{
    type: Number
  },
  locations: {
    city: {
      type: String,
      required: true,
    },
    country: {
      countryId: {
        type: String,
        required: true,
      },
    },
  },
  ratingAverage: {
    type: Number,
  },
  ratingQuantity: {
    type: Number,
  },
  category: { type: String, required: true },
  packagePrice: { type: Number, required: true },
  nearbyHotels: [{ type: Schema.Types.ObjectId, ref: 'Hotel' }],
  attractions: { type: [String], required: true },
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
}
)

destinationsSchema.virtual('durationDays').get(function(){
  return Math.floor(this.durationHour/24)
})

export const Destinations = mongoose.model<IDestination>('Destinations', destinationsSchema)
