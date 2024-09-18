import { Request, Response } from 'express'
import { authService } from '../services/auth.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'
import config from '../app/config'

const register = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await authService.register(req.body)
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'User registered successfully',
    data: result,
  })
})
const login = catchAsyncFunction(async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await authService.login(req.body)

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production"
  })

  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'User logged in successfully',
    data: { accessToken },
  })
})

export const authController = {
  register,
  login,
}
