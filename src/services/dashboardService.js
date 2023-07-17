import React from "react";
import { GetServerSideProps } from 'next';
import axios from "axios";
import { axiosInstance } from "../../util/axiosInstance";
export const getDefiRankingsTableData = async (type) => {
  try {
    const { data } = await axiosInstance.post(
      `protocols?blockchain=${type}`
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const getProtocolScoresData = async () => {
  try {
    const { data } = await axiosInstance.get(
      `protocols/scores`
    );
    return data;
  } catch (err) {
    return err;
  }
};


export default {
  getDefiRankingsTableData,
  getProtocolScoresData
};