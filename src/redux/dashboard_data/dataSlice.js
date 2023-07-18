import { getDefiRankingsTableData } from "@/services/dashboardService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('getDefiRankingsTableData', async (payload) => {
  const response = await getDefiRankingsTableData(payload);
  return response.data;
})

const dashboardDataSlice = createSlice({
  name: "dashboardData",
  initialState: {
    DefiRankingsTableData: {
      data: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
    },

    blockchainType: [],
    categorySelected: [],

  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.DefiRankingsTableData.data = action.payload;
      state.DefiRankingsTableData.isLoading = false;
      state.DefiRankingsTableData.isSuccess = true;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.DefiRankingsTableData.isLoading = true;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.DefiRankingsTableData.isLoading = false;
      state.DefiRankingsTableData.isError = true;
    });
  },
  reducers: {
    blockchainTypeChangedReducer: (state, action) => {
      console.log('in reducer', action.payload, state.blockchainType.includes(action.payload))
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

export const { blockchainTypeChangedReducer, categoryChangedReducer } = dashboardDataSlice.actions;
export default dashboardDataSlice.reducer;
