"use client";
import React from "react";
import { Box, Checkbox, Text, useColorMode, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import Image from "next/image";

const CustomizeTabAssetsPanel = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Box mt={"15px"} width={"100%"}>
                <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"10px"} mt={"25px"}>Assets</Text>
                <InputGroup width={"100%"}>
                    <InputLeftElement m={"15px 10px 0px 10px"}>
                        <Image src={colorMode === 'light' ? "/icons/search_Light.svg" : "/icons/search_Dark.svg"} width={18} height={18} alt=" "></Image>
                    </InputLeftElement>
                    <Input
                        bg={colorMode === 'light' ? "#F0F0F5" : "#282828"}
                        mt={"15px"}
                        width={"100%"}
                        placeholder='Search for asset'
                        size='md'
                        color={colorMode === 'light' ? "#6F6F6F" : "#A5A5A5"}
                    ></Input>
                </InputGroup>
                <Box layerStyle={"flexCenterSpaceBetween"} mt={"15px"}>
                    <Text variant={"baseStyle"} fontWeight={500} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>All</Text>
                    <Text variant={"baseStyle"} fontWeight={500} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>Exclude</Text>
                </Box>
                <Box className="hidescrollbar" layerStyle={"flexColumn"} overflowY={"auto"} maxHeight={"275px"} mt={"15px"}>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                    <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Image src={"/icons/bitcoin_logo.svg"} width={25} height={25} alt=" "></Image>
                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                <Box m={"5px 0px 0px 1px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                            <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>1</Text>
                                        </Box>
                                    </Box>
                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                        Bitcoin
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Checkbox mr={"15px"} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CustomizeTabAssetsPanel;