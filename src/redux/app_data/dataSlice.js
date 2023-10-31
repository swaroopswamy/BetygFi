import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlockchainListData } from "@/services/appService";

export const fetchBlockchainListData = createAsyncThunk('getBlockchainListData', async () => {
	const response = await getBlockchainListData();
	return response.data;
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
		}
	},
});

export const { sidebarCollapsedReducer, mobileSidebarCollapsedReducer } = AppDataSlice.actions;
export default AppDataSlice.reducer;
