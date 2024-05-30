import { ObjectId } from 'mongoose';

interface IOffer {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  price: number;
  discountPrice: number;
  type: 'Hot Deal' | 'Special Offer';
  destinationId: ObjectId;
}

export { IOffer };
