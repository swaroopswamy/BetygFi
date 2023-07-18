import React from "react";
import { GetServerSideProps } from 'next';
import axios from "axios";
import { axiosInstance } from "../../util/axiosInstance";
export const getDefiRankingsTableData = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `protocols`,payload
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const getProtocolScoresData = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `protocols/scores`,payload
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