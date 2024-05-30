import mongoose, { Schema } from 'mongoose'
import { ICountry } from '../interfaces/country.interface'

const countrySchema = new Schema<ICountry>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
})

export const Counties = mongoose.model<ICountry>('Country', countrySchema)
