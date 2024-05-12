import { IDestination } from '../interfaces/destination.interface'
import { Destinations } from '../models/destination.model'

const createDestination = async (
  destinationData: IDestination,
): Promise<IDestination> => {
  const result = await Destinations.create(destinationData)
  return result
}

export const destinationService = {
    createDestination
  }
