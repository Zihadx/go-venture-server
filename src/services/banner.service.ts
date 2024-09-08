import { Banner } from '../interfaces/banner.interface'; // Import your Banner interface
import BannerModel from '../models/banner.model'; // Import your Banner model

const createBanner = async (bannerData: Banner): Promise<Banner> => {
  const result = await BannerModel.create(bannerData);
  return result;
};

const getAllBanners = async (): Promise<Banner[]> => {
  const result = await BannerModel.find();
  return result;
};

const getSingleBanner = async (id: number): Promise<Banner | null> => {
  const result = await BannerModel.findOne({ id });
  return result;
};

const updateBanner = async (
  id: number,
  bannerData: Partial<Banner>
): Promise<Banner | null> => {
  const result = await BannerModel.findOneAndUpdate({ id }, bannerData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBanner = async (id: number): Promise<Banner | null> => {
  const result = await BannerModel.findOneAndDelete({ id });
  return result;
};

export const bannerServices = {
  createBanner,
  getAllBanners,
  getSingleBanner,
  updateBanner,
  deleteBanner,
};
