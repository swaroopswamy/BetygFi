import { axiosInstance } from "@util/axiosInstance";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { getAPI_URL } from "@util/utility";

export const getDefiRankingsTableData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getProtocolScoresData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/scores`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getOverviewData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/overview`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getOverviewGraphData = async (payload, query, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/graph/data${query ? '?blockchain=' + query : ''}`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
