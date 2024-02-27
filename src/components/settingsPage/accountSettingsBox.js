import { Box, Button, Text, useColorMode, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import LoginPage from "@components/login";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import DynamicIcon from "@components/icons/index_new";
import { signIn } from "next-auth/react";



const AccountSettingsBox = () => {
    const [isLg] = useMediaQuery("(min-width: 1165px)");
    const { colorMode } = useColorMode();
    const {
        isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose,
    } = useDisclosure();

    const UserDetailsData = useSelector((state) => state.authData.UserDetailsData);

    return (
        <React.Fragment>
            {isLg ? (
                <Box
                    height={"175px"}
                    flexShrink={"0"}
                    borderRadius={"6px"}
                    _light={{
                        bg: "#FFFFFF"
                    }}
                    _dark={{
                        bg: "#202020"
                    }}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                    mb="25px"
                >
                    <Text variant={"contentHeading3"} fontWeight={"400"} ml={5} pt={5}>
                        Account Settings
                    </Text>
                    <Box layerStyle={"flexCenter"}>
                        <Box
                            w={"50%"}
                            h={"93px"}
                            layerStyle={"flexCenter"}
                            justifyContent={"space-between"}
                            m={"25px 0px 0px 25px"}
                            pr="25px"
                            borderRight={"2px solid #D9D9D9"}
                        >
                            <Box layerStyle={"flexCenterFlexStart"}>
                                <Image src="/images/Web3.svg" alt="web3_icon" width={40} height={40}></Image>
                                <Box layerStyle={"flexColumn"}>
                                    <Text variant={"SettingsText1"} ml={"15px"}>
                                        Web 3
                                    </Text>
                                    <Text variant={"SettingsText2"} ml={"15px"}>
                                        {UserDetailsData?.data?.isweb3 ? "Verified" : "Not Verified"}
                                    </Text>
                                </Box>
                            </Box>
                            {
                                UserDetailsData?.data?.isweb3 ?
                                    <Box
                                        layerStyle={"flexCenter"}
                                    >
                                        <DynamicIcon
                                            name={colorMode === "light" ? "green_tick" : "unticked"}
                                        />
                                        <Text
                                            variant={"SettingsButtonText"}
                                            _light={{
                                                color: "#191919"
                                            }}
                                            _dark={{
                                                color: "#FFFFFF"
                                            }}
                                            fontSize={"14px"}
                                            ml={"7px"}
                                        >
                                            Verified
                                        </Text>
                                    </Box>
                                    :
                                    <Button
                                        variant={"outline"}
                                        border={"1px"}
                                        width={"110px"}
                                        height={"34px"}
                                        _light={{
                                            bg: "#FFFFFF"
                                        }}
                                        _dark={{
                                            bg: "#191919"
                                        }}
                                        onClick={onLoginModalOpen}
                                    >
                                        <Text
                                            variant={"SettingsButtonText"}
                                            _light={{
                                                color: "#191919"
                                            }}
                                            _dark={{
                                                color: "#FFFFFF"
                                            }}
                                        >
                                            Not Verified
                                        </Text>
                                    </Button>
                            }


                        </Box>

                        <Box
                            w={"50%"}
                            h={"93px"}
                            layerStyle={"flexCenter"}
                            ml={"15px"}
                            mt={"25px"}
                            justifyContent={"space-between"}
                            pr="25px"
                        //  borderRight={"2px solid #D9D9D9"}
                        >
                            <Box layerStyle={"flexCenterFlexStart"}>
                                <Image src="/images/Google.svg"

                                    alt="google_icon"
                                    width={40}
                                    height={40}
                                ></Image>
                                <Box layerStyle={"flexColumn"}>
                                    <Text variant={"SettingsText1"} ml={"15px"}>
                                        Email
                                    </Text>
                                    <Text variant={"SettingsText2"} ml={"15px"}>
                                        {UserDetailsData?.data?.isEmailVerified ? "Added" : "Not Added"}
                                    </Text>
                                </Box>
                            </Box>
                            {
                                UserDetailsData?.data?.isEmailVerified ?
                                    <Box
                                        layerStyle={"flexCenter"}
                                    >
                                        <DynamicIcon
                                            name={colorMode === "light" ? "green_tick" : "unticked"}
                                        />
                                        <Text
                                            variant={"SettingsButtonText"}
                                            _light={{
                                                color: "#191919"
                                            }}
                                            _dark={{
                                                color: "#FFFFFF"
                                            }}
                                            fontSize={"14px"}
                                            ml={"7px"}
                                        >
                                            Added
                                        </Text>
                                    </Box>
                                    :
                                    <Button
                                        variant={"outline"}
                                        border={"1px"}
                                        width={"110px"}
                                        height={"34px"}
                                        _light={{
                                            bg: "#FFFFFF"
                                        }}
                                        _dark={{
                                            bg: "#191919"
                                        }}
                                        onClick={() => {
                                            localStorage.setItem('googleAuthInitiated', true);
                                            signIn('google');
                                        }}

                                    >
                                        <Text
                                            variant={"SettingsButtonText"}
                                            _light={{
                                                color: "#191919"
                                            }}
                                            _dark={{
                                                color: "#FFFFFF"
                                            }}
                                        >
                                            Add Email
                                        </Text>
                                    </Button>
                            }

                        </Box>

                        {/*                     <Box
                        w={"33%"}
                        h={"93px"}
                        layerStyle={"flexCenter"}
                        ml={"15px"}
                        mt={"25px"}
                        gap={"50px"}
                    >
                        <Box layerStyle={"flexCenterFlexStart"}>
                            <Image src="/images/Twitter.svg" alt="twitter_icon" width={40} height={40}></Image>
                            <Box layerStyle={"flexColumn"}>
                                <Text variant={"SettingsText1"} ml={"15px"}>
                                    Twitter
                                </Text>
                                <Text variant={"SettingsText2"} ml={"15px"}>
                                    Not Added
                                </Text>
                            </Box>
                        </Box>
                        <Button
                            variant={"outline"}
                            border={"1px"}
                            width={"110px"}
                            height={"34px"}
                            _light={{
                                bg: "#FFFFFF"
                            }}
                            _dark={{
                                bg: "#191919"
                            }}
                        >
                            <Text
                                variant={"SettingsButtonText"}
                                _light={{
                                    color: "#191919"
                                }}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                            >
                                Add Twitter
                            </Text>
                        </Button>
                    </Box> */}
                    </Box>
                </Box>

            ) : (
                <Box
                    mx={"15px"}
                    mb="15px"
                    flexShrink={"0"}
                    borderRadius={"6px"}
                    _light={{
                        bg: "#FFFFFF"
                    }}
                    _dark={{
                        bg: "#202020"
                    }}
                    my="20px"
                >
                    <Box p={"15px 0px 20px 21px"}>
                        <Text variant={"contentHeading3"} fontWeight={400}>
                            Account Settings
                        </Text>
                    </Box>
                    <Box
                        mx={"23px"}
                        layerStyle={"flexSpaceBetween"}
                        borderBottom={"2px solid #D9D9D9"}
                    >
                        <Box layerStyle={"flexCenterFlexStart"}>
                            <Image src="/images/Web3.svg" mb={"20px"} alt="web3_icon" width={40} height={40}></Image>
                            <Box layerStyle={"flexColumn"} pb={"15px"}>
                                <Text variant={"SettingsText1"} ml={"15px"}>
                                    Web 3
                                </Text>
                                <Text variant={"SettingsText2"} ml={"15px"}>
                                    {UserDetailsData?.data?.isweb3 ? "Verified" : "Not Verified"}
                                </Text>
                            </Box>
                        </Box>
                        {
                            UserDetailsData?.data?.isweb3 ?
                                <Box
                                    layerStyle={"flexCenter"}
                                >
                                    <DynamicIcon
                                        name={colorMode === "light" ? "green_tick" : "unticked"}
                                    />
                                    <Text
                                        variant={"SettingsButtonText"}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                        fontSize={"14px"}
                                        ml={"7px"}
                                    >
                                        Verified
                                    </Text>
                                </Box>
                                :
                                <Button
                                    variant={"outline"}
                                    border={"1px"}
                                    width={"110px"}
                                    height={"34px"}
                                    _light={{
                                        bg: "#FFFFFF"
                                    }}
                                    _dark={{
                                        bg: "#191919"
                                    }}
                                    onClick={onLoginModalOpen}
                                >
                                    <Text
                                        variant={"SettingsButtonText"}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Not Verified
                                    </Text>
                                </Button>
                        }

                    </Box>

                    <Box
                        layerStyle={"flexSpaceBetween"}
                        m={"21px 23px 0px 23px"}
                        borderBottom={"2px solid #D9D9D9"}
                    >
                        <Box layerStyle={"flexCenter"}>
                            <Image
                                src="/images/Google.svg"
                                style={{
                                    marginBottom: "20px",
                                    ml: "7px"
                                }}
                                alt="google_icon"
                                width={40}
                                height={40}
                            ></Image>
                            <Box flexDirection={"column"} mb={"17px"} ml={"5px"}>
                                <Text variant={"SettingsText1"} ml={"15px"}>
                                    Email
                                </Text>
                                <Text variant={"SettingsText2"} ml={"15px"}>
                                    {UserDetailsData?.data?.isEmailVerified ? "Added" : "Not Added"}
                                </Text>
                            </Box>
                        </Box>
                        {
                            UserDetailsData?.data?.isEmailVerified ?
                                <Box
                                    layerStyle={"flexCenter"}
                                >
                                    <DynamicIcon
                                        name={colorMode === "light" ? "green_tick" : "unticked"}
                                    />
                                    <Text
                                        variant={"SettingsButtonText"}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                        fontSize={"14px"}
                                        ml={"7px"}
                                    >
                                        Added
                                    </Text>
                                </Box>
                                :
                                <Button
                                    variant={"outline"}
                                    border={"1px"}
                                    width={"110px"}
                                    height={"34px"}
                                    _light={{
                                        bg: "#FFFFFF"
                                    }}
                                    _dark={{
                                        bg: "#191919"
                                    }}
                                    onClick={() => {
                                        localStorage.setItem('googleAuthInitiated', true);
                                        signIn('google');
                                    }}

                                >
                                    <Text
                                        variant={"SettingsButtonText"}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        Add Email
                                    </Text>
                                </Button>
                        }
                    </Box>

                    {/*                 <Box
                    layerStyle={"flexSpaceBetween"}
                    mx={"23px"}
                    mt={"21px"}
                >
                    <Box layerStyle={"flexCenterFlexStart"}>
                        <Image
                            src="/images/Twitter.svg"
                            style={{
                                marginBottom: "20px",
                                marginLeft: "7px"
                            }}
                            alt="twitter_icon" width={40} height={40}
                        ></Image>
                        <Box layerStyle={"flexColumn"} mb={"17px"} ml={"5px"}>
                            <Text variant={" SettingsText1"} ml={"15px"}>
                                Twitter
                            </Text>
                            <Text variant={"SettingsText2"} ml={"15px"}>
                                Not Added
                            </Text>
                        </Box>
                    </Box>
                    <Button
                        variant={"outline"}
                        border={"1px"}
                        width={"110px"}
                        height={"34px"}
                        _light={{
                            bg: "#FFFFFF"
                        }}
                        _dark={{
                            bg: "#191919"
                        }}
                    >
                        <Text
                            variant={"SettingsButtonText"}
                            _light={{
                                color: "#191919"
                            }}
                            _dark={{
                                color: "#FFFFFF"
                            }}
                        >
                            Add Twitter
                        </Text>
                    </Button>
                </Box> */}
                </Box >
            )}
            <LoginPage
                web3Verification={true}
                isOpen={isLoginModalOpen}
                onOpen={onLoginModalOpen}
                onClose={onLoginModalClose}
            />
        </React.Fragment>
    );
};

export default AccountSettingsBox;