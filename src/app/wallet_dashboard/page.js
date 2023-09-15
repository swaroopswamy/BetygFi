"use client"
import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text,Tooltip, useColorModeValue, useColorMode, useBreakpoint } from "@chakra-ui/react";
import SplineAreaChart from "./SplineAreaChart"
import { useDispatch, useSelector } from "react-redux";
import PortfolioPanelComponent from "./portfolio.js"
import WalletAnalyticsPanel from "./wallet_analytics";
import TransactionPanelComponent from "./transaction";
import { blockchainTypeChangedReducer, fetchAssetAllocationForAddress, fetchBlockchainAllocationForAddress, fetchProtocolAllocationForAddress, fetchInflowOutflowTokensForAddress, fetchWalletBalanceData, fetchWalletTransactionsData, walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from "../../../util/constant";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import './styles.css';

const WalletDashboardPage = () => {
    const searchParam = useSearchParams();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const [tabIndex, setTabIndex] = useState(0)
    const [tablePage, setTablePage] = useState(1);

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

    const pageChangeHandler = (page) => {
        tablePage >= 1 && setTablePage(page);
    }

    const fetchWalletTransactionsDataHandler = useCallback(() => {
        const data = {
            address: searchParam.get("address"),
            payload: {
                blockchain: blockchainSelected,
                limit: 20,
                page: tablePage
            }
        }
        dispatch(fetchWalletTransactionsData(data));
    }, [blockchainSelected, tablePage, searchParam.get("address")])


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
        fetchWalletTransactionsDataHandler();
        fetchAssetAllocationForAddressHandler();
        fetchProtocolAllocationForAddressHandler();
        fetchBlockchainAllocationForAddressHandler();
        fetchInflowOutflowTokensForAddressHandler();
    }, [fetchWalletBalanceDataHandler, fetchWalletTransactionsDataHandler])

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
                                w={{ base: "30px", md: "30px" }}
                                h={{ base: "30px", md: "30px" }}
                                borderRadius={"50%"}
                                src="/images/basic_profile.png"
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
                                mt={{base:"5px",md:"13px"}}
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
                                        src={tabIndex === 0 ? colorMode === 'light' ? ('/images/transactions_white.png') : ('/images/transactions_black.png') : colorMode === 'light' ? ('/images/transactions_black.png') : ('/images/transactions_white.png')}
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
                                        src={tabIndex === 1 ? colorMode === 'light' ? ('/images/portfolio_white.png') : ('/images/portfolio_black.png') : colorMode === 'light' ? ('/images/portfolio_black.png') : ('/images/portfolio_white.png')}
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
                                        src={tabIndex === 2 ? colorMode === 'light' ? ('/images/wallet_analytics_white.png') : ('/images/wallet_analytics_black.png') : colorMode === 'light' ? ('/images/wallet_analytics_black.png') : ('/images/wallet_analytics_white.png')}
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
                                                height: "1px",
                                                bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
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
                                                        height: "1px",
                                                        bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
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
                                    <PageButtons
                                        tablePage={tablePage}
                                        pageChangeHandler={pageChangeHandler}
                                        totalPages={walletTransactionsData?.data?.totalPages}
                                    />
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

function PageButtons({ tablePage, pageChangeHandler, totalPages }) {
    return (
        <>
            <Box
            //w={"100%"}
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"end"}
                padding="20px 10px"
                marginLeft={"20px"}
                marginRight={"17px"}
                background={useColorModeValue('#FFFFFF', '#202020')}
            >

                <Box
                    display={"flex"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        mr={"15px"}
                        gap={"10px"}
                    >
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"10px"}
                            fontWeight={"400"}
                        >
                            Page
                        </Text>
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"14px"}
                            fontWeight={"600"}
                        >
                            {tablePage}
                        </Text>
                    </Box>

                    {/* <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        mt={"5px"}
                        w={"12px"}
                        h={"12px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        padding="0px"
                    >
                        <Image
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '90deg' }}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button> */}

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        borderRadius={"0px"}
                        padding="0px"
                        onClick={() => {
                            if (tablePage > 1)
                                pageChangeHandler(tablePage - 1);
                        }}
                        cursor={tablePage === 1 ? "not-allowed" : "pointer"}
                        disabled={tablePage === 1}
                    >
                        <Image
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '180deg' }}
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                            alt="prev-arrow"
                        ></Image>
                    </Button>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderRadius={"0px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        padding="0px"
                        onClick={() => {
                            if (tablePage < totalPages) // totalPages goes here
                                pageChangeHandler(tablePage + 1);
                        }}
                        cursor={tablePage === totalPages ? "not-allowed" : "pointer"}
                        disabled={tablePage === totalPages}
                    >
                        <Image
                            width={15}
                            height={15}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>
                </Box>

            </Box>
        </>)
}