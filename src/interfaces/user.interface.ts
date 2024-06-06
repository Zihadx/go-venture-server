interface UserProfile {
  phoneNumber: string
  profilePicture: string
}

interface IUser {
  name: string
  age: number
  email: string
  profileInfo: UserProfile
  password: string,
  passwordUpdateAt: Date,
  role: 'admin' | 'user'
  status: 'active' | 'inactive'
}

export { IUser }
