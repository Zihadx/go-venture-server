
import mongoose from "mongoose"
export interface IBooking {
     user: mongoose.Schema.Types.ObjectId
     destination: mongoose.Schema.Types.ObjectId
     bookedSlot: number
     bookingStatus: 'pending' | "paid" | "cancelled"
     price: number

}