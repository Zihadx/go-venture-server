/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { bookingServices } from '../services/booking.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const createBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const bookingData = req.body

    const result = await bookingServices.createBooking(bookingData)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking created successfully',
      data: result,
    })
  }
)

const getAllBookings = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await bookingServices.getAllBookings()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Bookings fetched successfully',
      data: result,
    })
  }
)

const getSingleBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await bookingServices.getSingleBooking(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single booking fetched successfully',
      data: result,
    })
  }
)

const updateBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const bookingData = req.body
    const id = req.params.id

    const result = await bookingServices.updateBooking(id, bookingData)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking updated successfully',
      data: result,
    })
  }
)

const deleteBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id

    await bookingServices.deleteBooking(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Booking deleted successfully',
      data: null,
    })
  }
)

const getAllBookingsByUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const userId = req.params.userId

    const result = await bookingServices.getAllBookingsByUser(userId)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Bookings fetched successfully for the user',
      data: result,
    })
  }
)

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
  getAllBookingsByUser,
}
