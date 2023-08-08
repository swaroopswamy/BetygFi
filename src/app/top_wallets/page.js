"use client"

import React, { useEffect, useState } from "react";
import { Box, Input, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, border } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockchains } from "../../../util/constant";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import WalletTable from "./WalletTable.js"

const WalletDashboardPage = () => {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();


    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
        console.log(blockchainSelected);
    };

    return (
        <>
            <Box
                bgColor={useColorModeValue("#F5F5F7", "#131313")}
                display={"flex"}
                justifyContent={"space-between"}
                flexDirection={"column"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    padding={"38px 30px 0px 30px"}
                    bgColor={useColorModeValue("#FFFFFF", "#131313")}
                >
                    <Box
                        display={"flex"}
                        alignItems={"space-between"}
                        flexDirection={"column"}
                    >

                        <Text
                            fontSize={"24px"}
                            fontWeight={"600"}
                            lineHeight={"20px"}
                            color={useColorModeValue("#191919", "#FFF")}
                            letterSpacing={"2.4px"}
                        >
                            TOP WALLETS
                        </Text>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            mt={"13px"}
                        >
                            <Text
                                fontSize={"14px"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                color={useColorModeValue("#191919", "#FFF")}

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere felis nulla, in luctus eros condimentum nec. In eget justo id odio finibus rhoncus. Nullam porttitor sapien diam, sit amet egestas mauris egestas non. Sed sapien augue, dignissim at suscipit ac, egestas quis nisl. Aenean a malesuada nisi, nec aliquet orci. In vestibulum orci eget ultrices iaculis.
                            </Text>
                        </Box>

                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            mt={"26px"}
                        >
                            <Text
                                fontSize={"10px"}
                                fontWeight={"400"}
                                lineHeight={"15px"}
                                color={useColorModeValue("#191919", "#FFF")}
                                letterSpacing={"1.2px"}
                            >
                                Select the blockchains you'd like to analyze
                            </Text>
                        </Box>

                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            mt={"18px"}
                        >
                            <SelectionBox
                                blockchainSelected={blockchainSelected}
                                colorMode={colorMode}
                                BlockchainTypeHandler={BlockchainTypeHandler}
                            />

                        </Box>

                        
                    </Box>

                </Box>

                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    padding={"10px 30px 50px 30px"}
                    flexDirection={"column"}
                    bgColor={useColorModeValue("#F0F0F5", "#191919")}
                >
                    <Box
                        bgColor={useColorModeValue("#FFFFFF", "#191919")}
                    >
                        <WalletTable />
                    </Box>
                </Box>

            </Box>
        </>
    );
};

export default WalletDashboardPage; 

function SelectionBox ( {blockchainSelected, colorMode, BlockchainTypeHandler} ) {
    return <>
        <Box
            display={"flex"}
            flexDirection={"column"}
        >
            <Box
                w={"100%"}
                display={"flex"}
                alignItems={"center"}
                borderBottom={useColorModeValue("1px solid #CECECE", "1px solid #2F2F2F")}
                pb="14px"
            >
                <Box
                    position={"relative"}
                    cursor={"pointer"}
                    fontSize={"14px"}
                    fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
                    lineHeight={"20px"}
                    color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                    _after={
                        blockchainSelected.length === 0 && {
                            position: "absolute",
                            content: '""',
                            bottom: "-14px",
                            left: 0,
                            width: "100%",
                            height: "1px",
                            bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",

                        }
                    }
                    onClick={() => {
                        BlockchainTypeHandler("All");
                    }}
                    mr={"18px"}
                    letterSpacing={"1.4px"}
                    textTransform={"uppercase"}
                >
                    ALL
                </Box>
                {blockchains.map((item, i) => {
                    return (
                        <Box
                            position={"relative"}
                            cursor={"pointer"}
                            key={i}
                            _after={
                                blockchainSelected.includes(item) && {
                                    position: "absolute",
                                    content: '""',
                                    bottom: "-14px",
                                    left: 0,
                                    width: "100%",
                                    height: "1px",
                                    bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
                                }
                            }
                            onClick={() => {
                                BlockchainTypeHandler(item);
                            }}
                            mr={"18px"}
                            display={"flex"}
                            alignItems={"center"}
                        >
                            <Image
                                w={"20px"}
                                h={"20px"}
                                mr={"11px"}
                                src={`/icons/${item}_sm_icon.svg`}
                                alt=""
                            ></Image>
                            <Text
                                fontSize={"14px"}
                                fontWeight={blockchainSelected.includes(item) ? "700" : "400"}
                                lineHeight={"20px"}
                                color={colorMode === 'light' ?
                                    blockchainSelected.includes(item) ? "#191919" : "#191919"
                                    :
                                    blockchainSelected.includes(item) ? "#FFFFFF" : "#FFFFFF"
                                }
                                letterSpacing={"1.4px"}
                                textTransform={"uppercase"}
                            >
                                {item}
                            </Text>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    </>
}

function SelectionTab( {colorMode, tabIndex, setTabIndex} ) {
    
    return <>
        <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
        >
            <Tabs onChange={(index) => setTabIndex(index)}>
                <TabList>
                <Tab
                    padding="0"
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        padding={"5px 10px 10px 10px"}
                        bgColor={useColorModeValue("#F5F5F7", "#131313")}
                    >
                        <Text
                            fontSize={"14px"}
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontWeight={tabIndex === 0 ? "700" : "400"}
                            letterSpacing={"1.4px"}
                            textTransform={"uppercase"}
                        >
                            All
                        </Text>
                    </Box>
                </Tab>
                {blockchains.map((item, i) => {
                    return (
                        <Tab
                            padding="0"
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={"8px"}
                                padding={"5px 10px 10px 10px"}
                                bgColor={useColorModeValue("#F5F5F7", "#131313")}
                            >
                                <Image
                                    h="20px"
                                    alt="icon"
                                    src={`/icons/${item}_sm_icon.svg`}
                                ></Image>
                                <Text
                                    fontSize={"14px"}
                                    color={useColorModeValue("#16171B", "#FFF")}
                                    fontWeight={tabIndex === i+1 ? "700" : "400"}
                                    letterSpacing={"1.4px"}
                                    textTransform={"uppercase"}
                                >
                                    {item}
                                </Text>
                            </Box>
                        </Tab>
                    );
                })}
                </TabList>
            </Tabs>
        </Box>
    </>
}
