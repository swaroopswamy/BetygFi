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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input,
  InputGroup,
  InputLeftElement,
  AccordionIcon,
  useDisclosure,
  Collapse
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Rankings from "./DefiRankingsTable";
import { categories } from "../../../util/constant";
import OverviewColumnChart from "./OverviewColumnChart";
import OverviewAreaChart from "./OverviewAreaChart";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import millify from "millify";
import {
  blockchainTypeChangedReducer,
  categoryChangedReducer,
  fetchDefiRankingTableData,
  fetchOverviewData,
  fetchScoreGraphData,
} from "@/redux/dashboard_data/dataSlice";
import isEmpty from "is-empty";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import './page.module.css';

const Dashboard = () => {
  const [tablePage, setTablePage] = useState(1);
  const [searchByName, setSearchByName] = useState('');
  const dispatch = useDispatch();
  const { isOpen: isRankingsSearchOpen, onToggle: onRankingsSearchToggle } = useDisclosure();

  const BlockchainTypeHandler = (type) => {
    dispatch(blockchainTypeChangedReducer(type));
  };
  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );
  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );
  const blockchainListData = useSelector(
    (state) => state?.appData?.BlockchainListData
  );

  const overviewData = useSelector(
    (state) => state?.dashboardTableData?.OverviewData?.data
  );
  const categoryChangedHandler = (category) => {
    dispatch(categoryChangedReducer(category));
  };
  const pageChangeHandler = (page) => {
    tablePage >= 1 && setTablePage(page);
  }
  const searchByNameHandler = (name) => {
    setSearchByName(name);
    setTablePage(1); // fix 2
    //getDefiRankingsTableDataHandler(name);
  }
  const tableData = useSelector((state) => state?.dashboardTableData);

  const getScoreGraphDataHandler = () => {
    const payload = {
      blockchain: blockchainSelected,
      category: categorySelected,
    };
    dispatch(fetchScoreGraphData(payload));
  };
  const getDefiRankingsTableDataHandler = () => {
    if (!isEmpty(searchByName)) {
      const payload = {
        name: searchByName,
        page: tablePage,
      };
      dispatch(fetchDefiRankingTableData(payload));
    } else {
      const payload = {
        blockchain: blockchainSelected,
        category: categorySelected,
        page: tablePage,
      };
      dispatch(fetchDefiRankingTableData(payload));
    }
  };
  const getOverviewDataHandler = () => {
    const payload = {
      blockchain: blockchainSelected,
      category: categorySelected,
    };
    dispatch(fetchOverviewData(payload));
  };

  useEffect(() => {
    dispatch(fetchBlockchainListData());
  }, []);

  useEffect(() => {
    getDefiRankingsTableDataHandler();
    // getScoreGraphDataHandler();
    getOverviewDataHandler();
  }, [blockchainSelected, categorySelected, tablePage]);

  useEffect(() => {
    getScoreGraphDataHandler();
  }, [blockchainSelected, categorySelected]);

  useEffect(() => {
    getDefiRankingsTableDataHandler(searchByName);
  }, [searchByName])


  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={{ base: "none", md: "block" }}
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
            {/* <Box onClick={toggleColorMode}
              position={"absolute"}
              right={"0px"}
              cursor={"pointer"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
            </Box> */}
            <Text
              fontSize={"24px"}
              fontWeight={"400"}
              letterSpacing={"2.4px"}
              lineHeight={"20px"}

              textTransform={"capitalize"}
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
              {blockchainListData.data?.map((item, i) => (
                <>
                  {i < 4 &&
                    <Tooltip key={i} label={item.name}>
                      <Box
                        display={"flex"}
                        cursor={"pointer"}
                        alignItems={"center"}
                        justifyContent={"center"}

                        flexDirection={"row"}
                        bg={"#D9D9D9"}
                        borderRadius="50%"
                        border={blockchainSelected.includes(item.id) ? "3px solid #55A406" : ""}
                        boxShadow={!blockchainSelected.includes(item.id) ? "-2px 0px 5px 1px rgba(0, 0, 0, 0.10)" : ""}
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
                          BlockchainTypeHandler(item.id);
                        }}
                      >

                        <Image
                          width={18}
                          height={18}
                          src={item.logoUrl}
                          alt={`${item.id}_icon`}
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
              <Menu closeOnSelect={false}>
                <MenuButton
                  bg={"#D9D9D9"}
                  borderRadius="50%"
                  w="40px"
                  h="40px"
                  transition='all 0.2s'

                  border="2px solid #191919"
                  ml='-10px'
                  _focus={{ boxShadow: 'outline' }}
                  color="#000"
                >
                  +{blockchainListData.isSuccess && blockchainListData.data?.length - 4}
                </MenuButton>
                <MenuList
                  boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
                  bgColor={useColorModeValue("#FFF", "#191919")}
                >
                  {blockchainListData.isSuccess && blockchainListData.data?.map((item, i) => {
                    return (
                      <>
                        {i >= 4 &&
                          <MenuItem key={i}
                            bgColor={useColorModeValue("#FFF", "#191919")}
                            _hover={{ bg: useColorModeValue("#F5F5F7", "#202020") }}
                          >
                            <Checkbox colorScheme='green'
                              value={item.name}
                              checked={blockchainSelected.includes(item.id)} onChange={(e) => {
                                BlockchainTypeHandler(item.id);
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
                                  src={item.logoUrl}
                                  alt={`${item.id}_icon`}

                                  style={{ marginRight: "20px", marginLeft: "14px" }}
                                ></Image>
                                <Text
                                  fontSize={"12px"}
                                  fontWeight={"400"}
                                  lineHeight={"20px"}
                                  letterSpacing={"1px"}
                                  color={useColorModeValue("#16171B", "#FFF")}
                                >
                                  {item.name}
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
            fontSize={"14px"}
            fontWeight={"400"}
            letterSpacing={"1.4px"}
            lineHeight={"20px"}
            mb="20px"
            pl="3px"
            opacity={"0.6"}
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
          <Box
            //mr={{ base: 2, md: 4 }} 
            display={"flex"}>
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
          display={{ base: "block", md: "none" }}
          flexDirection={"column"}
          w={"100%"}
          px={{ base: "15px", md: "29px" }}
          paddingTop={"20px"}
          paddingBottom={"10px"}
          bgColor={useColorModeValue("#FFF", "#131313")}
        >
          <Box
            //display={"flex"}
            //alignItems={"center"}
            w="100%"
            mb="15px"
            justifyContent={"left"}
            position={"relative"}
          >
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              letterSpacing={"1.8px"}
              lineHeight={"20px"}
              textTransform={"capitalise"}
              color={useColorModeValue("#191919", "#FFFFFF")}
            >
              DeFi Markets
            </Text>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mr={"22px"}
              mt={"15px"}
              w={"100%"}
              overflowX="auto"
              flexWrap="nowrap"
                      // css={{
                      //   '&::-webkit-scrollbar': {
                      //     width: '0.2rem',
                      //     height: '0.2rem',
                      //   },
                      //   '&::-webkit-scrollbar-thumb': {
                      //     backgroundColor: 'transparent',
                      //   },
                      // }}
            >
              {blockchainListData.data?.map((item, i) => (
                <>
                  {/* {i < 4 && */}
                  <Tooltip key={i} label={item.name}>
                    <Box
                      display={"flex"}
                      cursor={"pointer"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      whiteSpace="nowrap"
                      flexDirection={"row"}
                      bg={"#D9D9D9"}
                      borderRadius="50%"
                      border={blockchainSelected.includes(item.id) ? "5px solid #55A406" : ""}
                      boxShadow={!blockchainSelected.includes(item.id) ? "-2px 0px 5px 1px rgba(0, 0, 0, 0.10)" : ""}
                      w="50px"
                      h="35px"
                      ml={i !== 0 && '10px'}
                      _hover={{ borderColor: "blue" }}
                      onClick={() => {
                        BlockchainTypeHandler(item.id);
                      }}
                      
                    >

                      <Image
                        width={20}
                        height={20}
                        src={item.logoUrl}
                        alt={`${item.id}_icon`}
                      ></Image>
                    </Box>
                  </Tooltip>
                  {/* } */}
                </>
              ))}

            </Box>
          </Box>

          <Text
            fontSize={"14px"}
            fontWeight={"400"}
            letterSpacing={"1.4px"}
            lineHeight={"20px"}
            mb="20px"
            pl="3px"
            opacity={"0.6"}
            color={useColorModeValue("#16171B", "#A8ADBD")}
          >
            Filter your DeFi exploration by focusing on both the blockchain technology it utilises and its specific industry application. This way, you'll uncover the projects best suited to your interests, whether in Prediction Markets, Lending and Borrowing, or Insurance.
          </Text>

          {/* <Box
            //mr={{ base: 2, md: 4 }} 
            display={"flex"}>
          </Box> */}
        </Box>


        {/* <Box>
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
          </Box> */}

        {/* Desktop defi selection */}
        <Box
          display={{ base: "none", md: "block" }}
          flexDirection="column"
          h={"40px"}
          w="100%"
          ml={"25px"}
          overflow="hidden"
        >
          <Box
            display="flex"
            height="100%"
            flexDirection="row"
            // overflowX="auto"
            // flexWrap="nowrap"
            // css={{
            //   '&::-webkit-scrollbar': {
            //     width: '0.2rem',
            //     height: '0.2rem',
            //   },
            //   '&::-webkit-scrollbar-thumb': {
            //     backgroundColor: 'transparent',
            //   },
            // }}
          >
            <Box
              key="all"
              borderRadius="2px"
              cursor="pointer"
              _hover={{ bg: useColorModeValue('#202020', '#FFF'), color: useColorModeValue('#FFF', '#000')}}
              borderRight={useColorModeValue('1px solid #E8E8E8', '1px solid #333')}
              bgColor={categorySelected.length === 0 ? useColorModeValue('#202020', '#FFF') : useColorModeValue('#F5F5F7', '#202020')}
              color={categorySelected.length === 0 ? useColorModeValue('#FFF', '#000') : useColorModeValue('#000', '#FFF')}
              whiteSpace="nowrap"
              onClick={() => {
                categoryChangedHandler('All');
              }}
              paddingX="9px"
              pt={"4px"}
            >
              <Text
                fontSize="14px"
                fontWeight="700"
                letterSpacing="1px"
                lineHeight="10px"
                mt={"10px"}
                // _hover={{color: useColorModeValue('#FFF', '#000')}}
                // color={categorySelected.length === 0 ? useColorModeValue('#FFF', '#000') : useColorModeValue('#F5F5F7', '#202020')}
              >
                All
              </Text>
            </Box>
            {categories.map((category, i) => (
              <Box
                key={i}
                borderRadius="2px"
                padding="7px 9px"
                // mr="4px"
                cursor="pointer"
                _hover={{ bgColor: useColorModeValue('#202020', '#FFF'), color: useColorModeValue('#FFF', '#000')}}
                borderRight={useColorModeValue('1px solid #E8E8E8', '1px solid #333')}
                bgColor={categorySelected.includes(category) ? useColorModeValue('#202020', '#FFF') : useColorModeValue('#F5F5F7', '#202020')}
                color={categorySelected.includes(category) ? useColorModeValue('#FFF', '#000') : useColorModeValue('#000', '#FFF')}
                whiteSpace="nowrap"
                onClick={() => {
                  categoryChangedHandler(category);
                }}
              >
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing="1px"
                  lineHeight="10px"
                  mt={"5px"}
                  // _hover={{color: useColorModeValue('#FFF', '#000')}}
                  // color={categorySelected.includes(category) ? useColorModeValue('#FFF', '#000') : useColorModeValue('#000', '#FFF')}
                >
                  {category}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mobile defi selection */}
        <Box
          display={{ base: "block", md: "none" }}
          //display="flex"
          flexDirection="column"
          // mb="20px"
          h={"40px"}
          mr={"20px"}
          ml={"20px"}
          w="100%"
          // mt={"20px"}
          overflow="hidden"
        >
          <Box
            display="flex"
            height="100%"
            flexDirection="row"
            overflowX="auto"
            flexWrap="nowrap"
            css={{
              '&::-webkit-scrollbar': {
                width: '0.2rem',
                height: '0.2rem',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Box
              key="all"
              borderRadius="2px"
              cursor="pointer"
              _hover={{ bg: useColorModeValue('#202020', '#FFF'), color: useColorModeValue('#FFF', '#000') }}
              borderRight={useColorModeValue('1px solid #E8E8E8', '1px solid #333')}
              bgColor={categorySelected.length === 0 ? useColorModeValue('#202020', '#FFF') : useColorModeValue('#F5F5F7', '#202020')}
              color={categorySelected.length === 0 ? useColorModeValue('#FFF', '#000') : useColorModeValue('#000', '#FFF')}
              whiteSpace="nowrap"
              onClick={() => {
                categoryChangedHandler('All');
              }}
              paddingX="9px"
              pt={"4px"}
            >
              <Text
                fontSize="14px"
                fontWeight="700"
                letterSpacing="1px"
                lineHeight="10px"
                mt={"10px"}
              // color={useColorModeValue('#191919', '#FFFFFF')}
              >
                All
              </Text>
            </Box>
            {categories.map((category, i) => (
              <Box
                key={i}
                borderRadius="2px"
                padding="7px 9px"
                cursor="pointer"
                _hover={{ bgColor: useColorModeValue('#202020', '#FFF'), color: useColorModeValue('#FFF', '#000') }}
                borderRight={useColorModeValue('1px solid #E8E8E8', '1px solid #333')}
                bgColor={categorySelected.includes(category) ? useColorModeValue('#202020', '#FFF') : useColorModeValue('#F5F5F7', '#202020')}
                color={categorySelected.includes(category) ? useColorModeValue('#FFF', '#000') : useColorModeValue('#000', '#FFF')}
                whiteSpace="nowrap"
                onClick={() => {
                  categoryChangedHandler(category);
                }}
              >
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing="1px"
                  lineHeight="10px"
                  mt={"5px"}
                // color={useColorModeValue('#191919', '#FFFFFF')}
                >
                  {category}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          padding={"0px 20px 20px 20px"}
          mb={{base: "60px", md:"20px"}}
          // paddingX={"20px"}
          //display={"inline-flex"}
          flexDirection={"column"}
          bgColor={{base: useColorModeValue("#F0F0F5", "none"), md: useColorModeValue("#F0F0F5", "#191919")}}
        >

          {/* Overview score boxes */}
          <Box
            display={"inline-flex"}
            mb={"30px"}
            mt={"30px"}
            w="100%"
          >
            <Box
              w="62%"
              display={{ base: "none", md: "block" }}
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
                  fontSize={"18px"}
                  fontWeight={"600"}
                  lineHeight={"20px"}
                >
                  Overview
                </Text>
                <Box display={"flex"} alignItems={"center"}

                >
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"14px"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    mr="7px"
                  >
                    Total Market Cap
                  </Text>
                  <Tooltip
                    bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                    padding="4px 8px"
                    label="Total Market Cap tracked by Solvendo"
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
                    fontWeight={"600"}
                    lineHeight={"20px"}
                    letterSpacing={"2.4px"}
                  >
                    {overviewData?.tvl ?

                      /* (Math.trunc(overviewData?.tvl)).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      }) */
                      <>
                        ${""}{millify(overviewData?.tvl, {
                          precision: 2,
                          locales: "en-US"
                        })}
                      </>

                      :
                      (
                        <>
                          NA
                        </>
                      )
                    }
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
                  fontWeight={300}
                  textAlign={"center"}
                  opacity={0.6}
                >
                  For the Risk Trend to be launched, the system need to run for a minimum duration of 4 weeks.
                </Text>
              </Box>
            </Box>


            <Box
              w="35%"
              display={{ base: "none", md: "block" }}
              borderRadius={"4px"}
              bgColor={useColorModeValue("#FFFFFF", "#202020")}
              filter={"filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));"}
              px={{ base: "10px", md: "20px" }}
              py={{ base: "10px", md: "25px" }}
            >
              <Text
                color={useColorModeValue("#16171B", "#FFF")}
                fontSize={"18px"}
                fontWeight={600}
                lineHeight={"20px"}
              >
                Score Distribution
              </Text>
              <OverviewColumnChart />
            </Box>
          </Box>

          {/* Overview score Accordions */}
          <Box
            display={"flex"}
            mb={"20px"}
            flexDirection={"column"}
          >
            <Accordion allowToggle>
              <AccordionItem
                w={{ base: "100%", md: "62%" }}
                display={{ base: "block", md: "none" }}
                borderRadius={"4px"}
                borderColor={useColorModeValue("#E1E1E1", "#272727")}
                border={"1x"}
                bgColor={useColorModeValue("#FFFFFF", "#202020")}
                px={{ base: "10px", md: "20px" }}
                py={{ base: "10px", md: "25px" }}
                mr={{ base: "10px", md: "25px" }}
              >
                <h2>
                  <AccordionButton>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      w={"100%"}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        <Text
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"18px"}
                          fontWeight={600}
                          lineHeight={"9.332px"}
                        >
                          Overview
                        </Text>
                      </Box>

                      <Box>
                        <Text
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"14px"}
                          fontWeight={"600"}
                          lineHeight={"9.332px"}
                          letterSpacing={"1.4px"}
                          textTransform={"uppercase"}
                        >
                          {overviewData?.tvl ?

                            /* (Math.trunc(overviewData?.tvl)).toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD'
                            }) */
                            <>
                              ${""}{millify(overviewData?.tvl, {
                                precision: 2,
                                locales: "en-US"
                              })}
                            </>

                            :
                            (
                              <>
                                NA
                              </>
                            )
                          }
                        </Text>
                        <Text
                          color={useColorModeValue("#16171B", "#FFF")}
                          fontSize={"12px"}
                          fontWeight={400}
                          lineHeight={"9.332px"}
                          mt={"9px"}
                        >
                          Total Market Cap
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      borderRadius="50%"
                      border={useColorModeValue("1px solid #16171B", "1px solid #333333")}
                      background={useColorModeValue("#F0F0F5", "#191919")}
                      ml={"5px"}
                    >
                      <AccordionIcon margin={"4px"} />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box
                    bg={"#00000014"}
                    p="30px"
                    mt='30px'
                  >
                    <Text
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"18px"}
                      fontWeight={300}
                      textAlign={"center"}
                      opacity={0.6}
                    >
                      For the Risk Trend to be launched, the system need to run for a minimum duration of 4 weeks.
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion w={{ base: "100%", md: "35%" }}
              allowToggle
              mt={"15px"}>
              <AccordionItem
                w={{ base: "100%", md: "35%" }}
                display={{ base: "block", md: "none" }}
                borderRadius={"4px"}
                borderColor={useColorModeValue("#E1E1E1", "#272727")}
                border={"1x"}
                bgColor={useColorModeValue("#FFFFFF", "#202020")}
                px={{ base: "10px", md: "20px" }}
                py={{ base: "10px", md: "25px" }}
              >
                <AccordionButton justifyContent={"space-between"}>
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"18px"}
                    fontWeight={600}
                    lineHeight={"20px"}
                  >
                    Score Distribution
                  </Text>
                  <Box
                    borderRadius="50%"
                    border={useColorModeValue("1px solid #16171B", "1px solid #333333")}
                    background={useColorModeValue("#F0F0F5", "#191919")}
                    ml={"5px"}
                  >
                    <AccordionIcon margin={"4px"} />
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <OverviewColumnChart />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          {/* Tables */}
          <Box>

            <Box
              w={{ base: "100%", md: "100%" }}
              display={{ base: "none", md: "block" }}
              //display={"flex"}
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
                alignItems={"center"}
              >
                <Text
                  fontSize={"18px"}
                  fontWeight={600}
                  lineHeight={"20px"}
                  color={useColorModeValue("#16171B", "#FFF")}
                >
                  DeFi Rankings
                </Text>
                <Flex alignItems={"center"}>
                  <Box>
                    <Input
                      borderColor={useColorModeValue("#E8E8E8", "#333")}
                      bgColor={useColorModeValue("#F5F5F7", "#191919")}
                      color={useColorModeValue("#16171B", "#A8ADBD")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      w="207px"
                      placeholder="Search DeFi"
                      onChange={(e) => { searchByNameHandler(e.target.value) }}
                    />
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
                  mr="20px"
                >
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"20px"}
                    mr="10px"
                  >
                    Page
                  </Text>
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"15px"}
                    fontWeight={"600"}
                  >
                    {tablePage}
                  </Text>
                </Box>
                {/* Fix */}
                {tableData.DefiRankingsTableData?.isSuccess && tableData.DefiRankingsTableData?.data.totalPages > 1 && (
                  <>
                    <Button
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      w="30px"
                      h="26px"
                      border={"1px solid #C7CAD2"}
                      bg={useColorModeValue("#FFF", "#191919")}
                      padding="0px"
                      cursor={tablePage === 1 ? "not-allowed" : "pointer"}
                      disabled={tablePage === 1}
                      onClick={() => {
                        tablePage !== 1 && pageChangeHandler(tablePage - 1)
                      }}
                    >
                      <Image
                        width={15}
                        height={15}
                        cursor={tablePage === 1 ? "not-allowed" : "pointer"}
                        _disabled={tablePage === 1}
                        style={{ rotate: '180deg' }}
                        src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        alt="prev-arrow"
                      ></Image>
                    </Button>
                    <Button
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      w="30px"
                      h="26px"
                      border={"1px solid #C7CAD2"}
                      bg={useColorModeValue("#FFF", "#191919")}
                      padding="0px"
                      cursor={tablePage === tableData.DefiRankingsTableData?.data?.totalPages ? "not-allowed" : "pointer"}
                      disabled={tablePage === tableData.DefiRankingsTableData?.data?.totalPages}
                      onClick={() => {
                        // fix 3
                        tablePage !== tableData.DefiRankingsTableData?.data?.totalPages && pageChangeHandler(tablePage + 1)
                      }}
                    >
                      <Image
                        width={15}
                        height={15}
                        alt="next-arrow"
                        src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                      ></Image>
                    </Button>
                  </>)}

              </Box>
            </Box>



            <Box
              w={{ base: "100%", md: "100%" }}
              display={{ base: "block", md: "none" }}
              //display={"flex"}
              flexDirection={"column"}
              bgColor={useColorModeValue("#FFFFFF", "#202020")}
              border={"1px solid"}
              borderColor={useColorModeValue("#FFFFFF", "#272727")}
              borderRadius={"6px"}
              dropShadow={"box-shadow: 0px 4px 4px 0px #0000000D;"}
              px={{ base: "0px", md: "20px" }}
              py={{ base: "0px", md: "25px" }}
            >
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={"20px 20px 10px 10px"}
              >
                <Text
                  fontSize={"18px"}
                  fontWeight={600}
                  lineHeight={"20px"}
                  ml={"20px"}
                  color={useColorModeValue("#16171B", "#FFF")}
                >
                  DeFi Rankings
                </Text>

                <Box
                  cursor={"pointer"}
                  onClick={onRankingsSearchToggle}
                >
                  <Image
                    src="/images/search_icon.svg"
                    width={20}
                    height={20}
                    alt="search_icon"
                  />
                </Box>
              </Flex>

              <Collapse
                in={isRankingsSearchOpen}
                animateOpacity={"true"}
              >
                <Box
                  px={{ base: 4, md: 4 }}
                  w={"100%"}
                  display={"flex"}
                  borderColor={colorMode === "light" ? "#E1E1E1" : "#191919"}
                  bgColor={colorMode === "light" ? "#F5F5F7" : "#272727"}
                  borderBottom={"0px"}
                  padding={"8px 19px"}
                >
                  <InputGroup w="100%">
                    <InputLeftElement pointerEvents='none'>
                      <Image
                        src={colorMode === "light" ? "/icons/search_icon_light.svg" : "/icons/search_icon_dark.svg"}
                        width={14}
                        height={14}
                        alt="search_icon"
                      />
                    </InputLeftElement>
                    <Input
                      type="text"
                      border="1px"
                      borderRadius="0px"
                      borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                      bgColor={colorMode === "light" ? "#FFF" : "#191919"}
                      fontSize="12px"
                      fontWeight="400"
                      lineHeight="20px"
                      letterSpacing="1.2px"
                      w="100%"
                      placeholder="Search DeFi"
                      onChange={(e) => { searchByNameHandler(e.target.value) }}
                    ></Input>
                    {/* <Box
                      alignContent={"center"}
                      justifyContent={"center"}
                      cursor={"pointer"}
                      w={"70px"}
                      p={"14px 10px"}
                      bgColor={colorMode === "light" ? "#F0F0F5" : "#191919"}
                      border="1px"
                      borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                    >
                      <Text
                        fontSize={{ base: "12px", sm: "14px" }}
                        fontWeight={"500"}
                        lineHeight={"10px"}
                        textAlign={"center"}
                      >
                        Search
                      </Text>
                    </Box> */}
                  </InputGroup>
                </Box>
              </Collapse>

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
                  mr="20px"
                >
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"20px"}
                    mr="10px"
                  >
                    Page
                  </Text>
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"15px"}
                    fontWeight={"600"}
                  >
                    {tablePage}
                  </Text>
                </Box>
                {/* Fix */}
                {tableData.DefiRankingsTableData?.isSuccess && tableData.DefiRankingsTableData?.data.totalPages > 1 && (
                  <>
                    <Button
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      w="30px"
                      h="26px"
                      border={"1px solid #C7CAD2"}
                      bg={useColorModeValue("#FFF", "#191919")}
                      padding="0px"
                      cursor={tablePage === 1 ? "not-allowed" : "pointer"}
                      disabled={tablePage === 1}
                      onClick={() => {
                        tablePage !== 1 && pageChangeHandler(tablePage - 1)
                      }}
                    >
                      <Image
                        width={15}
                        height={15}
                        cursor={tablePage === 1 ? "not-allowed" : "pointer"}
                        _disabled={tablePage === 1}
                        style={{ rotate: '180deg' }}
                        src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        alt="prev-arrow"
                      ></Image>
                    </Button>
                    <Button
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      w="30px"
                      h="26px"
                      border={"1px solid #C7CAD2"}
                      bg={useColorModeValue("#FFF", "#191919")}
                      padding="0px"
                      cursor={tablePage === tableData.DefiRankingsTableData?.data?.totalPages ? "not-allowed" : "pointer"}
                      disabled={tablePage === tableData.DefiRankingsTableData?.data?.totalPages}
                      onClick={() => {
                        // fix 3
                        tablePage !== tableData.DefiRankingsTableData?.data?.totalPages && pageChangeHandler(tablePage + 1)
                      }}
                    >
                      <Image
                        width={15}
                        height={15}
                        alt="next-arrow"
                        src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                      ></Image>
                    </Button>
                  </>)}
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
