/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { hotelService } from '../services/hotel.service'

const createHotel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hotelData = req.body

    const result = await hotelService.createHotel(hotelData)
    res.status(201).json({
      status: 'Success',
      message: 'Hotel Created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getAllHotel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await hotelService.getAllHotel()
    res.status(200).json({
      status: 'Success',
      message: 'Hotel fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const getSingleHotel = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id

    const result = await hotelService.getSingleHotel(id)
    res.status(200).json({
      status: 'Success',
      message: 'Single Hotel fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const updateHotel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    const id = req.params.id

    const result = await hotelService.updateHotel(id, userData)
    res.status(201).json({
      status: 'Success',
      message: 'Hotel updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id

    await hotelService.deleteHotel(id)
    res.status(200).json({
      status: 'Success',
      message: 'Hotel deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

export const hotelController = {
  createHotel,
  getAllHotel,
  getSingleHotel,
  updateHotel,
  deleteHotel,
}
