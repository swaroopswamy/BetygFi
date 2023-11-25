import {
    getCoinDashboardData,
    getCoinDevelopmentData,
    getCoinPriceData,
    getCoinRankingsTableData,
    getCoinScoresData,
    getTrendingCoinsData,
} from "@/services/coinService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCoinRankingsTableData = createAsyncThunk(
    "getCoinRankingsTableData",
    async (payload, { rejectWithValue }) => {
        const response = await getCoinRankingsTableData(
            payload,
            rejectWithValue
        );
        return response.data;
    }
);

export const fetchCoinScoresData = createAsyncThunk(
    "getCoinScoresData",
    async (payload, { rejectWithValue }) => {
        const response = await getCoinScoresData(payload, rejectWithValue);
        return response.result;
    }
);

export const fetchTrendingCoinsData = createAsyncThunk(
    "getTrendingCoinsData",
    async (payload, { rejectWithValue }) => {
        const response = await getTrendingCoinsData(payload, rejectWithValue);
        return response.data;
    }
);

export const fetchCoinDashboardData = createAsyncThunk(
    "getCoinDashboardData",
    async (payload, { rejectWithValue }) => {
        const response = await getCoinDashboardData(payload, rejectWithValue);
        return response.data;
    }
);

export const fetchCoinPriceData = createAsyncThunk(
    "getCoinPriceData",
    async (payload, { rejectWithValue }) => {
        const response = await getCoinPriceData(payload, rejectWithValue);
        return response.data;
    }
);

export const fetchCoinDevelopmentData = createAsyncThunk(
    "getCoinDevelopmentData",
    async (payload, { rejectWithValue }) => {
        const response = await getCoinDevelopmentData(payload, rejectWithValue);
        return response.data;
    }
);

const CoinDataSlice = createSlice({
    name: "coinData",
    initialState: {
        CoinRankingsTableData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        CoinScoresData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        TrendingCoinsData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        CoinDashboardData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        CoinPriceData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        CoinDevelopmentData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        blockchainType: [],
        scoreSelected: "",
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchCoinRankingsTableData.fulfilled,
            (state, action) => {
                state.CoinRankingsTableData.data = action.payload;
                state.CoinRankingsTableData.isLoading = false;
                state.CoinRankingsTableData.isSuccess = true;
                state.CoinRankingsTableData.isError = false;
            }
        );
        builder.addCase(fetchCoinRankingsTableData.pending, (state, action) => {
            state.CoinRankingsTableData.isLoading = true;
            state.CoinRankingsTableData.isError = false;
            state.CoinRankingsTableData.isSuccess = false;
            state.CoinRankingsTableData.data = action.payload;
        });
        builder.addCase(
            fetchCoinRankingsTableData.rejected,
            (state, action) => {
                state.CoinRankingsTableData.isLoading = false;
                state.CoinRankingsTableData.isSuccess = false;
                state.CoinRankingsTableData.isError = true;
                state.CoinRankingsTableData.data = action.payload;
            }
        );
        builder.addCase(fetchCoinScoresData.fulfilled, (state, action) => {
            state.CoinScoresData.data = action.payload;
            state.CoinScoresData.isLoading = false;
            state.CoinScoresData.isSuccess = true;
            state.CoinScoresData.isError = false;
        });
        builder.addCase(fetchCoinScoresData.pending, (state, action) => {
            state.CoinScoresData.isLoading = true;
            state.CoinScoresData.isError = false;
            state.CoinScoresData.isSuccess = false;
            state.CoinScoresData.data = action.payload;
        });
        builder.addCase(fetchCoinScoresData.rejected, (state, action) => {
            state.CoinScoresData.isLoading = false;
            state.CoinScoresData.isSuccess = false;
            state.CoinScoresData.isError = true;
            state.CoinScoresData.data = action.payload;
        });
        builder.addCase(fetchTrendingCoinsData.fulfilled, (state, action) => {
            state.TrendingCoinsData.data = action.payload;
            state.TrendingCoinsData.isLoading = false;
            state.TrendingCoinsData.isSuccess = true;
            state.TrendingCoinsData.isError = false;
        });
        builder.addCase(fetchTrendingCoinsData.pending, (state, action) => {
            state.TrendingCoinsData.isLoading = true;
            state.TrendingCoinsData.isError = false;
            state.TrendingCoinsData.isSuccess = false;
            state.TrendingCoinsData.data = action.payload;
        });
        builder.addCase(fetchTrendingCoinsData.rejected, (state, action) => {
            state.TrendingCoinsData.isLoading = false;
            state.TrendingCoinsData.isSuccess = false;
            state.TrendingCoinsData.isError = true;
            state.TrendingCoinsData.data = action.payload;
        });
        builder.addCase(fetchCoinDashboardData.fulfilled, (state, action) => {
            state.CoinDashboardData.data = action.payload;
            state.CoinDashboardData.isLoading = false;
            state.CoinDashboardData.isSuccess = true;
            state.CoinDashboardData.isError = false;
        });
        builder.addCase(fetchCoinDashboardData.pending, (state, action) => {
            state.CoinDashboardData.isLoading = true;
            state.CoinDashboardData.isError = false;
            state.CoinDashboardData.isSuccess = false;
            state.CoinDashboardData.data = action.payload;
        });
        builder.addCase(fetchCoinDashboardData.rejected, (state, action) => {
            state.CoinDashboardData.isLoading = false;
            state.CoinDashboardData.isSuccess = false;
            state.CoinDashboardData.isError = true;
            state.CoinDashboardData.data = action.payload;
        });
        builder.addCase(fetchCoinPriceData.fulfilled, (state, action) => {
            state.CoinPriceData.data = action.payload;
            state.CoinPriceData.isLoading = false;
            state.CoinPriceData.isSuccess = true;
            state.CoinPriceData.isError = false;
        });
        builder.addCase(fetchCoinPriceData.pending, (state, action) => {
            state.CoinPriceData.isLoading = true;
            state.CoinPriceData.isError = false;
            state.CoinPriceData.isSuccess = false;
            state.CoinPriceData.data = action.payload;
        });
        builder.addCase(fetchCoinPriceData.rejected, (state, action) => {
            state.CoinPriceData.isLoading = false;
            state.CoinPriceData.isSuccess = false;
            state.CoinPriceData.isError = true;
            state.CoinPriceData.data = action.payload;
        });
        builder.addCase(fetchCoinDevelopmentData.fulfilled, (state, action) => {
            state.CoinDevelopmentData.data = action.payload;
            state.CoinDevelopmentData.isLoading = false;
            state.CoinDevelopmentData.isSuccess = true;
            state.CoinDevelopmentData.isError = false;
        });
        builder.addCase(fetchCoinDevelopmentData.pending, (state, action) => {
            state.CoinDevelopmentData.isLoading = true;
            state.CoinDevelopmentData.isError = false;
            state.CoinDevelopmentData.isSuccess = false;
            state.CoinDevelopmentData.data = action.payload;
        });
        builder.addCase(fetchCoinDevelopmentData.rejected, (state, action) => {
            state.CoinDevelopmentData.isLoading = false;
            state.CoinDevelopmentData.isSuccess = false;
            state.CoinDevelopmentData.isError = true;
            state.CoinDevelopmentData.data = action.payload;
        });
    },
    reducers: {
        blockchainTypeChangedReducer: (state, action) => {
            state.scoreSelected = "";
            if (action.payload === "All") {
                state.blockchainType = [];
            } else if (state.blockchainType.includes(action.payload)) {
                state.blockchainType = state.blockchainType.filter(
                    (item) => item !== action.payload
                );
            } else {
                state.blockchainType = state.blockchainType.filter(
                    (item) => item !== "All"
                );
                state.blockchainType.push(action.payload);
            }
        },
        scoreChangedReducer: (state, action) => {
            if (state.scoreSelected === action.payload) {
                state.scoreSelected = "";
            } else {
                state.scoreSelected = action.payload;
            }
        },
    },
});

export const { blockchainTypeChangedReducer, scoreChangedReducer } =
    CoinDataSlice.actions;
export default CoinDataSlice.reducer;
