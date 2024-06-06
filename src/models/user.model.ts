import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'
import { ACCOUNT_STATUS, USER_ROLE } from '../constants/users.constant'

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
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    select: 0
  },
  passwordUpdateAt: {
    type: Date,
    default: null,
  },
  profileInfo: {
    phoneNumber: {
      type: String,
      required: [true, 'Please provide your phone'],
    },
    profilePicture: String,
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: USER_ROLE.user,
  },
  status: {
    type: String,
    enum: Object.values(ACCOUNT_STATUS),
    default: ACCOUNT_STATUS.active,
  },
})

const Users = model<IUser>('Users', userSchema)

export default Users
