import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { getAPI_URL } from "@util/utility";

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
		const url = NEXT_BE_URL_SEPARATOR + `/protocols/searchv2?name=${payloadData.searchValue}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getSearchV2TrendingData = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `/protocols/trendingSearch`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getAppConfig = async host => {
	try {
		const url = `${host}/api/config`;
		if (checkIfCacheAvailable(url)) {
			return checkIfCacheAvailable(url);
		} else {
			const res = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const { data } = await res.json();
			return cacheHandler(url, data?.config, 4, false);
		}
	} catch (err) {
		return err;
	}
};
