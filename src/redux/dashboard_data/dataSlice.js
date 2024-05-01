import { getOverviewData, getOverviewGraphData, getDefiRankingsTableData, getProtocolScoresData, getDefiOverviewData } from "@services/dashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BLOCK_CHAIN_TYPE_SELECTED_COOKIE_NAME } from "@util/constant";
import { createCookies } from "@util/cookieHelper";

export const fetchDefiRankingTableData = createAsyncThunk("getDefiRankingsTableData", async (payload, { rejectWithValue }) => {
    const { data } = await getDefiRankingsTableData(payload, rejectWithValue);
    return data;
});

export const fetchOverviewData = createAsyncThunk("getOverviewData", async (payload, { rejectWithValue }) => {
    const { data } = await getOverviewData(payload, rejectWithValue);
    return data;
});

export const fetchScoreGraphData = createAsyncThunk("fetchScoreGraphData", async (payload, { rejectWithValue }) => {
    const { data } = await getProtocolScoresData(payload, rejectWithValue);
    return data;
});

export const fetchOverviewGraphData = createAsyncThunk("getOverviewGraphData", async (payload, { rejectWithValue }) => {
    const { data } = await getOverviewGraphData(payload, payload.query, rejectWithValue);
    return data;
});

export const fetchDefiOverviewData = createAsyncThunk(
    "getDefiOverviewData",
    async (payload, { rejectWithValue }) => {
        const response = await getDefiOverviewData(payload, rejectWithValue);
        return response;
    }
);

const DashboardDataSlice = createSlice({
    name: "dashboardData",
    initialState: {
        DefiRankingsTableData: {
            data: null,
            isLoading: true,
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
        DefiOverviewData: {
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
        builder.addCase(fetchDefiOverviewData.fulfilled, (state, action) => {
            state.DefiOverviewData.data = action.payload;
            state.DefiOverviewData.isLoading = false;
            state.DefiOverviewData.isSuccess = true;
            state.DefiOverviewData.isError = false;
        });
        builder.addCase(fetchDefiOverviewData.pending, (state, action) => {
            state.DefiOverviewData.isLoading = true;
            state.DefiOverviewData.isError = false;
            state.DefiOverviewData.isSuccess = false;
            state.DefiOverviewData.data = action.payload;
        });
        builder.addCase(fetchDefiOverviewData.rejected, (state, action) => {
            state.DefiOverviewData.isLoading = false;
            state.DefiOverviewData.isSuccess = false;
            state.DefiOverviewData.isError = true;
            state.DefiOverviewData.data = action.payload;
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
        categoryChangedReducer: (state, action) => {
            state.scoreSelected = "";
            if (action.payload === "All") {
                state.categorySelected = [];
            } else if (state.categorySelected.includes(action.payload)) {
                state.categorySelected = state.categorySelected.filter(item => item !== action.payload);
            } else {
                state.categorySelected = state.categorySelected.filter(item => item !== "All");
                state.categorySelected.push(action.payload);
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

export const {
    blockchainTypeChangedReducer,
    categoryChangedReducer,
    scoreChangedReducer,
} = DashboardDataSlice.actions;
export default DashboardDataSlice.reducer;
