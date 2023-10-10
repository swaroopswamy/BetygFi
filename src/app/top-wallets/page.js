"use client";

import React from "react";
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  useColorMode,
  border,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockchains } from "../../../util/constant";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import WalletTable from "../components/pages/topWallets/walletTable";

const WalletDashboardPage = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const blockchainSelected = useSelector(
    (state) => state?.walletDashboardTableData?.blockchainType
  );
  const BlockchainTypeHandler = (type) => {
    dispatch(blockchainTypeChangedReducer(type));
  };

  return (
    <>
      <Box
        bgColor={useColorModeValue("#F5F5F7", "#131313")}
        layerStyle={"flexColumnSpaceBetween"}>
        <Box
          layerStyle={"flexSpaceBetween"}
          padding={"38px 30px 0px 30px"}
          bgColor={useColorModeValue("#FFFFFF", "#131313")}>
          <Box layerStyle={"flexColumnSpaceBetween"}>
            <Text variant={"contentHeading"}>
              Top Wallets
            </Text>

            <Box layerStyle={"flexCenter"} mt={"13px"}>
              <Text
                variant={"TopWalletsText"}
                paddingBottom={"30px"}>
                BetygFi have filtered and identified a comprehensive collection
                of significant wallet addresses, enabling you to effortlessly
                monitor and analyze critical on-chain events and transactions.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          layerStyle={"flexColumnSpaceBetween"}
          padding={{ base: "15px", md: "10px 30px 50px 30px" }}
          bgColor={useColorModeValue("#F0F0F5", "#191919")}>
          <Box
            pt={{ base: "0", md: "20px" }}
            bgColor={useColorModeValue("#F0F0F5", "#191919")}>
            <WalletTable />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WalletDashboardPage;

function SelectionBox({
  blockchainSelected,
  colorMode,
  BlockchainTypeHandler,
}) {
  return (
    <>
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
                bgColor: colorMode === "light" ? "#191919" : "#FFFFFF",
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
                    bgColor: colorMode === "light" ? "#191919" : "#FFFFFF",
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
                  color={
                    colorMode === "light"
                      ? blockchainSelected.includes(item)
                        ? "#191919"
                        : "#191919"
                      : blockchainSelected.includes(item)
                      ? "#FFFFFF"
                      : "#FFFFFF"
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
  );
}
