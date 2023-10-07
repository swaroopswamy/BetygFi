/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Box,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { categories } from "../../../util/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryChangedReducer,
  fetchDefiRankingTableData,
  fetchOverviewData,
  fetchScoreGraphData,
} from "@/redux/dashboard_data/dataSlice";
import isEmpty from "is-empty";
import '/styles/styles.scss';

import BlockchainSelectionMenu from "/src/app/components/blockchainSelectionMenu";
import Rankings from "/src/app/components/pages/dashboard/defiRankingsTable";
import OverviewColumnChart from "/src/app/components/pages/dashboard/overviewColumnChart";
import OverviewBox from "/src/app/components/pages/dashboard/overviewBox";

const Dashboard = () => {
  const [tablePage, setTablePage] = useState(1);
  const [searchByName, setSearchByName] = useState('');
  const dispatch = useDispatch();

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );
  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );

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
      <Box display={"flex"} flexDir={"column"} overflow={"hidden"}>
        <Box display={{base: "none", md: "flex"}} alignItems={"center"} w={"100%"} pt={"30px"} gap={"20px"}>
          <Text variant='h1' px={"30px"}> DeFi Markets </Text>
          <BlockchainSelectionMenu />
        </Box>

        <Box display={{base: "flex", md: "none"}} pt={"30px"}>
          <Text textStyle='h1' px={"18px"}> DeFi Markets </Text>
        </Box>

        <Box display={{base: "flex", md: "none"}} pt={"15px"} overflow={"auto"}>
          <BlockchainSelectionMenu />
        </Box>

        <Box px={{base: "18px", md: "30px"}} py={"15px"} w={{base: "100%", md: "80%"}}>
          <Text textStyle='body'>
              Filter your DeFi exploration by focusing on both the blockchain technology it utilises and its specific industry application. This way, you'll uncover the projects best suited to your interests, whether in Prediction Markets, Lending and Borrowing, or Insurance.
          </Text>
        </Box>

        <Box display={"flex"} overflow={"auto"}>
          <DashboardDefiSelection />
        </Box>

        <Box display={"flex"} flexDir={"column"} bg={useColorModeValue('#F0F0F5', '#191919')} px={{base: "18px", md: "30px"}} borderTop={useColorModeValue("1px solid rgba(0, 0, 0, 0.1)", "1px solid rgba(255, 255, 255, 0.1)")}>
          <Box display={"flex"} flexDir={{base: "column", lg: "row"}} py={"30px"} gap={"15px"}>
            <OverviewBox />
            <OverviewColumnChart />
          </Box>

          <Rankings />
          
        </Box>

      </Box>
    </>
  );
};

export default Dashboard;

const DashboardDefiSelection = ( {...rest} ) => {
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
        px={{base: "18px", md: "30px"}}
        {...rest}
      >
        <Button 
          variant={'defi'}
          isActive={categorySelected.length === 0} 
          onClick={() => categoryChangedHandler('All')}
          borderRight={useColorModeValue("1px solid rgba(0, 0, 0, 0.1)", "1px solid rgba(255, 255, 255, 0.1)")}
        > All </Button>
        {categories.map((category, i) => (
          <Button
            key={i} 
            variant={'defi'}
            isActive={categorySelected.includes(category)}
            onClick={() => categoryChangedHandler(category)}
            borderRight={useColorModeValue("1px solid rgba(0, 0, 0, 0.1)", "1px solid rgba(255, 255, 255, 0.1)")}
          > {category} </Button>
        ))}
      </Box>
    </>
  )
}
