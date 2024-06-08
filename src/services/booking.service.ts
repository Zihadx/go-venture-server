import { IBooking } from '../interfaces/booking.interface';
import Bookings from '../models/booking.model';

const createBooking = async (bookingData: IBooking): Promise<IBooking> => {
  const result = await Bookings.create(bookingData);
  return result;
};

const getAllBookings = async (): Promise<IBooking[]> => {
  const result = await Bookings.find();
  return result;
};

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Bookings.findById(id);
  return result;
};

const getAllBookingsByUser = async (id: string): Promise<IBooking []> => {
  const result = await Bookings.find({
    user: id
  });
  return result;
};

const updateBooking = async (
  id: string,
  bookingData: Partial<IBooking>
): Promise<IBooking | null> => {
  const result = await Bookings.findByIdAndUpdate(id, bookingData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Bookings.findByIdAndDelete(id);
  return result;
};

export const bookingServices = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  getAllBookingsByUser,
  updateBooking,
  deleteBooking,
};
