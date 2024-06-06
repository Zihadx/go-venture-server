/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { countryServices } from '../services/country.service'

const createCountry = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const countryData = req.body

    const result = await countryServices.createCountry(countryData)
    res.status(201).json({
      status: 'Success',
      massage: 'Country Created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getAllCountries = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await countryServices.getAllCountries()
    res.status(200).json({
      status: 'Success',
      massage: 'Countries fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const getSingleCountry = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id

    const result = await countryServices.getSingleCountry(id)
    res.status(200).json({
      status: 'Success',
      massage: 'Single country fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const updateCountry = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const countryData = req.body
    const id = req.params.id

    const result = await countryServices.updateCountry(id, countryData)
    res.status(201).json({
      status: 'Success',
      massage: 'Country updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const deleteCountry = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id

    await countryServices.deleteCountry(id)
    res.status(200).json({
      status: 'Success',
      massage: 'Country deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getDestinationsByCountry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const countryId = req.params.id
  try {
    const destinations =
      await countryServices.getAllDestinationsByCountry(countryId)
    res.status(200).json(destinations)
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      massage: error.massage || 'Something went wrong',
    })
  }
}

export const countryController = {
  createCountry,
  getAllCountries,
  getSingleCountry,
  updateCountry,
  deleteCountry,
  getDestinationsByCountry,
}
