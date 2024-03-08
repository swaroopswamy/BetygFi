import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { fetchInstance } from "@util/fetchInstance";
import { getAPI_URL } from "@util/utility";

export const getDefiData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.id}/get`;
		if (checkIfCacheAvailable(url)) {
			return checkIfCacheAvailable(url);
		} else {
			const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
			return cacheHandler(url, data, 4, false);
		}
	} catch (err) {
		if (rejectWithValue) {
			return rejectWithValue(err);
		} else {
			return err;
		}
	}
};

export const getDefiDataFetched = async (payload) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.id}/get`;
		const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
		if (checkIfCacheAvailable(url)) {
			return checkIfCacheAvailable(url);
		} else {
			const data = await fetchInstance({ url: finalUrl, method: 'POST', payload });
			return cacheHandler(url, data, 4, false);
		}
	} catch (error) {
		return error;
	}
};

export const getDefiUsersTableData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.defi}/users?blockchain=${payload.blockchain}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiHotContractsTableData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.defi}/hotFunctions?blockchain=${payload.blockchain}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
export const getDefiAssetCompositionTableData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.defi}/asset-composition?blockchain=${payload.blockchain}&page=${payload.page}&limit=${payload.limit}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiFeeRevenueData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.defi}/fees-revenue?blockchain=${payload.blockchain}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiGovernanceTableData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.defi}/governance?page=${payload.page}&limit=${payload.limit}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiTvlBorrowData = async (payload, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.defi}/tvl-borrow?blockchain=${payload.blockchain}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiGraphData = async (payload, rejectWithValue) => {
	try {
		const blockchain = payload.blockchain && payload.blockchain.join(",");
		const url = NEXT_BE_URL_SEPARATOR + `protocols/${payload.defi}/graph-data?blockchain=${blockchain}`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
