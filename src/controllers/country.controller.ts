/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { countryServices } from '../services/country.service'

const createCountry = async (req: Request, res: Response) => {
  try {
    const userData = req.body

    const result = await countryServices.createCountry(userData)
    res.status(201).json({
      status: 'Success',
      massage: 'Country Created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      massage: error.massage || 'Something went wrong',
    })
  }
}

const getAllCountries = async (req: Request, res: Response) => {
  try {
    const result = await countryServices.getAllCountries()
    res.status(200).json({
      status: 'Success',
      massage: 'Countries fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      massage: error.massage || 'Something went wrong',
    })
  }
}
const getSingleCountry = async (req: Request, res: Response) => {
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
    res.status(500).json({
      status: 'fail',
      massage: error.massage || 'Something went wrong',
    })
  }
}
const updateCountry = async (req: Request, res: Response) => {
  try {
    const countryData = req.body
    const id = req.params.id

    const result = await countryServices.updateCountry(id, countryData)
    res.status(201).json({
      status: 'Success',
      massage: 'User updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      massage: error.massage || 'Something went wrong',
    })
  }
}
const deleteCountry = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    await countryServices.deleteCountry(id)
    res.status(200).json({
      status: 'Success',
      massage: 'User deleted successfully',
    })
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
}
