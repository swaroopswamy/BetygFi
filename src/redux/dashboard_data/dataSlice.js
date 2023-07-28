import { getDefiRankingsTableData, getOverviewData, getProtocolScoresData } from "@/services/dashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchDefiRankingTableData = createAsyncThunk('getDefiRankingsTableData', async (payload) => {
  const response = await getDefiRankingsTableData(payload);
  return response.data;
})

export const fetchOverviewData = createAsyncThunk('getOverviewData', async (payload) => {
  const response = await getOverviewData(payload);
  return response.data;
})
export const fetchScoreGraphData = createAsyncThunk('fetchScoreGraphData', async (payload) => {
  const response = await getProtocolScoresData(payload);
  return response.data;
})

const DashboardDataSlice = createSlice({
  name: "dashboardData",
  initialState: {
    DefiRankingsTableData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    ScoreGraphData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },
    OverviewData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },

    blockchainType: [],
    categorySelected: [],

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
    builder.addCase(fetchScoreGraphData.fulfilled, (state, action) => {
      state.ScoreGraphData.data = action.payload;
      state.ScoreGraphData.isLoading = false;
      state.ScoreGraphData.isSuccess = true;
    });
    builder.addCase(fetchScoreGraphData.pending, (state, action) => {
      state.ScoreGraphData.isLoading = true;
    });
    builder.addCase(fetchScoreGraphData.rejected, (state, action) => {
      state.ScoreGraphData.isLoading = false;
      state.ScoreGraphData.isError = true;
    });
    builder.addCase(fetchOverviewData.fulfilled, (state, action) => {
      state.OverviewData.data = action.payload;
      state.OverviewData.isLoading = false;
      state.OverviewData.isSuccess = true;
    });
    builder.addCase(fetchOverviewData.pending, (state, action) => {
      state.OverviewData.isLoading = true;
    });
    builder.addCase(fetchOverviewData.rejected, (state, action) => {
      state.OverviewData.isLoading = false;
      state.OverviewData.isError = true;
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
    categoryChangedReducer: (state, action) => {
      if (action.payload === "All") {
        state.categorySelected = [];
      }
      else if (state.categorySelected.includes(action.payload)) {
        state.categorySelected = state.categorySelected.filter(item => item !== action.payload);
      } else {
        state.categorySelected = state.categorySelected.filter(item => item !== "All");
        state.categorySelected.push(action.payload);
      }
    },
  },
});

export const { blockchainTypeChangedReducer, categoryChangedReducer } = DashboardDataSlice.actions;
export default DashboardDataSlice.reducer;
