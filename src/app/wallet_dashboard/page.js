"use client";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
const PortfolioPanelComponent = dynamic(() =>
  import("../components/pages/walletDashboard/portfolio.js")
);
const WalletAnalyticsPanel = dynamic(() =>
  import("../components/pages/walletDashboard/wallet_analytics")
);
const TransactionPanelComponent = dynamic(() =>
  import("../components/pages/walletDashboard/transaction")
);
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

const Breadcrumb = dynamic(() => import("@/app/components/breadcrumb"));
const HeaderComponent = dynamic(() =>
  import("@/app/components/pages/walletDashboard/HeaderComponent")
);
const DashboardTabList = dynamic(() =>
  import("../components/pages/walletDashboard/DashboardTabList")
);
const BlockchainSelectionMenuBlocks = dynamic(() =>
  import("@/app/components/blockchainSelectionMenuBlocks")
);

function WalletDashboardPage() {
  console.log("renderingg");
  const didLogRef = useRef(false);
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

  /* 
  const {
    data: data2,
    error: error2,
  } = useSWR("api/fetchWalletBalanceDataHandler?query=${blockchainSelected}", fetchWalletBalanceDataHandler);
  */

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
    if (blockchainSelected.length > 0) {
      fetchWalletBalanceDataHandler();
      fetchAssetAllocationForAddressHandler();
      fetchProtocolAllocationForAddressHandler();
      fetchBlockchainAllocationForAddressHandler();
      fetchInflowOutflowTokensForAddressHandler();
      fetchWalletBalanceDataHandler();
    }
  }, [blockchainSelected, searchParam.get("address")]);

  useEffect(() => {
    if (blockchainSelected.length > 0) {
      dispatch(fetchBlockchainListData());
      dispatch(walletAddressChangedReducer(searchParam.get("address")));
    }
  }, []);
  /* const { data: data1, error: error1 } = useSWR(
    ["getBlockchainListData", blockchainSelected, searchParam.get("address")],
    fetchBlockchainListData()
  ); */

  /*   useEffect(() => {
    if (walletBalanceData?.isQueryInPendingState) {
      setTimeout(() => {
        fetchWalletBalanceDataHandler();
      }, 5000);
    }
  }, [walletBalanceData]);
 */
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default WalletDashboardPage;
