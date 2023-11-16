/* eslint-disable import/no-anonymous-default-export */
import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";

export const getBlockchainListData = async (rejectWithValue) => {
	try {
		const url = `protocols/blockchains`;
		if (checkIfCacheAvailable(url)) {
			return checkIfCacheAvailable(url);
		} else {
			const { data } = await axiosInstance.get(url);
			return cacheHandler(url, data, 4, false);
		}
	} catch (err) {
		return rejectWithValue(err);
	}
};
export const postReportBugData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.post(
			`user/reportBug`, payload
		);
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
		const { data } = await axiosInstance.post(
			`user/suggestFeature`, payload, {
			headers: {
				'Content-Type': 'multipart/form-data', // Override Content-Type for this request
			},
		}
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export default {
	getBlockchainListData,
	postReportBugData
};