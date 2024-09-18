import bcryptjs from "bcryptjs"
export const isPasswordMatched = (plainPassword: string, hashPassword: string) => {
    const isMatched = bcryptjs.compare(plainPassword, hashPassword)
    return isMatched
  }