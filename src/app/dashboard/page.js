/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Rankings from "./DefiRankingsTable";
import { blockchains, categories } from "../../../util/constant";
import OverviewColumnChart from "./OverviewColumnChart";
import OverviewAreaChart from "./OverviewAreaChart";
import { useDispatch, useSelector } from "react-redux";
import {
  blockchainTypeChangedReducer,
  categoryChangedReducer,
  fetchDefiRankingTableData,
  fetchScoreGraphData,
} from "@/redux/dashboard_data/dataSlice";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const [tablePage, setTablePage] = useState(0);
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
  const pageChangeHandler = (page) => {
    console.log(page);
  }
  const searchByNameHandler = (name) => {
    getDefiRankingsTableDataHandler(name);
  }



  const graphData = useSelector((state) => state);
  const getScoreGraphDataHandler = () => {
    const payload = {
      blockchain: blockchainSelected,
      category: categorySelected,
    };
    dispatch(fetchScoreGraphData(payload));
  };
  const getDefiRankingsTableDataHandler = (name) => {
    const payload = {
      blockchain: blockchainSelected,
      category: categorySelected,
      name: name,
    };
    dispatch(fetchDefiRankingTableData(payload));
  };

  useEffect(() => {
    getDefiRankingsTableDataHandler();
  }, [blockchainSelected, categorySelected]);

  /* useEffect(() => {
    getScoreGraphDataHandler();
  }, [blockchainSelected, categorySelected]);
 */

  const { colorMode, toggleColorMode } = useColorMode();

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
          <Box
            display={"flex"}
            alignItems={"center"}
            w="100%"
            mb="15px"
            position={"relative"}
          >
            <Box onClick={toggleColorMode}
              position={"absolute"}
              right={"0px"}
              cursor={"pointer"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
            </Box>
            <Text
              fontSize={"24px"}
              fontWeight={400}
              letterSpacing={"2.4px"}
              lineHeight={"20px"}

              textTransform={"uppercase"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              DeFi Markets
            </Text>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              ml={"22px"}
            >
              {blockchains?.map((item, i) => (
                <>
                  {i < 4 &&
                    <Tooltip label={item}>
                      <Box
                        display={"flex"}
                        cursor={"pointer"}
                        alignItems={"center"}
                        justifyContent={"center"}

                        flexDirection={"row"}
                        bg={"#D9D9D9"}
                        borderRadius="50%"
                        border={blockchainSelected.includes(item) ? "3px solid #55A406" : ""}
                        boxShadow={!blockchainSelected.includes(item) ? "-2px 0px 5px 1px rgba(0, 0, 0, 0.10)" : ""}
                        w="40px"
                        h="40px"
                        ml={i !== 0 && '-10px'}

                        _hover={{ borderColor: "blue" }}
                        /* bgColor={
                          blockchainSelected.includes(item)
                            ? useColorModeValue("#F5F5F7", "#191919")
                            : useColorModeValue("#FFFFFF", "#202020")
                        }
                        border={useColorModeValue(
                          "1px solid #E0E0E0",
                          "1px solid #333"
                        )}  */
                        onClick={() => {
                          BlockchainTypeHandler(item);
                        }}
                      >
                        <Image
                          width={18}
                          height={18}
                          src={`/icons/${item}_sm_icon.svg`}
                          alt={`${item}_icon`}

                        ></Image>
                        {/* <Text
                     fontSize={"10px"}
                     fontWeight={"400"}
                     lineHeight={"20px"}
                     letterSpacing={"1px"}
                     color={useColorModeValue("#16171B", "#FFF")}
                   >
                     {item}
                   </Text> */}
                      </Box>
                    </Tooltip>
                  }
                </>
              ))}
              <Menu>
                <MenuButton
                  bg={"#D9D9D9"}
                  borderRadius="50%"
                  w="40px"
                  h="40px"
                  transition='all 0.2s'

                  border="2px solid #191919"
                  ml='-10px'
                  _focus={{ boxShadow: 'outline' }}
                >
                  +3
                </MenuButton>
                <MenuList
                  boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
                  bgColor={useColorModeValue("#FFF", "#191919")}
                >
                  {blockchains.map((item, i) => {
                    return (
                      <>
                        {i >= 4 &&
                          <MenuItem key={i}
                            bgColor={useColorModeValue("#FFF", "#191919")}
                            _hover={{ bg: useColorModeValue("#F5F5F7", "#202020") }}
                          >
                            <Checkbox colorScheme='green'
                              value={item}
                              checked={blockchainSelected.includes(item)} onChange={(e) => {
                                BlockchainTypeHandler(item);
                              }}>
                              <Box
                                display={"flex"}
                                cursor={"pointer"}
                                alignItems={"center"}
                                justifyContent={"center"}
                              >
                                <Image
                                  width={18}
                                  height={18}
                                  src={`/icons/${item}_sm_icon.svg`}
                                  alt={`${item}_icon`}
                                  style={{ marginRight: "20px", marginLeft: "14px" }}
                                ></Image>
                                <Text
                                  fontSize={"12px"}
                                  fontWeight={"400"}
                                  lineHeight={"20px"}
                                  letterSpacing={"1px"}
                                  color={useColorModeValue("#16171B", "#FFF")}
                                >
                                  {item}
                                </Text>
                              </Box>
                            </Checkbox>
                          </MenuItem>
                        }
                      </>)
                  })}
                </MenuList>
              </Menu>
            </Box>
          </Box>
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
          {/*  <Text
            fontSize={"10px"}
            fontWeight={400}
            letterSpacing={"1px"}
            lineHeight={"15px"}
            mb="5px"
            color={useColorModeValue("#191919", "#FFF")}
          >
            Select the blockchains you'd like to analyze
          </Text> */}
          <Box mr={{ base: 2, md: 4 }} display={"flex"}>
            {/* <Flex
              cursor={"pointer"}
              alignItems={"center"}
              flexDirection={"row"}
              mr={{ base: 2, md: 4 }}
              padding={"7px 9px"}
              borderRadius="2px"
              _hover={{ bg: useColorModeValue("#F5F5F7", "#191919") }}
              bgColor={
                blockchainSelected.length === 0 && useColorModeValue("#F5F5F7", "#191919")}
              border={useColorModeValue(
                "1px solid #E0E0E0",
                "1px solid #333"
              )}
              onClick={() => {
                BlockchainTypeHandler("All");
              }}
            >
              <Text
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                letterSpacing={"1px"}
                color={useColorModeValue("#16171B", "#FFF")}
              >
                All
              </Text>
            </Flex>
            {blockchains?.map((item, i) => (
              <>
                <Flex
                  cursor={"pointer"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  mr={{ base: 2, md: 4 }}
                  padding={"7px 9px"}
                  borderRadius="2px"
                  _hover={{ bg: useColorModeValue("#F5F5F7", "#191919") }}
                  bgColor={
                    blockchainSelected.includes(item)
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
                  <Image
                    width={12}
                    height={12}
                    src={`/icons/${item}_sm_icon.svg`}
                    alt={`${item}_icon`}
                    style={{ marginRight: "4px" }}
                  ></Image>
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
            ))} */}

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
            <Box
              key={"all"}
              borderRadius="2px"
              padding={"7px 9px"}
              mx="4px"
              cursor={"pointer"}
              _hover={{ bg: useColorModeValue("#FFFFFF", "#191919") }}
              border={useColorModeValue(
                "1px solid #E8E8E8",
                "1px solid #333"
              )}
              bgColor={
                categorySelected.length === 0 && useColorModeValue("#FFF", "#191919")
              }
              onClick={() => {
                categoryChangedHandler("All");
              }}
            >
              <Text
                fontSize={"10px"}
                fontWeight={600}
                letterSpacing={"1px"}
                lineHeight={"15px"}
                color={useColorModeValue("#191919", "#FFFFFF")}
              >
                All
              </Text>
            </Box>
            {categories.map((category, i) => {
              return (
                <>
                  <Box
                    key={i}
                    borderRadius="2px"
                    padding={"7px 9px"}
                    mx="4px"
                    cursor={"pointer"}
                    _hover={{ bg: useColorModeValue("#FFFFFF", "#191919") }}
                    border={useColorModeValue(
                      "1px solid #E8E8E8",
                      "1px solid #333"
                    )}
                    bgColor={
                      categorySelected.includes(category)
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
                    mr="7px"
                  >
                    Total Market Cap
                  </Text>
                  <Tooltip
                    bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                    padding="4px 8px"
                    label="Lending/Borrowing tracked by Solvendo"
                    fontWeight={400}
                    fontSize={"10px"}
                    mr="7px"
                  >
                    <Image
                      src={"/icons/info_sm_icon.svg"}
                      width={12}
                      height={12}
                      alt='info-icon'
                      style={{ marginRight: "7px" }}
                    ></Image>
                  </Tooltip>
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
              <Box
                bg={"#00000014"}
                p="30px"
                mt='30px'
              >
                <Text
                  color={useColorModeValue("#16171B", "#FFF")}
                  fontSize={"18px"}
                  fontWeight={"300"}
                  textAlign={"center"}
                  opacity={0.6}
                >
                  For the Risk Trend to be launched, the system need to run for a minimum duration of 4 weeks.
                </Text>
              </Box>
              {/* <OverviewAreaChart /> */}
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
                    <Input
                      borderColor={useColorModeValue("#E8E8E8", "#333")}
                      bgColor={useColorModeValue("#F5F5F7", "#191919")}
                      color={useColorModeValue("#16171B", "#A8ADBD")}
                      fontSize={"10px"}
                      fontWeight={400}
                      w="207px"
                      placeholder="Search DeFi"
                      onChange={(e) => { searchByNameHandler(e.target.value) }} />
                  </Box>
                </Flex>
              </Flex>
              <Rankings />
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"end"}
                padding="10px 30px 14px"
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w="30px"
                  h="26px"
                  border={"1px solid #C7CAD2"}
                  cursor={"pointer"}
                >
                  <Image
                    width={15}
                    height={15}
                    style={{ rotate: '180deg' }}
                    src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                    alt="prev-arrow"
                  ></Image>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w="30px"
                  h="26px"
                  border={"1px solid #C7CAD2"}
                  cursor={"pointer"}
                >
                  <Image
                    width={15}
                    height={15}
                    alt="next-arrow"
                    src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                  ></Image>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;