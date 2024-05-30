import express from 'express';
import { blogController } from '../controllers/blog.controller';

const router = express.Router();

router.post('/create-blog', blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getSingleBlog);
router.patch('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

export const blogRoutes = router;
