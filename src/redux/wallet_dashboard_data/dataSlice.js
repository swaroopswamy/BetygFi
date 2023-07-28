import { getDefiRankingsTableData, getOverviewData, getProtocolScoresData } from "@/services/dashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchDefiRankingTableData = createAsyncThunk('getDefiRankingsTableData', async (payload) => {
  const response = await getDefiRankingsTableData(payload);
  return response.data;
})


const WalletDashboardDataSlice = createSlice({
  name: "walletDashboardData",
  initialState: {
    DefiRankingsTableData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },

    blockchainType: [],
    defiArraySelected: [],

  },
  extraReducers: (builder) => {
    builder.addCase(fetchDefiRankingTableData.fulfilled, (state, action) => {
      state.DefiRankingsTableData.data = action.payload;
      state.DefiRankingsTableData.isLoading = false;
      state.DefiRankingsTableData.isSuccess = true;
    });
    builder.addCase(fetchDefiRankingTableData.pending, (state, action) => {
      state.DefiRankingsTableData.isLoading = true;
    });
    builder.addCase(fetchDefiRankingTableData.rejected, (state, action) => {
      state.DefiRankingsTableData.isLoading = false;
      state.DefiRankingsTableData.isError = true;
    });
  
  },
  reducers: {
    blockchainTypeChangedReducer: (state, action) => {
      if (action.payload === "All") {
        state.blockchainType = [];
      }
      else if (state.blockchainType.includes(action.payload)) {
        state.blockchainType = state.blockchainType.filter(item => item !== action.payload);
      } else {
        state.blockchainType = state.blockchainType.filter(item => item !== "All");
        state.blockchainType.push(action.payload);
      }
    },
    defiArrayChangedReducer: (state, action) => {
      if (action.payload === "All") {
        state.defiArraySelected = [];
      }
      else if (state.defiArraySelected.includes(action.payload)) {
        state.defiArraySelected = state.defiArraySelected.filter(item => item !== action.payload);
      } else {
        state.defiArraySelected = state.defiArraySelected.filter(item => item !== "All");
        state.defiArraySelected.push(action.payload);
      }
    },
  },
});

export const { blockchainTypeChangedReducer,defiArrayChangedReducer } = WalletDashboardDataSlice.actions;
export default WalletDashboardDataSlice.reducer;
