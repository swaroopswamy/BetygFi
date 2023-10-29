/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "@util/constant";
import {
  categoryChangedReducer,
  fetchOverviewData,
} from "@/redux/dashboard_data/dataSlice";
const BlockchainSelectionMenu = dynamic(() =>
  import("@/app/components/blockchainSelectionMenu")
);
const Rankings = dynamic(() =>
  import("@/app/components/pages/dashboard/defiRankingsTable")
);
const OverviewColumnChart = dynamic(() =>
  import("@/app/components/pages/dashboard/overviewColumnChart")
);
const OverviewBox = dynamic(() =>
  import("@/app/components/pages/dashboard/overviewBox")
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );

  const getOverviewDataHandler = () => {
    const payload = {
      blockchain: blockchainSelected,
      category: categorySelected,
    };
    dispatch(fetchOverviewData(payload));
  };

  useEffect(() => {
    getOverviewDataHandler();
  }, [blockchainSelected, categorySelected]);

  return (
    <Box display={"flex"} flexDir={"column"} overflow={"hidden"}>
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems={"center"}
        w={"100%"}
        pt={"30px"}
        gap={"20px"}
      >
        <Text variant="h1" px={"30px"}>
          DeFi Markets{" "}
        </Text>
        <BlockchainSelectionMenu />
      </Box>

      <Box display={{ base: "flex", md: "none" }} pt={"30px"}>
        <Text variant="h1" px={"18px"}>
          DeFi Markets
        </Text>
      </Box>

      <Box display={{ base: "flex", md: "none" }} py={"15px"} overflow={"auto"}>
        <BlockchainSelectionMenu />
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        px={{ base: "18px", md: "30px" }}
        py={"15px"}
        w={{ base: "100%", md: "80%" }}
      >
        <Text variant="body">
          Filter your DeFi exploration by focusing on both the blockchain
          technology it utilises and its specific industry application. This
          way, you'll uncover the projects best suited to your interests,
          whether in Prediction Markets, Lending and Borrowing, or Insurance.
        </Text>
      </Box>

      <Box display={"flex"} overflow={"auto"}>
        <DashboardDefiSelection />
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        bg={useColorModeValue("#F0F0F5", "#191919")}
        px={{ base: "18px", md: "30px" }}
        borderTop={useColorModeValue(
          "1px solid rgba(0, 0, 0, 0.1)",
          "1px solid rgba(255, 255, 255, 0.1)"
        )}
      >
        <Box
          display={"flex"}
          flexDir={{ base: "column", lg: "row" }}
          py={"30px"}
          gap={"15px"}
        >
          <OverviewBox />
          <OverviewColumnChart />
        </Box>

        <Rankings />
      </Box>
    </Box>
  );
};

export default Dashboard;

const DashboardDefiSelection = ({ ...rest }) => {
  const dispatch = useDispatch();

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );
  const categoryChangedHandler = (category) => {
    dispatch(categoryChangedReducer(category));
  };

  return (
    <Box
      display={"flex"}
      h={"40px"}
      px={{ base: "18px", md: "30px" }}
      {...rest}
    >
      <Button
        variant={{ base: "defiMobile", md: "defi" }}
        isActive={categorySelected.length === 0}
        onClick={() => categoryChangedHandler("All")}
        _light={{
          borderRight: "1px solid rgba(0, 0, 0, 0.1)",
        }}
        _dark={{
          borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {" "}
        All{" "}
      </Button>
      {categories.map((category, i) => (
        <Button
          key={i}
          variant={{ base: "defiMobile", md: "defi" }}
          isActive={categorySelected.includes(category)}
          onClick={() => categoryChangedHandler(category)}
          _light={{
            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
          }}
          _dark={{
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {" "}
          {category}{" "}
        </Button>
      ))}
    </Box>
  );
};
