/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { destinationService } from '../services/destination.service'

const createDestination = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const destinationData = req.body

    const result = await destinationService.createDestination(destinationData)
    res.status(201).json({
      status: 'Success',
      massage: 'Destination Created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getAllDestination = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const filters = req.query

    const result = await destinationService.getAllDestination(filters)
    // throw new Error ('Something went wrong')
    res.status(200).json({
      status: 'Success',
      message: 'All Destinations fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getSingleDestination = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id

    const result = await destinationService.getSingleDestination(id)
    res.status(200).json({
      status: 'Success',
      massage: 'Single Destination fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const updateDestination = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData = req.body
    const id = req.params.id

    const result = await destinationService.updateDestination(id, userData)
    res.status(201).json({
      status: 'Success',
      massage: 'Destination updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}
const deleteDestination = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id

    await destinationService.deleteDestination(id)
    res.status(200).json({
      status: 'Success',
      massage: 'Destination deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

export const destinationController = {
  createDestination,
  getAllDestination,
  getSingleDestination,
  updateDestination,
  deleteDestination,
}
