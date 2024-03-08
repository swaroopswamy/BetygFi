import {
    getBTCDominanceScoresAPI,
    getCoinDevelopmentData,
    getCoinPriceData,
    getCoinRankingsTableData,
    getCoinScoresData,
    getTrendingCoinsData,
    getTopGainersAndLosersData,
    getTopBTCETFData,
    getFearAndGreedData,
    getSAPData,
    getMarqueeDataAPI
} from "@services/coinService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BLOCK_CHAIN_TYPE_SELECTED_COOKIE_NAME } from "@util/constant";
import { createCookies } from "@util/cookieHelper";

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

export const fetchTopGainersAndLosersData = createAsyncThunk(
    "getTopGainersAndLosersData",
    async (payload, { rejectWithValue }) => {
        const response = await getTopGainersAndLosersData(payload, rejectWithValue);
        return response.data;
    }
);

export const fetchTopBTCETFData = createAsyncThunk(
    "getTopBTCETFData",
    async (payload, { rejectWithValue }) => {
        const response = await getTopBTCETFData(payload, rejectWithValue);
        return response.data;
    }
);

export const fetchFearAndGreedData = createAsyncThunk(
    "getFearAndGreedData",
    async (payload, { rejectWithValue }) => {
        const response = await getFearAndGreedData(payload, rejectWithValue);
        return response;
    }
);

export const fetchSAPData = createAsyncThunk(
    "getSAPData",
    async (payload, { rejectWithValue }) => {
        const response = await getSAPData(payload, rejectWithValue);
        return response.data;
    }
);

export const fetchBTCDominanceScoresData = createAsyncThunk(
    "getBTCDominanceScoresData",
    async (payload, { rejectWithValue }) => {
        const response = await getBTCDominanceScoresAPI(payload, rejectWithValue);
        return response;
    }
);

export const fetchMarqueeData = createAsyncThunk(
    "getMarqueeData",
    async (payload, { rejectWithValue }) => {
        const response = await getMarqueeDataAPI(payload, rejectWithValue);
        return response.data;
    }
);

const CoinDataSlice = createSlice({
    name: "coinData",
    initialState: {
        CoinRankingsTableData: {
            data: null,
            isLoading: true,
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
        TopGainersAndLosersData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        TopBTCETFData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        FearAndGreedData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        SAPData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        BTCDominanceScoresData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        MarqueeData: {
            data: null,
            isLoading: false,
            isError: false,
            isSuccess: false,
        },
        blockchainType: [],
        scoreSelected: "",
        btcDominanceDay: "7D",
        sapDay: "7D"
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
        builder.addCase(fetchTopGainersAndLosersData.fulfilled, (state, action) => {
            state.TopGainersAndLosersData.data = action.payload;
            state.TopGainersAndLosersData.isLoading = false;
            state.TopGainersAndLosersData.isSuccess = true;
            state.TopGainersAndLosersData.isError = false;
        });
        builder.addCase(fetchTopGainersAndLosersData.pending, (state, action) => {
            state.TopGainersAndLosersData.isLoading = true;
            state.TopGainersAndLosersData.isError = false;
            state.TopGainersAndLosersData.isSuccess = false;
            state.TopGainersAndLosersData.data = action.payload;
        });
        builder.addCase(fetchTopGainersAndLosersData.rejected, (state, action) => {
            state.TopGainersAndLosersData.isLoading = false;
            state.TopGainersAndLosersData.isSuccess = false;
            state.TopGainersAndLosersData.isError = true;
            state.TopGainersAndLosersData.data = action.payload;
        });
        builder.addCase(fetchTopBTCETFData.fulfilled, (state, action) => {
            state.TopBTCETFData.data = action.payload;
            state.TopBTCETFData.isLoading = false;
            state.TopBTCETFData.isSuccess = true;
            state.TopBTCETFData.isError = false;
        });
        builder.addCase(fetchTopBTCETFData.pending, (state, action) => {
            state.TopBTCETFData.isLoading = true;
            state.TopBTCETFData.isError = false;
            state.TopBTCETFData.isSuccess = false;
            state.TopBTCETFData.data = action.payload;
        });
        builder.addCase(fetchTopBTCETFData.rejected, (state, action) => {
            state.TopBTCETFData.isLoading = false;
            state.TopBTCETFData.isSuccess = false;
            state.TopBTCETFData.isError = true;
            state.TopBTCETFData.data = action.payload;
        });
        builder.addCase(fetchFearAndGreedData.fulfilled, (state, action) => {
            state.FearAndGreedData.data = action.payload;
            state.FearAndGreedData.isLoading = false;
            state.FearAndGreedData.isSuccess = true;
            state.FearAndGreedData.isError = false;
        });
        builder.addCase(fetchFearAndGreedData.pending, (state, action) => {
            state.FearAndGreedData.isLoading = true;
            state.FearAndGreedData.isError = false;
            state.FearAndGreedData.isSuccess = false;
            state.FearAndGreedData.data = action.payload;
        });
        builder.addCase(fetchFearAndGreedData.rejected, (state, action) => {
            state.FearAndGreedData.isLoading = false;
            state.FearAndGreedData.isSuccess = false;
            state.FearAndGreedData.isError = true;
            state.FearAndGreedData.data = action.payload;
        });
        builder.addCase(fetchSAPData.fulfilled, (state, action) => {
            state.SAPData.data = action.payload;
            state.SAPData.isLoading = false;
            state.SAPData.isSuccess = true;
            state.SAPData.isError = false;
        });
        builder.addCase(fetchSAPData.pending, (state, action) => {
            state.SAPData.isLoading = true;
            state.SAPData.isError = false;
            state.SAPData.isSuccess = false;
            state.SAPData.data = action.payload;
        });
        builder.addCase(fetchSAPData.rejected, (state, action) => {
            state.SAPData.isLoading = false;
            state.SAPData.isSuccess = false;
            state.SAPData.isError = true;
            state.SAPData.data = action.payload;
        });
        builder.addCase(fetchBTCDominanceScoresData.fulfilled, (state, action) => {
            state.BTCDominanceScoresData.data = action.payload;
            state.BTCDominanceScoresData.isLoading = false;
            state.BTCDominanceScoresData.isSuccess = true;
            state.BTCDominanceScoresData.isError = false;
        });
        builder.addCase(fetchBTCDominanceScoresData.pending, (state, action) => {
            state.BTCDominanceScoresData.isLoading = true;
            state.BTCDominanceScoresData.isError = false;
            state.BTCDominanceScoresData.isSuccess = false;
            state.BTCDominanceScoresData.data = action.payload;
        });
        builder.addCase(fetchBTCDominanceScoresData.rejected, (state, action) => {
            state.BTCDominanceScoresData.isLoading = false;
            state.BTCDominanceScoresData.isSuccess = false;
            state.BTCDominanceScoresData.isError = true;
            state.BTCDominanceScoresData.data = action.payload;
        });
        builder.addCase(fetchMarqueeData.fulfilled, (state, action) => {
            state.MarqueeData.data = action.payload;
            state.MarqueeData.isLoading = false;
            state.MarqueeData.isSuccess = true;
            state.MarqueeData.isError = false;
        });
        builder.addCase(fetchMarqueeData.pending, (state, action) => {
            state.MarqueeData.isLoading = true;
            state.MarqueeData.isError = false;
            state.MarqueeData.isSuccess = false;
            state.MarqueeData.data = action.payload;
        });
        builder.addCase(fetchMarqueeData.rejected, (state, action) => {
            state.MarqueeData.isLoading = false;
            state.MarqueeData.isSuccess = false;
            state.MarqueeData.isError = true;
            state.MarqueeData.data = action.payload;
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
            createCookies(BLOCK_CHAIN_TYPE_SELECTED_COOKIE_NAME, JSON.stringify(state.blockchainType));
        },
        scoreChangedReducer: (state, action) => {
            if (state.scoreSelected === action.payload) {
                state.scoreSelected = "";
            } else {
                state.scoreSelected = action.payload;
            }
        },
        btcDominanceDaySelectReducer: (state, action) => {
            state.btcDominanceDay = action.payload;
        },
        sapDaySelectReducer: (state, action) => {
            state.btcDominanceDay = action.payload;
        },
    },
});

export const { blockchainTypeChangedReducer, scoreChangedReducer, TopGainersAndLosersData, SAPData, btcDominanceDaySelectReducer, sapDaySelectReducer } = CoinDataSlice.actions;
export default CoinDataSlice.reducer;
