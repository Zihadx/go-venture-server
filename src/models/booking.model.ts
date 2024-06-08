import mongoose, { Schema } from "mongoose";
import { IBooking } from "../interfaces/booking.interface";

const bookingSchema: Schema<IBooking> = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: [true, 'User ID is required'],
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destinations',
    required: [true, 'Destination ID is required'],
  },
  bookedSlot: {
    type: Number,
    required: [true, 'Booked slot is required'],
  },
  bookingStatus: {
    type: String,
    enum: ['pending', 'paid', 'cancelled'],
    required: [true, 'Booking status is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
});

const Bookings = mongoose.model<IBooking>('Booking', bookingSchema);

export default Bookings;
