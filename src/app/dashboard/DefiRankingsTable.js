/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
   Tr, Flex, Box, useColorModeValue, Icon, Tooltip,} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import isEmpty from "is-empty";
import Image from "next/image";

const Rankings = () => {
  const tableData = useSelector((state) => state?.dashboardTableData);
  return (
    <Table variant="simple" key={1}>
      <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
        <Tr>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
            alignItems={"center"}
          >
            RANK
          </Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >
            NAME
          </Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >
            CATEGORY
          </Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >
            PRICE
          </Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >
            TVL
          </Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >
            MCAP
          </Th>
          <Th>
            <Box
              display={"flex"}
              alignItems={"center"}
            >
              <Text
                color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                fontSize={"10px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
              >
                MCAP/TVL
              </Text>
              <Tooltip
                bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                padding="4px 8px"
                label="The MCap/TVL gives the understanding whether DeFi is over/under valued."
                fontWeight={400}
                fontSize={"10px"}
              >
                <Image
                  src={"/icons/info_sm_icon.svg"}
                  width={12}
                  height={12}
                  alt='info-icon'
                  style={{ marginLeft: "4px" }}
                ></Image>
              </Tooltip>
            </Box>


          </Th>
          <Th>
            <Box
              display={"flex"}
              alignItems={"center"}
            >
              <Text
                color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                fontSize={"10px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
              >
                SCORE
              </Text>
              <Tooltip
                bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                padding="4px 8px"
                label="Solvendo score comprises of DeFi's technical, centralization, financial/market, and userbase quality risks."
                fontWeight={400}
                fontSize={"10px"}
              >
                <Image
                  src={"/icons/info_sm_icon.svg"}
                  width={12}
                  height={12}
                  alt='info-icon'
                  style={{ marginLeft: "4px" }}
                ></Image>
              </Tooltip>
            </Box>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        
        {tableData.DefiRankingsTableData.isSuccess &&
         tableData.DefiRankingsTableData?.data.data !== undefined
          && tableData.DefiRankingsTableData?.data.data.map((item, i) => {
            return (
              <>
                <Tr key={i + 1}>
                  <Td
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                  >
                    {item?.Rank}
                  </Td>
                  <Td
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      {!isEmpty(item.logo)
                        ? (
                          <>
                            <Image
                              width={20}
                              height={20}
                              alt='logo'
                              src={item.logo}
                            ></Image>
                          </>
                        )
                        :
                        (
                          <>
                            <Box
                              width={"20px"}
                              height={"20px"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              display={"flex"}
                              borderRadius={"50%"}
                              bgColor={useColorModeValue("#676DFF")}
                            >
                              <Text
                                color={"#FFF"}
                                fontSize={"12px"}
                                fontWeight={"600"}
                              >
                                {item.name.charAt(0)}
                              </Text>
                            </Box>
                          </>
                        )
                      }
                      <Text
                        color={useColorModeValue("#16171B", "#FFF")}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        ml="6px"
                      >
                        {item.name}
                      </Text>
                    </Box>
                  </Td>
                  <Td
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                  >
                    {item.category}
                  </Td>
                  <Td
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                  >
                    {!isEmpty(item.price)
                      ?
                      (item.price.toFixed(2)).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      }) + " USD"
                      : 0}
                  </Td>
                  <Td
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                  >
                    {
                      (Math.trunc(item.tvl)).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      })}
                  </Td>
                  <Td
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                  >
                    {!isEmpty(item.mcap) ? `${
                       (Math.trunc(item.tvl)).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      })}` : "NA"}
                  </Td>
                  <Td
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                  >
                    {!isEmpty(item.mcap) && item.tvl !== 0 ? (item.mcap / item.tvl).toFixed(2) : "NA"}
                  </Td>
                  <Td
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    h="100%"
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      h="100%"
                    >
                      <Box
                        w="12px"
                        h="9px"
                        borderRadius={"30px"}
                        mr={"4px"}
                        bgColor={
                          item.safety_score >= 75
                            ? "#9ADA8A"
                            : item.safety_score < 75 && item.safety_score >= 50
                              ? "#FFD976"
                              : item.safety_score < 50 && item.safety_score >= 25
                                ? "#FFB287"
                                : "#FF7373"
                        }
                      ></Box>{" "}
                      {item?.safety_score?.toFixed(0)}
                    </Box>
                  </Td>
                </Tr>
              </>
            );
          })}
      </Tbody>
    </Table>
  );
};

export default Rankings;
