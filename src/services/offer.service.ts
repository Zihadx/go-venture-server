import { IOffer } from '../interfaces/offer.interface';
import { Offers } from '../models/offer.model';

const createOffer = async (offerData: IOffer): Promise<IOffer> => {
    const result = await Offers.create(offerData);
    return result;
}

const getAllOffers = async (): Promise<IOffer[]> => {
    const result = await Offers.find().populate('destinationId');
    return result;
}

const getSingleOffer = async (id: string): Promise<IOffer | null> => {
    const result = await Offers.findById(id).populate('destinationId');
    return result;
}

const updateOffer = async (id: string, offerData: IOffer): Promise<IOffer | null> => {
    const result = await Offers.findByIdAndUpdate(id, offerData, {
        new: true,
        runValidators: true,
    }).populate('destinationId');
    return result;
}

const deleteOffer = async (id: string): Promise<IOffer | null> => {
    const result = await Offers.findByIdAndDelete(id);
    return result;
}

export const offerServices = {
    createOffer,
    getAllOffers,
    getSingleOffer,
    updateOffer,
    deleteOffer
};
