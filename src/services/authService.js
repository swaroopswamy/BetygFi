import { axiosInstance } from "@util/axiosInstance";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { getAPI_URL } from "@util/utility";

const getAxiosHeaders = (token) => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};

export const verifyPublicAddress = async (address, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `auth/get-nonce?public_address=${address}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const loginMetamask = async (payload) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `auth/login-metamask`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
		return data;
	} catch (err) {
		// return rejectWithValue(err);
	}
};

export const socialLoginGoogleAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `auth/social-login?access_token=${payload?.token}`;
		const { data } = await axiosInstance(getAPI_URL()).post(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const verifyJWTtokenFromCookieAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `user/profile`;
		const { data } = await axiosInstance(getAPI_URL()).get(url, getAxiosHeaders(payload.token));
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
