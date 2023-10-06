
"use client"
import Governance from "./governance";
import BarChart from "./BarChart";
import React, { useCallback, useEffect, useState } from "react";
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Tooltip, Menu, MenuButton, MenuList, MenuItem, Checkbox, Container } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import millify from "millify";
import DonutChart from "./DonutChart";
import DefiAssetCompositionSmallTable from './DefiAssetCompositionSmallTable';
import DefiHotContractsSmallTableComponent from './DefiHotContractsSmallTable';
import DefiInflowOutflowSmallTableComponent from './DefiInflowOutflowSmallTable';
import GovernanceTable from "./governance";
import { fetchDefiUsersTableData, fetchDefiData, fetchDefiHotContractsTableData, fetchDefiAssetCompositionTableData } from "../../redux/defi_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import { getDefiHotContractsTableData } from "@/services/defiDashboardService";
import { Router } from "next/router";
import Banner from "/src/app/components/pages/defiDashboard/banner";
import TVLBox from "/src/app/components/pages/defiDashboard/tvlBox";
import TrendGraph from "/src/app/components/pages/defiDashboard/dashboardTrendGraph";
import DefiUsersSmallTable from "/src/app/components/pages/defiDashboard/defiUsersSmallTable";

const DefiDashboardPage = () => {
    const searchParam = useSearchParams();
    const pathname = usePathname();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const router = useRouter();

    const defi = searchParam.get("defi");
    const id = searchParam.get("id");

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    
    const getDefiDataHandler = () => {
        const payload = {
            id: id,
        };
        dispatch(fetchDefiData(payload));
    }

    const getDefiUsersTableDataHandler = () => {
        const payload = {
            defi: defi,
            blockchain: [blockchainSelected],
        };
        dispatch(fetchDefiUsersTableData(payload));
    };
    const getDefiHotContractsDataHandler = () => {
        const payload = {
            defi: defi,
            blockchain: "",
        };
        dispatch(fetchDefiHotContractsTableData(payload));
    };
    const getDefiAssetCompositionDataHandler = () => {
        const payload = {
            defi: defi,
        };
        dispatch(fetchDefiAssetCompositionTableData(payload));
    };

    useEffect(() => {
        getDefiDataHandler();
        //getDefiUsersTableDataHandler();
        getDefiHotContractsDataHandler();
        getDefiAssetCompositionDataHandler();
    }, []);

    useEffect(() => {
        dispatch(fetchBlockchainListData());
    }, []);

    useEffect(() => {
        getDefiUsersTableDataHandler();
    }, [blockchainSelected]);

    return (
        <>
            <Box bgColor={useColorModeValue("#F0F0F5", "#191919")} layerStyle={"center"} w={"100%"}>
                <Banner />
            </Box>

            <Box display={"flex"} flexDir={"column"} bg={useColorModeValue("#F0F0F5", "#191919")} p={"20px"} gap={"20px"}>
                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <TVLBox />
                    <TrendGraph />
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <DefiUsersSmallTable />
                    <BarChart />
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <DefiAssetCompositionSmallTable />
                    <DonutChart />
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <DefiHotContractsSmallTableComponent />
                    <DefiInflowOutflowSmallTableComponent />
                </Box>

                <Box>
                    <GovernanceTable />
                </Box>
            </Box>
        </>
    );
};

export default DefiDashboardPage;
