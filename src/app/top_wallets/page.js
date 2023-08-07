"use client"

import React, { useCallback, useEffect, useState } from "react";
import { Box, Input, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { blockchains } from "../../../util/constant";
import WalletTable from "./WalletTable.js"

const WalletDashboardPage = () => {
    const { colorMode } = useColorMode();
    const [tabIndex, setTabIndex] = useState(0)

    // const blockchainSelected = useSelector(
    //     (state) => state?.walletDashboardTableData?.defiArraySelected
    // );

    // const blockchainArrayHandler = (type) => {
    //     dispatch(defiArrayChangedReducer(type));
    // };

    const blockchainArray = [
        "ETHEREUM",
        "TRON",
        "BSC",
        "ARBITRUM",
        "POLYGON"
    ];

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
                    padding={"38px 30px 5px 30px"}
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
                            {/* <SelectionBox 
                                blockchainSelected={blockchainSelected}
                                colorMode={colorMode}
                                blockchainArrayHandler={blockchainArrayHandler}
                                blockchainArray={blockchainArray} /> */}

                            <SelectionTab
                                colorMode={colorMode}
                                tabIndex={tabIndex}
                                setTabIndex={setTabIndex}
                            />
                        </Box>

                        
                    </Box>

                </Box>

                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    padding={"0px 30px 50px 30px"}
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

function SelectionBox( {blockchainSelected, colorMode, blockchainArrayHandler, blockchainArray} ) {
    return <>
        <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
        >
            <Box
                textAlign={"center"}
                p="8px"
                bgColor={blockchainSelected.length === 0 ? colorMode === 'light' ? ("#E3E4E8") : ("#191919") : colorMode === 'light' ? ("#E0E0E0") : ("#202020")}
                onClick={() => {
                    blockchainArrayHandler('All');
                } }
                borderRadius={"2px"}
                opacity={blockchainSelected.length !== 0 ? "0.5" : "1"}
                mr={"10px"}
                border={useColorModeValue("1px solid #979AA5", "1px solid #787878")}
            >
                <Text
                    fontSize={"10px"}
                    fontWeight={blockchainSelected.length === 0 ? "600" : "400"}
                    lineHeight={"20px"}
                    color={blockchainSelected.length === 0 ? colorMode === 'light' ? ("#16171B") : ("#FFFFFF") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}

                >
                    All
                </Text>
            </Box>
            {blockchainArray.map((item, i) => {
                return (
                    <>
                        <Box
                            key={i}
                            textAlign={"center"}
                            p="8px"
                            bgColor={blockchainSelected.includes(item) ? colorMode === 'light' ? ("#E3E4E8") : ("#191919") : colorMode === 'light' ? ("#FFFFFF") : ("#202020")}
                            onClick={() => {
                                blockchainArrayHandler(item);
                            } }
                            opacity={blockchainSelected.includes(item) ? "1" : "0.5"}
                            mr={"10px"}
                            borderRadius={"2px"}
                            _light={{ border: "1px solid #979AA5" }}
                            _dar={{ border: "1px solid #787878" }}
                        >
                            <Text
                                fontSize={"10px"}
                                fontWeight={blockchainSelected.includes(item) ? "600" : "400"}
                                lineHeight={"20px"}
                                color={blockchainSelected.includes(item) ? colorMode === 'light' ? ("#16171B") : ("#FFFFFF") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}

                            >
                                {item}
                            </Text>
                        </Box>

                    </>
                );
            })}
        </Box>
        </>;
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
