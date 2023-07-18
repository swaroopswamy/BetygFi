/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Grid,
  GridItem,
  Input,
  Table,
  TableCaption,
  Text,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Flex,
  Box,
  useColorModeValue,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/dashboard_data/dataSlice";
import isEmpty from "is-empty";
import Image from "next/image";
const Rankings = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state?.dashboardTableData);


  return (
    <>
      <Table variant="simple">
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
            tableData.DefiRankingsTableData.data.data.map((item, i) => {
              return (
                <>
                  <Tr key={i + 1}>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      {i + 1}
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      {item.name}
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
                      {!isEmpty(item.price) ? item.price.toFixed(6) + " USD" : 0}
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      ${" "}{Math.trunc(item.tvl)}
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      ${" "}{!isEmpty(item.mcap) ? Math.trunc(item.tvl) : "NA"}
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      {!isEmpty(item.mcap) ? (item.mcap / item.tvl).toFixed(2) : "NA"}
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
                        {item.safety_score}
                      </Box>
                    </Td>
                  </Tr>
                </>
              );
            })}
        </Tbody>
      </Table>
    </>
  );
};

export default Rankings;
