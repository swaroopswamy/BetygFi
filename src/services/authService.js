import { axiosInstance } from "@util/axiosInstance";

const getAxiosHeaders = (token) => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};

export const verifyPublicAddress = async (address, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.get(`auth/get-nonce?public_address=${address}`);
		return data;
	} catch (err) {
		return rejectWithValue(err);
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

export const socialLoginGoogleAPI = async (payload, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.post(`auth/social-login?access_token=${payload?.token}`);
		return data;
	} catch (err) {

		return rejectWithValue(err);
	}
};

export const verifyJWTtokenFromCookieAPI = async (payload, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.get(`user/profile`, getAxiosHeaders(payload.token));
		return data;
	} catch (err) {

		return rejectWithValue(err);
	}
};

export default {
	verifyPublicAddress,
	loginMetamask,
	socialLoginGoogleAPI,
	verifyJWTtokenFromCookieAPI
};