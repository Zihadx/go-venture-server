import { ICountry } from "../interfaces/country.interface"
import { Countries } from "../models/country.model"

const createCountry = async (countryData: ICountry): Promise<ICountry> => {
    const result = await Countries.create(countryData)
    return result
  }
  
  const getAllCountries = async (): Promise<ICountry[]> => {
    const result = await Countries.find()
    return result
  }






  
  const getSingleCountry = async (id: string): Promise<ICountry | null> => {
    const result = await Countries.findById(id)
    return result
  }
  
  const updateCountry = async (
    id: string,
    countryData: ICountry,
  ): Promise<ICountry | null> => {
    const result = await Countries.findByIdAndUpdate(id, countryData, {
      new: true,
      runValidators: true,
    })
    return result
  }
  
  const deleteCountry = async (id: string): Promise<ICountry | null> => {
    const result = await Countries.findByIdAndDelete(id)
    return result
  }

  

// const getAllDestinationsByCountry = async (countryId: string) => {

//     const result = await Destinations.find({ 'locations.country.countryId': countryId }).populate('locations.country.countryId');

//     return result;
// };

const getCountryById = async (id: string): Promise<ICountry | null> => {
  return await Countries.findOne({ id }).exec();
};


  
  export const countryServices = {
    createCountry,
    getAllCountries,
    getSingleCountry,
    updateCountry,
    deleteCountry,
    getCountryById
  }