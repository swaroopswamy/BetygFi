"use client";
import {
	useDisclosure,
	useToast,
	useMediaQuery
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import { ResetChangeProfilePicData, getUserCount, getUserDetails, verifyJWTtokenFromCookie } from "@redux/auth_data/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { AUTH_COOKIE_NAME } from "@util/constant";
import { getCookieByName } from "@util/cookieHelper";

const LoginPage = dynamic(() => import("@components/login"), { ssr: false });
const CustomToast = dynamic(() => import("@components/toast"), { ssr: false });
const MdSettingsPage = dynamic(() => import('@components/settingsPage/MdSettingsPage'), { ssr: false });
const BaseSettingsPage = dynamic(() => import('@components/settingsPage/BaseSettingsPage'), { ssr: false });
const DeleteSettingsModal = dynamic(() => import('@components/settingsPage/DeleteSettingsModal'), { ssr: false });




const Settings = ({ params }) => {
	const { user_name } = params;
	const dispatch = useDispatch();
	const toast = useToast();

	const {
		isOpen: isLoginModalOpen,
		onOpen: onLoginModalOpen,
		onClose: onLoginModalClose,
	} = useDisclosure();
	const { isOpen, /* onOpen, */ onClose } = useDisclosure();
	const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
	const EditUserDetailsData = useSelector((state) => state.authData.editUserDetailsData);
	const ChangeProfilePicData = useSelector((state) => state.authData.ChangeProfilePicData);


	const getUserDetailsHandler = () => {
		const payload = {
			user_name: user_name
		};
		dispatch(getUserDetails(payload));
	};

	const getUserCountHandler = () => {
		const payload = {
			user_name: user_name
		};
		dispatch(getUserCount(payload));
	};
	useEffect(() => {
		Promise.all([
			getUserDetailsHandler(),
			getUserCountHandler()
		]).then(res => res);
	}, []);

	useEffect(() => {
		if (EditUserDetailsData?.isSuccess) {
			Promise.all([
				getUserDetailsHandler(),
			]).then(res => res);
		}
	}, [EditUserDetailsData]);

	useEffect(() => {
		if (EditUserDetailsData?.isSuccess !== null) {
			toast({
				position: "bottom",
				render: () => (
					<CustomToast isSuccessful={EditUserDetailsData?.isSuccess} content={EditUserDetailsData?.isSuccess ? "User details updated successfully." : EditUserDetailsData?.data?.error} />
				)
			});
		}
	}, [EditUserDetailsData]);

	useEffect(() => {
		if (ChangeProfilePicData?.isSuccess !== null) {
			toast({
				position: "bottom",
				render: () => (
					<CustomToast isSuccessful={ChangeProfilePicData?.isSuccess} content={ChangeProfilePicData?.isSuccess ? "Profile Picture updated successfully." : ChangeProfilePicData?.data?.error} />
				)
			});
		}
		dispatch(ResetChangeProfilePicData());
	}, [ChangeProfilePicData]);

	const verifyJWTtokenFromCookieHandler = (cookie) => {
		if (cookie?.state?.token) {
			const payload = {
				token: cookie?.state?.token,
			};
			dispatch(verifyJWTtokenFromCookie(payload));
		}
	};

	useEffect(() => {
		if (ChangeProfilePicData?.isSuccess) {
			const cookie = getCookieByName(AUTH_COOKIE_NAME);
			Promise.all([
				verifyJWTtokenFromCookieHandler(cookie)
			]).then(res => res);
		}
	}, [ChangeProfilePicData]);
	const [isMd] = useMediaQuery("(min-width: 768px)");


	const { data: AuthSession } = useSession();
	if (AuthSession === null) {
		return redirect("/");
	} else {
		return (
			<>
				{
					isMd ?
						<MdSettingsPage onLoginModalOpen={onLoginModalOpen} ValidatedUserData={ValidatedUserData} />
						:
						<BaseSettingsPage onLoginModalOpen={onLoginModalOpen} ValidatedUserData={ValidatedUserData} />
				}

				<LoginPage
					isOpen={isLoginModalOpen}
					onOpen={onLoginModalOpen}
					onClose={onLoginModalClose}
				/>
				<DeleteSettingsModal
					isOpen={isOpen}
					onClose={onClose}
				/>
			</>
		);
	}
};

export default Settings;
