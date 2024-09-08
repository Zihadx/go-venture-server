import express from 'express';
import { bannerController } from '../controllers/banner.controller';

const router = express.Router();

router.post('/create-banner', bannerController.createBanner);
router.get('/', bannerController.getAllBanners);
router.get('/:id',bannerController.getSingleBanner);
router.patch('/:id',  bannerController.updateBanner);
router.delete('/:id', bannerController.deleteBanner);

export const bannerRoutes = router;
