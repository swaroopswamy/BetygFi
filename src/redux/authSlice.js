import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "ok",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { setTest } = authSlice.actions;
export default authSlice.reducer;
