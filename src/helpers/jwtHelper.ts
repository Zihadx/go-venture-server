// -------still not use this. jwt refactor function-----------

import jwt, { JwtPayload } from 'jsonwebtoken'

const createToken = (
  jwtPayload: JwtPayload,
  secret: string,
  options: {
    expiresIn: string
  },
) => {
  return jwt.sign(jwtPayload, secret, options)
}

const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret)
}


const refreshToken= (jwtPayload: JwtPayload, secret: string, options: {
    expiresIn: string
})=>{
    return jwt.sign(
        jwtPayload,
        secret, options
      )
}

export const jwtHelpers = {
  createToken,
  verifyToken,
  refreshToken
}
