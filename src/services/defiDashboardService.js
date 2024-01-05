import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";

export const getDefiData = async (payload, rejectWithValue) => {
	try {
		const url = `protocols/${payload.id}/get`;
		if (checkIfCacheAvailable(url)) {
			return checkIfCacheAvailable(url);
		} else {
			const { data } = await axiosInstance.post(url, payload);
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

export const getDefiUsersTableData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.get(
			`protocols/${payload.defi}/users?blockchain=${payload.blockchain}`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiHotContractsTableData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.get(
			`protocols/${payload.defi}/hotFunctions?blockchain=${payload.blockchain}`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
export const getDefiAssetCompositionTableData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.get(
			`protocols/${payload.defi}/asset-composition?blockchain=${payload.blockchain}&page=${payload.page}&limit=${payload.limit}`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiFeeRevenueData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.get(
			`protocols/${payload.defi}/fees-revenue?blockchain=${payload.blockchain}`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiGovernanceTableData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.get(
			`protocols/${payload.defi}/governance?page=${payload.page}&limit=${payload.limit}`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiTvlBorrowData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.get(
			`protocols/${payload.defi}/tvl-borrow?blockchain=${payload.blockchain}`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getDefiGraphData = async (payload, rejectWithValue) => {
	try {
		const { data } = await axiosInstance.get(
			`protocols/${payload.defi}/graph-data?blockchain=${payload.blockchain}`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
