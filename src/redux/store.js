import { configureStore } from "@reduxjs/toolkit";
import AuthDataSlice from './auth_data/authSlice';
import DashboardTableDataSlice from "./dashboard_data/dataSlice";
import AppDataSlice from "./app_data/dataSlice";
import WalletDashboardTableDataSlice from "./wallet_dashboard_data/dataSlice";
import DefiDashboardDataSlice from "./defi_dashboard_data/dataSlice";

const store = configureStore({
	reducer: {
		authData:AuthDataSlice,
		dashboardTableData: DashboardTableDataSlice,
		walletDashboardTableData: WalletDashboardTableDataSlice,
		appData: AppDataSlice,
		defiDashboardData: DefiDashboardDataSlice
	},
});
export default store;

