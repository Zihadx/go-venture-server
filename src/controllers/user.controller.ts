/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
// import userModel from '../models/user.model'
import { userServices } from '../services/user.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body

    const result = await userServices.createUser(userData)
    res.status(201).json({
      status: 'Success',
      massage: 'User Created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.getAllUsers()
    res.status(200).json({
      status: 'Success',
      massage: 'User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id

    const result = await userServices.getSingleUser(id)
    res.status(200).json({
      status: 'Success',
      massage: 'Single User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    const id = req.params.id

    const result = await userServices.updateUser(id, userData)
    res.status(201).json({
      status: 'Success',
      massage: 'User updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id

    await userServices.deleteUser(id)
    res.status(200).json({
      status: 'Success',
      massage: 'User deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
