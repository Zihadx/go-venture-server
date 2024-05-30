import express from 'express';
import { offerController } from '../controllers/offer.controller';

const router = express.Router();

router.post('/create-offer', offerController.createOffer);
router.get('/', offerController.getAllOffers);
router.get('/:id', offerController.getSingleOffer);
router.patch('/:id', offerController.updateOffer);
router.delete('/:id', offerController.deleteOffer);

export const offerRoutes = router;
