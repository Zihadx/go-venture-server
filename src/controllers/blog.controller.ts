/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { blogServices } from '../services/blog.service';

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogData = req.body;

    const result = await blogServices.createBlog(blogData);
    res.status(201).json({
      status: 'Success',
      message: 'Blog Created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    next(error)
  }
};

const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.getAllBlogs();
    res.status(200).json({
      status: 'Success',
      message: 'Blogs fetched successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    next(error)
  }
};

const getSingleBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const result = await blogServices.getSingleBlog(id);
    res.status(200).json({
      status: 'Success',
      message: 'Single blog fetched successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    next(error)
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogData = req.body;
    const id = req.params.id;

    const result = await blogServices.updateBlog(id, blogData);
    res.status(201).json({
      status: 'Success',
      message: 'Blog updated successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    next(error)
  }
};

const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    await blogServices.deleteBlog(id);
    res.status(200).json({
      status: 'Success',
      message: 'Blog deleted successfully',
    });
  } catch (error: any) {
    console.log(error);
    next(error)
  }
};

export const blogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
