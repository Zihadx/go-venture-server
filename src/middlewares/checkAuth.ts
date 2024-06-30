import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import Users from '../models/user.model'
import { USER_ROLE } from '../constants/users.constant'
import jwt, { JwtPayload } from "jsonwebtoken"
import config from '../app/config'

const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
     const token= req.headers.authorization
     console.log(token)

     if(!token){
      throw new Error("Invalid token")
     }

     const decodedToken = jwt.verify(token, config.jwt_access_secret)

     console.log(decodedToken)

     const {email}= decodedToken as JwtPayload
     
      const user = await Users.findOne({ email})
      //   Authentications
      if (!user) {
        throw new Error('Invalid email or password')
      }
      // Authorization
      if (!roles.includes(user?.role)) {
        throw new Error('You are not authorize to create user')
      }

      next()
    },
  )
}

export default checkAuth
