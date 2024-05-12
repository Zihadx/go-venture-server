interface IHotel {
  id: string
  name: string
  locations: {
    address: string
    coordinates?: string
    countryId: string
  }
  descriptions: string
  image: string[]
  ratingAverage: number
  category: string
  priceRage: {
    min: number
    max: number
  }
  amenities: string[]
}

export{IHotel}
