import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearAllNotificationsByUserIdAPI, getAllPublicNotificationsAPI, getAllUserNotificationsByUserIdAPI, getBlockchainListData, getSearchV2Data, getSearchV2TrendingData, markNotificationReadByUserIdAPI, postCampaignUserDataAPI, postReportBugData, postSuggestFeatureData } from "@services/appService";

export const fetchBlockchainListData = createAsyncThunk('getBlockchainListData', async (payload, { rejectWithValue }) => {
	const { data } = await getBlockchainListData(rejectWithValue);
	return data;
});

export const postReportBug = createAsyncThunk('postReportBug', async (payload, { rejectWithValue }) => {
	const { data } = await postReportBugData(payload, rejectWithValue);
	return data;
});

export const postSuggestFeature = createAsyncThunk('postSuggestFeature', async (payload, { rejectWithValue }) => {
	const { data } = await postSuggestFeatureData(payload, rejectWithValue);
	return data;
});

export const getSearchV2List = createAsyncThunk('getSearchV2List', async (payload, { rejectWithValue }) => {
	const response = await getSearchV2Data(payload, rejectWithValue);
	const response_ = response?.data?.data?.map((sd, index) => { sd.id = index + 1; return sd; });
	response.data.data = response_;
	return response;
});

export const getSearchV2TrendingList = createAsyncThunk('getSearchV2TrendingList', async (payload, { rejectWithValue }) => {
	const response = await getSearchV2TrendingData(payload, rejectWithValue);
	const response_ = response?.data?.data?.map((sd, index) => { sd.id = index + 1; return sd; });
	response.data.data = response_;
	return response;
});

export const getAllUserNotificationsByUserId = createAsyncThunk("/notifications/getUserNotifications",
	async (payload, { rejectWithValue }) => {
		const response = await getAllUserNotificationsByUserIdAPI(payload, rejectWithValue);
		return response.data;
	}
);

export const getAllPublicNotifications = createAsyncThunk("/notifications/publicNotifications",
	async (payload, { rejectWithValue }) => {
		const response = await getAllPublicNotificationsAPI(payload, rejectWithValue);
		return response.data;
	}
);

export const markNotificationRead = createAsyncThunk("/notifications/markNotificationRead",
	async (payload, { rejectWithValue }) => {
		const response = await markNotificationReadByUserIdAPI(payload, rejectWithValue);
		return response.data;
	}
);

export const clearAllNotification = createAsyncThunk("/notifications/clearall",
	async (payload, { rejectWithValue }) => {
		const response = await clearAllNotificationsByUserIdAPI(payload, rejectWithValue);
		return response.data;
	}
);

export const postCampaignUserData = createAsyncThunk('postCampaignUserData', async (payload, { rejectWithValue }) => {
	const data = await postCampaignUserDataAPI(payload, rejectWithValue);
	return data;
});


const AppDataSlice = createSlice({
	name: "AppData",
	initialState: {
		isSidebarCollapsed: false,
		isMobileSidebarCollapsed: true,
		isMobileSearchOpen: false,
		BlockchainListData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		reportBug: {
			status: "idle",
			error: null
		},
		suggestFeature: {
			status: "idle",
			error: null
		},
		searchV2Data: {
			status: "idle",
			error: null
		},
		searchV2TrendingData: {
			status: "idle",
			error: null
		},
		Notifications: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		PostCampaignUserData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBlockchainListData.fulfilled, (state, action) => {
			state.BlockchainListData.data = action.payload;
			state.BlockchainListData.isLoading = false;
			state.BlockchainListData.isError = false;
			state.BlockchainListData.isSuccess = true;
		});
		builder.addCase(fetchBlockchainListData.pending, (state, action) => {
			state.BlockchainListData.data = action.payload;
			state.BlockchainListData.isLoading = true;
			state.BlockchainListData.isError = false;
			state.BlockchainListData.isSuccess = false;
		});
		builder.addCase(fetchBlockchainListData.rejected, (state, action) => {
			state.BlockchainListData.data = action.payload;
			state.BlockchainListData.isLoading = false;
			state.BlockchainListData.isError = true;
			state.BlockchainListData.isSuccess = false;
		});
		builder.addCase(postReportBug.fulfilled, (state) => {
			state.reportBug.status = 'success';
		});
		builder.addCase(postReportBug.rejected, (state, action) => {
			state.reportBug.error = action.payload;
			state.reportBug.status = 'failure';
		});
		builder.addCase(postSuggestFeature.fulfilled, (state) => {
			state.suggestFeature.status = 'success';
		});
		builder.addCase(postSuggestFeature.rejected, (state, action) => {
			state.suggestFeature.error = action.payload;
			state.suggestFeature.status = 'failure';
		});
		builder.addCase(getSearchV2List.fulfilled, (state, action) => {
			state.searchV2Data.data = action.payload;
			state.searchV2Data.status = 'success';
		});
		builder.addCase(getSearchV2List.rejected, (state, action) => {
			state.searchV2Data.error = action.payload;
			state.searchV2Data.status = 'failure';
		});
		builder.addCase(getSearchV2TrendingList.fulfilled, (state, action) => {
			state.searchV2TrendingData.data = action.payload;
			state.searchV2TrendingData.status = 'success';
		});
		builder.addCase(getSearchV2TrendingList.rejected, (state, action) => {
			state.searchV2TrendingData.error = action.payload;
			state.searchV2TrendingData.status = 'failure';
		});
		builder.addCase(getAllUserNotificationsByUserId.fulfilled, (state, action) => {
			state.Notifications.data = action.payload;
			state.Notifications.isLoading = false;
			state.Notifications.isSuccess = true;
			state.Notifications.isError = false;
		});
		builder.addCase(getAllUserNotificationsByUserId.pending, (state, action) => {
			state.Notifications.isLoading = true;
			state.Notifications.isError = false;
			state.Notifications.isSuccess = false;
			state.Notifications.data = action.payload;
		});
		builder.addCase(getAllUserNotificationsByUserId.rejected, (state, action) => {
			state.Notifications.isLoading = false;
			state.Notifications.isSuccess = false;
			state.Notifications.isError = true;
			state.Notifications.data = action.payload;
		});
		builder.addCase(getAllPublicNotifications.fulfilled, (state, action) => {
			state.Notifications.data = action.payload;
			state.Notifications.isLoading = false;
			state.Notifications.isSuccess = true;
			state.Notifications.isError = false;
		});
		builder.addCase(getAllPublicNotifications.pending, (state, action) => {
			state.Notifications.isLoading = true;
			state.Notifications.isError = false;
			state.Notifications.isSuccess = false;
			state.Notifications.data = action.payload;
		});
		builder.addCase(getAllPublicNotifications.rejected, (state, action) => {
			state.Notifications.isLoading = false;
			state.Notifications.isSuccess = false;
			state.Notifications.isError = true;
			state.Notifications.data = action.payload;
		});

		builder.addCase(postCampaignUserData.fulfilled, (state, action) => {
			state.PostCampaignUserData.data = action.payload;
			state.PostCampaignUserData.isLoading = false;
			state.PostCampaignUserData.isSuccess = true;
			state.PostCampaignUserData.isError = false;
		});
		builder.addCase(postCampaignUserData.rejected, (state, action) => {
			state.PostCampaignUserData.isLoading = false;
			state.PostCampaignUserData.isSuccess = false;
			state.PostCampaignUserData.isError = true;
			state.PostCampaignUserData.data = action.payload.response.data.message;
		});
	},
	reducers: {
		sidebarCollapsedReducer: (state, action) => {
			if (action.payload === true) {
				state.isSidebarCollapsed = true;
			}
			else {
				state.isSidebarCollapsed = false;
			}
		},
		mobileSidebarCollapsedReducer: (state, action) => {
			if (action.payload === true) {
				state.isMobileSidebarCollapsed = true;
			}
			else {
				state.isMobileSidebarCollapsed = false;
			}
		},
		mobileSearchbarOpenReducer: (state, action) => {
			if (action.payload === true) {
				state.isMobileSearchOpen = true;
			}
			else {
				state.isMobileSearchOpen = false;
			}
		},
		resetReportBug: (state) => {
			state.reportBug.status = "idle";
			state.reportBug.error = null;
		},
		resetSuggestFeature: (state) => {
			state.suggestFeature.status = "idle";
			state.suggestFeature.error = null;
		},
		notificationsReducer: (state, action) => {
			state.notificationRecievedFromSocket = action.payload;
		},
		markNotificationAsReadReducer: (state, action) => {
			const { id } = action.payload;

			let tempData = {
				...state.Notifications.data,
				notifications: state.Notifications.data?.notifications?.map((notification) => {
					if (notification?._id === id) {
						return {
							...notification,
							isSeen: true
						};
					} else {
						return {
							...notification
						};
					}
				}),
				privateCount: state.Notifications.data?.privateCount - 1,
			};
			state.Notifications.data = tempData;
		},
		clearAllNotificationReducer: (state) => {
			state.Notifications.data = null;
		},
		resetPostCampaignUserData: (state) => {
			state.PostCampaignUserData.data = null;
			state.PostCampaignUserData.isLoading = false;
			state.PostCampaignUserData.isSuccess = false;
			state.PostCampaignUserData.isError = false;
		},
	},
});

export const { sidebarCollapsedReducer, mobileSidebarCollapsedReducer, resetReportBug, resetSuggestFeature, notificationsReducer, markNotificationAsReadReducer, clearAllNotificationReducer, mobileSearchbarOpenReducer, resetPostCampaignUserData } = AppDataSlice.actions;
export default AppDataSlice.reducer;
