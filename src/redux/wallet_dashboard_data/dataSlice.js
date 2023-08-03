import { getDefiRankingsTableData, getOverviewData, getProtocolScoresData } from "@/services/dashboardService";
import { getWalletBalanceData, getWalletTransactionsData } from "@/services/walletDashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchDefiRankingTableData = createAsyncThunk('getDefiRankingsTableData', async (payload) => {
  const response = await getDefiRankingsTableData(payload);
  return response.data;
})


export const fetchWalletBalanceData = createAsyncThunk('getWalletBalanceData', async (address,payload) => {
  const response = await getWalletBalanceData(address,payload);
  return response.data;
})
export const fetchWalletTransactionsData = createAsyncThunk('getWalletTransactionsData', async (address,payload) => {
  const response = await getWalletTransactionsData(address,payload);
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
    walletBalanceData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    walletTransactionsData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },

    walletAddress: null,
    blockchainType: [],
    defiArraySelected: [],

  },
  extraReducers: (builder) => {
    builder.addCase(fetchDefiRankingTableData.fulfilled, (state, action) => {
      state.DefiRankingsTableData.data = action.payload;
      state.DefiRankingsTableData.isLoading = false;
      state.DefiRankingsTableData.isSuccess = true;
      state.DefiRankingsTableData.isError = false;
    });
    builder.addCase(fetchDefiRankingTableData.pending, (state, action) => {
      state.DefiRankingsTableData.isLoading = true;
      state.DefiRankingsTableData.isError = false;
      state.DefiRankingsTableData.isSuccess = false;
      state.DefiRankingsTableData.data = action.payload;
    });
    builder.addCase(fetchDefiRankingTableData.rejected, (state, action) => {
      state.DefiRankingsTableData.isLoading = false;
      state.DefiRankingsTableData.isSuccess = false;
      state.DefiRankingsTableData.isError = true;
      state.DefiRankingsTableData.data = action.payload;
    });
    builder.addCase(fetchWalletBalanceData.fulfilled, (state, action) => {
      state.walletBalanceData.data = action.payload;
      state.walletBalanceData.isLoading = false;
      state.walletBalanceData.isSuccess = true;
      state.walletBalanceData.isError = false;
    });
    builder.addCase(fetchWalletBalanceData.pending, (state, action) => {
      state.walletBalanceData.isLoading = true;
      state.walletBalanceData.isError = false;
      state.walletBalanceData.isSuccess = false;
      state.walletBalanceData.data = action.payload;
    });
    builder.addCase(fetchWalletBalanceData.rejected, (state, action) => {
      state.walletBalanceData.isLoading = false;
      state.walletBalanceData.isSuccess = false;
      state.walletBalanceData.isError = true;
      state.walletBalanceData.data = action.payload;
    });
    builder.addCase(fetchWalletTransactionsData.fulfilled, (state, action) => {
      state.walletTransactionsData.data = action.payload;
      state.walletTransactionsData.isLoading = false;
      state.walletTransactionsData.isSuccess = true;
      state.walletTransactionsData.isError = false;
    });
    builder.addCase(fetchWalletTransactionsData.pending, (state, action) => {
      state.walletTransactionsData.isLoading = true;
      state.walletTransactionsData.isError = false;
      state.walletTransactionsData.isSuccess = false;
      state.walletTransactionsData.data = action.payload;
    });
    builder.addCase(fetchWalletTransactionsData.rejected, (state, action) => {
      state.walletTransactionsData.isLoading = false;
      state.walletTransactionsData.isSuccess = false;
      state.walletTransactionsData.isError = true;
      state.walletTransactionsData.data = action.payload;
    });
  },
  reducers: {
    walletAddressChangedReducer: (state, action) => {
      console.log(action.payload)
      state.walletAddress = action.payload;
    },
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

export const { blockchainTypeChangedReducer, defiArrayChangedReducer, walletAddressChangedReducer } = WalletDashboardDataSlice.actions;
export default WalletDashboardDataSlice.reducer;
