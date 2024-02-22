import { Box, Button, Text, useMediaQuery, Link } from "@chakra-ui/react";
import AppConfigContext from "@components/context/appConfigContext";
import React, { useContext } from "react";
import { useSelector } from "react-redux";


const StatsBox = () => {
    const appConfig = useContext(AppConfigContext);
    const [isLg] = useMediaQuery("(min-width: 1165px)");
    const UserCountData = useSelector((state) => state.authData.UserCountData);
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);

    return (
        <React.Fragment>
            {
                isLg ?
                    <Box
                        borderRadius={"6px"}
                        _light={{
                            bg: "#FFFFFF"
                        }}
                        _dark={{
                            bg: "#202020"
                        }}
                        mt={"17px"}
                        mb={"20px"}
                    >
                        <Box ml={"25px"} pt={"20px"}>
                            <Text variant={"contentHeading3"} fontWeight={"400"}>
                                My Stats
                            </Text>
                        </Box>
                        <Box display={"flex"} w={"100%"}>
                            <Box w={"50%"} borderRight={"2px solid #D9D9D9"} mb="10px">
                                <Box layerStyle={"flexCenter"} p={"30px 20px"} justifyContent={"space-between"}>
                                    <Text variant={"contentHeading"} lineHeight={"normal"}>BetygFi Community</Text>
                                    <Link
                                        href={`${appConfig.NEXT_PUBLIC_COMMUNITY_URL}/settings/${ValidatedUserData?.data?.user_name}`}
                                        target="_blank"
                                    >
                                        <Button variant={"settingsButton"}>
                                            <Text variant={"SettingsButtonText"}>
                                                Go To Community
                                            </Text>
                                        </Button>
                                    </Link>
                                </Box>
                                <Box layerStyle={"flexCenter"} p={"45px 15px 0px"} mb="26px">
                                    <Box w={"33%"} layerStyle={"flexCenter"} borderRight={"2px solid #D9D9D9"} pl={"10px"}>
                                        <Text variant={"bigTextNumber"}>
                                            {
                                                UserCountData?.data?.followers ?? "-"
                                            }
                                        </Text>
                                        <Text variant={"toastText"}
                                            _light={{
                                                color: "#757575"
                                            }}
                                            _dark={{
                                                color: "#A5A5A5"
                                            }}
                                            ml={"10px"} mt={"4px"}>
                                            Followers
                                        </Text>
                                    </Box>
                                    <Box w={"37%"} layerStyle={"flexCenter"} borderRight={"2px solid #D9D9D9"} pl={"20px"}>
                                        <Text variant={"bigTextNumber"}>
                                            {
                                                UserCountData?.data?.following ?? "-"
                                            }
                                        </Text>
                                        <Text variant={"toastText"}
                                            _light={{
                                                color: "#757575"
                                            }}
                                            _dark={{
                                                color: "#A5A5A5"
                                            }}
                                            ml={"10px"} mt={"4px"}>
                                            Following
                                        </Text>
                                    </Box>
                                    <Box w={"30%"} layerStyle={"flexCenter"} pl={"20px"}>
                                        <Text variant={"bigTextNumber"}>
                                            {
                                                UserCountData?.data?.postsCount ?? "-"
                                            }
                                        </Text>
                                        <Text variant={"toastText"}
                                            _light={{
                                                color: "#757575"
                                            }}
                                            _dark={{
                                                color: "#A5A5A5"
                                            }}
                                            ml={"10px"} mt={"4px"}>
                                            Posts
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box w={"50%"}>
                                <Box layerStyle={"flexCenter"} p={"30px 20px"} justifyContent={"space-between"}>
                                    <Text variant={"contentHeading"} lineHeight={"normal"}>BetygFi Data Studio</Text>
                                    <Link
                                        target="_blank"
                                        href={`${appConfig.NEXT_PUBLIC_STUDIO_URL}`}
                                    >
                                        <Button variant={"settingsButton"}>
                                            <Text variant={"SettingsButtonText"}>
                                                Go To Data Studio
                                            </Text>
                                        </Button>
                                    </Link>

                                </Box>
                                <Box layerStyle={"flexCenter"} p={"45px 15px 0px"} mb="26px">
                                    <Box w={"50%"} layerStyle={"flexCenter"} pl={"15px"}>
                                        <Text variant={"bigTextNumber"}>
                                            {
                                                UserCountData?.data?.getQueryCountById ?? "-"
                                            }
                                        </Text>
                                        <Text variant={"toastText"}
                                            _light={{
                                                color: "#757575"
                                            }}
                                            _dark={{
                                                color: "#A5A5A5"
                                            }} ml={"10px"} mt={"4px"}>
                                            My Queries
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    :
                    <Box
                        borderRadius={"6px"}
                        _light={{
                            bg: "#FFFFFF"
                        }}
                        _dark={{
                            bg: "#202020"
                        }}
                        mt={"15px"}
                        mb={"15px"}
                    >
                        <Box p={"15px 0px 15px 20px"}>
                            <Text variant={"contentHeading3"} fontWeight={400}>
                                My Stats
                            </Text>
                        </Box>
                        <Box>
                            <Box layerStyle={"flexColumnCenterSpaceAround"}>
                                <Text variant={"contentHeading4"} lineHeight={"normal"}>BetygFi Community</Text>
                            </Box>
                            <Box layerStyle={"flexCenter"} p={"25px 0px 0px"}>
                                <Box w={"33%"} borderRight={"2px solid #D9D9D9"} p={"0px 20px"}>
                                    <Text variant={"bigTextNumber"}>
                                        {
                                            UserCountData?.data?.followers ?? "-"
                                        }
                                    </Text>
                                    <Text variant={"toastText"}
                                        _light={{
                                            color: "#757575"
                                        }}
                                        _dark={{
                                            color: "#A5A5A5"
                                        }}
                                    >
                                        Followers
                                    </Text>
                                </Box>
                                <Box w={"34%"} borderRight={"2px solid #D9D9D9"} p={"0px 25px"}>
                                    <Text variant={"bigTextNumber"}>
                                        {
                                            UserCountData?.data?.following ?? "-"
                                        }
                                    </Text>
                                    <Text variant={"toastText"}
                                        _light={{
                                            color: "#757575"
                                        }}
                                        _dark={{
                                            color: "#A5A5A5"
                                        }}

                                    >
                                        Following
                                    </Text>
                                </Box>
                                <Box w={"33%"} p={"0px 25px"}>
                                    <Text variant={"bigTextNumber"}>
                                        {
                                            UserCountData?.data?.postsCount ?? "-"
                                        }
                                    </Text>
                                    <Text variant={"toastText"}
                                        _light={{
                                            color: "#757575"
                                        }}
                                        _dark={{
                                            color: "#A5A5A5"
                                        }}
                                    >
                                        Posts
                                    </Text>
                                </Box>
                            </Box>
                            <Box borderBottom={"2px solid #D9D9D9"} layerStyle={"flexColumnCenterSpaceAround"} mx={"25px"} py="20px">
                                <Link
                                    target="_blank"
                                    href={`${appConfig.NEXT_PUBLIC_COMMUNITY_URL}/settings/${ValidatedUserData?.data?.user_name}`}
                                >
                                    <Button variant={"settingsButton"}>
                                        <Text variant={"SettingsButtonText"}>
                                            Go To Community
                                        </Text>
                                    </Button>
                                </Link>
                            </Box>

                            <Box layerStyle={"flexColumnCenterSpaceAround"}>
                                <Text variant={"contentHeading4"} lineHeight={"normal"} mt={"30px"}>BetygFi Data Studio</Text>
                                <Box pl={"15px"} pt={"15px"}>
                                    <Text variant={"bigTextNumber"} textAlign={"center"}>
                                        {
                                            UserCountData?.data?.getQueryCountById ?? "-"
                                        }
                                    </Text>
                                    <Text variant={"toastText"}
                                        _light={{
                                            color: "#757575"
                                        }}
                                        _dark={{
                                            color: "#A5A5A5"
                                        }}
                                        mb="10px"
                                    >
                                        My Queries
                                    </Text>
                                </Box>
                                <Link
                                    style={{ marginBottom: "20px" }}
                                    target="_blank"
                                    href={`${appConfig.NEXT_PUBLIC_STUDIO_URL}`}
                                >
                                    <Button variant={"settingsButton"}>
                                        <Text variant={"SettingsButtonText"}>
                                            Go To Data Studio
                                        </Text>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

            }


        </React.Fragment >
    );
};

export default StatsBox;