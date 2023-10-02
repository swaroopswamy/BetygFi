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
import { blockchains, categories } from "../../../util/constant";
import OverviewColumnChart from "./OverviewColumnChart";
import OverviewAreaChart from "./OverviewAreaChart";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import millify from "millify";
import {
  categoryChangedReducer,
  fetchDefiRankingTableData,
  fetchOverviewData,
  fetchScoreGraphData,
} from "@/redux/dashboard_data/dataSlice";
import isEmpty from "is-empty";
// import './page.module.css';
import '/styles/styles.scss';

import DashboardBlockchainSelection from "./DashboardBlockchainSelection";

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [tablePage, setTablePage] = useState(1);
  const [searchByName, setSearchByName] = useState('');
  const dispatch = useDispatch();
  const { isOpen: isRankingsSearchOpen, onToggle: onRankingsSearchToggle } = useDisclosure();

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );
  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );

  const overviewData = useSelector(
    (state) => state?.dashboardTableData?.OverviewData?.data
  );

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

  return (
    <>
      <Box display={"flex"} flexDir={"column"} px={{base: "18px", md: "30px"}} layerStyle='one' >
        <Box display={"flex"} flexDir={{ base: "column", md: "row"}} alignItems={{base: "start", md: "center"}} pt={"30px"} gap={"20px"}>
          <Text textStyle='h1'> DeFi Markets </Text>
          <DashboardBlockchainSelection />
        </Box>

        <Box py={"15px"} w={{base: "100%", md: "80%"}}>
          <Text textStyle='body'>
              Filter your DeFi exploration by focusing on both the blockchain technology it utilises and its specific industry application. This way, you'll uncover the projects best suited to your interests, whether in Prediction Markets, Lending and Borrowing, or Insurance.
          </Text>
        </Box>

        <DashboardDefiSelection />

      </Box>
    </>
  );
};

export default Dashboard;

const DashboardDefiSelection = () => {
  const dispatch = useDispatch();

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );
  const categoryChangedHandler = (category) => {
    dispatch(categoryChangedReducer(category));
  };

  return (
    <>
      <Box
        display={"flex"}
        h={"40px"}
        w="100%"
        overflow="hidden"
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
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={"8px"}
            // _hover={{color: useColorModeValue('#FFF', '#000')}}
            // color={categorySelected.includes(category) ? useColorModeValue('#FFF', '#000') : useColorModeValue('#000', '#FFF')}
            >
              {category}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  )
}
