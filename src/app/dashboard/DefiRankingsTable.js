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
} from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/dashboard_data/dataSlice";
const Rankings = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state?.dashboardTableData);
  console.log(tableData, "tabledata");
  const getDefiRankingsTableDataHandler = () => {
    dispatch(fetchData(tableData?.blockchainType));
  };

  useEffect(() => {
    getDefiRankingsTableDataHandler();
  }, [tableData?.blockchainType]);

  return (
    <>
      <Table variant="simple">
        <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
          <Tr>
            <Th
              display={"flex"}
              color={useColorModeValue("#A8ADBD", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              alignItems={"center"}
            >
              RANK
              <Icon
                src={"../assets/icons/info_sm_icon.svg"}
                width={"12px"}
                height={"12px"}
                style={{ marginLeft: "4px" }}
              ></Icon>
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
            <Th
              color={useColorModeValue("#A8ADBD", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              MCAP/TVL
            </Th>
            <Th
              color={useColorModeValue("#A8ADBD", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              SCORE
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.isSuccess &&
            tableData.DefiRankingsTableData?.data.map((item, i) => {
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
                      0
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      ${item.tvl}
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      {item.mcap ? item.mcap : "NA"}
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                    >
                      {item.mcap ? (item.mcap / item.tvl).toFixed(2) : "NA"}
                    </Td>
                    <Td
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                      display={"flex"}
                      alignItems={"center"}
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
