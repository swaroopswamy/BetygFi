import { loginMetamask, socialLoginGoogleAPI, verifyPublicAddress } from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCookies, deleteCookieByName, getCookieByName } from "@util/cookieHelper";
import { AUTH_COOKIE_NAME } from "@util/utility";
import { signOut } from "next-auth/react";

export const VerifyPublicAddressData = createAsyncThunk(
	"verifyPublicAddressData",
	async (payload, { rejectWithValue }) => {
		const response = await verifyPublicAddress(payload, rejectWithValue);
		return response.data;
	}
);

export const LoginGetToken = createAsyncThunk(
	"LoginMetamask",
	async (payload) => {
		const response = await loginMetamask(payload);
		return response.data;
	}
);

export const socialLoginGoogle = createAsyncThunk(
	"socialLoginGoogle",
	async (payload, { rejectWithValue }) => {
		const response = await socialLoginGoogleAPI(payload, rejectWithValue);
		return response.data;
	}
);




export const loadToken = () => {
	try {
		const serializedState = getCookieByName(AUTH_COOKIE_NAME);

		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState)?.state;
	} catch (err) {
		return undefined;
	}
};


const AuthDataSlice = createSlice({
	name: "authData",
	initialState: {
		LoggedInData: {
			data: loadToken() ?? null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		verifiedPublicAddressData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		GoogleVerifiedData: {
			data: null,
			isError: null,
			isSuccess: null,
		}
	},
	extraReducers: (builder) => {
		builder.addCase(VerifyPublicAddressData.fulfilled, (state, action) => {
			state.verifiedPublicAddressData.data = action.payload;
			state.verifiedPublicAddressData.isLoading = false;
			state.verifiedPublicAddressData.isSuccess = true;
			state.verifiedPublicAddressData.isError = false;
		});
		builder.addCase(VerifyPublicAddressData.pending, (state, action) => {
			state.verifiedPublicAddressData.isLoading = true;
			state.verifiedPublicAddressData.isError = false;
			state.verifiedPublicAddressData.isSuccess = false;
			state.verifiedPublicAddressData.data = action.payload;
		});
		builder.addCase(VerifyPublicAddressData.rejected, (state, action) => {
			state.verifiedPublicAddressData.isLoading = false;
			state.verifiedPublicAddressData.isSuccess = false;
			state.verifiedPublicAddressData.isError = true;
			state.verifiedPublicAddressData.data = action.payload;
		});
		builder.addCase(LoginGetToken.fulfilled, (state, action) => {
			state.LoggedInData.data = action.payload;
			state.LoggedInData.isLoading = false;
			state.LoggedInData.isSuccess = true;
			state.LoggedInData.isError = false;
		});
		builder.addCase(LoginGetToken.pending, (state, action) => {
			state.LoggedInData.isLoading = true;
			state.LoggedInData.isError = false;
			state.LoggedInData.isSuccess = false;
			state.LoggedInData.data = action.payload;

		});
		builder.addCase(LoginGetToken.rejected, (state, action) => {
			state.LoggedInData.isLoading = false;
			state.LoggedInData.isSuccess = false;
			state.LoggedInData.isError = true;
			state.LoggedInData.data = action.payload;
		});
		builder.addCase(socialLoginGoogle.fulfilled, (state, action) => {
			state.GoogleVerifiedData.data = action.payload;
			state.GoogleVerifiedData.isSuccess = true;
			state.GoogleVerifiedData.isError = false;
		});
		builder.addCase(socialLoginGoogle.rejected, (state, action) => {
			signOut();
			state.GoogleVerifiedData.isSuccess = false;
			state.GoogleVerifiedData.isError = true;
			state.GoogleVerifiedData.data = action.payload;
		});
	},
	reducers: {
		LogoutReducer: (state, /* action */) => {
			state.LoggedInData.data = null;
			state.verifiedPublicAddressData.data = null;
			localStorage.clear();
			deleteCookieByName(AUTH_COOKIE_NAME);
		},
		FetchLocalStorageData: (state, /* action */) => {
			state.verifiedPublicAddressData.data = loadToken();
		},
		StoreLoggedInUserData: (state,/*  action */) => {
			const accountState = {
				state: {
					token: state.LoggedInData.data.token,
					public_address: state.verifiedPublicAddressData.data?.public_address,
					isWeb3: true
				},
			};
			const serializedState = JSON.stringify(accountState);
			createCookies(AUTH_COOKIE_NAME, serializedState);
			// localStorage.setItem("verifiedState", serializedState);
		},
		StoreLoggedInUserDataGoogle: (state,/*  action */) => {
			const accountState = {
				state: {
					token: state.GoogleVerifiedData.data?.token,
					isWeb3: false
				},
			};
			const serializedState = JSON.stringify(accountState);
			createCookies(AUTH_COOKIE_NAME, serializedState);
			// localStorage.setItem("verifiedState", serializedState);
		}
	},
});

export const { LogoutReducer, FetchLocalStorageData, StoreLoggedInUserData, StoreLoggedInUserDataGoogle } = AuthDataSlice.actions;
export default AuthDataSlice.reducer;
