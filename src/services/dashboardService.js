import React from "react";
import { GetServerSideProps } from 'next';
import axios from "axios";
import { axiosInstance } from "../../util/axiosInstance";
export const getDefiRankingsTableData = async () => {
    try {
      const { data } = await axiosInstance.post(
          `protocols`
      );
      return data;
    } catch (err) {
      return err;
    }
  };
  
export default {
  getDefiRankingsTableData
};