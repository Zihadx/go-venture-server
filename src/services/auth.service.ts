import config from '../app/config'
import { IUser } from '../interfaces/user.interface'
import Users from '../models/user.model'
import jwt, { JwtPayload } from 'jsonwebtoken'

interface IRegister
  extends Omit<IUser, 'passwordUpdateAt' | 'role' | 'status'> {}

const register = async (payload: IRegister) => {
  const result = await Users.create({
    ...payload,
    status: 'active',
    role: 'user',
  })
  return result
}

interface ILogin {
  email: string
  password: string
}
const login = async (payload: ILogin) => {
  const user = await Users.findOne(payload)
  if (!user) {
    throw new Error(
      'Invalid email or password. Please provide your valid credentials',
    )
  }

  const jwtPayload: JwtPayload = {
    email: user.email,
    role: user.role,
  }

  const token = jwt.sign(jwtPayload, config.jwt_access_secret, {
    expiresIn: config.jwt_access_expires_in,
  })
  return { token }
}

export const authService = {
  register,
  login,
}
