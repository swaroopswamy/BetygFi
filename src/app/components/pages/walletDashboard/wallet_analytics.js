"use client";
import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { USDollar } from "../../../../../util/globalHelper";
import dynamic from "next/dynamic";

const BlockchainAllocationBox = dynamic(() =>
  import("/src/app/components/pages/walletDashboard/BlockchainAllocationBox")
);
const AssetAllocationBox = dynamic(() =>
  import("/src/app/components/pages/walletDashboard/AssetAllocationBox")
);
const ProtocolAllocationBox = dynamic(() =>
  import("/src/app/components/pages/walletDashboard/ProtocolAllocationBox")
);
const InteractionWithKnownEntitiesBox = dynamic(() =>
  import(
    "/src/app/components/pages/walletDashboard/InteractionWithKnownEntitiesBox"
  )
);
const InflowTokensBox = dynamic(() =>
  import("/src/app/components/pages/walletDashboard/InflowTokensBox")
);
const OutflowTokensBox = dynamic(() =>
  import("/src/app/components/pages/walletDashboard/OutflowTokensBox")
);
const PerformanceMultiLineChartBox = dynamic(() =>
  import(
    "/src/app/components/pages/walletDashboard/PerformanceMultiLineChartBox"
  )
);
const WalletAnalyticsPanel = () => {


  return (
    <>
      <Box
        layerStyle={"flexAlignCenterJustifyCenter"}
        flexDir={{ base: "column", bigSize: "row" }}
        gap={"20px"}
        w="100%"
        my="20px"
      >
        <BlockchainAllocationBox />

        <AssetAllocationBox />
      </Box>

      <Box
        layerStyle={"flexAlignCenterJustifyCenter"}
        flexDir={{ base: "column", bigSize: "row" }}
        gap={"20px"}
        w="100%"
        my="20px"
      >
        <ProtocolAllocationBox />
        <InteractionWithKnownEntitiesBox />
      </Box>

      <Box
        layerStyle={"flexAlignCenterJustifyCenter"}
        flexDir={{ base: "column", bigSize: "row" }}
        gap={"20px"}
        w="100%"
        my="20px"
      >
        <InflowTokensBox />

        <OutflowTokensBox />
      </Box>
      {/* <Box
        my="10px"
        w='100%'
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"6px"}
        _dark={{
          bg: "#202020",
          border: "1px solid #272727"
        }}
        _light={{
          bg: "#FFFFFF",
          border: "1px solid #ADADAD"
        }}
        p="25px"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={"18px"}
            fontWeight={600}
            lineHeight={"20px"}
            _dark={{ color: "#FFF" }}
            _light={{ color: "#212121" }}
          >
            Asset Trend
          </Text> 
        </Box>
        <Box paddingTop={"10px"}>
          <AssetTrendSplineChart />
        </Box>
      </Box> */}

      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w="100%"
        mt="20px"
      >
        <PerformanceMultiLineChartBox />
      </Box>
    </>
  );
};

export default WalletAnalyticsPanel;
