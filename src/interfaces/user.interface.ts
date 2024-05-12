interface UserProfile {
  phoneNumber: string
  profilePicture: string
}

interface IUser {
  name: string
  age: number
  email: string
  profileInfo: UserProfile
  passwordHash: string
  role: 'admin' | 'user'
  bookings: string[]
  status: 'active' | 'inactive'
}

export { IUser }
