import { IHotel } from "../interfaces/hotel.interface"
import { Hotels } from "../models/hotel.model"

const createHotel = async (hotelData: IHotel): Promise<IHotel> => {
    const result = await Hotels.create(hotelData)
    return result
  }

  const getAllHotel = async (): Promise<IHotel[]> => {
    const result = await Hotels.find()
    return result
  }
  
  const getSingleHotel = async (id: string): Promise<IHotel | null> => {
    const result = await Hotels.findById(id)
    return result
  }
  
  const updateHotel = async (
    id: string,
    userData: IHotel,
  ): Promise<IHotel | null> => {
    const result = await Hotels.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    })
    return result
  }
  
  const deleteHotel = async (id: string): Promise<IHotel | null> => {
    const result = await Hotels.findByIdAndDelete(id)
    return result
  }


  export const hotelService={
    createHotel,
    getAllHotel,
    getSingleHotel,
    updateHotel,
    deleteHotel
  }