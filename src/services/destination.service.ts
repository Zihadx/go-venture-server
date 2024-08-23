/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDestination } from '../interfaces/destination.interface'
import { Destinations } from '../models/destination.model'

const createDestination = async (
  destinationData: IDestination,
): Promise<IDestination> => {
  const result = await Destinations.create(destinationData)
  return result
}

// const getAllDestination = async (filters: any): Promise<IDestination[]> => {
//   const { priceRange, ratingRange, categories } = filters;

//   const  filter: any = {};

//   if (priceRange) {
//     const [minPrice, maxPrice] = priceRange.split(',').map(Number);
//     filter.price = { $gte: minPrice, $lte: maxPrice };
//   }

//   if (ratingRange) {
//     const [minRating, maxRating] = ratingRange.split(',').map(Number);
//     filter.rating = { $gte: minRating, $lte: maxRating };
//   }

//   if (categories) {
//     filter.category = { $in: categories.split(',') };
//   }

//   const result = await Destinations.find(filter);
//   return result;
// };


const getAllDestination = async (filters: any): Promise<IDestination[]> => {
  const { priceRange, ratingRange, categories } = filters;

  const filter: any = {};

  // Filter by price range
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.map(Number); // Removed split as priceRange is an array
    filter.packagePrice = { $gte: minPrice, $lte: maxPrice };
  }

  // Filter by rating range
  if (ratingRange) {
    const [minRating, maxRating] = ratingRange.map(Number); // Removed split as ratingRange is an array
    filter.ratingAverage = { $gte: minRating, $lte: maxRating };
  }

  // Filter by categories
  if (categories && categories.length > 0) {
    filter.category = { $in: categories }; // Removed split as categories is an array
  }

  // Fetch filtered results from the database
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

  const getDestinationsByCountryId = async (countryId: string): Promise<IDestination[]> => {
    
    return await Destinations.find({ 'locations.country.countryId': countryId }).exec();
  };

export const destinationService = {
    createDestination,
    getAllDestination,
    getSingleDestination,
    updateDestination,
    deleteDestination,
    getDestinationsByCountryId
  }
