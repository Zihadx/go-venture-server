import { IBlog } from "../interfaces/blog.interface";
import { Blogs } from "../models/blog.model";

const createBlog = async (blogData: IBlog): Promise<IBlog> => {
    const result = await Blogs.create(blogData);
    return result;
}

const getAllBlogs = async (): Promise<IBlog[]> => {
    const result = await Blogs.find();
    return result;
}

const getSingleBlog = async (id: string): Promise<IBlog | null> => {
    const result = await Blogs.findById(id);
    return result;
}

const updateBlog = async (
    id: string,
    blogData: IBlog,
): Promise<IBlog | null> => {
    const result = await Blogs.findByIdAndUpdate(id, blogData, {
        new: true,
        runValidators: true,
    });
    return result;
}

const deleteBlog = async (id: string): Promise<IBlog | null> => {
    const result = await Blogs.findByIdAndDelete(id);
    return result;
}

export const blogServices = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
}
