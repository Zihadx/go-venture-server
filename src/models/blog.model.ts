import mongoose, { Schema } from 'mongoose';
import { IBlog } from '../interfaces/blog.interface';

const blogSchema = new Schema<IBlog>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  authorImage: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  }
});

export const Blogs = mongoose.model<IBlog>('Blog', blogSchema);
