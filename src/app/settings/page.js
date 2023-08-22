"use client"
import { Box, Container, useColorModeValue, Text, Image, Flex, Button, Spacer, toggleColorMode, colorMode } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
    return (
        <Box
            width={"100%"}
            background={useColorModeValue("#F0F0F5", "#191919")}
        >
            <Text
                color={useColorModeValue("#191919", "#FFFFFF")}
                fontSize={"24px"}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"46px"}
                ml={"33px"}
                pt={"30px"}
                paddingBottom={"10px"}
            >
                Settings
            </Text>
            <Box
                height={"275px"}
                flexShrink={"0"}
                borderRadius={"6px"}
                background={useColorModeValue("#FFFFFF", "#202020")}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                ml={"33px"}
                mr={"20px"}
            >
                <Box
                    ml={"25px"}
                    pt={"20px"}
                >
                    <Text
                        color={useColorModeValue("#191919", "#FFFFFF")}
                        fontSize={"16px"}
                        fontStyle={"normal"}
                        fontWeight={400}
                        lineHeight={"20px"}
                    >
                        Theme
                    </Text>
                </Box>
                <Box

                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    mt={"10px"}
                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >

                        <Image src="/images/SystemDefault.svg" w="183px" h="133px" alt=""></Image>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            mt={"10px"}
                        >

                            <Image src="/images/SelectBox.svg" alt=""></Image>
                            <Text
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                letterSpacing={"1.4px"}
                                textTransform={"uppercase"}
                                ml={"15px"}
                                mt={"2px"}
                            >
                                System Default
                            </Text>
                        </Box>

                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <Image src="/images/LightTheme.svg" w="183px" h="133px" alt=""></Image>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            mt={"10px"}
                        >

                            <Image src="/images/SelectBox.svg" alt=""></Image>
                            <Text
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                letterSpacing={"1.4px"}
                                textTransform={"uppercase"}
                                ml={"15px"}
                                mt={"2px"}
                            >
                                Light THEME
                            </Text>
                        </Box>

                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <Image src="/images/DarkTheme.svg" w="183px" h="133px" alt=""></Image>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            mt={"10px"}
                        >

                            <Image src="/images/SelectBox.svg" w="24px" h="24px" alt=""></Image>
                            <Text
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                letterSpacing={"1.4px"}
                                textTransform={"uppercase"}
                                ml={"15px"}
                                mt={"2px"}
                            >
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
                mr={"20px"}
            >
                <Text
                    fontSize={"16px"}
                    fontWeight={400}
                    lineHeight={"20px"}
                    ml={5}
                    pt={5}
                    color={useColorModeValue("#191919", "#FFFFFF")}
                >
                    Account Settings
                </Text>
                <Flex
                    ml={"150px"}
                    mt={"30px"}
                    mr={"50px"}
                    borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}
                >
                    <Image src="/images/Web3.svg" mb={"20px"} alt=""></Image>
                    <Flex
                        flexDirection={"column"}>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"15px"}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            ml={"15px"}
                        >
                            Web 3
                        </Text>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"11px"}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            opacity={"0.6000000238418579"}
                            ml={"15px"}
                        >
                            Not Added
                        </Text>
                    </Flex>
                    <Spacer />
                    <Button
                        width={"116px"}
                        height={"28px"}
                        flexShrink={"0"}
                        background={useColorModeValue("#202020", "#FFFFFF")}
                    >
                        <Text
                            color={useColorModeValue("#FFFFFF", "#191919")}
                            textAlign={"center"}
                            fontSize={"12px"}
                            fontStyle={"normal"}
                            fontWeight={700}
                            lineHeight={"12px"}
                        >
                            Verify
                        </Text>
                    </Button>
                </Flex>

                <Flex
                    ml={"150px"}
                    mt={"20px"}
                    mr={"50px"}
                    borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}
                >
                    <Image src="/images/Google.svg" mb={"20px"} ml={"7px"} alt=""></Image>
                    <Flex
                        flexDirection={"column"}
                        mb={"17px"}
                        ml={"5px"}>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"15px"}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            ml={"15px"}
                        >
                            Email
                        </Text>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"11px"}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            opacity={"0.6000000238418579"}
                            ml={"15px"}
                        >
                            Not Added
                        </Text>
                    </Flex>
                    <Spacer />
                    <Button
                        width={"116px"}
                        height={"28px"}
                        flexShrink={"0"}
                        background={useColorModeValue("#202020", "#FFFFFF")}
                    >
                        <Text
                            color={useColorModeValue("#FFFFFF", "#191919")}
                            textAlign={"center"}
                            fontSize={"12px"}
                            fontStyle={"normal"}
                            fontWeight={700}
                            lineHeight={"12px"}
                        >
                            Add Email
                        </Text>
                    </Button>
                </Flex>

                <Flex
                    ml={"150px"}
                    mt={"20px"}
                    mr={"50px"}
                    borderBottom={useColorModeValue("1px solid #191919", "1px solid #FFFFFF")}
                >
                    <Image src="/images/Twitter.svg" mb={"20px"} ml={"7px"} alt=""></Image>
                    <Flex
                        flexDirection={"column"}
                        mb={"17px"}
                        ml={"5px"}>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"15px"}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            ml={"15px"}
                        >
                            Twitter
                        </Text>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"11px"}
                            fontStyle={"normal"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            opacity={"0.6000000238418579"}
                            ml={"15px"}
                        >
                            Not Added
                        </Text>
                    </Flex>
                    <Spacer />
                    <Button
                        width={"116px"}
                        height={"28px"}
                        flexShrink={"0"}
                        background={useColorModeValue("#202020", "#FFFFFF")}
                    >
                        <Text
                            color={useColorModeValue("#FFFFFF", "#191919")}
                            textAlign={"center"}
                            fontSize={"12px"}
                            fontStyle={"normal"}
                            fontWeight={700}
                            lineHeight={"12px"}
                        >
                            Add Twitter
                        </Text>
                    </Button>
                </Flex>
            </Box>

            <Flex ml={"50px"} mt={"50px"} paddingBottom={20}>
                <Text
                    color={useColorModeValue("#191919", "#FFFFFF")}
                    fontSize={"16px"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    lineHeight={"20px"}
                >
                    Logout of BetygFi
                </Text>
                <Text
                    color={useColorModeValue("#191919", "#FFFFFF")}
                    fontSize={"12px"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    lineHeight={"10px"}
                    ml={"50px"}
                    mt={"3px"}
                >
                    After logging out, the verification information for the current address will be deleted from your browser.
                </Text>
                <Button
                    width={"116px"}
                    height={"28px"}
                    ml={"60px"}
                    variant={"outline"}
                    border={"1px"}
                >
                    <Text
                        color={useColorModeValue("#191919", "#FFFFFF")}
                        textAlign={"center"}
                        fontSize={"12px"}
                        fontStyle={"normal"}
                        fontWeight={700}
                        lineHeight={"12px"}
                    >
                        Logout
                    </Text>
                </Button>
            </Flex>
        </Box>
    )
};

export default Settings;