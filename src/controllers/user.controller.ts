/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from '../services/user.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const createAdmin = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const adminData = req.body
    const result = await userServices.createAdmin(adminData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Admin created successfully',
      data: result,
    })
  }
)
const createUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const userData = req.body
    const result = await userServices.createUser(userData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User created successfully',
      data: result,
    })
  }
)

const getAllUsers = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await userServices.getAllUsers()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Users fetched successfully',
      data: result,
    })
  }
)

const getSingleUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await userServices.getSingleUser(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single user fetched successfully',
      data: result,
    })
  }
)

const updateUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const userData = req.body
    const id = req.params.id
    const result = await userServices.updateUser(id, userData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User updated successfully',
      data: result,
    })
  }
)

const deleteUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await userServices.deleteUser(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'User deleted successfully',
      data: null,
    })
  }
)

export const userController = {
  createAdmin,
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
