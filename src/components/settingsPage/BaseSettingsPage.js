"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const StatsBox = dynamic(() => import('@components/settingsPage/StatsBox'), { ssr: false });
const AccountSettingsBox = dynamic(() => import('@components/settingsPage/accountSettingsBox'), { ssr: false });
const ThemeBox = dynamic(() => import('@components/settingsPage/themeBox'), { ssr: false });
const ProfileBox = dynamic(() => import('@components/settingsPage/ProfileBox'), { ssr: false });

import { signOut, } from "next-auth/react";
import { useDisconnect } from "wagmi";
import { LogoutReducer } from "@redux/auth_data/authSlice";
import { useDispatch } from "react-redux";


const BaseSettingsPage = ({ ValidatedUserData, onLoginModalOpen }) => {
    const { disconnect } = useDisconnect();
    const dispatch = useDispatch();

    return (
        <Box
            display={{ base: "block", md: "none" }}
            width={"100%"}
            _light={{
                bg: "#F0F0F5"
            }}
            _dark={{
                bg: "#191919"
            }}
        >
            <Text variant={"contentHeading2"} p={"25px 0px 25px 15px"}>
                Profile Settings
            </Text>
            <ProfileBox />
            <StatsBox />
            <AccountSettingsBox />
            <ThemeBox />
            {ValidatedUserData?.data === null || ValidatedUserData?.data === undefined ? (
                <>
                    <Box layerStyle={"flexColumn"} p={"30px 15px 90px 15px"}>
                        <Text variant={"contentHeading3"} fontWeight={"400"}>
                            Login to BetygFi
                        </Text>
                        <Button
                            width={"100%"}
                            height={"28px"}
                            variant={"outline"}
                            cursor={"pointer"}
                            onClick={onLoginModalOpen}
                            mt={"15px"}
                            border={"1px"}
                        >
                            <Text
                                variant={"SettingsButtonText"}
                                _light={{ color: "#191919" }}
                                _dark={{ color: "#FFFFFF" }}
                            >
                                Login
                            </Text>
                        </Button>
                    </Box>
                </>
            ) : (
                <>
                    {/* <Box layerStyle={"flexColumn"} p={"30px 15px 30px 15px"}>
                    <Text variant={"contentHeading3"} fontWeight={"400"}>
                        Delete Account
                    </Text>
                    <Box mr={"15px"} mt={"15px"}>
                        <Text variant={"SettingsText3"}>
                            We will retain your data for 15 days and then it will be permanently deleted. You can reactivate your account at any point within 15 days of deactivation by logging back in.
                        </Text>
                    </Box>
                    <Button
                        width={"100%"}
                        height={"28px"}
                        variant={"outline"}
                        mt={"15px"}
                        border={"1px"}
                        onClick={onOpen}
                    >
                        <Text
                            variant={"SettingsButtonText"}
                            _light={{ color: "#191919" }}
                            _dark={{ color: "#FFFFFF" }}
                        >
                            Delete Account
                        </Text>
                    </Button>
                </Box> */}

                    <Box layerStyle={"flexColumn"} p={"20px 15px 100px 15px"}>
                        <Text variant={"contentHeading3"} fontWeight={"400"}>
                            Logout of BetygFi
                        </Text>
                        <Box mr={"15px"} mt={"15px"}>
                            <Text variant={"SettingsText3"}>
                                After logging out, the verification information for the
                                current address will be deleted from your browser.
                            </Text>
                        </Box>
                        <Button
                            width={"100%"}
                            height={"28px"}
                            variant={"outline"}
                            mt={"15px"}
                            border={"1px"}
                            onClick={() => {
                                disconnect();
                                setTimeout(() => {
                                    dispatch(LogoutReducer());
                                    setTimeout(() => {
                                        signOut({ callbackUrl: process.env.NEXTAUTH_URL });
                                    }, 200);
                                }, 100);
                            }}
                        >
                            <Text
                                variant={"SettingsButtonText"}
                                _light={{ color: "#191919" }}
                                _dark={{ color: "#FFFFFF" }}
                            >
                                Logout
                            </Text>
                        </Button>
                    </Box>
                </>
            )}
        </Box >
    );
};

export default BaseSettingsPage;