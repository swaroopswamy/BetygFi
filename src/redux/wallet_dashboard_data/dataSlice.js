import {
	getAssetAllocationForAddress, getBlockchainAllocationForAddress, getProtocolAllocationForAddress,
	getInflowOutflowTokensForAddress, getWalletBalanceData, getWalletTransactionsForAddressSummary, getWalletTransactionsData
} from "@/services/walletDashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDefiRankingsTableData } from "@services/dashboardService";
import { BLOCK_CHAIN_TYPE_SELECTED_COOKIE_NAME } from "@util/constant";
import { createCookies } from "@util/cookieHelper";

export const fetchDefiRankingTableData = createAsyncThunk('getDefiRankingsTableData', async (payload, { rejectWithValue }) => {
	const response = await getDefiRankingsTableData(payload, rejectWithValue);
	return response.data;
});

export const fetchWalletBalanceData = createAsyncThunk('getWalletBalanceData', async (payload, { rejectWithValue }) => {
	const response = await getWalletBalanceData(payload, rejectWithValue);
	return response;
});

export const fetchWalletTransactionsData = createAsyncThunk('getWalletTransactionsData', async (payload, { rejectWithValue }) => {
	const response = await getWalletTransactionsData(payload, rejectWithValue);
	return response;
});

export const fetchWalletTransactionsForAddressSummary = createAsyncThunk('getWalletTransactionsForAddressSummary',
	async (payload, { rejectWithValue }) => {
		const response = await getWalletTransactionsForAddressSummary(payload, rejectWithValue);
		return response.data;
	});

export const fetchAssetAllocationForAddress = createAsyncThunk('getAssetAllocationForAddress',
	async (payload, { rejectWithValue }) => {
		const response = await getAssetAllocationForAddress(payload, rejectWithValue);
		return response.data;
	});
export const fetchProtocolAllocationForAddress = createAsyncThunk('getProtocolAllocationForAddress',
	async (payload, { rejectWithValue }) => {
		const response = await getProtocolAllocationForAddress(payload, rejectWithValue);
		return response.data;
	});

export const fetchBlockchainAllocationForAddress = createAsyncThunk('getBlockchainAllocationForAddress',
	async (payload, { rejectWithValue }) => {
		const response = await getBlockchainAllocationForAddress(payload, rejectWithValue);
		return response.data;
	});

export const fetchInflowOutflowTokensForAddress = createAsyncThunk('getInflowOutflowTokensForAddress',
	async (payload, { rejectWithValue }) => {
		const response = await getInflowOutflowTokensForAddress(payload, rejectWithValue);
		return response;
	});

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
		walletTransactionsForAddressSummary: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		assetAllocationForAddress: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		protocolAllocationForAddress: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		blockchainAllocationForAddress: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		inflowOutflowTokensForAddress: {
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
		builder.addCase(fetchWalletTransactionsForAddressSummary.fulfilled, (state, action) => {
			state.walletTransactionsForAddressSummary.data = action.payload;
			state.walletTransactionsForAddressSummary.isLoading = false;
			state.walletTransactionsForAddressSummary.isSuccess = true;
			state.walletTransactionsForAddressSummary.isError = false;
		});
		builder.addCase(fetchWalletTransactionsForAddressSummary.pending, (state, action) => {
			state.walletTransactionsForAddressSummary.isLoading = true;
			state.walletTransactionsForAddressSummary.isError = false;
			state.walletTransactionsForAddressSummary.isSuccess = false;
			state.walletTransactionsForAddressSummary.data = action.payload;
		});
		builder.addCase(fetchWalletTransactionsForAddressSummary.rejected, (state, action) => {
			state.walletTransactionsForAddressSummary.isLoading = false;
			state.walletTransactionsForAddressSummary.isSuccess = false;
			state.walletTransactionsForAddressSummary.isError = true;
			state.walletTransactionsForAddressSummary.data = action.payload;
		});
		builder.addCase(fetchAssetAllocationForAddress.fulfilled, (state, action) => {
			state.assetAllocationForAddress.data = action.payload;
			state.assetAllocationForAddress.isLoading = false;
			state.assetAllocationForAddress.isSuccess = true;
			state.assetAllocationForAddress.isError = false;
		});
		builder.addCase(fetchAssetAllocationForAddress.pending, (state, action) => {
			state.assetAllocationForAddress.isLoading = true;
			state.assetAllocationForAddress.isError = false;
			state.assetAllocationForAddress.isSuccess = false;
			state.assetAllocationForAddress.data = action.payload;
		});
		builder.addCase(fetchAssetAllocationForAddress.rejected, (state, action) => {
			state.assetAllocationForAddress.isLoading = false;
			state.assetAllocationForAddress.isSuccess = false;
			state.assetAllocationForAddress.isError = true;
			state.assetAllocationForAddress.data = action.payload;
		});
		builder.addCase(fetchProtocolAllocationForAddress.fulfilled, (state, action) => {
			state.protocolAllocationForAddress.data = action.payload;
			state.protocolAllocationForAddress.isLoading = false;
			state.protocolAllocationForAddress.isSuccess = true;
			state.protocolAllocationForAddress.isError = false;
		});
		builder.addCase(fetchProtocolAllocationForAddress.pending, (state, action) => {
			state.protocolAllocationForAddress.isLoading = true;
			state.protocolAllocationForAddress.isError = false;
			state.protocolAllocationForAddress.isSuccess = false;
			state.protocolAllocationForAddress.data = action.payload;
		});
		builder.addCase(fetchProtocolAllocationForAddress.rejected, (state, action) => {
			state.protocolAllocationForAddress.isLoading = false;
			state.protocolAllocationForAddress.isSuccess = false;
			state.protocolAllocationForAddress.isError = true;
			state.protocolAllocationForAddress.data = action.payload;
		});
		builder.addCase(fetchBlockchainAllocationForAddress.fulfilled, (state, action) => {
			state.blockchainAllocationForAddress.data = action.payload;
			state.blockchainAllocationForAddress.isLoading = false;
			state.blockchainAllocationForAddress.isSuccess = true;
			state.blockchainAllocationForAddress.isError = false;
		});
		builder.addCase(fetchBlockchainAllocationForAddress.pending, (state, action) => {
			state.blockchainAllocationForAddress.isLoading = true;
			state.blockchainAllocationForAddress.isError = false;
			state.blockchainAllocationForAddress.isSuccess = false;
			state.blockchainAllocationForAddress.data = action.payload;
		});
		builder.addCase(fetchBlockchainAllocationForAddress.rejected, (state, action) => {
			state.blockchainAllocationForAddress.isLoading = false;
			state.blockchainAllocationForAddress.isSuccess = false;
			state.blockchainAllocationForAddress.isError = true;
			state.blockchainAllocationForAddress.data = action.payload;
		});
		builder.addCase(fetchInflowOutflowTokensForAddress.fulfilled, (state, action) => {
			state.inflowOutflowTokensForAddress.data = action.payload;
			state.inflowOutflowTokensForAddress.isLoading = false;
			state.inflowOutflowTokensForAddress.isSuccess = true;
			state.inflowOutflowTokensForAddress.isError = false;
		});
		builder.addCase(fetchInflowOutflowTokensForAddress.pending, (state, action) => {
			state.inflowOutflowTokensForAddress.isLoading = true;
			state.inflowOutflowTokensForAddress.isError = false;
			state.inflowOutflowTokensForAddress.isSuccess = false;
			state.inflowOutflowTokensForAddress.data = action.payload;
		});
		builder.addCase(fetchInflowOutflowTokensForAddress.rejected, (state, action) => {
			state.inflowOutflowTokensForAddress.isLoading = false;
			state.inflowOutflowTokensForAddress.isSuccess = false;
			state.inflowOutflowTokensForAddress.isError = true;
			state.inflowOutflowTokensForAddress.data = action.payload;
		});
	},
	reducers: {
		walletAddressChangedReducer: (state, action) => {
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
			createCookies(BLOCK_CHAIN_TYPE_SELECTED_COOKIE_NAME, JSON.stringify(state.blockchainType));
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

export const { blockchainTypeChangedReducer, defiArrayChangedReducer, walletAddressChangedReducer } =
	WalletDashboardDataSlice.actions;
export default WalletDashboardDataSlice.reducer;
