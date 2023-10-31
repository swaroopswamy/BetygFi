import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDefiUsersTableData, getDefiData, getDefiHotContractsTableData, 
	getDefiAssetCompositionTableData, getDefiFeeRevenueData, 
	getDefiGovernanceTableData, getDefiTvlBorrowData } from "../../services/defiDashboardService";

export const fetchDefiData = createAsyncThunk('getDefiData', async (payload) => {
	const response = await getDefiData(payload);
	return response.data;
});

export const fetchDefiUsersTableData = createAsyncThunk('getDefiUsersTableData', async (payload) => {
	const response = await getDefiUsersTableData(payload);
	return response.data;
});

export const fetchDefiHotContractsTableData = createAsyncThunk('getDefiHotContractsTableData', async (payload) => {
	const response = await getDefiHotContractsTableData(payload);
	return response.data;
});

export const fetchDefiAssetCompositionTableData = createAsyncThunk('getDefiAssetCompositionTableData',
	async (payload) => {
		const response = await getDefiAssetCompositionTableData(payload);
		return response.data;
	});

export const fetchDefiFeeRevenueData = createAsyncThunk('getDefiFeeRevenueData', async (payload) => {
	const response = await getDefiFeeRevenueData(payload);
	return response.data;
});

export const fetchDefiGovernanceTableData = createAsyncThunk('getDefiGovernanceTableData', async (payload) => {
	const response = await getDefiGovernanceTableData(payload);
	return response.data;
});

export const fetchDefiTvlBorrowData = createAsyncThunk('getDefiTvlBorrowData', async (payload) => {
	const response = await getDefiTvlBorrowData(payload);
	return response.data;
});


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
	}
});

// export const { } = DefiDashboardDataSlice.actions;
export default DefiDashboardDataSlice.reducer;
