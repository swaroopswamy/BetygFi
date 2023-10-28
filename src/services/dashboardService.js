import { axiosInstance } from "@util/axiosInstance";

export const getDefiRankingsTableData = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `protocols`, payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getProtocolScoresData = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `protocols/scores`, payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getOverviewData = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `protocols/overview`, payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getOverviewGraphData = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      `protocols/graph/data`, payload
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};


export default {
  getDefiRankingsTableData,
  getProtocolScoresData,
  getOverviewData,
  getOverviewGraphData
};