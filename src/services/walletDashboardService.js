import React from "react";
import { axiosInstance } from "../../util/axiosInstance";
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
      `wallet/transactions/${payloadData.address}/get`,payloadData.payload
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