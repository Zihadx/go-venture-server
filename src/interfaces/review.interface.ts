import { Schema } from "mongoose"

interface IReview{
    review: string
    rating: number
    createAt: Date
    destinations: Schema.Types.ObjectId
    hotel: Schema.Types.ObjectId
    user: Schema.Types.ObjectId
}

export {IReview}