/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDestination } from '../interfaces/destination.interface'
import { Destinations } from '../models/destination.model'

const createDestination = async (
  destinationData: IDestination,
): Promise<IDestination> => {
  const result = await Destinations.create(destinationData)
  return result
}

const getAllDestination = async (filters: any): Promise<IDestination[]> => {
  const { priceRange, ratingRange, categories } = filters;

  const  filter: any = {};

  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split(',').map(Number);
    filter.price = { $gte: minPrice, $lte: maxPrice };
  }

  if (ratingRange) {
    const [minRating, maxRating] = ratingRange.split(',').map(Number);
    filter.rating = { $gte: minRating, $lte: maxRating };
  }

  if (categories) {
    filter.category = { $in: categories.split(',') };
  }

  const result = await Destinations.find(filter);
  return result;
};


  const getSingleDestination = async (id: string): Promise<IDestination | null> => {
    const result = await Destinations.findById(id)
    return result
  }
  
  const updateDestination = async (
    id: string,
    destinationData: IDestination,
  ): Promise<IDestination | null> => {
    const result = await Destinations.findByIdAndUpdate(id, destinationData, {
      new: true,
      runValidators: true,
    })
    return result
  }
  
  const deleteDestination = async (id: string): Promise<IDestination | null> => {
    const result = await Destinations.findByIdAndDelete(id)
    return result
  }

export const destinationService = {
    createDestination,
    getAllDestination,
    getSingleDestination,
    updateDestination,
    deleteDestination
  }
