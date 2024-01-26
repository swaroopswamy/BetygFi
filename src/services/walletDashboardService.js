import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { getAPI_URL } from "@util/utility";

export const getWalletBalanceData = async (payloadData, rejectWithValue) => {
	try {
		const url = `wallet/balance/${payloadData.address}`;
		const { data } = await axiosInstance(getAPI_URL()).post(url, payloadData.payload);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getWalletTransactionsData = async (payloadData, rejectWithValue) => {
	try {
		const url = `wallet/transactions/${payloadData.address}/get`;
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
		const { data } = await axiosInstance(getAPI_URL()).post(
			`wallet/address/${payloadData.address}/address`, payloadData.payload
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getAssetAllocationForAddress = async (payloadData, rejectWithValue) => {
	try {
		const { data } = await axiosInstance(getAPI_URL()).get(
			`wallet/address/${payloadData.address}/assets-allocation`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getProtocolAllocationForAddress = async (payloadData, rejectWithValue) => {
	try {
		const { data } = await axiosInstance(getAPI_URL()).get(
			`wallet/address/${payloadData.address}/protocol-allocation`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getBlockchainAllocationForAddress = async (payloadData, rejectWithValue) => {
	try {
		const { data } = await axiosInstance(getAPI_URL()).get(
			`wallet/address/${payloadData.address}/blockchain-allocation`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getInflowOutflowTokensForAddress = async (payloadData, rejectWithValue) => {
	try {
		const { data } = await axiosInstance(getAPI_URL()).get(
			`/wallet/address/${payloadData.address}/inflow-outflow-token`
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export default {
	getWalletBalanceData,
	getWalletTransactionsData,
	getWalletTransactionsForAddressSummary
};