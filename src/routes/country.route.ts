import express from 'express'
import { countryController } from '../controllers/country.controller'

const router = express.Router()

router.post('/create-country', countryController.createCountry)
router.get('/', countryController.getAllCountries)
router.get('/:id', countryController.getSingleCountry)
router.patch('/:id', countryController.updateCountry)
router.delete('/:id', countryController.deleteCountry)

export const countryRoutes = router
