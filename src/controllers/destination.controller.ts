/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { destinationService } from '../services/destination.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const createDestination = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const destinationData = req.body
    const result = await destinationService.createDestination(destinationData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Destination created successfully',
      data: result,
    })
  }
)

const getAllDestination = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const filters = req.query
    const result = await destinationService.getAllDestination(filters)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'All destinations fetched successfully',
      data: result,
    })
  }
)

const getSingleDestination = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await destinationService.getSingleDestination(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single destination fetched successfully',
      data: result,
    })
  }
)

const updateDestination = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const destinationData = req.body
    const id = req.params.id
    const result = await destinationService.updateDestination(id, destinationData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Destination updated successfully',
      data: result,
    })
  }
)

const deleteDestination = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await destinationService.deleteDestination(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Destination deleted successfully',
      data: null,
    })
  }
)

export const destinationController = {
  createDestination,
  getAllDestination,
  getSingleDestination,
  updateDestination,
  deleteDestination,
}
