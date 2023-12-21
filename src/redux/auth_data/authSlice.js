import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginMetamask, socialLoginGoogleAPI, verifyJWTtokenFromCookieAPI, verifyPublicAddress } from "@/services/authService";
import { AUTH_COOKIE_NAME } from "@util/utility";
import { signIn } from "next-auth/react";
import { createCookies, deleteCookieByName } from "@util/cookieHelper";

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
export const verifyJWTtokenFromCookie = createAsyncThunk(
	"verifyJWTtokenFromCookie",
	async (payload, { rejectWithValue }) => {
		const response = await verifyJWTtokenFromCookieAPI(payload, rejectWithValue);
		return response.data;
	}
);


const AuthDataSlice = createSlice({
	name: "authData",
	initialState: {
		LoggedInData: {
			data: null,
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
		},
		ValidatedUserData: {
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
			state.GoogleVerifiedData.isSuccess = false;
			state.GoogleVerifiedData.isError = true;
			state.GoogleVerifiedData.data = action.payload;
		});
		builder.addCase(verifyJWTtokenFromCookie.fulfilled, (state, action) => {
			state.ValidatedUserData.data = action.payload;
			state.ValidatedUserData.isSuccess = true;
			state.ValidatedUserData.isError = false;
		});
		builder.addCase(verifyJWTtokenFromCookie.rejected, (state, action) => {
			state.ValidatedUserData.isSuccess = false;
			state.ValidatedUserData.isError = true;
			state.ValidatedUserData.data = action.payload;
		});
	},
	reducers: {
		LogoutReducer: (state, /* action */) => {
			state.LoggedInData = {
				data: null,
				isLoading: false,
				isError: false,
				isSuccess: false,
			};
			state.verifiedPublicAddressData = {
				data: null,
				isError: false,
				isSuccess: false,
			};
			state.ValidatedUserData = {
				data: null,
				isError: false,
				isSuccess: false,
			};

			localStorage.clear();
			deleteCookieByName(AUTH_COOKIE_NAME);
		},

		StoreLoggedInUserData: (state,/*  action */) => {
			const accountState = {
				state: {
					token: state.LoggedInData.data.token,
					public_address: state.verifiedPublicAddressData.data?.public_address,
					isWeb3: true
				},
			};
			const user = {
				name: state.verifiedPublicAddressData.data?.public_address,
			};
			const serializedState = JSON.stringify(accountState);
			createCookies(AUTH_COOKIE_NAME, serializedState);
			setTimeout(() => {
				signIn("credentials", user);
			}, 100);

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
		},
		LogInFromCookie: (state, /* action */) => {
			const user = {
				email: state.ValidatedUserData?.data?.email,
				name: state.ValidatedUserData?.data?.public_address ? state.ValidatedUserData?.data?.public_address : state.ValidatedUserData?.data?.user_name,
				image: state.ValidatedUserData?.data?.profile_url,
			};
			setTimeout(() => {
				signIn("credentials", user);
			}, 100);
		},
		ResetValidatedUserData: (state) => {
			state.ValidatedUserData.data = null;
			state.ValidatedUserData.isSuccess = null;
			state.ValidatedUserData.isError = null;
		}
	},
});

export const { LogoutReducer, StoreLoggedInUserData, StoreLoggedInUserDataGoogle, LogInFromCookie, ResetValidatedUserData } = AuthDataSlice.actions;
export default AuthDataSlice.reducer;
