import { Request, Response } from 'express'
import { authService } from '../services/auth.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const register = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await authService.register(req.body)
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'User registered successfully',
    data: result,
  })
})
const login = catchAsyncFunction(async (req: Request, res: Response) => {
    const result = await authService.login(req.body)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User logged in successfully',
      data: result,
    })
  })

export const authController = {
  register,
  login,
}
