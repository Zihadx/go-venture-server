/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { bannerServices } from '../services/banner.service';
import catchAsyncFunction from '../utils/catchAsync';
import sendSuccessResponse from '../utils/sendSuccessResponse';

// Create a new banner
const createBanner = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const bannerData = req.body;
    const result = await bannerServices.createBanner(bannerData);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Banner created successfully',
      data: result,
    });
  }
);

// Get all banners
const getAllBanners = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await bannerServices.getAllBanners();
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Banners fetched successfully',
      data: result,
    });
  }
);

// Get a single banner by ID
const getSingleBanner = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await bannerServices.getSingleBanner(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single banner fetched successfully',
      data: result,
    });
  }
);

// Update a banner by ID
const updateBanner = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const bannerData = req.body;
    const id = parseInt(req.params.id, 10);
    const result = await bannerServices.updateBanner(id, bannerData);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Banner updated successfully',
      data: result,
    });
  }
);

// Delete a banner by ID
const deleteBanner = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await bannerServices.deleteBanner(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Banner deleted successfully',
      data: null,
    });
  }
);

export const bannerController = {
  createBanner,
  getAllBanners,
  getSingleBanner,
  updateBanner,
  deleteBanner,
};
