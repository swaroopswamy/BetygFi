import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDefiUsersTableData, getDefiData, getDefiHotContractsTableData, getDefiAssetCompositionTableData } from "../../services/defiDashboardService";

export const fetchDefiData = createAsyncThunk('getDefiData', async (payload) => {
  const response = await getDefiData(payload);
  return response.data;
})

export const fetchDefiUsersTableData = createAsyncThunk('getDefiUsersTableData', async (payload) => {
  const response = await getDefiUsersTableData(payload);
  //console.log("check",response);
  return response.data;
})

export const fetchDefiHotContractsTableData = createAsyncThunk('getDefiHotContractsTableData', async (payload) => {
  const response = await getDefiHotContractsTableData(payload);
  return response.data;
})

export const fetchDefiAssetCompositionTableData = createAsyncThunk('getDefiAssetCompositionTableData', async (payload) => {
  const response = await getDefiAssetCompositionTableData(payload);
  return response.data;
})

/* export const fetchGovernanceTableData = createAsyncThunk('getGovernanceTableData', async (payload) => {
  const response = await getGovernanceTableData(payload);
  return response.data;
}) */


const DefiDashboardDataSlice = createSlice({
  name: "DefiDashboardData",
  initialState: {
    DefiData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    DefiUsersTableData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    DefiHotContractsTableData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    DefiAssetCompositionTableData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    // DefiInflowOutflowTableData: {
    //   data: null,
    //   isLoading: false,
    //   isError: false,
    //   isSuccess: false, 
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDefiData.fulfilled, (state, action) => {
      state.DefiData.data = action.payload;
      state.DefiData.isLoading = false;
      state.DefiData.isSuccess = true;
      state.DefiData.isError = false;
    });
    builder.addCase(fetchDefiData.pending, (state, action) => {
      state.DefiData.isLoading = true;
      state.DefiData.isError = false;
      state.DefiData.isSuccess = false;
      state.DefiData.data = action.payload;
    });
    builder.addCase(fetchDefiData.rejected, (state, action) => {
      state.DefiData.isLoading = false;
      state.DefiData.isSuccess = false;
      state.DefiData.isError = true;
      state.DefiData.data = action.payload;
    });
    builder.addCase(fetchDefiUsersTableData.fulfilled, (state, action) => {
      state.DefiUsersTableData.data = action.payload;
      state.DefiUsersTableData.isLoading = false;
      state.DefiUsersTableData.isSuccess = true;
      state.DefiUsersTableData.isError = false;
    });
    builder.addCase(fetchDefiUsersTableData.pending, (state, action) => {
      state.DefiUsersTableData.isLoading = true;
      state.DefiUsersTableData.isError = false;
      state.DefiUsersTableData.isSuccess = false;
      state.DefiUsersTableData.data = action.payload;
    });
    builder.addCase(fetchDefiUsersTableData.rejected, (state, action) => {
      state.DefiUsersTableData.isLoading = false;
      state.DefiUsersTableData.isSuccess = false;
      state.DefiUsersTableData.isError = true;
      state.DefiUsersTableData.data = action.payload;
    });
    builder.addCase(fetchDefiHotContractsTableData.fulfilled, (state, action) => {
      state.DefiHotContractsTableData.data = action.payload;
      state.DefiHotContractsTableData.isLoading = false;
      state.DefiHotContractsTableData.isSuccess = true;
      state.DefiHotContractsTableData.isError = false;
    });
    builder.addCase(fetchDefiHotContractsTableData.pending, (state, action) => {
      state.DefiHotContractsTableData.isLoading = true;
      state.DefiHotContractsTableData.isError = false;
      state.DefiHotContractsTableData.isSuccess = false;
      state.DefiHotContractsTableData.data = action.payload;
    });
    builder.addCase(fetchDefiHotContractsTableData.rejected, (state, action) => {
      state.DefiHotContractsTableData.isLoading = false;
      state.DefiHotContractsTableData.isSuccess = false;
      state.DefiHotContractsTableData.isError = true;
      state.DefiHotContractsTableData.data = action.payload;
    });
    builder.addCase(fetchDefiAssetCompositionTableData.fulfilled, (state, action) => {
      state.DefiAssetCompositionTableData.data = action.payload;
      state.DefiAssetCompositionTableData.isLoading = false;
      state.DefiAssetCompositionTableData.isSuccess = true;
      state.DefiAssetCompositionTableData.isError = false;
    });
    builder.addCase(fetchDefiAssetCompositionTableData.pending, (state, action) => {
      state.DefiAssetCompositionTableData.isLoading = true;
      state.DefiAssetCompositionTableData.isError = false;
      state.DefiAssetCompositionTableData.isSuccess = false;
      state.DefiAssetCompositionTableData.data = action.payload;
    });
    builder.addCase(fetchDefiAssetCompositionTableData.rejected, (state, action) => {
      state.DefiAssetCompositionTableData.isSuccess = false;
      state.DefiAssetCompositionTableData.isError = true;
      state.DefiAssetCompositionTableData.isLoading = false;
      state.DefiAssetCompositionTableData.data = action.payload;
    });

    // builder.addCase(fetchDefiInflowOutflowTableData.fulfilled, (state, action) => {
    //   state.DefiInflowOutflowTableData.data = action.payload;
    //   state.DefiInflowOutflowTableData.isLoading = false;
    //   state.DefiInflowOutflowTableData.isSuccess = true;
    //   state.DefiInflowOutflowTableData.isError = false;
    // });
    // builder.addCase(fetchDefiInflowOutflowTableData.pending, (state, action) => {
    //   state.DefiInflowOutflowTableData.isLoading = true;
    //   state.DefiInflowOutflowTableData.isError = false;
    //   state.DefiInflowOutflowTableData.isSuccess = false;
    //   state.DefiInflowOutflowTableData.data = action.payload;
    // });
    // builder.addCase(fetchDefiInflowOutflowTableData.rejected, (state, action) => {
    //   state.DefiInflowOutflowTableData.isLoading = false;
    //   state.DefiInflowOutflowTableData.isSuccess = false;
    //   state.DefiInflowOutflowTableData.isError = true;
    //   state.DefiInflowOutflowTableData.data = action.payload;
    // });
  }
});

export const { } = DefiDashboardDataSlice.actions;
export default DefiDashboardDataSlice.reducer;
