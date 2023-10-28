import { axiosInstance } from "@util/axiosInstance";

export const getWalletBalanceData = async (payloadData) => {
  try {
    const { data } = await axiosInstance.post(
      `wallet/balance/${payloadData.address}`, payloadData.payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getWalletTransactionsData = async (payloadData) => {
  try {
    const { data } = await axiosInstance.post(
      `wallet/transactions/${payloadData.address}/get`, payloadData.payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getWalletTransactionsForAddressSummary = async (payloadData) => {
  try {
    const { data } = await axiosInstance.post(
      `wallet/address/${payloadData.address}/address`, payloadData.payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getAssetAllocationForAddress = async (payloadData) => {
  try {
    const { data } = await axiosInstance.get(
      `wallet/address/${payloadData.address}/assets-allocation`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getProtocolAllocationForAddress = async (payloadData) => {
  try {
    const { data } = await axiosInstance.get(
      `wallet/address/${payloadData.address}/protocol-allocation`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getBlockchainAllocationForAddress = async (payloadData) => {
  try {
    const { data } = await axiosInstance.get(
      `wallet/address/${payloadData.address}/blockchain-allocation`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getInflowOutflowTokensForAddress = async (payloadData) => {
  try {
    const { data } = await axiosInstance.get(
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