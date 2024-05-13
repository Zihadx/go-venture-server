import express from 'express'
import { hotelController } from '../controllers/hotel.controller'

const router = express.Router()

router.post('/create-hotel', hotelController.createHotel)
router.get('/', hotelController.getAllHotel)
router.get('/:id', hotelController.getSingleHotel)
router.patch('/:id', hotelController.updateHotel)
router.delete('/:id', hotelController.deleteHotel)

export const hotelRoutes = router
