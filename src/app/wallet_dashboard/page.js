"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useColorModeValue,
  useColorMode,
  useBreakpoint,
  Flex,
} from "@chakra-ui/react";
import SplineAreaChart from "./SplineAreaChart";
import { useDispatch, useSelector } from "react-redux";
import PortfolioPanelComponent from "./portfolio.js";
import WalletAnalyticsPanel from "./wallet_analytics";
import TransactionPanelComponent from "./transaction";
import {
  blockchainTypeChangedReducer,
  fetchAssetAllocationForAddress,
  fetchBlockchainAllocationForAddress,
  fetchProtocolAllocationForAddress,
  fetchInflowOutflowTokensForAddress,
  fetchWalletBalanceData,
  walletAddressChangedReducer,
} from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from "../../../util/constant";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import "./styles.css";
import Breadcrumb from "@/app/components/breadcrumb";
import HeaderComponent from "@/app/components/pages/walletDashboard/HeaderComponent";

const WalletDashboardPage = () => {
  const searchParam = useSearchParams();
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);

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
  const walletBalanceData = useSelector(
    (state) => state?.walletDashboardTableData?.walletBalanceData?.data
  );

  const walletTransactionsData = useSelector(
    (state) => state?.walletDashboardTableData?.walletTransactionsData
  );

  const fetchWalletBalanceDataHandler = useCallback(() => {
    const data = {
      address: searchParam.get("address"),
      payload: {
        blockchain: blockchainSelected,
      },
    };
    dispatch(fetchWalletBalanceData(data));
  }, [blockchainSelected, searchParam.get("address")]);

  const fetchAssetAllocationForAddressHandler = useCallback(() => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchAssetAllocationForAddress(data));
  }, [blockchainSelected, searchParam.get("address")]);

  const fetchProtocolAllocationForAddressHandler = useCallback(() => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchProtocolAllocationForAddress(data));
  }, [blockchainSelected, searchParam.get("address")]);

  const fetchBlockchainAllocationForAddressHandler = useCallback(() => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchBlockchainAllocationForAddress(data));
  }, [blockchainSelected, searchParam.get("address")]);

  const fetchInflowOutflowTokensForAddressHandler = useCallback(() => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchInflowOutflowTokensForAddress(data));
  }, [blockchainSelected, searchParam.get("address")]);

  useEffect(() => {
    dispatch(walletAddressChangedReducer(searchParam.get("address")));

    fetchWalletBalanceDataHandler();
    fetchAssetAllocationForAddressHandler();
    fetchProtocolAllocationForAddressHandler();
    fetchBlockchainAllocationForAddressHandler();
    fetchInflowOutflowTokensForAddressHandler();
  }, [fetchWalletBalanceDataHandler]);

  useEffect(() => {
    dispatch(fetchBlockchainListData());
  }, []);

  useEffect(() => {
    if (walletBalanceData?.isQueryInPendingState) {
      setTimeout(() => {
        fetchWalletBalanceDataHandler();
      }, 5000);
    }
  }, [walletBalanceData]);

  return (
    <>
      <Box
        bgColor={useColorModeValue("#FFFFFF", "#131313")}
        layerStyle={"flexColumn"}
        w="100%"
      >
        <Breadcrumb
          link="/top-wallets"
          text="Top Wallets/"
          additionalText={walletBalanceData?.name}
        />
        <HeaderComponent walletBalanceData={walletBalanceData} walletAddress={walletAddress} />

        <Box>
          <Tabs onChange={(index) => setTabIndex(index)}>
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
                  h={"35px"}
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  alignItems={"center"}
                  padding={{
                    base: "12px 6px 12px 6px",
                    md: "13px 19px 12px 12px",
                  }}
                  bgColor={
                    tabIndex === 0
                      ? colorMode === "light"
                        ? "#202020"
                        : "#FFFFFF"
                      : colorMode === "light"
                      ? "#F0F0F5"
                      : "#202020"
                  }
                >
                  <Text
                    fontSize={{ base: "10px", md: "14px" }}
                    fontWeight={tabIndex === 0 ? "600" : "400"}
                    color={
                      tabIndex === 0
                        ? colorMode === "light"
                          ? "#FFFFFF"
                          : "#000000"
                        : colorMode === "light"
                        ? "#000000"
                        : "#FFFFFF"
                    }
                    mr={{ base: "10px", md: "44px" }}
                    lineHeight={"10px"}
                  >
                    Transactions
                  </Text>
                  <Image
                    w="25px"
                    h="25px"
                    alt="icon"
                    src={
                      tabIndex === 0
                        ? colorMode === "light"
                          ? "/images/transactions_black.svg"
                          : "/images/transactions_white.svg"
                        : colorMode === "light"
                        ? "/images/transactions_white.svg"
                        : "/images/transactions_black.svg"
                    }
                  ></Image>
                </Box>
              </Tab>
              <Tab
                padding="0"
                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              >
                <Box
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  h={"35px"}
                  display={"flex"}
                  alignItems={"center"}
                  padding={{
                    base: "12px 6px 12px 6px",
                    md: "13px 19px 12px 15x",
                  }}
                  bgColor={
                    tabIndex === 1
                      ? colorMode === "light"
                        ? "#202020"
                        : "#FFFFFF"
                      : colorMode === "light"
                      ? "#F0F0F5"
                      : "#202020"
                  }
                >
                  <Text
                    fontSize={{ base: "10px", md: "14px" }}
                    color={
                      tabIndex === 1
                        ? colorMode === "light"
                          ? "#FFFFFF"
                          : "#202020"
                        : colorMode === "light"
                        ? "#202020"
                        : "#FFFFFF"
                    }
                    fontWeight={tabIndex === 1 ? "700" : "400"}
                    mr={{ base: "10px", md: "44px" }}
                    lineHeight={"10px"}
                  >
                    Portfolio
                  </Text>
                  <Image
                    w="24px"
                    h="24px"
                    alt="icon"
                    src={
                      tabIndex === 1
                        ? colorMode === "light"
                          ? "/images/portfolio_black.svg"
                          : "/images/portfolio_white.svg"
                        : colorMode === "light"
                        ? "/images/portfolio_white.svg"
                        : "/images/portfolio_black.svg"
                    }
                  ></Image>
                </Box>
              </Tab>
              <Tab
                padding="0"
                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              >
                <Box
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  h={"35px"}
                  display={"flex"}
                  alignItems={"center"}
                  padding={{
                    base: "12px 6px 12px 6px",
                    md: "13px 19px 12px 12px",
                  }}
                  bgColor={
                    tabIndex === 2
                      ? colorMode === "light"
                        ? "#202020"
                        : "#FFFFFF"
                      : colorMode === "light"
                      ? "#F0F0F5"
                      : "#202020"
                  }
                >
                  <Text
                    fontSize={{ base: "10px", md: "14px" }}
                    color={
                      tabIndex === 2
                        ? colorMode === "light"
                          ? "#FFFFFF"
                          : "#202020"
                        : colorMode === "light"
                        ? "#202020"
                        : "#FFFFFF"
                    }
                    fontWeight={tabIndex === 2 ? "700" : "400"}
                    mr={{ base: "10px", md: "44px" }}
                    lineHeight={"10px"}
                  >
                    Wallet Analytics
                  </Text>
                  <Image
                    w="24px"
                    h="24px"
                    alt="icon"
                    src={
                      tabIndex === 2
                        ? colorMode === "light"
                          ? "/images/wallet_analytics_black.svg"
                          : "/images/wallet_analytics_white.svg"
                        : colorMode === "light"
                        ? "/images/wallet_analytics_white.svg"
                        : "/images/wallet_analytics_black.svg"
                    }
                  ></Image>
                </Box>
              </Tab>
            </TabList>
            <Box
              bgColor={useColorModeValue("#F0F0F5", "#191919")}
              padding={{ base: "0px", md: "32px" }}
            >
              <Box display={"flex"} flexDirection={"column"}>
                <Box
                  w={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  borderBottom={useColorModeValue(
                    "1px solid #CECECE",
                    "1px solid #2F2F2F"
                  )}
                  pb="14px"
                  pt={{ base: "10px" }}
                  overflowX="auto"
                  flexWrap="nowrap"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "0.2rem",
                      height: "0.2rem",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "transparent",
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
                        bgColor: colorMode === "light" ? "#16171B" : "#FFFFFF",
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
                            bgColor:
                              colorMode === "light" ? "#16171B" : "#FFFFFF",
                          }
                        }
                        onClick={() => {
                          BlockchainTypeHandler(item.id);
                        }}
                        mr={{ base: "20px", md: "20px" }}
                        display={"flex"}
                        alignItems={"center"}
                        whiteSpace="nowrap"
                      >
                        <Tooltip key={i} label={item.name}>
                          <Image
                            w={"18px"}
                            h={"18px"}
                            mr={"3px"}
                            style={{ borderRadius: "50%" }}
                            src={item.logoUrl}
                            alt={`${item.id}_icon`}
                          ></Image>
                        </Tooltip>
                        <Text
                          fontSize={"14px"}
                          ml={"6px"}
                          fontWeight={
                            blockchainSelected.includes(item.id) ? "700" : "400"
                          }
                          lineHeight={"20px"}
                          color={
                            colorMode === "light"
                              ? blockchainSelected.includes(item.id)
                                ? "#191919"
                                : "#191919"
                              : blockchainSelected.includes(item.id)
                              ? "#FFFFFF"
                              : "#FFFFFF"
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
              <TabPanels>
                <TabPanel p="0px">
                  <TransactionPanelComponent />
                </TabPanel>
                <TabPanel p="0px">
                  <PortfolioPanelComponent />
                </TabPanel>
                <TabPanel p="0px">
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
