import React from "react";
import { axiosInstance } from "../../util/axiosInstance";
export const getWalletBalanceData = async (address, payload) => {
  try {
    const { data } = await axiosInstance.post(
      `wallet/balance/${address}`, payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getWalletTransactionsData = async (address, payload) => {
  try {
    const { data } = await axiosInstance.post(
      `wallet/transactions/${address}/get`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};



export default {
  getWalletBalanceData,
  getWalletTransactionsData
};