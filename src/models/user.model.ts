import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please tell us your email'],
    lowercase: true,
  
  },
  age: {
    type: Number,
    required: [true, 'Please tell your age'],
  },
  passwordHash: String,
  profileInfo: {
    phoneNumber: {
      type: String,
      required: [true, 'Please provide your phone'],
    },
    profilePicture: String,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  bookings: [String],
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
})


const Users = model<IUser>('Users', userSchema)

export default Users
