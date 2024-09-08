import { Schema, model } from 'mongoose';
import { Banner } from '../interfaces/banner.interface';

const locationSchema = new Schema({
  city: {
    type: String,
    required: [true, 'Please provide the city name'],
  },
  country: {
    type: String,
    required: [true, 'Please provide the country name'],
  },
});

const bannerSchema = new Schema<Banner>({
  id: {
    type: Number,
    required: [true, 'Please provide the ID'],
    unique: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide the title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide the description'],
  },
  locations: {
    type: locationSchema,
    required: true,
  },
  image: {
    type: String,
    required: [true, 'Please provide the image URL'],
  },
});

const BannerModel = model<Banner>('Banner', bannerSchema);

export default BannerModel;
