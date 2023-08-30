import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDefiUsersTableData, getDefiData } from "../../services/defiDashboardService";

export const fetchDefiData = createAsyncThunk('getDefiData', async (payload) => {
  const response = await getDefiData(payload);
  return response.data;
})

export const fetchDefiUsersTableData = createAsyncThunk('getDefiUsersTableData', async (payload) => {
  const response = await getDefiUsersTableData(payload);
  return response.data;
})

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
  }
});

export const { } = DefiDashboardDataSlice.actions;
export default DefiDashboardDataSlice.reducer;
