import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { getAPI_URL } from "@util/utility";

export const getWalletBalanceData = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `wallet/balance/${payloadData.address}`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payloadData.payload);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getWalletTransactionsData = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `wallet/transactions/${payloadData.address}/get`;
		const cacheUrl = url + payloadData.payload.page;
		if (checkIfCacheAvailable(cacheUrl)) {
			return checkIfCacheAvailable(cacheUrl);
		} else {
			const { data } = await axiosInstance(getAPI_URL()).post(url, payloadData.payload);
			return cacheHandler(cacheUrl, data, 4, false);
		}
	} catch (err) {
		if (rejectWithValue) {
			return rejectWithValue(err);
		} else {
			return err;
		}
	}
};

export const getWalletTransactionsForAddressSummary = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `wallet/address/${payloadData.address}/address`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payloadData.payload);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getAssetAllocationForAddress = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `wallet/address/${payloadData.address}/assets-allocation`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getProtocolAllocationForAddress = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `wallet/address/${payloadData.address}/protocol-allocation`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getBlockchainAllocationForAddress = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `wallet/address/${payloadData.address}/blockchain-allocation`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getInflowOutflowTokensForAddress = async (payloadData, rejectWithValue) => {
	try {
		const url = NEXT_BE_URL_SEPARATOR + `/wallet/address/${payloadData.address}/inflow-outflow-token`;
		const { data } = await axiosInstance(getAPI_URL()).get(url);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};
