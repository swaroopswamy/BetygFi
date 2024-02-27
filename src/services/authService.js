import { axiosInstance } from "@util/axiosInstance";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { getAPI_URL, getAuthenticatedUserToken } from "@util/utility";

const getAxiosHeaders = (token) => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};
const getAxiosHeadersFromCookie = () => {
	return {
		headers: {
			Authorization: `Bearer ${getAuthenticatedUserToken()}`,
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
		const { data } = await axiosInstance(getAPI_URL()).post(url, {
			headers: {
				origin:window.location.hostname,
			},
		});
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

export const getUserDetailsAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `user/user-profile/${payload?.user_name}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url, getAxiosHeadersFromCookie());
		return data;
	} catch (err) {
		return rejectWithValue(err.response.data);
	}
};

export const editDetailsAPI = async (payload,) => {
	const url = NEXT_BE_URL_SEPARATOR + `user/edit/user-profile`;
	const data = await axiosInstance(getAPI_URL()).put(url, payload, getAxiosHeadersFromCookie());
	return data;
};

export const getUserCountAPI = async (payload, { rejectWithValue }) => {
	try {

		const url = NEXT_BE_URL_SEPARATOR + `user/stats/${payload?.user_name}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url, getAxiosHeadersFromCookie());
		return data;
	} catch (err) {
		return rejectWithValue(err.response.data);
	}
};

export const usernameValidityAPI = async (payload) => {
	const url = NEXT_BE_URL_SEPARATOR + `user/suggest-username/${payload?.user_name}`;
	const data = await axiosInstance(getAPI_URL()).get(url, getAxiosHeadersFromCookie());
	return data;
};

export const changeProfilePicAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `user/profile-pic`;
		const { data } = await axiosInstance(getAPI_URL()).put(url, payload, getAxiosHeadersFromCookie());
		return data;
	}
	catch (err) {
		return rejectWithValue(err.response.data);
	}
};