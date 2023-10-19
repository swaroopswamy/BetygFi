"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import BlockchainSelectionMenuBlocks from "@/app/components/blockchainSelectionMenuBlocks";
import useSWR from "swr";

function WalletDashboardPage() {
  const useEffectWork = useRef(0);
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

  const fetchWalletBalanceDataHandler = () => {
    const data = {
      address: searchParam.get("address"),
      payload: {
        blockchain: blockchainSelected,
      },
    };
    dispatch(fetchWalletBalanceData(data));
  };

  const fetchAssetAllocationForAddressHandler = () => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchAssetAllocationForAddress(data));
  };

  const fetchProtocolAllocationForAddressHandler = () => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchProtocolAllocationForAddress(data));
  };

  const fetchBlockchainAllocationForAddressHandler = () => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchBlockchainAllocationForAddress(data));
  };

  const fetchInflowOutflowTokensForAddressHandler = () => {
    const data = {
      address: searchParam.get("address"),
    };
    dispatch(fetchInflowOutflowTokensForAddress(data));
  };
  /*   useEffect(() => {
    Promise.all([
      dispatch(fetchBlockchainListData()),
      dispatch(walletAddressChangedReducer(searchParam.get("address"))),
      fetchWalletBalanceDataHandler(),
      fetchAssetAllocationForAddressHandler(),
      fetchProtocolAllocationForAddressHandler(),
      fetchBlockchainAllocationForAddressHandler(),
      fetchInflowOutflowTokensForAddressHandler()
    ])
  }, [fetchWalletBalanceDataHandler]); */

  useEffect(() => {
    Promise.all([
      dispatch(fetchBlockchainListData()),
      dispatch(walletAddressChangedReducer(searchParam.get("address"))),
      fetchWalletBalanceDataHandler(),
      fetchAssetAllocationForAddressHandler(),
      fetchProtocolAllocationForAddressHandler(),
      fetchBlockchainAllocationForAddressHandler(),
      fetchInflowOutflowTokensForAddressHandler(),
      fetchWalletBalanceDataHandler(),
    ]);
    return () => {
      console.log("cleanup");
    };
  }, []);

  /*   useEffect(() => {
    dispatch(fetchBlockchainListData());
    dispatch(walletAddressChangedReducer(searchParam.get("address")));
  }, []); */

  /*  const { data: data1, error: error1 } = useSWR(
    ["getBlockchainListData", blockchainSelected, searchParam.get("address")],
    fetchBlockchainListData()
  );
  const { data: data2, error: error2 } = useSWR(
    [
      " fetchWalletBalanceDataHandler",
      blockchainSelected,
      searchParam.get("address"),
    ],
    fetchWalletBalanceDataHandler
  ); */

  /*   useEffect(() => {
    if (walletBalanceData?.isQueryInPendingState) {
      setTimeout(() => {
        fetchWalletBalanceDataHandler();
      }, 5000);
    }
  }, [walletBalanceData]); */

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
              <TabPanels bgColor={useColorModeValue("#F0F0F5", "#191919")}>
                <TabPanel
                  p="0px"
                  bgColor={useColorModeValue("#F0F0F5", "#191919")}
                >
                  <TransactionPanelComponent />
                </TabPanel>
                <TabPanel
                  p="0px"
                  bgColor={useColorModeValue("#F0F0F5", "#191919")}
                >
                  <PortfolioPanelComponent />
                </TabPanel>
                <TabPanel
                  p="0px"
                  bgColor={useColorModeValue("#F0F0F5", "#191919")}
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
}

export default WalletDashboardPage;
