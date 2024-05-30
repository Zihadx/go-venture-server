/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { blogServices } from '../services/blog.service';

const createBlog = async (req: Request, res: Response) => {
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
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const result = await blogServices.getAllBlogs();
    res.status(200).json({
      status: 'Success',
      message: 'Blogs fetched successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

const getSingleBlog = async (req: Request, res: Response) => {
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
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

const updateBlog = async (req: Request, res: Response) => {
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
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await blogServices.deleteBlog(id);
    res.status(200).json({
      status: 'Success',
      message: 'Blog deleted successfully',
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

export const blogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
