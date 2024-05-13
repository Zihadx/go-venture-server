import express from 'express'
import { destinationController } from '../controllers/destination.controller'

const router = express.Router()

router.post('/create-destination', destinationController.createDestination)
router.get('/', destinationController.getAllDestination)
router.get('/:id', destinationController.getSingleDestination)
router.patch('/:id', destinationController.updateDestination)
router.delete('/:id', destinationController.deleteDestination)


export const destinationRouter = router