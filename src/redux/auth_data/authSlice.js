import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { changeProfilePicAPI, editDetailsAPI, getUserCountAPI, getUserDetailsAPI, loginMetamask, socialLoginGoogleAPI, usernameValidityAPI, verifyJWTtokenFromCookieAPI, verifyPublicAddress } from "@services/authService";
import { signIn } from "next-auth/react";
import { createCookiesAuth, deleteCookieByNameAuth } from "@util/cookieHelper";
import { AUTH_COOKIE_NAME } from "@util/constant";


export const VerifyPublicAddressData = createAsyncThunk("verifyPublicAddressData", async (payload, { rejectWithValue }) => {
	const response = await verifyPublicAddress(payload, rejectWithValue);
	return response.data;
});

export const LoginGetToken = createAsyncThunk("LoginMetamask", async (payload) => {
	const response = await loginMetamask(payload);
	return response.data;
});

export const socialLoginGoogle = createAsyncThunk("socialLoginGoogle", async (payload, { rejectWithValue }) => {
	const response = await socialLoginGoogleAPI(payload, rejectWithValue);
	return response.data;
});

export const verifyJWTtokenFromCookie = createAsyncThunk("verifyJWTtokenFromCookie", async (payload, { rejectWithValue }) => {
	const response = await verifyJWTtokenFromCookieAPI(payload, rejectWithValue);
	return response.data;
});


export const getUserDetails = createAsyncThunk(
	"getUserDetails",
	async (payload, { rejectWithValue }) => {
		const response = await getUserDetailsAPI(payload, rejectWithValue);
		return response;
	}
);

export const editUserDetails = createAsyncThunk(
	"editUserDetails",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await editDetailsAPI(payload);
			return response.data;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const getUserCount = createAsyncThunk(
	"getUserCount",
	async (payload, { rejectWithValue }) => {
		const response = await getUserCountAPI(payload, rejectWithValue);
		return response;
	}
);

export const usernameValidity = createAsyncThunk(
	"usernameValidity",
	async (payload, { rejectWithValue }) => {
		try {
			const response = await usernameValidityAPI(payload);
			return response.data;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const changeProfilePic = createAsyncThunk("changeProfilePic", async (payload, { rejectWithValue }) => {
	const response = await changeProfilePicAPI(payload, rejectWithValue);
	return response.data;

});


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
			isCookieSet: false,
		},
		ValidatedUserData: {
			data: null,
			isError: null,
			isSuccess: null,
			AnnotationState: false,
		},
		UserDetailsData: {
			data: null,
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
		editUserDetailsData: {
			data: null,
			isSuccess: null,
		},
		UserCountData: {
			data: null,
			isError: false,
			isSuccess: false,
		},
		UsernameValidData: {
			data: null,
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
			state.ValidatedUserData.AnnotationState = true;
		});
		builder.addCase(verifyJWTtokenFromCookie.rejected, (state, action) => {
			state.ValidatedUserData.isSuccess = false;
			state.ValidatedUserData.isError = true;
			state.ValidatedUserData.AnnotationState = false;
			state.ValidatedUserData.data = action.payload;
		});
		builder.addCase(getUserDetails.fulfilled, (state, action) => {
			state.UserDetailsData.data = action.payload;
			state.UserDetailsData.isLoading = false;
			state.UserDetailsData.isSuccess = true;
			state.UserDetailsData.isError = false;
		});
		builder.addCase(getUserDetails.pending, (state, action) => {
			state.UserDetailsData.isLoading = true;
			state.UserDetailsData.isError = false;
			state.UserDetailsData.isSuccess = false;
			state.UserDetailsData.data = action.payload;
		});
		builder.addCase(getUserDetails.rejected, (state, action) => {
			state.UserDetailsData.isLoading = false;
			state.UserDetailsData.isSuccess = false;
			state.UserDetailsData.isError = true;
			state.UserDetailsData.data = action.payload;
		});
		builder.addCase(editUserDetails.fulfilled, (state, action) => {
			state.editUserDetailsData.data = action.payload;
			state.editUserDetailsData.isSuccess = true;
		});
		builder.addCase(editUserDetails.rejected, (state, action) => {
			const { data } = action.payload.response;
			state.editUserDetailsData.isSuccess = false;
			state.editUserDetailsData.data = data;
		});
		builder.addCase(getUserCount.fulfilled, (state, action) => {
			state.UserCountData.data = action.payload;
			state.UserCountData.isLoading = false;
			state.UserCountData.isSuccess = true;
			state.UserCountData.isError = false;
		});
		builder.addCase(getUserCount.rejected, (state, action) => {
			state.UserCountData.isLoading = false;
			state.UserCountData.isSuccess = false;
			state.UserCountData.isError = true;
			state.UserCountData.data = action.payload;
		});
		builder.addCase(usernameValidity.fulfilled, (state, action) => {
			state.UsernameValidData.data = action.payload;
			state.UsernameValidData.isSuccess = true;
		});
		builder.addCase(usernameValidity.rejected, (state, action) => {
			const { data } = action.payload.response;
			state.UsernameValidData.isSuccess = false;
			state.UsernameValidData.data = data;
		});
	},
	reducers: {
		LogoutReducer: (state) => {
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
				AnnotationState: false,
			};

			localStorage.clear();
			deleteCookieByNameAuth(AUTH_COOKIE_NAME);
		},
		StoreLoggedInUserData: (state) => {
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
			createCookiesAuth(AUTH_COOKIE_NAME, serializedState);
			setTimeout(() => {
				signIn("credentials", { redirect: false, ...user });
			}, 100);

		},
		StoreLoggedInUserDataGoogle: (state) => {
			const accountState = {
				state: {
					token: state.GoogleVerifiedData.data?.token,
					isWeb3: false
				},
			};
			const serializedState = JSON.stringify(accountState);
			createCookiesAuth(AUTH_COOKIE_NAME, serializedState);
			state.GoogleVerifiedData.isCookieSet = true;
		},
		LogInFromCookie: (state, /* action */) => {
			const user = {
				email: state.ValidatedUserData?.data?.email,
				name: state.ValidatedUserData?.data?.public_address ? state.ValidatedUserData?.data?.public_address : state.ValidatedUserData?.data?.user_name,
				image: state.ValidatedUserData?.data?.profile_url,
			};
			setTimeout(() => {
				signIn("credentials", { redirect: false, ...user });
			}, 100);
		},
		ResetValidatedUserData: (state) => {
			state.ValidatedUserData.data = null;
			state.ValidatedUserData.isSuccess = null;
			state.ValidatedUserData.isError = null;
			state.ValidatedUserData.AnnotationState = null;
		},
		ResetEditUserDetailsData: (state) => {
			state.editUserDetailsData.data = null;
			state.editUserDetailsData.isSuccess = null;
		},
		ResetUsernameValidData: (state) => {
			state.UsernameValidData.data = null;
			state.UsernameValidData.isSuccess = null;
		},
	},
});

export const { LogoutReducer, StoreLoggedInUserData, StoreLoggedInUserDataGoogle, LogInFromCookie, ResetValidatedUserData, ResetUsernameValidData, ResetEditUserDetailsData } = AuthDataSlice.actions;
export default AuthDataSlice.reducer;
