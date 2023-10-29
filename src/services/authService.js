import { axiosInstance } from "@util/axiosInstance";

export const verifyPublicAddress = async (address) => {
  try {
    const { data } = await axiosInstance.get(`auth/get-nonce?public_address=${address}`);
    return data;
  } catch (err) {
    // return rejectWithValue(err);
  }
};
export const loginMetamask = async (payload) => {
  try {
    const { data } = await axiosInstance.post(`auth/login-metamask`, payload);
    return data;
  } catch (err) {
    // return rejectWithValue(err);
  }
};

export default {
  verifyPublicAddress,
  loginMetamask,
};