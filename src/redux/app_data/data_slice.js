import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


/* export const fetchDefiRankingTableData = createAsyncThunk('getDefiRankingsTableData', async (payload) => {
  const response = await getDefiRankingsTableData(payload);
  return response.data;
})

export const fetchOverviewData = createAsyncThunk('getOverviewData', async (payload) => {
  const response = await getOverviewData(payload);
  return response.data;
})
export const fetchScoreGraphData = createAsyncThunk('fetchScoreGraphData', async (payload) => {
  const response = await getProtocolScoresData(payload);
  return response.data;
}) */

const AppDataSlice = createSlice({
  name: "AppData",
  initialState: {
    isSidebarCollapsed: false

  },
  reducers: {
    
  },
});

export const {  } =AppDataSlice.actions;
export default AppDataSlice.reducer;
