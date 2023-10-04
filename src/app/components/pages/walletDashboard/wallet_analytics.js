"use client";
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import ProtocolAllocationTable from "./ProtocolAllocationTable";
import InteractionWithKnownEntitiesTable from "./InteractionWithKnownEntitiesTable";
import InflowTokensTable from "./InflowTokensTable";
import OutflowTokensTable from "./OutflowTokensTable";
import { USDollar } from "../../../../../util/globalHelper";
import BlockchainAllocationBox from "./BlockchainAllocationBox";
import AssetAllocationBox from "./AssetAllocationBox";

const WalletAnalyticsPanel = () => {
  const { colorMode } = useColorMode();
  const inflowOutflowTokensData = useSelector(
    (state) => state?.walletDashboardTableData?.inflowOutflowTokensForAddress
  );

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
        display={"flex"}
        flexDir={{ base: "column", bigSize: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w="100%"
        my="20px"
      >
        <Box
          w={{ base: "90%", bigSize: "50%", md: "90%" }}
          height={{ base: "none", md: "367px" }}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <ProtocolAllocationTable />
        </Box>

        <Box
          w={{ base: "90%", bigSize: "50%", md: "90%" }}
          height={"367px"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <InteractionWithKnownEntitiesTable />
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDir={{ base: "column", bigSize: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w="100%"
        my="20px"
      >
        <Box
          w={{ base: "90%", bigSize: "50%", md: "90%" }}
          height={{ base: "none", md: "367px" }}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <InflowTokensTable />
        </Box>

        <Box
          w={{ base: "90%", bigSize: "50%", md: "90%" }}
          height={{ base: "none", md: "367px" }}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <OutflowTokensTable />
        </Box>
      </Box>

      {/* End of varun's code */}

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
        <Box
          my="20px"
          w={{ base: "90%", md: "100%" }}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
          p="25px"
        >
          <Flex
            height={"10px"}
            borderRadius={"6px"}
            _dark={{
              bg: "#202020",
              color: "#FFFFFF",
            }}
            _light={{
              bg: "#FFFFFF",
              color: "#16171B",
            }}
            pb="14px"
          >
            <Text
              fontSize={"18px"}
              fontWeight={600}
              lineHeight={"20px"}
              _dark={{ color: "#FFF" }}
              _light={{ color: "#212121" }}
              paddingLeft={"15px"}
            >
              Performance
            </Text>

            <Tooltip
              bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
              padding="4px 8px"
              fontWeight={400}
              fontSize={"10px"}
              label="Performance graph shows the wallet portfolio performance in comparison with Bitcoin and Ethereum market performance."
            >
              <Image
                width={"12px"}
                height={"12px"}
                flexShrink={"0"}
                mt={"5px"}
                ml={"5px"}
                alt=""
                src="/images/Frame.svg"
              ></Image>
            </Tooltip>
          </Flex>

          <Box
            _dark={{
              color: "#FFF",
            }}
            _light={{
              color: "#16171B",
            }}
            fontSize={"20px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
            mt={"100px"}
            colSpan={8}
            textAlign={"center"}
            p="20px"
            height={"245px"}
            opacity={0.6}
          >
            No Data Available
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WalletAnalyticsPanel;
