import { configureStore } from "@reduxjs/toolkit";
import AuthDataSlice from '@/redux/auth_data/authSlice';
import DashboardTableDataSlice from "@/redux/dashboard_data/dataSlice";
import AppDataSlice from "@/redux/app_data/dataSlice";
import WalletDashboardTableDataSlice from "@/redux/wallet_dashboard_data/dataSlice";
import DefiDashboardDataSlice from "@/redux/defi_dashboard_data/dataSlice";

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

