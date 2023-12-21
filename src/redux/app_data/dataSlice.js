import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlockchainListData, getSearchV2Data, getSearchV2TrendingData, postReportBugData, postSuggestFeatureData } from "@/services/appService";

export const fetchBlockchainListData = createAsyncThunk('getBlockchainListData', async (payload, { rejectWithValue }) => {
	const response = await getBlockchainListData(rejectWithValue);
	return response.data;
});

export const postReportBug = createAsyncThunk('postReportBug', async (payload, { rejectWithValue }) => {
	const response = await postReportBugData(payload, rejectWithValue);
	return response.data;
});

export const postSuggestFeature = createAsyncThunk('postSuggestFeature', async (payload, { rejectWithValue }) => {
	const response = await postSuggestFeatureData(payload, rejectWithValue);
	return response.data;
});

export const getSearchV2List = createAsyncThunk('getSearchV2List', async (payload, { rejectWithValue }) => {
	const response = await getSearchV2Data(payload, rejectWithValue);
	return response;
});

export const getSearchV2TrendingList = createAsyncThunk('getSearchV2TrendingList', async (payload, { rejectWithValue }) => {
	const response = await getSearchV2TrendingData(payload, rejectWithValue);
	return response;
});


const AppDataSlice = createSlice({
	name: "AppData",
	initialState: {
		isSidebarCollapsed: false,
		isMobileSidebarCollapsed: true,
		BlockchainListData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		reportBug: {
			status: "idle",
			error: null
		},
		suggestFeature: {
			status: "idle",
			error: null
		},
		searchV2Data: {
			status: "idle",
			error: null
		},
		searchV2TrendingData: {
			status: "idle",
			error: null
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBlockchainListData.fulfilled, (state, action) => {
			state.BlockchainListData.data = action.payload;
			state.BlockchainListData.isLoading = false;
			state.BlockchainListData.isError = false;
			state.BlockchainListData.isSuccess = true;
		});
		builder.addCase(fetchBlockchainListData.pending, (state, action) => {
			state.BlockchainListData.data = action.payload;
			state.BlockchainListData.isLoading = true;
			state.BlockchainListData.isError = false;
			state.BlockchainListData.isSuccess = false;
		});
		builder.addCase(fetchBlockchainListData.rejected, (state, action) => {
			state.BlockchainListData.data = action.payload;
			state.BlockchainListData.isLoading = false;
			state.BlockchainListData.isError = true;
			state.BlockchainListData.isSuccess = false;
		});
		builder.addCase(postReportBug.fulfilled, (state) => {
			state.reportBug.status = 'success';
		});
		builder.addCase(postReportBug.rejected, (state, action) => {
			state.reportBug.error = action.payload;
			state.reportBug.status = 'failure';
		});
		builder.addCase(postSuggestFeature.fulfilled, (state) => {
			state.suggestFeature.status = 'success';
		});
		builder.addCase(postSuggestFeature.rejected, (state, action) => {
			state.suggestFeature.error = action.payload;
			state.suggestFeature.status = 'failure';
		});
		builder.addCase(getSearchV2List.fulfilled, (state, action) => {
			state.searchV2Data.data = action.payload;
			state.searchV2Data.status = 'success';
		});
		builder.addCase(getSearchV2List.rejected, (state, action) => {
			state.searchV2Data.error = action.payload;
			state.searchV2Data.status = 'failure';
		});
		builder.addCase(getSearchV2TrendingList.fulfilled, (state, action) => {
			state.searchV2TrendingData.data = action.payload;
			state.searchV2TrendingData.status = 'success';
		});
		builder.addCase(getSearchV2TrendingList.rejected, (state, action) => {
			state.searchV2TrendingData.error = action.payload;
			state.searchV2TrendingData.status = 'failure';
		});
	},
	reducers: {
		sidebarCollapsedReducer: (state, action) => {
			if (action.payload === true) {
				state.isSidebarCollapsed = true;
			}
			else {
				state.isSidebarCollapsed = false;
			}
		},
		mobileSidebarCollapsedReducer: (state, action) => {
			if (action.payload === true) {
				state.isMobileSidebarCollapsed = true;
			}
			else {
				state.isMobileSidebarCollapsed = false;
			}
		},
		resetReportBug: (state) => {
			state.reportBug.status = "idle";
			state.reportBug.error = null;
		},
		resetSuggestFeature: (state) => {
			state.suggestFeature.status = "idle";
			state.suggestFeature.error = null;
		}
	},
});

export const { sidebarCollapsedReducer, mobileSidebarCollapsedReducer, resetReportBug, resetSuggestFeature } = AppDataSlice.actions;
export default AppDataSlice.reducer;
