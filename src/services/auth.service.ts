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
  const user = await Users.findOne({ email: payload.email })
  if (user) {
    throw new Error('user already exist')
  }
  const result = await Users.create({
    ...payload,
    status: 'active',
    role: 'user',
  })
  return result
}

// -----------user login ---------
const login = async (payload: ILogin) => {
  // -------------check exist user ----------
  const user = await Users.findOne({ email: payload.email }).select('+password')
  if (!user) {
    throw new Error('User not found. Please create an account')
  }

  // -------------check user status---------
  if (user.status === 'blocked') {
    throw new Error('user blocked. Please Contact with authority')
  }

  // -------------check password match------
  const passwordMatch = await isPasswordMatched(payload.password, user.password)
  if (!passwordMatch) {
    throw new Error('Password not matched')
  }

  //------- User authentication and authorization with JWT------
  const jwtPayload: JwtPayload = {
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
    },
  )
  return { accessToken, refreshToken }
}

export const authService = {
  register,
  login,
}
