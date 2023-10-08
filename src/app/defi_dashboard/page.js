
"use client"
import React, { useCallback, useEffect, useState } from "react";
import { Box, useColorModeValue, useColorMode, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import DefiInflowOutflowSmallTableComponent from '/src/app/components/pages/defiDashboard/DefiInflowOutflowSmallTable';
import { fetchDefiUsersTableData, fetchDefiData, fetchDefiHotContractsTableData, fetchDefiAssetCompositionTableData } from "../../redux/defi_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import { getDefiHotContractsTableData } from "@/services/defiDashboardService";
import { Router } from "next/router";

import Banner from "/src/app/components/pages/defiDashboard/banner";
import TVLBox from "/src/app/components/pages/defiDashboard/tvlBox";
import TrendGraph from "/src/app/components/pages/defiDashboard/dashboardTrendGraph";
import DefiUsersSmallTable from "/src/app/components/pages/defiDashboard/defiUsersSmallTable";
import DefiTVLChart from "/src/app/components/pages/defiDashboard/defiTVLchart";
import DefiAssetsSmallTable from "/src/app/components/pages/defiDashboard/defiAssetsSmallTable";
import DefiFeeRevenueChart from "/src/app/components/pages/defiDashboard/defiFeeRevenueChart";
import GovernanceTable from "/src/app/components/pages/defiDashboard/governance";
import DefiHotContractsSmallTable from "../components/pages/defiDashboard/DefiHotContractsSmallTable";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const DefiDashboardPage = () => {
    const searchParam = useSearchParams();
    const pathname = usePathname();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const router = useRouter();

    const defi = searchParam.get("defi");
    const id = searchParam.get("id");
    
    const getDefiDataHandler = () => {
        const payload = {
            id: id,
        };
        dispatch(fetchDefiData(payload));
    }
    
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
        getDefiHotContractsDataHandler();
        getDefiAssetCompositionDataHandler();
    }, []);

    useEffect(() => {
        dispatch(fetchBlockchainListData());
    }, []);

    return (
        <>
            <Box bgColor={useColorModeValue("#F0F0F5", "#191919")} display={"flex"} flexDir={"column"} w={"100%"}>
                <Box layerStyle={"flexCenter"} cursor={"pointer"} gap={"10px"} m={"20px 30px"}
                    onClick={() => router.push(`/`)}
                >
                    <ChevronLeftIcon
                        w={"24px"}
                        h={"24px"}
                        borderRadius={"50%"}
                        border={useColorModeValue("1px solid #E1E1E1", "1px solid #333333")}
                    />
                    <Text variant={"h6"} letterSpacing={"1.2px"}>
                        Home/Defi Dashboard
                    </Text>
                </Box>
                <Banner />
            </Box>

            <Box display={"flex"} flexDir={"column"} bg={useColorModeValue("#F0F0F5", "#191919")} p={"20px"} gap={"20px"}>
                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <TVLBox />
                    <TrendGraph />
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <DefiUsersSmallTable />
                    <DefiTVLChart />
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <DefiAssetsSmallTable />
                    <DefiFeeRevenueChart />
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} gap={"20px"}>
                    <DefiHotContractsSmallTable/>
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
