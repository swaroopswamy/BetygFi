import { getDefiRankingsTableData } from "@/services/dashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('getDefiRankingsTableData', async () => {
  const response = await getDefiRankingsTableData();
  return response.data;
})

const dashboardDataSlice = createSlice({
  name: "dashboardData",
  initialState: {
    DefiRankingsTableData: null,
    isLoading: false,
    isError: false,
    isSuccess:false,
    blockchainType:"all"
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.DefiRankingsTableData = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      console.log("error", action.error);
      state.isError = true;
    });
  },
   reducers: {
    blockchainTypeChangedReducer: (state, action) => {
      state.blockchainType=action.payload;
    },
  },
});

export const { blockchainTypeChangedReducer } = dashboardDataSlice.actions;
export default dashboardDataSlice.reducer;
