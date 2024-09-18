import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import Users from '../models/user.model'
import { USER_ROLE } from '../constants/users.constant'
import jwt, { JwtPayload } from "jsonwebtoken"
import config from '../app/config'

const checkAuth = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsyncFunction(
    async (req: Request, res:Response, next:NextFunction) => {
      try {
        const token = req.headers.authorization
        const verifiedToken = jwt.verify(
          token as string,
          config.jwt_access_secret,
        )
        const { role, email } = verifiedToken as JwtPayload
  
        const user = await Users.findOne({ email })
  
        if (!user) {
          throw new Error('Your are not authorize to create Admin')
        }
        if(user.status === "blocked"){
          throw new Error("User Blocked")
        }
        if (!requiredRoles.includes(role)) {
          throw new Error('Your are not authorize to create Admin')
        }
        next()
      } catch (error) {
        next(error)
      }
    },
  )
}

export default checkAuth
