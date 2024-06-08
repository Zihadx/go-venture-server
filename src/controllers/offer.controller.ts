/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { offerServices } from '../services/offer.service';
import catchAsyncFunction from '../utils/catchAsync';
import sendSuccessResponse from '../utils/sendSuccessResponse';

const createOffer = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const offerData = req.body;
    const result = await offerServices.createOffer(offerData);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Offer created successfully',
      data: result,
    });
  }
);

const getAllOffers = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await offerServices.getAllOffers();
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Offers fetched successfully',
      data: result,
    });
  }
);

const getSingleOffer = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await offerServices.getSingleOffer(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single offer fetched successfully',
      data: result,
    });
  }
);

const updateOffer = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const offerData = req.body;
    const id = req.params.id;
    const result = await offerServices.updateOffer(id, offerData);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Offer updated successfully',
      data: result,
    });
  }
);

const deleteOffer = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    await offerServices.deleteOffer(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Offer deleted successfully',
      data: null,
    });
  }
);

export const offerController = {
  createOffer,
  getAllOffers,
  getSingleOffer,
  updateOffer,
  deleteOffer,
};
