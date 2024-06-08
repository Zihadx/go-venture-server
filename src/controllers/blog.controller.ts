/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { blogServices } from '../services/blog.service';
import catchAsyncFunction from '../utils/catchAsync';
import sendSuccessResponse from '../utils/sendSuccessResponse';

const createBlog = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const blogData = req.body;
    const result = await blogServices.createBlog(blogData);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Blog created successfully',
      data: result,
    });
  }
);

const getAllBlogs = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await blogServices.getAllBlogs();
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Blogs fetched successfully',
      data: result,
    });
  }
);

const getSingleBlog = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await blogServices.getSingleBlog(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Single blog fetched successfully',
      data: result,
    });
  }
);

const updateBlog = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const blogData = req.body;
    const id = req.params.id;
    const result = await blogServices.updateBlog(id, blogData);
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Blog updated successfully',
      data: result,
    });
  }
);

const deleteBlog = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    await blogServices.deleteBlog(id);
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Blog deleted successfully',
      data: null,
    });
  }
);

export const blogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
