import { ICountry } from "../interfaces/country.interface"
import { Counties } from "../models/country.model"

const createCountry = async (countryData: ICountry): Promise<ICountry> => {
    const result = await Counties.create(countryData)
    return result
  }
  
  const getAllCountries = async (): Promise<ICountry[]> => {
    const result = await Counties.find()
    return result
  }
  
  const getSingleCountry = async (id: string): Promise<ICountry | null> => {
    const result = await Counties.findById(id)
    return result
  }
  
  const updateCountry = async (
    id: string,
    countryData: ICountry,
  ): Promise<ICountry | null> => {
    const result = await Counties.findByIdAndUpdate(id, countryData, {
      new: true,
      runValidators: true,
    })
    return result
  }
  
  const deleteCountry = async (id: string): Promise<ICountry | null> => {
    const result = await Counties.findByIdAndDelete(id)
    return result
  }
  
  export const countryServices = {
    createCountry,
    getAllCountries,
    getSingleCountry,
    updateCountry,
    deleteCountry
  }