
import { Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead, Tr, Flex, Box, useColorModeValue, Icon } from "@chakra-ui/react";
import React from "react";


const Rankings = () => {
  return <>
    <Table variant='simple'>
      <Thead
        bgColor={useColorModeValue("#F5F5F7", "#191919")}
      >
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
              src={'../assets/icons/info_sm_icon.svg'}
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
          >NAME</Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >CATEGORY</Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >PRICE</Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >TVL</Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >MCAP</Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >MCAP/TVL</Th>
          <Th
            color={useColorModeValue("#A8ADBD", "#A8ADBD")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
          >SCORE</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td
            color={useColorModeValue("#16171B", "#FFF")}
            fontSize={"10px"}
            fontWeight={"400"}
            letterSpacing={"1px"}>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
    </Table>
  </>;
};

export default Rankings;

