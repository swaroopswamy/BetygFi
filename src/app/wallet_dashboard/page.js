"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import SplineAreaChart from "../components/pages/walletDashboard/SplineAreaChart";
import { useDispatch, useSelector } from "react-redux";
import PortfolioPanelComponent from "../components/pages/walletDashboard/portfolio.js";
import WalletAnalyticsPanel from "../components/pages/walletDashboard/wallet_analytics";
import TransactionPanelComponent from "../components/pages/walletDashboard/transaction";
import {
  blockchainTypeChangedReducer,
  fetchAssetAllocationForAddress,
  fetchBlockchainAllocationForAddress,
  fetchProtocolAllocationForAddress,
  fetchInflowOutflowTokensForAddress,
  fetchWalletBalanceData,
  walletAddressChangedReducer,
} from "@/redux/wallet_dashboard_data/dataSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";

import Breadcrumb from "@/app/components/breadcrumb";
import HeaderComponent from "@/app/components/pages/walletDashboard/HeaderComponent";
import DashboardTabList from "../components/pages/walletDashboard/DashboardTabList";
import BlockchainSelectionMenuBlocks from "@/app/components/BlockchainSelectionMenuBlocks";

const WalletDashboardPage = () => {
  const searchParam = useSearchParams();
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);

  const blockchainSelected = useSelector(
    (state) => state?.walletDashboardTableData?.blockchainType
  );
  const walletAddress = useSelector(
    (state) => state?.walletDashboardTableData?.walletAddress
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
        <HeaderComponent
          walletBalanceData={walletBalanceData}
          walletAddress={walletAddress}
        />

        <Box>
          <Tabs onChange={(index) => setTabIndex(index)}>
            <DashboardTabList tabIndex={tabIndex} />
            <Box
              bgColor={useColorModeValue("#F0F0F5", "#191919")}
              padding={{ base: "0px", md: "32px" }}
            >
              <Box display={"flex"} flexDirection={"column"}>
                <BlockchainSelectionMenuBlocks />
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
