/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { destinationService } from "../services/destination.service"

const createDestination = async (req: Request, res: Response) => {
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
      res.status(500).json({
        status: 'fail',
        massage: error.massage || 'Something went wrong',
      })
    }
  }


  export const destinationController = {
   createDestination
  }