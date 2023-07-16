'use client'
import { Box, Flex, Grid, GridItem, Icon, Input, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import Rankings from "./DefiRankingsTable";
import { blockchains } from '../../../util/constant'
import OverviewColumnChart from "./OverviewColumnChart";
import OverviewAreaChart from "./OverviewAreaChart";
import Ethereum from '../../../public/icons/Ethereum_sm_icon.svg';
import Tron from '../../../public/icons/Tron_sm_icon.svg';
import BSC from '../../../public/icons/BSC_sm_icon.svg';
import Arbitrum from '../../../public/icons/Arbitrum_sm_icon.svg';
import Polygon from '../../../public/icons/Polygon_sm_icon.svg';
import { getDefiRankingsTableData } from "@/services/dashboardService";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/dashboard_data/dataSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const BlockchainTypeHandler = (type) =>{
    dispatch(blockchainTypeChangedReducer(type));    
  }
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          display={"inline-flex"}
          mb={"30px"}
        >
          <Box
            w='62%'
            borderRadius={"4px"}
            bgColor={useColorModeValue("#FFFFFF", "#202020")}
            filter={"filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));"}
            px={{ base: "10px", md: "20px" }}
            py={{ base: "10px", md: "25px" }}
            mr={{ base: "10px", md: "25px" }}
          >
            <Text
              color={useColorModeValue("#16171B", "#FFF")}
              fontSize={"15px"}
              fontWeight={"400"}
            >
              Overview
            </Text>
            <OverviewAreaChart />
          </Box>
          <Box
            w='35%'
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
        <Box w='100%' >
          <Box
            display={"flex"}
            flexDirection={"column"}
            bgColor={useColorModeValue("#FFFFFF", "#202020")}
            border={"1px solid"}
            borderColor={useColorModeValue("#FFFFFF", "#272727")}
            borderRadius={"6px"}
            dropShadow={"box-shadow: 0px 4px 4px 0px #0000000D;"}
          >
            <Flex
              justifyContent={"space-between"}
              padding={"23px 29px 27px"}
            >
              <Text
                fontSize='2xl'
                fontWeight={"400"}
                color={useColorModeValue("#16171B", "#FFF")}
              >
                Defi Ranking
              </Text>
              <Flex
                alignItems={"center"}
              >
                <Box
                  mr={{ base: 2, md: 4 }}
                  display={"flex"}
                >
                  {blockchains?.map((item, i) => (
                    <>
                      <Flex
                        alignItems={"center"}
                        flexDirection={"row"}
                        mr={{ base: 2, md: 4 }}
                        onClick={()=>{
                          BlockchainTypeHandler(item)
                        }}
                      >
                        {/* <Icon
                          width={"12px"}
                          height={"12px"}
                          as={<item />}
                          alt="Follow us on Twitter"
                          style={{ marginRight: "4px" }}

                        ></Icon> */}
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
                <Box>
                  <Input placeholder='Search DeFi' />
                </Box>
              </Flex>
            </Flex>

            <Rankings />
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
