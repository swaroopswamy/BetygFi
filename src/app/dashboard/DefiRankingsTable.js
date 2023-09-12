/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
  Tr, Flex, Box, useColorModeValue, Icon, Tooltip, Skeleton, Stack, useColorMode, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Spacer
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import isEmpty from "is-empty";
import Image from "next/image";


const SkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>   <Td>
      <Skeleton height="20px" my={4} />
    </Td>
  </Box>
)

const MobileSkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
  </Box>
)

const Rankings = () => {
  const tableData = useSelector((state) => state?.dashboardTableData);
  const router = useRouter();
  const { colorMode } = useColorMode();
  return (
    <Box width={"100%"}>
      <Table
        variant="simple" key={1}
        w={{ base: "100%", md: "100%" }}
        display={{ base: "none", md: "table" }}
      >
        <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
          <Tr>
            <Th>
              <Box
                display={"flex"}
                alignItems={"center"}
              >
                <Text
                  color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}>
                  Rank
                </Text>
                <Tooltip
                  bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                  padding="4px 8px"
                  label="#Frame"
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
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}>
                  Name
                </Text>
              </Box>
            </Th>
            <Th>
              <Box
                display={"flex"}
                alignItems={"center"}
              >
                <Text
                  color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}>
                  Category
                </Text>
                <Tooltip
                  bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                  padding="4px 8px"
                  label="#Frame"
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
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}>
                  Price
                </Text>
                <Tooltip
                  bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                  padding="4px 8px"
                  label="#Frame"
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
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}>
                  TVL
                </Text>
                <Tooltip
                  bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                  padding="4px 8px"
                  label="#Frame"
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
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}>
                  MCap
                </Text>
                <Tooltip
                  bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                  padding="4px 8px"
                  label="#Frame"
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
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}
                >
                  MCap/TVL
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
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textTransform={"capitalize"}>
                  Score
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
          {tableData.DefiRankingsTableData.isError && (
            <>
              <Tr>
                <Td
                  color={useColorModeValue("#16171B", "#FFF")}
                  fontSize={"20px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  p="20px"
                >
                  No data available
                </Td>
              </Tr>
            </>
          )}
          {tableData.DefiRankingsTableData.isLoading && (
            <>
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
            </>
          )}
          {tableData.DefiRankingsTableData.isSuccess &&
            (
              tableData.DefiRankingsTableData?.data?.data?.length > 0 ?
                (tableData.DefiRankingsTableData?.data?.data.map((item, i) => {
                  return (
                    <>
                      <Tr key={i + 1}
                        cursor={item.name === "AAVE V2" ? "pointer" : "cursor"}
                        onClick={() => {
                          if (item.name === "AAVE V2")
                            router.push(`/defi_dashboard?defi=${item?.slug}&id=${item._id}`);
                        }}
                      >
                        <Td
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"20px"}
                        //letterSpacing={"1px"}
                        >
                          {item?.Rank === undefined ? '-' : item?.Rank}
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
                                    width={24}
                                    height={24}
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
                            <Box
                              alignItems={"center"}
                              justifyContent={"center"}
                              display={"flex"}
                            >
                              <Text
                                color={useColorModeValue("#16171B", "#FFF")}
                                fontSize={"14px"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                //letterSpacing={"1px"}
                                ml="5px"
                              >
                                {item.name}
                              </Text>
                              {item.name === "AAVE V2" && <Image
                                width={18}
                                height={18}
                                alt='logo'
                                style={{ marginLeft: "10px" }}
                                src={colorMode === 'light' ? ('/images/wallet_analytics_black.png') : ('/images/wallet_analytics_white.png')}
                              >
                              </Image>
                              }
                            </Box>

                          </Box>
                        </Td>
                        <Td
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"20px"}
                        //letterSpacing={"1px"}
                        >
                          {item.category}
                        </Td>
                        <Td
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"20px"}
                        //letterSpacing={"1px"}
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
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"20px"}
                        //letterSpacing={"1px"}
                        >
                          {
                            (Math.trunc(item.tvl)).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD'
                            })}
                        </Td>
                        <Td
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"20px"}
                        //letterSpacing={"1px"}
                        >
                          {!isEmpty(item.mcap) ? `${(Math.trunc(item.mcap)).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                          })}` : "NA"}
                        </Td>
                        <Td
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"20px"}
                        //letterSpacing={"1px"}
                        >
                          {!isEmpty(item.mcap) && item.tvl !== 0 ? (item.mcap / item.tvl).toFixed(2) : "NA"}
                        </Td>
                        <Td
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"14px"}
                          fontWeight={400}
                          lineHeight={"20px"}
                          //letterSpacing={"1px"}
                          h="100%"
                        >
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            h="100%"
                          >
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
                                  {item?.safety_score?.toFixed(0)}
                                </>
                              )}
                          </Box>
                        </Td>
                      </Tr>
                    </>
                  );
                })) : (
                  <>
                    <Tr>
                      <Td
                        color={useColorModeValue("#16171B", "#FFF")}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        colSpan={8}
                        textAlign={"center"}
                        p="20px"
                      >
                        No data available
                      </Td>
                    </Tr>
                  </>
                )
            )
          }
        </Tbody>
      </Table>

      <Table
        variant={"unstyled"}
        bgColor={useColorModeValue("#FFFFFF", "#202020")}
        borderRadius={"6px"}
        display={{ base: "table", md: "none" }}
      >
        <Thead
          bg={useColorModeValue("#F5F5F7", "#191919")}
          >
          <Tr>
            <Th
              colSpan={3}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"20px"}
                    letterSpacing={"1.4px"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                    ml={"-20px"}>
                    Rank
                  </Text>

                  <Tooltip
                    bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                    padding="4px 8px"
                    label="#Frame"
                    fontWeight={400}
                    fontSize={"10px"}
                  >
                    <Image
                      src={"/icons/info_sm_icon.svg"}
                      width={12}
                      height={12}
                      alt='info-icon'
                      style={{ marginLeft: "2px", marginTop: "3px" }}
                    ></Image>
                  </Tooltip>

                  <Text
                    color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"20px"}
                    letterSpacing={"1.4px"}
                    textAlign={"left"}
                    textTransform={"capitalize"}
                    ml="20px"
                  >
                    Name
                  </Text>
                </Box>

                <Text
                  color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                  fontSize={"14px"}
                  fontWeight={400}
                  lineHeight={"20px"}
                  letterSpacing={"1.4px"}
                  textAlign={"left"}
                  textTransform={"capitalize"}
                  paddingRight={"10px"}
                >
                  Score
                </Text>
              </Box>

            </Th>
          </Tr>

        </Thead>

        <Tbody
          w={{ base: "100%", md: "100%" }}
        >
          {tableData.DefiRankingsTableData.isError && (
            <>
              <Tr>
                <Td
                    _dark={{
                      color: "#FFF"
                    }}
                    _light={{
                      color: "#16171B"
                    }}
                  fontSize={"20px"}
                  fontWeight={400}
                  letterSpacing={"1px"}
                  textAlign={"center"}
                  colSpan={8}
                  p="20px"
                >
                  No data available
                </Td>
              </Tr>
            </>
          )}
          {tableData.DefiRankingsTableData.isLoading && (
            <>
              <MobileSkeletonRow />
              <MobileSkeletonRow />
              <MobileSkeletonRow />
            </>
          )}
          {tableData.DefiRankingsTableData.isSuccess &&
            (
              tableData.DefiRankingsTableData?.data?.data?.length > 0 ?
                (tableData.DefiRankingsTableData?.data?.data.map((item, i) => {
                  return (
                    <>
                      <Tr key={i + 1}
                        cursor={item.name === "AAVE V2" ? "pointer" : "cursor"}
                        onClick={() => {
                          if (item.name === "AAVE V2")
                            router.push(`/defi_dashboard?defi=${item?.slug}&id=${item._id}`);
                        }}
                      >
                        <Td p={0} colSpan={1} >
                          <Accordion
                            allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton
                                  _expanded={{ mt: "10px" }}
                                >
                                  <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    w="100%"
                                    justifyContent={"space-between"}
                                  >
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <Text
                                        color={useColorModeValue("#16171B", "#FFF")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        p={{ base: 1, sm: 1, md: 2 }}
                                      //letterSpacing={"1px"}
                                      >
                                        {item?.Rank === undefined ? '-' : item?.Rank}
                                      </Text>

                                      <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        ml={"30px"}
                                      >
                                        {!isEmpty(item.logo)
                                          ? (
                                            <>
                                              <Image
                                                width={24}
                                                height={24}
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
                                        <Box
                                          alignItems={"center"}
                                          justifyContent={"center"}
                                          display={"flex"}
                                        >
                                          <Text
                                            color={useColorModeValue("#16171B", "#FFF")}
                                            fontSize={"14px"}
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            //letterSpacing={"1px"}
                                            ml="5px"
                                          >
                                            {item.name}
                                          </Text>
                                          {item.name === "AAVE V2" && <Image
                                            width={18}
                                            height={18}
                                            alt='logo'
                                            style={{ marginLeft: "10px" }}
                                            src={colorMode === 'light' ? ('/images/wallet_analytics_black.png') : ('/images/wallet_analytics_white.png')}
                                          >
                                          </Image>
                                          }
                                        </Box>

                                      </Box>
                                    </Box>

                                    <Box
                                      p={{ base: 1, sm: 1, md: 2 }}
                                      color={useColorModeValue("#16171B", "#FFF")}
                                      fontSize={"14px"}
                                      fontWeight={400}
                                      lineHeight={"20px"}
                                      //letterSpacing={"1px"}
                                      h="100%"
                                    >
                                      <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        h="100%"
                                      >
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
                                              {item?.safety_score?.toFixed(0)}
                                            </>
                                          )}
                                      </Box>
                                    </Box>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel>
                                <Box>
                                  <Tr>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <Text
                                        color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}>
                                        Category
                                      </Text>
                                      <Tooltip
                                        bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                                        padding="4px 8px"
                                        label="#Frame"
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

                                    <Td
                                      color={useColorModeValue("#16171B", "#FFF")}
                                      fontSize={"14px"}
                                      fontWeight={400}
                                      lineHeight={"20px"}
                                    //letterSpacing={"1px"}
                                    >
                                      {item.category}
                                    </Td>
                                  </Tr>

                                  <Tr>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <Text
                                        color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}>
                                        Price
                                      </Text>
                                      <Tooltip
                                        bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                                        padding="4px 8px"
                                        label="#Frame"
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
                                    <Td
                                      color={useColorModeValue("#16171B", "#FFF")}
                                      fontSize={"14px"}
                                      fontWeight={400}
                                      lineHeight={"20px"}
                                    //letterSpacing={"1px"}
                                    >
                                      {!isEmpty(item.price)
                                        ?
                                        (item.price.toFixed(2)).toLocaleString('en-US', {
                                          style: 'currency',
                                          currency: 'USD'
                                        }) + " USD"
                                        : 0}
                                    </Td>
                                  </Tr>

                                  <Tr>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <Text
                                        color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}>
                                        TVL
                                      </Text>
                                      <Tooltip
                                        bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                                        padding="4px 8px"
                                        label="#Frame"
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
                                    <Td
                                      color={useColorModeValue("#16171B", "#FFF")}
                                      fontSize={"14px"}
                                      fontWeight={400}
                                      lineHeight={"20px"}
                                    //letterSpacing={"1px"}
                                    >
                                      {
                                        (Math.trunc(item.tvl)).toLocaleString('en-US', {
                                          style: 'currency',
                                          currency: 'USD'
                                        })}
                                    </Td>
                                  </Tr>

                                  <Tr>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <Text
                                        color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}>
                                        MCap
                                      </Text>
                                      <Tooltip
                                        bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                                        padding="4px 8px"
                                        label="#Frame"
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
                                    <Td
                                      color={useColorModeValue("#16171B", "#FFF")}
                                      fontSize={"14px"}
                                      fontWeight={400}
                                      lineHeight={"20px"}
                                    //letterSpacing={"1px"}
                                    >
                                      {!isEmpty(item.mcap) ? `${(Math.trunc(item.mcap)).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                      })}` : "NA"}
                                    </Td>
                                  </Tr>

                                  <Tr>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                    >
                                      <Text
                                        color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}
                                      >
                                        MCap/TVL
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
                                    <Td
                                      color={useColorModeValue("#16171B", "#FFF")}
                                      fontSize={"14px"}
                                      fontWeight={400}
                                      lineHeight={"20px"}
                                    //letterSpacing={"1px"}
                                    >
                                      {!isEmpty(item.mcap) && item.tvl !== 0 ? (item.mcap / item.tvl).toFixed(2) : "NA"}
                                    </Td>
                                  </Tr>

                                  <Button
                                    width={"100%"}
                                    variant='solid'
                                    background={useColorModeValue("#FFF", "#333")}
                                  >
                                    <Text
                                      color={useColorModeValue("#202020", "#FFF")}
                                      textAlign={"center"}
                                      fontSize={"14px"}
                                      fontWeight={400}
                                      lineHeight={"10px"}
                                      textTransform={"capitalize"}
                                    >
                                      View Details
                                    </Text>
                                  </Button>

                                </Box>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Td>

                      </Tr>
                    </>
                  );
                })) : (
                  <>
                    <Tr>
                      <Td
                          _dark={{
                            color: "#FFF"
                          }}
                          _light={{
                            color: "#16171B"
                          }}
                        fontSize={"20px"}
                        fontWeight={400}
                        letterSpacing={"1px"}
                        colSpan={8}
                        textAlign={"center"}
                        p="20px"
                      >
                        No data available
                      </Td>
                    </Tr>
                  </>
                )
            )
          }
        </Tbody>
      </Table>
    </Box>
  );
};


export default Rankings;
