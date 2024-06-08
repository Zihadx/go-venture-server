/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { countryServices } from '../services/country.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const createCountry = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const countryData = req.body
    const result = await countryServices.createCountry(countryData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Country created successfully',
      data: result,
    })
  }
)

const getAllCountries = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await countryServices.getAllCountries()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Countries fetched successfully',
      data: result,
    })
  }
)

const getSingleCountry = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await countryServices.getSingleCountry(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single country fetched successfully',
      data: result,
    })
  }
)

const updateCountry = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const countryData = req.body
    const id = req.params.id
    const result = await countryServices.updateCountry(id, countryData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Country updated successfully',
      data: result,
    })
  }
)

const deleteCountry = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id
    await countryServices.deleteCountry(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Country deleted successfully',
      data: null,
    })
  }
)

const getDestinationsByCountry = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const countryId = req.params.id
    const destinations = await countryServices.getAllDestinationsByCountry(countryId)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Destinations fetched successfully',
      data: destinations,
    })
  }
)

export const countryController = {
  createCountry,
  getAllCountries,
  getSingleCountry,
  updateCountry,
  deleteCountry,
  getDestinationsByCountry,
}
