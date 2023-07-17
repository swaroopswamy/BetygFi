import { getDefiRankingsTableData } from "@/services/dashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('getDefiRankingsTableData', async (type) => {
  const response = await getDefiRankingsTableData(type);
  return response.data;
})

const dashboardDataSlice = createSlice({
  name: "dashboardData",
  initialState: {
    DefiRankingsTableData: null,
    isLoading: false,
    isError: false,
    isSuccess:false,
    blockchainType:"all",
    categorySelected:"All",
    
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
    categoryChangedReducer: (state, action) => {
      state.categorySelected=action.payload;
    },
  },
});

export const { blockchainTypeChangedReducer , categoryChangedReducer } = dashboardDataSlice.actions;
export default dashboardDataSlice.reducer;
