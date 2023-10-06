import { Box, Image, Tab, TabList, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const DashboardTabList = ({ tabIndex }) => {
  const { colorMode } = useColorMode();
  return (
    <TabList
      paddingLeft={{ base: "0px", md: "30px" }}
      w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
    >
      <Tab
        padding="0"
        w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
      >
        <Box
          layerStyle={"flexCenter"}
          h={"35px"}
          w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
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
          layerStyle={"flexCenter"}
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
          layerStyle={"flexCenter"}
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
  );
};

export default DashboardTabList;
