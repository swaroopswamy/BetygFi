import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import DashboardTableDataSlice from "./dashboard_data/dataSlice";
import AppDataSlice from "./app_data/dataSlice";
import WalletDashboardTableDataSlice from "./wallet_dashboard_data/dataSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    dashboardTableData: DashboardTableDataSlice,
    walletDashboardTableData: WalletDashboardTableDataSlice,
    appData: AppDataSlice 
  },
});
export default store;

