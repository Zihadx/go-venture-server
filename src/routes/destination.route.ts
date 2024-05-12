import express from 'express'
import { destinationController } from '../controllers/destination.controller'

const router = express.Router()

router.post('/create-destination', destinationController.createDestination)


export const destinationRouter = router