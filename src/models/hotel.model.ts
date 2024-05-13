import mongoose, { Schema } from 'mongoose';
import { IHotel } from '../interfaces/hotel.interface';

const hotelSchema = new Schema<IHotel>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  locations: {
    address: {
      type: String,
      required: true,
    },
    coordinates: String,
    countryId: {
      type: String,
      required: true,
    },
  },
  descriptions: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  ratingAverage: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  priceRage: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  amenities: {
    type: [String],
    required: true,
  },
});

export const Hotels = mongoose.model<IHotel>('Hotel', hotelSchema);
