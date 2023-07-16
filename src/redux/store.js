import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import dashboardTableDataSlice from "./dashboard_data/dataSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    dashboardTableData: dashboardTableDataSlice
  },
});

console.log(store.getState(),'store');
export default store;

