/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../app/config'
import { IUser } from '../interfaces/user.interface'
import Users from '../models/user.model'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { isPasswordMatched } from '../utils/auth'

interface IRegister
  extends Omit<IUser, 'passwordUpdateAt' | 'role' | 'status'> {}
interface ILogin {
  email: string
  password: string
}

// ---------- create user -----------
const register = async (payload: IRegister) => {
  // -----user existence check----
  const existingUser = await Users.findOne({ email: payload.email })
  if (existingUser) {
    throw new Error('User already exists')
  }

  const newUser = await Users.create({
    ...payload,
    status: 'active',
    role: 'user',
  })

  return newUser
}

// -----------user login ---------
const login = async (payload: ILogin) => {
  // -------------check if user exists ----------
  const user = await Users.findOne({ email: payload.email }).select('+password')
  if (!user) {
    throw new Error('User not found. Please create an account')
  }

  // -------------check if user is blocked---------
  if (user.status === 'blocked') {
    throw new Error('User is blocked. Please contact support')
  }

  // -------------check if password matches------
  const passwordMatch = await isPasswordMatched(payload.password, user.password)
  if (!passwordMatch) {
    throw new Error('Incorrect password')
  }

  //------- User authentication and JWT issuance ------
  const jwtPayload: JwtPayload = {
    name: user.name,
    id: user._id, // Added user ID to JWT payload
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret, {
    expiresIn: config.jwt_access_expires_in,
  })

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expire_in,
    }
  )

  return { accessToken, refreshToken }
}

// ---------password change logic (optional)-----------
// const changePassword = async (decodedToken: JwtPayload, payload: {
//   oldPassword: string,
//   newPassword: string
// }) => {
//   // Implement password change logic here
// }

export const authService = {
  register,
  login,
}
