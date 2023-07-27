"use client"
import { Box, Container, useColorModeValue, Text, Image, Flex, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import styles from "./settings.module.css"

const Settings = () => {
    return (
        <Container
            maxWidth={"100%"}
            width={"1440px"}
            height={"1044px"}
            background={useColorModeValue("#F0F0F5", "#191919")}
        >
            <Text
                color={useColorModeValue("#191919", "#FFFFFF")}
                fontSize={"24px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"46px"}
                ml={"33px"}
            >
                Settings
            </Text>
            <Box
                height={"238px"}
                flexShrink={"0"}
                borderRadius={"6px"}
                background={useColorModeValue("#FFFFFF", "#202020")}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                ml={"33px"}
                mr={"20px"}
            >
                <Text
                    color={useColorModeValue("#191919", "#FFFFFF")}
                    fontSize={"15px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    ml={"20px"}
                >
                    Theme
                </Text>
                <Box

                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-evenly"}
                >

                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <Image src="/images/SystemDefault.svg" w="183px" h="133px"  ></Image>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                        >

                            <Image src="/images/SelectBox.svg" ></Image>
                            <Text
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontSize={"11px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1.1px"}
                                textTransform={"uppercase"}
                                ml={"15px"}
                                mt={"8px"}
                            >
                                Light THEME
                            </Text>
                        </Box>

                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <Image src="/images/LightTheme.svg" w="183px" h="133px"   ></Image>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                        >

                            <Image src="/images/SelectBox.svg"  ></Image>
                            <Text
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontSize={"11px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1.1px"}
                                textTransform={"uppercase"}
                                ml={"15px"}
                                mt={"8px"}
                            >
                                Light THEME
                            </Text>
                        </Box>

                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <Image src="/images/SystemDefault.svg" w="183px" h="133px"  ></Image>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                        >

                            <Image src="/images/SelectBox.svg" w="24px" h="24px"  ></Image>
                            <Text
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontSize={"11px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1.1px"}
                                textTransform={"uppercase"}
                                ml={"15px"}
                                mt={"8px"}
                            >
                                Light THEME
                            </Text>
                        </Box>

                    </Box>
                </Box>


                {/*  <Flex>
                   
                    <Image src="/images/DarkTheme.svg" ml={"75px"} mt={"15px"}></Image>
                </Flex> */}

                {/*  */}
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
                    <Image src="/images/Web3.svg" mb={"20px"}></Image>
                    <Flex
                        flexDirection={"column"}>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"15px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            ml={"15px"}
                        >
                            Web 3
                        </Text>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"11px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
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
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"700"}
                            lineHeight={"10px"}
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
                    <Image src="/images/Google.svg" mb={"20px"} ml={"7px"}></Image>
                    <Flex
                        flexDirection={"column"}
                        mb={"17px"}
                        ml={"5px"}>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"15px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            ml={"15px"}
                        >
                            Email
                        </Text>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"11px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
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
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"700"}
                            lineHeight={"10px"}
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
                    <Image src="/images/Twitter.svg" mb={"20px"} ml={"7px"}></Image>
                    <Flex
                        flexDirection={"column"}
                        mb={"17px"}
                        ml={"5px"}>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"15px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            ml={"15px"}
                        >
                            Twitter
                        </Text>
                        <Text
                            color={useColorModeValue("#191919", "#FFFFFF")}
                            fontSize={"11px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
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
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"700"}
                            lineHeight={"10px"}
                        >
                            Verify
                        </Text>
                    </Button>
                </Flex>
            </Box>

            <Flex ml={"50px"} mt={"50px"}>
                <Text
                    color={useColorModeValue("#191919", "#FFFFFF")}
                    fontSize={"15px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                >
                    Logout of BetygFi
                </Text>
                <Text
                    color={useColorModeValue("#191919", "#FFFFFF")}
                    fontSize={"11px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
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
                        fontSize={"10px"}
                        fontStyle={"normal"}
                        fontWeight={"700"}
                        lineHeight={"10px"}
                    >
                        Logout
                    </Text>
                </Button>
            </Flex>
        </Container>
    )
};

export default Settings;