import {
	getDefiRankingsTableData, getOverviewData, getProtocolScoresData,
	getOverviewGraphData
} from "@/services/dashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchDefiRankingTableData = createAsyncThunk('getDefiRankingsTableData', async (payload) => {
	const response = await getDefiRankingsTableData(payload);
	return response.data;
});

export const fetchOverviewData = createAsyncThunk('getOverviewData', async (payload) => {
	const response = await getOverviewData(payload);
	return response.data;
});

export const fetchScoreGraphData = createAsyncThunk('fetchScoreGraphData', async (payload) => {
	const response = await getProtocolScoresData(payload);
	return response.data;
});

export const fetchOverviewGraphData = createAsyncThunk('getOverviewGraphData', async (payload) => {
	const response = await getOverviewGraphData(payload);
	return response.data;
});

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
		OverviewGraphData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		blockchainType: [],
		categorySelected: [],
		scoreSelected: "",
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
		builder.addCase(fetchScoreGraphData.fulfilled, (state, action) => {
			state.ScoreGraphData.data = action.payload;
			state.ScoreGraphData.isLoading = false;
			state.ScoreGraphData.isSuccess = true;
		});
		builder.addCase(fetchScoreGraphData.pending, (state) => {
			state.ScoreGraphData.isLoading = true;
		});
		builder.addCase(fetchScoreGraphData.rejected, (state) => {
			state.ScoreGraphData.isLoading = false;
			state.ScoreGraphData.isError = true;
		});
		builder.addCase(fetchOverviewData.fulfilled, (state, action) => {
			state.OverviewData.data = action.payload;
			state.OverviewData.isLoading = false;
			state.OverviewData.isSuccess = true;
		});
		builder.addCase(fetchOverviewData.pending, (state) => {
			state.OverviewData.isLoading = true;
		});
		builder.addCase(fetchOverviewData.rejected, (state) => {
			state.OverviewData.isLoading = false;
			state.OverviewData.isError = true;
		});
		builder.addCase(fetchOverviewGraphData.fulfilled, (state, action) => {
			state.OverviewGraphData.data = action.payload;
			state.OverviewGraphData.isLoading = false;
			state.OverviewGraphData.isSuccess = true;
		});
		builder.addCase(fetchOverviewGraphData.pending, (state) => {
			state.OverviewGraphData.isLoading = true;
		});
		builder.addCase(fetchOverviewGraphData.rejected, (state) => {
			state.OverviewGraphData.isLoading = false;
			state.OverviewGraphData.isError = true;
		});
	},
	reducers: {
		blockchainTypeChangedReducer: (state, action) => {
			state.scoreSelected = '';
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
			state.scoreSelected = '';
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
		scoreChangedReducer: (state, action) => {
			if (state.scoreSelected === action.payload) {
				state.scoreSelected = '';
			} else {
				state.scoreSelected = action.payload;
			}
		},
	},
});

export const { blockchainTypeChangedReducer, categoryChangedReducer, scoreChangedReducer } = DashboardDataSlice.actions;
export default DashboardDataSlice.reducer;
