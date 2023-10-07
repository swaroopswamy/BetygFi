"use client"
import { Box, Container, useColorModeValue, Text, Image, Flex, Button, Spacer, toggleColorMode, colorMode } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
    return (
        <>
            <Box
                display={{ base: "none", md: "block" }}
                width={"100%"}
                background={useColorModeValue("#F0F0F5", "#191919")}>
                <Text
                    variant={"contentHeading3"}
                    p={"30px 0px 10px 33px"}>
                    Settings
                </Text>
                <Box
                    height={"275px"}
                    flexShrink={"0"}
                    borderRadius={"6px"}
                    background={useColorModeValue("#FFFFFF", "#202020")}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                    ml={"33px"}
                    mr={"20px"}>
                    <Box
                        ml={"25px"}
                        pt={"20px"}>
                        <Text variant={"contentHeading4"}>Theme</Text>
                    </Box>
                    <Box
                        layerStyle={"flexCenterSpaceEvenly"}
                        mt={"10px"}>
                        <Box
                            layerStyle={"flexColumn"}
                            cursor={"pointer"}>
                            <Image src="/images/SystemDefault.svg" w="183px" h="133px" alt=""></Image>
                            <Box
                                layerStyle={"flexCenterFlexStart"}
                                mt={"10px"}>
                                <Image src="/images/SelectBox.svg" alt=""></Image>
                                <Text
                                    variant={"ThemeText"}
                                    ml={"15px"}
                                    mt={"2px"}>
                                    System Default
                                </Text>
                            </Box>
                        </Box>

                        <Box
                            layerStyle={"flexColumn"}
                            cursor={"pointer"}>
                            <Image src="/images/LightTheme.svg" w="183px" h="133px" alt=""></Image>
                            <Box
                                layerStyle={"flexCenterFlexStart"}
                                mt={"10px"}>
                                <Image src="/images/SelectBox.svg" alt=""></Image>
                                <Text
                                    color={useColorModeValue("#191919", "#FFFFFF")}
                                    variant={"ThemeText"}
                                    ml={"15px"}
                                    mt={"2px"}>
                                    Light THEME
                                </Text>
                            </Box>
                        </Box>

                        <Box
                            layerStyle={"flexColumn"}
                            cursor={"pointer"}>
                            <Image src="/images/DarkTheme.svg" w="183px" h="133px" alt=""></Image>
                            <Box
                                layerStyle={"flexCenterFlexStart"}
                                mt={"10px"}>
                                <Image src="/images/SelectBox.svg" w="24px" h="24px" alt=""></Image>
                                <Text
                                    color={useColorModeValue("#191919", "#FFFFFF")}
                                    layerStyle={"ThemeText"}
                                    ml={"15px"}
                                    mt={"2px"}>
                                    DARK THEME
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box
                    height={"350px"}
                    flexShrink={"0"}
                    borderRadius={"6px"}
                    background={useColorModeValue("#FFFFFF", "#202020")}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                    ml={"33px"}
                    mt={"40px"}
                    mr={"20px"}>
                    <Text
                        variant={"contentHeading4"}
                        ml={5}
                        pt={5}>
                        Account Settings
                    </Text>
                    <Box
                        layerStyle={"flexSpaceBetween"}
                        ml={"150px"}
                        mt={"30px"}
                        mr={"50px"}
                        borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}>
                        <Box layerStyle={"flexCenterFlexStart"}>
                            <Image src="/images/Web3.svg" mb={"20px"} alt=""></Image>
                            <Box layerStyle={"flexColumn"} pb={"15px"}>
                                <Text
                                    variant={"SettingsText1"}
                                    ml={"15px"}>
                                    Web 3
                                </Text>
                                <Text
                                    variant={"SettingsText2"}
                                    ml={"15px"}
                                >
                                    Not Added
                                </Text>
                            </Box>
                        </Box>
                        <Button
                            width={"116px"}
                            height={"28px"}
                            flexShrink={"0"}
                            background={useColorModeValue("#202020", "#FFFFFF")}>
                            <Text variant={"SettingsButtonText"}>
                                Verify
                            </Text>
                        </Button>
                    </Box>

                    <Box
                        layerStyle={"flexSpaceBetween"}
                        ml={"150px"}
                        mt={"20px"}
                        mr={"50px"}
                        borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src="/images/Google.svg" mb={"20px"} ml={"7px"} alt=""></Image>
                            <Box
                                flexDirection={"column"}
                                mb={"17px"}
                                ml={"5px"}>
                                <Text
                                    variant={"SettingsText1"}
                                    ml={"15px"}>
                                    Email
                                </Text>
                                <Text
                                    variant={"SettingsText2"}
                                    ml={"15px"}>
                                    Not Added
                                </Text>
                            </Box>
                        </Box>
                        <Button
                            width={"116px"}
                            height={"28px"}
                            flexShrink={"0"}
                            background={useColorModeValue("#202020", "#FFFFFF")}>
                            <Text variant={"SettingsButtonText"}>
                                Add Email
                            </Text>
                        </Button>
                    </Box>

                    <Box
                        layerStyle={"flexSpaceBetween"}
                        ml={"150px"}
                        mt={"20px"}
                        mr={"50px"}
                        borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}>
                        <Box layerStyle={"flexCenterFlexStart"}>
                            <Image src="/images/Twitter.svg" mb={"20px"} ml={"7px"} alt=""></Image>
                            <Box
                                layerStyle={"flexColumn"}
                                mb={"17px"}
                                ml={"5px"}>
                                <Text
                                    variant={" SettingsText1"}
                                    ml={"15px"}>
                                    Twitter
                                </Text>
                                <Text
                                    variant={"SettingsText2"}
                                    ml={"15px"}>
                                    Not Added
                                </Text>
                            </Box>
                        </Box>
                        <Button
                            width={"116px"}
                            height={"28px"}
                            flexShrink={"0"}
                            background={useColorModeValue("#202020", "#FFFFFF")}>
                            <Text variant={"SettingsButtonText"}>
                                Add Twitter
                            </Text>
                        </Button>
                    </Box>
                </Box>

                <Box layerStyle={"flexSpaceBetween"}
                    p={"50px 35px 90px 50px"}>
                    <Text variant={"contentHeading4"}>
                        Logout of BetygFi
                    </Text>
                    <Text
                        variant={"SettingsText3"}
                        ml={"50px"}
                        mt={"3px"}>
                        After logging out, the verification information for the current address will be deleted from your browser.
                    </Text>
                    <Button
                        width={"116px"}
                        height={"28px"}
                        ml={"60px"}
                        variant={"outline"}
                        border={"1px"}>
                        <Text variant={"SettingsButtonText2"}>
                            Logout
                        </Text>
                    </Button>
                </Box>
            </Box>

            {/* Mobile Optimization Part */}

            <Box
                display={{ base: "block", md: "none" }}
                width={"100%"}
                background={useColorModeValue("#F0F0F5", "#191919")}>
                <Text
                    variant={"contentHeading2"}
                    p={"54px 0px 29px 15px"}>
                    Settings
                </Text>

                <Box
                    height={"650px"}
                    flexShrink={"0"}
                    borderRadius={"6px"}
                    background={useColorModeValue("#FFFFFF", "#202020")}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                    mx={"15px"}>
                    <Box p={"15px 0px 15px 21px"}>
                        <Text variant={"contentHeading4"}>Theme</Text>
                    </Box>
                    <Box layerStyle={"flexColumn"}>
                        <Box
                            layerStyle={"flexColumn"}
                            cursor={"pointer"}>
                            <Box layerStyle={"flexCenterFlexStart"}>
                                <Image src="/images/SelectBox.svg" alt="" ml={"21px"}></Image>
                                <Box ml={"10px"}>
                                    <Text variant={"ThemeText"}>
                                        System Default
                                    </Text>
                                </Box>
                            </Box>
                            <Image src="/images/SystemDefault.svg" w="183px" h="133px" alt="" mt={"12px"} ml={"21px"}></Image>
                        </Box>

                        <Box
                            layerStyle={"flexColumn"}
                            cursor={"pointer"}>
                            <Box
                                layerStyle={"flexCenterFlexStart"}
                                mt={"34px"}>
                                <Image src="/images/SelectBox.svg" alt="" ml={"21px"}></Image>
                                <Box ml={"10px"}>
                                    <Text variant={"ThemeText"}>
                                        Light THEME
                                    </Text>
                                </Box>
                            </Box>
                            <Image src="/images/LightTheme.svg" w="183px" h="133px" alt="" mt={"12px"} ml={"21px"}></Image>
                        </Box>

                        <Box
                            layerStyle={"flexColumn"}
                            cursor={"pointer"}>
                            <Box
                                layerStyle={"flexCenterFlexStart"}
                                mt={"34px"}>
                                <Image src="/images/SelectBox.svg" w="24px" h="24px" alt="" ml={"21px"}></Image>
                                <Box ml={"10px"}>
                                    <Text layerStyle={"ThemeText"}>
                                        DARK THEME
                                    </Text>
                                </Box>
                            </Box>
                            <Image src="/images/DarkTheme.svg" w="183px" h="133px" alt="" mt={"12px"} ml={"21px"}></Image>
                        </Box>
                    </Box>
                </Box>

                <Box
                    height={"330px"}
                    flexShrink={"0"}
                    borderRadius={"6px"}
                    background={useColorModeValue("#FFFFFF", "#202020")}
                    boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                    mx={"15px"}
                    mt={"30px"}>
                    <Box p={"15px 0px 20px 21px"}>
                        <Text variant={"contentHeading4"}>
                            Account Settings
                        </Text>
                    </Box>
                    <Box
                        mx={"23px"}
                        layerStyle={"flexSpaceBetween"}
                        borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}>
                        <Box layerStyle={"flexCenterFlexStart"}>
                            <Image src="/images/Web3.svg" mb={"20px"} alt=""></Image>
                            <Box layerStyle={"flexColumn"} pb={"15px"}>
                                <Text
                                    variant={"SettingsText1"}
                                    ml={"15px"}>
                                    Web 3
                                </Text>
                                <Text
                                    variant={"SettingsText2"}
                                    ml={"15px"}
                                >
                                    Not Added
                                </Text>
                            </Box>
                        </Box>
                        <Button
                            width={"116px"}
                            height={"28px"}
                            flexShrink={"0"}
                            background={useColorModeValue("#202020", "#FFFFFF")}>
                            <Text variant={"SettingsButtonText"}>
                                Verify
                            </Text>
                        </Button>
                    </Box>

                    <Box
                        layerStyle={"flexSpaceBetween"}
                        mx={"23px"}
                        mt={"21px"}
                        borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src="/images/Google.svg" mb={"20px"} ml={"7px"} alt=""></Image>
                            <Box
                                flexDirection={"column"}
                                mb={"17px"}
                                ml={"5px"}>
                                <Text
                                    variant={"SettingsText1"}
                                    ml={"15px"}>
                                    Email
                                </Text>
                                <Text
                                    variant={"SettingsText2"}
                                    ml={"15px"}>
                                    Not Added
                                </Text>
                            </Box>
                        </Box>
                        <Button
                            width={"116px"}
                            height={"28px"}
                            flexShrink={"0"}
                            background={useColorModeValue("#202020", "#FFFFFF")}>
                            <Text variant={"SettingsButtonText"}>
                                Add Email
                            </Text>
                        </Button>
                    </Box>

                    <Box
                        layerStyle={"flexSpaceBetween"}
                        mx={"23px"}
                        mt={"21px"}
                        borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}>
                        <Box layerStyle={"flexCenterFlexStart"}>
                            <Image src="/images/Twitter.svg" mb={"20px"} ml={"7px"} alt=""></Image>
                            <Box
                                layerStyle={"flexColumn"}
                                mb={"17px"}
                                ml={"5px"}>
                                <Text
                                    variant={" SettingsText1"}
                                    ml={"15px"}>
                                    Twitter
                                </Text>
                                <Text
                                    variant={"SettingsText2"}
                                    ml={"15px"}>
                                    Not Added
                                </Text>
                            </Box>
                        </Box>
                        <Button
                            width={"116px"}
                            height={"28px"}
                            flexShrink={"0"}
                            background={useColorModeValue("#202020", "#FFFFFF")}>
                            <Text variant={"SettingsButtonText"}>
                                Add Twitter
                            </Text>
                        </Button>
                    </Box>
                </Box>

                <Box layerStyle={"flexColumn"}
                    p={"30px 15px 90px 15px"}>
                    <Text variant={"contentHeading4"}>
                        Logout of BetygFi
                    </Text>
                    <Box
                        mr={"15px"}
                        mt={"15px"}>
                        <Text variant={"SettingsText3"}>
                            After logging out, the verification information for the current address will be deleted from your browser.
                        </Text>
                    </Box>
                    <Button
                        width={"100%"}
                        height={"28px"}
                        variant={"outline"}
                        mt={"15px"}
                        border={"1px"}>
                        <Text variant={"SettingsButtonText2"}>
                            Logout
                        </Text>
                    </Button>
                </Box>
            </Box>
        </>
    )
};

export default Settings;