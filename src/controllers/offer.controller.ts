/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { offerServices } from '../services/offer.service'

const createOffer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const offerData = req.body

    const result = await offerServices.createOffer(offerData)
    res.status(201).json({
      status: 'Success',
      message: 'Offer created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getAllOffers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await offerServices.getAllOffers()
    res.status(200).json({
      status: 'Success',
      message: 'Offers fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const getSingleOffer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id

    const result = await offerServices.getSingleOffer(id)
    res.status(200).json({
      status: 'Success',
      message: 'Single offer fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const updateOffer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const offerData = req.body
    const id = req.params.id

    const result = await offerServices.updateOffer(id, offerData)
    res.status(201).json({
      status: 'Success',
      message: 'Offer updated successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

const deleteOffer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id

    await offerServices.deleteOffer(id)
    res.status(200).json({
      status: 'Success',
      message: 'Offer deleted successfully',
    })
  } catch (error: any) {
    console.log(error)
    next(error)
  }
}

export const offerController = {
  createOffer,
  getAllOffers,
  getSingleOffer,
  updateOffer,
  deleteOffer,
}
