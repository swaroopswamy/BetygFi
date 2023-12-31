import { axiosInstance } from "@util/axiosInstance";
import { getAPI_URL } from "@util/utility";

export const getWalletBalanceData = async (payloadData, rejectWithValue) => {
	try {
		const { data } = await axiosInstance(getAPI_URL()).post(
			`wallet/balance/${payloadData.address}`, payloadData.payload
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
	}
};

export const getWalletTransactionsData = async (payloadData, rejectWithValue) => {
	try {
		const { data } = await axiosInstance(getAPI_URL()).post(
			`wallet/transactions/${payloadData.address}/get`, payloadData.payload
		);
		return data;
	} catch (err) {
		return rejectWithValue(err);
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