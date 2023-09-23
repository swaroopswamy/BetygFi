"use client"
import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip, useColorModeValue, useColorMode, useBreakpoint } from "@chakra-ui/react";
import SplineAreaChart from "./SplineAreaChart"
import { useDispatch, useSelector } from "react-redux";
import PortfolioPanelComponent from "./portfolio.js"
import WalletAnalyticsPanel from "./wallet_analytics";
import TransactionPanelComponent from "./transaction";
import { blockchainTypeChangedReducer, fetchAssetAllocationForAddress, fetchBlockchainAllocationForAddress, fetchProtocolAllocationForAddress, fetchInflowOutflowTokensForAddress, fetchWalletBalanceData, walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from "../../../util/constant";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import './styles.css';

const WalletDashboardPage = () => {
    const searchParam = useSearchParams();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const [tabIndex, setTabIndex] = useState(0)

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const walletAddress = useSelector(
        (state) => state?.walletDashboardTableData?.walletAddress
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };
    const blockchains = useSelector(
        (state) => state?.appData?.BlockchainListData?.data
    );
    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData?.data)

    const walletTransactionsData = useSelector((state) => state?.walletDashboardTableData?.walletTransactionsData)

    const fetchWalletBalanceDataHandler = useCallback(() => {
        const data = {
            address: searchParam.get("address"),
            payload: {
                blockchain: blockchainSelected
            }
        }
        dispatch(fetchWalletBalanceData(data));
    }, [blockchainSelected, searchParam.get("address")])

    const fetchAssetAllocationForAddressHandler = useCallback(() => {
        const data = {
            address: searchParam.get("address"),
        }
        dispatch(fetchAssetAllocationForAddress(data));
    }, [blockchainSelected, searchParam.get("address")])


    const fetchProtocolAllocationForAddressHandler = useCallback(() => {
        const data = {
            address: searchParam.get("address"),
        }
        dispatch(fetchProtocolAllocationForAddress(data));
    }, [blockchainSelected, searchParam.get("address")])


    const fetchBlockchainAllocationForAddressHandler = useCallback(() => {
        const data = {
            address: searchParam.get("address"),
        }
        dispatch(fetchBlockchainAllocationForAddress(data));
    }, [blockchainSelected, searchParam.get("address")])


    const fetchInflowOutflowTokensForAddressHandler = useCallback(() => {
        const data = {
            address: searchParam.get("address"),
        }
        dispatch(fetchInflowOutflowTokensForAddress(data));
    }, [blockchainSelected, searchParam.get("address")])



    useEffect(() => {

        dispatch(walletAddressChangedReducer(searchParam.get("address")))

        fetchWalletBalanceDataHandler();
        fetchAssetAllocationForAddressHandler();
        fetchProtocolAllocationForAddressHandler();
        fetchBlockchainAllocationForAddressHandler();
        fetchInflowOutflowTokensForAddressHandler();
    }, [fetchWalletBalanceDataHandler])

    useEffect(() => {
        dispatch(fetchBlockchainListData());
    }, []);


    useEffect(() => {
        if (walletBalanceData?.isQueryInPendingState) {
            setTimeout(() => {
                fetchWalletBalanceDataHandler();
            }, 5000)
        }
    }, [walletBalanceData])

    return (
        <>
            <Box
                bgColor={useColorModeValue("#FFFFFF", "#131313")}
                display={"flex"}
                flexDirection={"column"}
                w="100%"
                
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    padding={{ base: "17px 13px 50px", md: "38px 30px 50px 30px" }}

                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Box
                            marginRight={"22px"}
                        >
                            <Image
                                w={{ base: "35px", md: "47px" }}
                                h={{ base: "35px", md: "47px" }}
                                borderRadius={"50%"}
                                src="/images/basic_profile.svg"
                                alt="proifile_img"
                            />
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            {
                                walletBalanceData?.name === undefined && (
                                    <Text
                                        fontSize={{ base: "18px", md: "24px" }}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        opacity={"0.5"}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        letterSpacing={"2.4px"}
                                    >
                                        No Name
                                    </Text>
                                )}
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                mt={{ base: "5px", md: "13px" }}
                            >
                                <Text
                                    display={{ base: "none", md: "flex" }}
                                    fontSize={{ base: "12px", md: "14px" }}
                                    fontWeight={"400"}
                                    color={useColorModeValue("#000000", "#A8ADBD")}
                                    //borderRight={useColorModeValue("1px solid #000000", "1px solid #A8ADBD")}
                                    paddingRight={"15px"}
                                >
                                    {walletAddress}
                                </Text>
                                <Text
                                    display={{ base: "flex", md: "none" }}
                                    fontSize={{ base: "12px", md: "14px" }}
                                    fontWeight={"400"}
                                    color={useColorModeValue("#000000", "#A8ADBD")}
                                    //borderRight={useColorModeValue("1px solid #000000", "1px solid #A8ADBD")}
                                    paddingRight={"15px"}
                                >
                                    {walletAddress?.split("").join("").substring(0, 6) + "......" + walletAddress?.slice(-5)}
                                </Text>
                                {/* <Text
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    lineHeight={"20px"}
                                    color={useColorModeValue("#3A3A3A", "#A8ADBD")}
                                    paddingLeft={"15px"}
                                    marginRight={"13px"}
                                >
                                    AGE
                                </Text>
                                <Text
                                    fontSize={"14px"}
                                    fontWeight={"500"}
                                    lineHeight={"20px"}
                                    color={useColorModeValue("#191919", "#FFF")}

                                >
                                    850 Days
                                </Text> */}
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        position={"relative"}
                    >
                        {/*  <SplineAreaChart /> */}
                        {/*  {(<Box
                            position={"relative"}
                            bottom={0}
                            right={0}
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <Text
                                fontSize={"12px"}
                                fontWeight={"300"}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                            >
                                Net Worth
                            </Text>
                            <Text
                                fontSize={"24px"}
                                fontWeight={"400"}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                letterSpacing={"2.4px"}
                            //  mt="15px"
                            >
                                {"$ "}{walletBalanceData?.totalAssetValue !== undefined ? millify(walletBalanceData?.totalAssetValue, {
                                    precision: 2,
                                    locales: "en-US"
                                }) : '-'}
                            </Text>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                mt="6px"
                            >
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    _dark={{
                                        color: "#FFFFFF"
                                    }}
                                    _light={{
                                        color: "#16171B"
                                    }}
                                    mr={'2px'}
                                >
                                    Last Updated
                                </Text>
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    _dark={{
                                        color: "#FFFFFF"
                                    }}
                                    _light={{
                                        color: "#16171B"
                                    }}
                                >
                                    {" "} 3 mins ago
                                </Text>
                            </Box>
                        </Box>)} */}
                    </Box>
                </Box>
                <Box>
                    <Tabs onChange={(index) => setTabIndex(index)} >
                        <TabList
                            paddingLeft={{ base: "0px", md: "30px" }}
                            w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                        >
                            <Tab
                                padding="0"
                                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                            >
                                <Box
                                    display={"flex"}
                                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                                    alignItems={"center"}
                                    padding={{ base: "12px 6px 12px 6px", md: "13px 19px 13px 17px" }}
                                    bgColor={tabIndex === 0 ? colorMode === 'light' ? ("#202020") : ("#FFFFFF") : colorMode === 'light' ? ("#F0F0F5") : ("#202020")}
                                >
                                    <Text
                                        fontSize={{ base: "10px", md: "14px" }}
                                        fontWeight={tabIndex === 0 ? "700" : "400"}
                                        color={tabIndex === 0 ? colorMode === 'light' ? ("#FFFFFF") : ("#000000") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                                        mr={{ base: "10px", md: "44px" }}
                                    >
                                        Transactions
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 0 ? colorMode === 'light' ? ('/images/transactions_black.svg') : ('/images/transactions_white.svg') : colorMode === 'light' ? ('/images/transactions_white.svg') : ('/images/transactions_black.svg')}
                                    ></Image>
                                </Box>
                            </Tab>
                            <Tab
                                padding="0"
                                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                            >
                                <Box
                                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                                    display={"flex"}
                                    alignItems={"center"}
                                    padding={{ base: "12px 6px 12px 6px", md: "13px 19px 13px 17px" }}
                                    bgColor={tabIndex === 1 ?
                                        (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                        (colorMode === 'light' ? "#F0F0F5" : "#202020")
                                    }
                                >
                                    <Text
                                        fontSize={{ base: "10px", md: "14px" }}
                                        color={tabIndex === 1 ?
                                            (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                                            (colorMode === 'light' ? "#202020" : "#FFFFFF")
                                        }
                                        fontWeight={tabIndex === 1 ? "700" : "400"}
                                        mr={{ base: "10px", md: "44px" }}
                                    >
                                        Portfolio
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 1 ? colorMode === 'light' ? ('/images/portfolio_black.svg') : ('/images/portfolio_white.svg') : colorMode === 'light' ? ('/images/portfolio_white.svg') : ('/images/portfolio_black.svg')}
                                    ></Image>
                                </Box>
                            </Tab>
                            <Tab
                                padding="0"
                                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                            >
                                <Box
                                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                                    display={"flex"}
                                    alignItems={"center"}
                                    padding={{ base: "12px 6px 12px 6px", md: "13px 19px 13px 17px" }}
                                    bgColor={tabIndex === 2 ?
                                        (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                        (colorMode === 'light' ? "#F0F0F5" : "#202020")
                                    }
                                >
                                    <Text
                                        fontSize={{ base: "10px", md: "14px" }}
                                        color={tabIndex === 2 ?
                                            (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                                            (colorMode === 'light' ? "#202020" : "#FFFFFF")
                                        }
                                        fontWeight={tabIndex === 2 ? "700" : "400"}
                                        mr={{ base: "10px", md: "44px" }}
                                    >
                                        Wallet Analytics
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 2 ? colorMode === 'light' ? ('/images/wallet_analytics_black.svg') : ('/images/wallet_analytics_white.svg') : colorMode === 'light' ? ('/images/wallet_analytics_white.svg') : ('/images/wallet_analytics_black.svg')}
                                    ></Image>
                                </Box>
                            </Tab>

                        </TabList>
                        <Box
                            bgColor={useColorModeValue("#F0F0F5", "#191919")}
                            padding={{ base: "0px", md: "32px" }}
                        >
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
                                    pt={{ base: "30px" }}
                                    overflowX="auto"
                                    flexWrap="nowrap"
                                    css={{
                                        '&::-webkit-scrollbar': {
                                            width: '0.2rem',
                                            height: '0.2rem',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    <Box
                                        position={"relative"}
                                        cursor={"pointer"}
                                        fontSize={"14px"}
                                        fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
                                        lineHeight={"20px"}
                                        color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                                        whiteSpace="nowrap"

                                        _after={
                                            blockchainSelected.length === 0 && {
                                                position: "absolute",
                                                content: '""',
                                                bottom: "-14px",
                                                left: 0,
                                                width: "100%",
                                                height: "2px",
                                                bgColor: colorMode === 'light' ? "#16171B" : "#FFFFFF",
                                            }
                                        }
                                        onClick={() => {
                                            BlockchainTypeHandler("All");
                                        }}
                                        mr={{ base: "18px", md: "18px" }}
                                        ml={{ base: "10px" }}
                                    >
                                        All
                                    </Box>
                                    {blockchains?.map((item, i) => {
                                        return (
                                            <Box
                                                position={"relative"}
                                                cursor={"pointer"}
                                                key={i}
                                                _after={
                                                    blockchainSelected.includes(item.id) && {
                                                        position: "absolute",
                                                        content: '""',
                                                        bottom: "-14px",
                                                        left: 0,
                                                        width: "100%",
                                                        height: "2px",
                                                        bgColor: colorMode === 'light' ? "#16171B" : "#FFFFFF",
                                                    }
                                                }
                                                onClick={() => {
                                                    BlockchainTypeHandler(item.id);
                                                }}
                                                mr={{ base: "18px", md: "18px" }}
                                                display={"flex"}
                                                alignItems={"center"}
                                                whiteSpace="nowrap"

                                            >
                                                <Tooltip
                                                    key={i} label={item.name}>
                                                    <Image
                                                        w={"18px"}
                                                        h={"18px"}
                                                        mr={"3px"}
                                                        src={item.logoUrl}
                                                        alt={`${item.id}_icon`}
                                                    ></Image>
                                                </Tooltip>
                                                <Text
                                                    fontSize={"14px"}
                                                    fontWeight={blockchainSelected.includes(item.id) ? "700" : "400"}
                                                    lineHeight={"20px"}
                                                    color={colorMode === 'light' ?
                                                        blockchainSelected.includes(item.id) ? "#191919" : "#191919"
                                                        :
                                                        blockchainSelected.includes(item.id) ? "#FFFFFF" : "#FFFFFF"
                                                    }
                                                    textTransform={"capitalize"}
                                                    mr={{ base: "18px", md: "18px" }}
                                                >
                                                    {item.name}
                                                </Text>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>
                            <TabPanels

                            >
                                <TabPanel
                                    p="0px"
                                >
                                    <TransactionPanelComponent />
                                </TabPanel>
                                <TabPanel
                                    p="0px"
                                >
                                    <PortfolioPanelComponent />
                                </TabPanel>
                                <TabPanel
                                    p="0px"
                                >
                                    <WalletAnalyticsPanel />
                                </TabPanel>


                            </TabPanels>
                        </Box>

                    </Tabs>
                </Box>
            </Box>
        </>
    );
};

export default WalletDashboardPage;
