import React from "react";
import { axiosInstance } from "../../util/axiosInstance";
export const getWalletBalanceData = async (address) => {
  try {
    const { data } = await axiosInstance.get(
      `wallet/balance/${address}`
    );
    return data;
  } catch (err) {
    return err;
  }
};



export default {
  getWalletBalanceData,
};