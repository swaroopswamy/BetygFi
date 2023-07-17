/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Rankings from "./DefiRankingsTable";
import { blockchains, categories } from "../../../util/constant";
import OverviewColumnChart from "./OverviewColumnChart";
import OverviewAreaChart from "./OverviewAreaChart";
import { useDispatch, useSelector } from "react-redux";
import {
  blockchainTypeChangedReducer,
  categoryChangedReducer,
} from "@/redux/dashboard_data/dataSlice";
import Image from "next/image";

const Dashboard = () => {
  const dispatch = useDispatch();

  const BlockchainTypeHandler = (type) => {
    dispatch(blockchainTypeChangedReducer(type));
  };
  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );
  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );
  const categoryChangedHandler = (category) => {
    dispatch(categoryChangedReducer(category));
  };
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          px={{ base: "10px", md: "29px" }}
          paddingTop={"20px"}
          paddingBottom={"10px"}
          bgColor={useColorModeValue("#FFF", "#131313")}
        >
          <Text
            fontSize={"24px"}
            fontWeight={400}
            letterSpacing={"2.4px"}
            lineHeight={"20px"}
            mb="10px"
            textTransform={"uppercase"}
            color={useColorModeValue("#191919", "#FFFFFF")}
          >
            DeFi Markets
          </Text>
          <Text
            fontSize={"10px"}
            fontWeight={400}
            letterSpacing={"1px"}
            lineHeight={"15px"}
            mb="20px"
            opacity={"0.5"}
            color={useColorModeValue("#16171B", "#A8ADBD")}
          >
            Filter your DeFi exploration by focusing on both the blockchain technology it utilises and its specific industry application. This way, you'll uncover the projects best suited to your interests, whether in Prediction Markets, Lending and Borrowing, or Insurance.
          </Text>
          <Text
            fontSize={"10px"}
            fontWeight={400}
            letterSpacing={"1px"}
            lineHeight={"15px"}
            mb="5px"
            color={useColorModeValue("#191919", "#FFF")}
          >
            Select the blockchains you'd like to analyze
          </Text>
          <Box mr={{ base: 2, md: 4 }} display={"flex"}>
            {blockchains?.map((item, i) => (
              <>
                <Flex
                  cursor={"pointer"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  mr={{ base: 2, md: 4 }}
                  padding={"7px 9px"}
                  borderRadius="2px"
                  bgColor={
                    blockchainSelected === item
                      ? useColorModeValue("#F5F5F7", "#191919")
                      : useColorModeValue("#FFFFFF", "#202020")
                  }
                  border={useColorModeValue(
                    "1px solid #E0E0E0",
                    "1px solid #333"
                  )}
                  onClick={() => {
                    BlockchainTypeHandler(item);
                  }}
                >
                  {i !== 0 && (
                    <Image
                      width={12}
                      height={12}
                      src={`/icons/${item}_sm_icon.svg`}
                      alt="Follow us on Twitter"
                      style={{ marginRight: "4px" }}
                    ></Image>
                  )}
                  <Text
                    fontSize={"10px"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    letterSpacing={"1px"}
                    color={useColorModeValue("#16171B", "#FFF")}
                  >
                    {item}
                  </Text>
                </Flex>
              </>
            ))}
          </Box>
        </Box>
        <Box
          padding={"20px 32px"}
          display={"inline-flex"}
          flexDirection={"column"}
          bgColor={useColorModeValue("#F0F0F5", "#191919")}
        >
          <Box>
            <Text
              fontSize={"10px"}
              fontWeight={400}
              letterSpacing={"1px"}
              lineHeight={"15px"}
              mb="5px"
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              Choose the markets you'd like to explore
            </Text>
          </Box>
          <Box display={"flex"} mb="15px">
            {categories.map((category, i) => {
              return (
                <>
                  <Box
                    key={i}
                    borderRadius="2px"
                    padding={"7px 9px"}
                    mx="4px"
                    cursor={"pointer"}
                    border={useColorModeValue(
                      "1px solid #E8E8E8",
                      "1px solid #333"
                    )}
                    bgColor={
                      categorySelected === category
                        ? useColorModeValue("#FFF", "#191919")
                        : useColorModeValue("#F5F5F7", "#202020")
                    }
                    onClick={() => {
                      categoryChangedHandler(category);
                    }}
                  >
                    <Text
                      fontSize={"10px"}
                      fontWeight={600}
                      letterSpacing={"1px"}
                      lineHeight={"15px"}
                      color={useColorModeValue("#191919", "#FFFFFF")}
                    >
                      {category}
                    </Text>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box display={"inline-flex"} mb={"30px"}>
            <Box
              w="62%"
              borderRadius={"4px"}
              bgColor={useColorModeValue("#FFFFFF", "#202020")}
              filter={"filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));"}
              px={{ base: "10px", md: "20px" }}
              py={{ base: "10px", md: "25px" }}
              mr={{ base: "10px", md: "25px" }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Text
                  color={useColorModeValue("#16171B", "#FFF")}
                  fontSize={"15px"}
                  fontWeight={"400"}
                >
                  Overview
                </Text>
                <Box display={"flex"} alignItems={"center"}>
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"12px"}
                    fontWeight={"300"}
                    mr="14px"
                  >
                    Total Market Cap
                  </Text>
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"24px"}
                    fontWeight={"400"}
                    letterSpacing={"2.4px"}
                  >
                    $13.84 B
                  </Text>
                </Box>
              </Box>
              <OverviewAreaChart />
            </Box>
            <Box
              w="35%"
              borderRadius={"4px"}
              bgColor={useColorModeValue("#FFFFFF", "#202020")}
              filter={"filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));"}
              px={{ base: "10px", md: "20px" }}
              py={{ base: "10px", md: "25px" }}
            >
              <Text
                color={useColorModeValue("#16171B", "#FFF")}
                fontSize={"15px"}
                fontWeight={"400"}
              >
                Score Distribution
              </Text>
              <OverviewColumnChart />
            </Box>
          </Box>
          <Box w="100%">
            <Box
              display={"flex"}
              flexDirection={"column"}
              bgColor={useColorModeValue("#FFFFFF", "#202020")}
              border={"1px solid"}
              borderColor={useColorModeValue("#FFFFFF", "#272727")}
              borderRadius={"6px"}
              dropShadow={"box-shadow: 0px 4px 4px 0px #0000000D;"}
            >
              <Flex justifyContent={"space-between"} padding={"23px 29px 27px"}>
                <Text
                  fontSize="2xl"
                  fontWeight={"400"}
                  color={useColorModeValue("#16171B", "#FFF")}
                >
                  Defi Ranking
                </Text>
                <Flex alignItems={"center"}>
                  <Box>
                    <Input placeholder="Search DeFi" />
                  </Box>
                </Flex>
              </Flex>

              <Rankings />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
