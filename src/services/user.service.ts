import { IUser } from '../interfaces/user.interface'
import Users from '../models/user.model'

const createAdmin = async (payload: IUser) => {
  const admin = await Users.create(payload)
  return admin
}

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await Users.create(userData)
  return result
}

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await Users.find()
  return result
}

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await Users.findById(id)
  return result
}

const updateUser = async (
  id: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await Users.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await Users.findByIdAndDelete(id)
  return result
}

export const userServices = {
  createAdmin,
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
