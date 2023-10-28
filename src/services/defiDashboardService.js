import { axiosInstance } from "@util/axiosInstance";

export const getDefiData = async (payload) => {
    try {
        const { data } = await axiosInstance.post(
          `protocols/${payload.id}/get`, payload
        );
        return data;
      } catch (err) {
        return rejectWithValue(err);
      }
}

export const getDefiUsersTableData = async (payload) => {
    try {
      const { data } = await axiosInstance.get(
        `protocols/${payload.defi}/users?blockchain=${payload.blockchain}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
};

export const getDefiHotContractsTableData = async (payload) => {
  try {
    const { data } = await axiosInstance.get(
      `protocols/${payload.defi}/hotFunctions?blockchain=${payload.blockchain}`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};
export const getDefiAssetCompositionTableData = async (payload) => {
  try {
    const { data } = await axiosInstance.get(
      `protocols/${payload.defi}/asset-composition?blockchain=${payload.blockchain}&page=${payload.page}&limit=${payload.limit}`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getDefiFeeRevenueData = async (payload) => {
  try {
    const { data } = await axiosInstance.get(
      `protocols/${payload.defi}/fees-revenue?blockchain=${payload.blockchain}`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};

export const getDefiGovernanceTableData = async (payload) => {
  try {
    const { data } = await axiosInstance.get(
      `protocols/${payload.defi}/governance?page=${payload.page}&limit=${payload.limit}`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};



