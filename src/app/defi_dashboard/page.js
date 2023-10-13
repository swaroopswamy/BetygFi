"use client"
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import DefiInflowOutflowSmallTableComponent from '/src/app/components/pages/defiDashboard/DefiInflowOutflowSmallTable';
import { fetchDefiData } from "../../redux/defi_dashboard_data/dataSlice";
import Banner from "/src/app/components/pages/defiDashboard/banner";
import TVLBox from "/src/app/components/pages/defiDashboard/tvlBox";
import TrendGraph from "/src/app/components/pages/defiDashboard/dashboardTrendGraph";
import DefiUsersSmallTable from "/src/app/components/pages/defiDashboard/defiUsersSmallTable";
import DefiTVLChart from "/src/app/components/pages/defiDashboard/defiTVLchart";
import DefiAssetsSmallTable from "/src/app/components/pages/defiDashboard/defiAssetsSmallTable";
import DefiFeeRevenueChart from "/src/app/components/pages/defiDashboard/defiFeeRevenueChart";
import GovernanceTable from "/src/app/components/pages/defiDashboard/governanceTable";
import DefiHotContractsSmallTable from "../components/pages/defiDashboard/DefiHotContractsSmallTable";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const DefiDashboardPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const searchParam = useSearchParams();

    
    const id = searchParam.get("id");

    const getDefiDataHandler = () => {
        const payload = {
            id: id,
        };
        dispatch(fetchDefiData(payload));
    }

    useEffect(() => {
        getDefiDataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Box bgColor={{base: useColorModeValue("#FFFFFF", "#202020"), md: useColorModeValue("#F0F0F5", "#191919")}} display={"flex"} flexDir={"column"} w={"100%"}>
                <Box layerStyle={"flexCenter"} cursor={"pointer"} gap={"10px"} p={"10px 20px"}
                    onClick={() => router.push(`/`)}
                >
                    <ChevronLeftIcon
                        w={"24px"}
                        h={"24px"}
                        borderRadius={"50%"}
                        border={useColorModeValue("1px solid #E1E1E1", "1px solid #333333")}
                    />
                    <Text variant={"h6"}>
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
