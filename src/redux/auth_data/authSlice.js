import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginMetamask, verifyPublicAddress } from "../../services/authService";

export const VerifyPublicAddressData = createAsyncThunk(
	"verifyPublicAddressData",
	async (payload) => {
		const response = await verifyPublicAddress(payload);
		return response.data;
	}
);

export const LoginMetamask = createAsyncThunk(
	"LoginMetamask",
	async (payload) => {
		const response = await loginMetamask(payload);
		return response.data;
	}
);

export const saveToken = (state) => {
	try {
		const accountState = {
			token: state,
		};
		const serializedState = JSON.stringify(accountState);
		localStorage.setItem("state", serializedState);
	} catch (err) {
		// console.log(err);
	}
};

export const loadToken = () => {
	try {
		const serializedState = localStorage.getItem("state");

		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

const AuthDataSlice = createSlice({
	name: "authData",
	initialState: {
		UserData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		LoggedInData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		preLoadedData: {
			data: null,
		},
	},
	extraReducers: (builder) => {
		builder.addCase(VerifyPublicAddressData.fulfilled, (state, action) => {
			state.UserData.data = action.payload;
			state.UserData.isLoading = false;
			state.UserData.isSuccess = true;
			state.UserData.isError = false;
		});
		builder.addCase(VerifyPublicAddressData.pending, (state, action) => {
			state.UserData.isLoading = true;
			state.UserData.isError = false;
			state.UserData.isSuccess = false;
			state.UserData.data = action.payload;
		});
		builder.addCase(VerifyPublicAddressData.rejected, (state, action) => {
			state.UserData.isLoading = false;
			state.UserData.isSuccess = false;
			state.UserData.isError = true;
			state.UserData.data = action.payload;
		});
		builder.addCase(LoginMetamask.fulfilled, (state, action) => {
			state.LoggedInData.data = action.payload;
			state.preLoadedData.data = action.payload;
			state.LoggedInData.isLoading = false;
			state.LoggedInData.isSuccess = true;
			state.LoggedInData.isError = false;
			saveToken(action.payload);
		});
		builder.addCase(LoginMetamask.pending, (state, action) => {
			state.LoggedInData.isLoading = true;
			state.LoggedInData.isError = false;
			state.LoggedInData.isSuccess = false;
			state.LoggedInData.data = action.payload;
		});
		builder.addCase(LoginMetamask.rejected, (state, action) => {
			state.LoggedInData.isLoading = false;
			state.LoggedInData.isSuccess = false;
			state.LoggedInData.isError = true;
			state.LoggedInData.data = action.payload;
		});
	},
	reducers: {
		LogoutReducer: (state, /* action */) => {
			state.LoggedInData.data = null;
			state.preLoadedData.data = null;
			state.UserData.data = null;
			localStorage.clear();
		},
		FetchLocalStorageData: (state, /* action */) => {
			state.preLoadedData.data = loadToken();
		},
	},
});

export const { LogoutReducer, FetchLocalStorageData } = AuthDataSlice.actions;
export default AuthDataSlice.reducer;
