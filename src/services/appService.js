import { axiosInstance, axiosNTFInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { getAPI_URL, getAuthenticatedUserToken, getNTF_API_URL } from "@util/utility";

const getAxiosHeaders = () => {
	return {
		headers: {
			Authorization: `Bearer ${getAuthenticatedUserToken()}`,
		},
	};
};

export const getBlockchainListData = async (rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/blockchains`;
		if (checkIfCacheAvailable(url)) {
			return checkIfCacheAvailable(url);
		} else {
			const { data } = await axiosInstance(getAPI_URL()).get(url);
			return cacheHandler(url, data, 4, false);
		}
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const postReportBugData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `user/reportBug`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
		return data;
	} catch (err) {
		if (err.response.status === 401) {
			// Throw an error to trigger the `rejected` case with a custom error message
			throw new Error('Unauthorized: Please log in.');
		}
		return rejectWithValue(err);
	}
};

export const postSuggestFeatureData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `user/suggestFeature`;
		const config = { headers: { 'Content-Type': 'multipart/form-data' } };
		const { data } = await axiosInstance(getAPI_URL()).post(url, payload, config);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getSearchV2Data = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/searchv2?name=${payloadData.searchValue}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getSearchV2TrendingData = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/trendingSearch`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getConfigFromWebAdmin = async () => {
	const ADMINWEBURL = process.env.ADMINWEBURL;
	try {
		const fetchedData = await fetch(ADMINWEBURL, { headers: { 'Content-Type': 'application/json' }, cache: 'no-store' });
		return await fetchedData.json();
	} catch (error) {
		return error;
	}
};

export const getAppConfig = async () => {
	try {
		const configFromAdmin = await getConfigFromWebAdmin();
		let configuration = { APP_PORT: "7000" };
		return { ...configFromAdmin?.config, ...configuration };
	} catch (err) {
		return err;
	}
};


export const getAllUserNotificationsByUserIdAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `notifications/user`;
		const { data } = await axiosInstance(getNTF_API_URL()).get(url, getAxiosHeaders());
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getAllPublicNotificationsAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `notifications/public`;
		const { data } = await axiosInstance(getNTF_API_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const markNotificationReadByUserIdAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `notifications/read`;
		const { data } = await axiosNTFInstance(getNTF_API_URL()).put(url, {
			_id: payload?.id
		}, getAxiosHeaders());
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const clearAllNotificationsByUserIdAPI = async (payload, { rejectWithValue }) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `notifications/clear`;
		const { data } = await axiosNTFInstance(getNTF_API_URL()).put(url, null, getAxiosHeaders());
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
