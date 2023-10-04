/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
  Tr, Flex, Box, useColorModeValue, Icon, Tooltip, Skeleton, Stack, useColorMode, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Spacer
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useTableKeyboardNavigation from "@/hooks/useTableKeyboardNavigation";
import isEmpty from "is-empty";
import '/styles/styles.scss';

import GenericTable from "/src/app/components/table";
const Rankings = () => {
  const tableData = useSelector((state) => state?.dashboardTableData.DefiRankingsTableData);
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Box layerStyle={"flexColumn"} bg={useColorModeValue('#FFFFFF', '#202020')} borderRadius={"6px"}>
      <Box layerStyle={"flexCenter"} p={"20px"} h={"75px"}>
        <Text variant={"h2"}>
          Defi Rankings
        </Text>
      </Box>
      <GenericTable 
        tableHeader={tableHeader}
        tableData={tableData}
        TableRow={TableRow}
        TableHeaderRowMobile={TableHeaderRowMobile}
      />
    </Box>
  );
};

export default Rankings;

const TableRow = ( {item, rowIndex} ) => {
  const { colorMode } = useColorMode();

  return (
    <Tr 
      key={rowIndex} 
      cursor={item.name === "AAVE V2" ? "pointer" : "cursor"}
      onClick={() => {
        if (item.name === "AAVE V2")
          router.push(`/defi_dashboard?defi=${item?.slug}&id=${item._id}`);
      }}
      border={"0px"}
    >
      <Td key={0}>
        <Text variant={"h3"}>
          {item?.Rank === undefined ? '-' : item?.Rank}
        </Text>
      </Td>
      <Td key={1}>
        <Box layerStyle={"flexCenter"} w={"120px"} gap={"10px"}>
          {!isEmpty(item.logo) ?
            (
              <>
                <Image
                  width={24}
                  height={24}
                  style={{ borderRadius: "50%" }}
                  alt='logo'
                  src={item.logo}
                ></Image>
              </>
            )
            :
            (
              <>
                <Box
                  width={"24px"}
                  height={"24px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  borderRadius={"50%"}
                  bgColor={useColorModeValue("#676DFF")}
                >
                  <Text
                    color={"#FFF"}
                    fontSize={"14px"}
                    fontWeight={600}
                  >
                    {item.name.charAt(0)}
                  </Text>
                </Box>
              </>
            )
          }
          <Box layerStyle="center">
            <Text variant={"h3"}>
              {item.name}
            </Text>
            {item.name === "AAVE V2" && <Image
              width={18}
              height={18}
              alt='logo'
              style={{ marginLeft: "10px" }}
              src={colorMode === 'light' ? ('/images/wallet_analytics_white.svg') : ('/images/wallet_analytics_black.svg')}
            >
            </Image>
            }
          </Box>
        </Box>
      </Td>
      <Td key={2}>
        <Text variant={"h3"}>
          {item.category}
        </Text>
      </Td>
      <Td key={3}>
        <Text variant={"h3"}>
          {!isEmpty(item.price)
            ?
            (item.price.toFixed(2)).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }) + " USD"
            : 0}
          </Text>
      </Td>
      <Td key={4}>
        <Text variant={"h3"}>
          {(Math.trunc(item.tvl)).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
        </Text>
      </Td>
      <Td key={5}>
        <Text variant={"h3"}>
          {!isEmpty(item.mcap) ? `${(Math.trunc(item.mcap)).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}` : "NA"}
        </Text>
      </Td>
      <Td key={6}>
        <Text variant={"h3"}>
          {!isEmpty(item.mcap) && item.tvl !== 0 ? (item.mcap / item.tvl).toFixed(2) : "NA"}
        </Text>
      </Td>
      <Td key={7}>
        <Box layerStyle={"center"} h="100%">
          {
            item?.safety_score === undefined ? '-' : (
              <>
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
                <Text variant={"h3"}>
                  {item?.safety_score?.toFixed(0)}
                </Text>
              </>
            )}
        </Box>
      </Td>
    </Tr>
  )
}

export const tableHeader = [
  {
    value: "rank",
    label: "Rank",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
  {
    value: "name",
    label: "Name",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
  {
    value: "category",
    label: "Category",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
  {
    value: "category",
    label: "Price",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
  {
    value: "tvl",
    label: "TVL",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
  {
    value: "mcap",
    label: "MCap",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
  {
    value: "mcaptvl",
    label: "MCap/TVL",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
  {
    value: "score",
    label: "Score",
    isTooltip: true,
    isSortingEnabled: false,
    tooltipLabel: null,
  },
];

const TableHeaderRowMobile = () => {
  return (
    <Tr>
      <Th border={"0px"} w={"20px"}>
        <Text variant={"tableHead"}>
          Rank
        </Text>
      </Th>
      <Th border={"0px"}>
        <Text variant={"tableHead"}>
          Name
        </Text>
      </Th>
      <Th border={"0px"}>
        <Text variant={"tableHead"}>
          Score
        </Text>
      </Th>
    </Tr>
  )
}
