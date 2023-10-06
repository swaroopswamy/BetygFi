import { axiosInstance } from "../../util/axiosInstance";

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
      `protocols/${payload.defi}/asset-composition`
    );
    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
};


// export const getDefiInflowOutflowTableData = async (payload) => {
//   try {
//     const { data } = await axiosInstance.post(
//       `protocols`, payload
//     );
//     return data;
//   } catch (err) {
//     return rejectWithValue(err);
//   }
// };


