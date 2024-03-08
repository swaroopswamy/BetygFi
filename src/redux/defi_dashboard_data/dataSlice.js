import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getDefiUsersTableData, getDefiHotContractsTableData,
	getDefiAssetCompositionTableData, getDefiFeeRevenueData,
	getDefiGovernanceTableData, getDefiTvlBorrowData,
	getDefiGraphData
} from "@services/defiDashboardService";

export const fetchDefiUsersTableData = createAsyncThunk('getDefiUsersTableData', async (payload, { rejectWithValue }) => {
	const { data } = await getDefiUsersTableData(payload, rejectWithValue);
	return data;
});

export const fetchDefiHotContractsTableData = createAsyncThunk('getDefiHotContractsTableData', async (payload, { rejectWithValue }) => {
	const { data } = await getDefiHotContractsTableData(payload, rejectWithValue);
	return data;
});

export const fetchDefiAssetCompositionTableData = createAsyncThunk('getDefiAssetCompositionTableData',
	async (payload, { rejectWithValue }) => {
		const { data } = await getDefiAssetCompositionTableData(payload, rejectWithValue);
		return data;
	});

export const fetchDefiFeeRevenueData = createAsyncThunk('getDefiFeeRevenueData', async (payload, { rejectWithValue }) => {
	const { data } = await getDefiFeeRevenueData(payload, rejectWithValue);
	return data;
});

export const fetchDefiGovernanceTableData = createAsyncThunk('getDefiGovernanceTableData', async (payload, { rejectWithValue }) => {
	const { data } = await getDefiGovernanceTableData(payload, rejectWithValue);
	return data;
});

export const fetchDefiTvlBorrowData = createAsyncThunk('getDefiTvlBorrowData', async (payload, { rejectWithValue }) => {
	const { data } = await getDefiTvlBorrowData(payload, rejectWithValue);
	return data;
});

export const fetchDefiGraphData = createAsyncThunk("fetchDefiGraphData", async (payload, { rejectWithValue }) => {
	const { data } = await getDefiGraphData(payload, rejectWithValue);
	return data;
});

const DefiDashboardDataSlice = createSlice({
	name: "DefiDashboardData",
	initialState: {
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
		DefiFeeRevenueData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		DefiGovernanceTableData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		DefiTvlBorrowData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		DefiGraphData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		GraphType: ["tvl"],
	},
	extraReducers: (builder) => {
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
		builder.addCase(fetchDefiFeeRevenueData.fulfilled, (state, action) => {
			state.DefiFeeRevenueData.data = action.payload;
			state.DefiFeeRevenueData.isLoading = false;
			state.DefiFeeRevenueData.isSuccess = true;
			state.DefiFeeRevenueData.isError = false;
		});
		builder.addCase(fetchDefiFeeRevenueData.pending, (state, action) => {
			state.DefiFeeRevenueData.isLoading = true;
			state.DefiFeeRevenueData.isError = false;
			state.DefiFeeRevenueData.isSuccess = false;
			state.DefiFeeRevenueData.data = action.payload;
		});
		builder.addCase(fetchDefiFeeRevenueData.rejected, (state, action) => {
			state.DefiFeeRevenueData.isSuccess = false;
			state.DefiFeeRevenueData.isError = true;
			state.DefiFeeRevenueData.isLoading = false;
			state.DefiFeeRevenueData.data = action.payload;
		});
		builder.addCase(fetchDefiGovernanceTableData.fulfilled, (state, action) => {
			state.DefiGovernanceTableData.data = action.payload;
			state.DefiGovernanceTableData.isLoading = false;
			state.DefiGovernanceTableData.isSuccess = true;
			state.DefiGovernanceTableData.isError = false;
		});
		builder.addCase(fetchDefiGovernanceTableData.pending, (state, action) => {
			state.DefiGovernanceTableData.isLoading = true;
			state.DefiGovernanceTableData.isError = false;
			state.DefiGovernanceTableData.isSuccess = false;
			state.DefiGovernanceTableData.data = action.payload;
		});
		builder.addCase(fetchDefiGovernanceTableData.rejected, (state, action) => {
			state.DefiGovernanceTableData.isSuccess = false;
			state.DefiGovernanceTableData.isError = true;
			state.DefiGovernanceTableData.isLoading = false;
			state.DefiGovernanceTableData.data = action.payload;
		});
		builder.addCase(fetchDefiTvlBorrowData.fulfilled, (state, action) => {
			state.DefiTvlBorrowData.data = action.payload;
			state.DefiTvlBorrowData.isLoading = false;
			state.DefiTvlBorrowData.isSuccess = true;
			state.DefiTvlBorrowData.isError = false;
		});
		builder.addCase(fetchDefiTvlBorrowData.pending, (state, action) => {
			state.DefiTvlBorrowData.isLoading = true;
			state.DefiTvlBorrowData.isError = false;
			state.DefiTvlBorrowData.isSuccess = false;
			state.DefiTvlBorrowData.data = action.payload;
		});
		builder.addCase(fetchDefiTvlBorrowData.rejected, (state, action) => {
			state.DefiTvlBorrowData.isSuccess = false;
			state.DefiTvlBorrowData.isError = true;
			state.DefiTvlBorrowData.isLoading = false;
			state.DefiTvlBorrowData.data = action.payload;
		});
		builder.addCase(fetchDefiGraphData.fulfilled, (state, action) => {
			state.DefiGraphData.data = action.payload;
			state.DefiGraphData.isLoading = false;
			state.DefiGraphData.isSuccess = true;
			state.DefiGraphData.isError = false;
		});
		builder.addCase(fetchDefiGraphData.pending, (state, action) => {
			state.DefiGraphData.isLoading = true;
			state.DefiGraphData.isError = false;
			state.DefiGraphData.isSuccess = false;
			state.DefiGraphData.data = action.payload;
		});
		builder.addCase(fetchDefiGraphData.rejected, (state, action) => {
			state.DefiGraphData.isSuccess = false;
			state.DefiGraphData.isError = true;
			state.DefiGraphData.isLoading = false;
			state.DefiGraphData.data = action.payload;
		});
	},
	reducers: {
		GraphTypeChangedReducer: (state, action) => {
			if (state.GraphType.includes(action.payload) && action.payload !== "tvl") {
				state.GraphType = state.GraphType.filter(
					(item) => item !== action.payload
				);
			} else {
				state.GraphType = state.GraphType.filter(
					(item) => item !== "tvl"
				);
				state.GraphType.push(action.payload);
			}
		},
	}
});

export const { GraphTypeChangedReducer } = DefiDashboardDataSlice.actions;
export default DefiDashboardDataSlice.reducer;
