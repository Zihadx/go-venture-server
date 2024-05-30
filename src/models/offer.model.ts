// Remove the import statement for Destinations
// import { Destinations } from './destination.model'; 

import mongoose, { Schema } from "mongoose";
import { IOffer } from "../interfaces/offer.interface";

const offerSchema = new Schema<IOffer>({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['Hot Deal', 'Special Offer'],
      required: true,
    },
    destinationId: {
      type: Schema.Types.ObjectId,
      // ref: 'Destinations', // Remove this line if not used
      required: true,
    },
  });
  
  export const Offers = mongoose.model<IOffer>('Offer', offerSchema);
  