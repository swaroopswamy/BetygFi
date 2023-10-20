"use client"
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchDefiData } from "../../redux/defi_dashboard_data/dataSlice";
const Banner = dynamic(() => import("/src/app/components/pages/defiDashboard/banner"));
const TVLBox = dynamic(() => import("/src/app/components/pages/defiDashboard/tvlBox"));
const TrendGraph = dynamic(() => import("/src/app/components/pages/defiDashboard/dashboardTrendGraph"));
const DefiUsersSmallTable = dynamic(() => import("/src/app/components/pages/defiDashboard/defiUsersSmallTable"));
const DefiTVLChart = dynamic(() => import("/src/app/components/pages/defiDashboard/defiTVLchart"));
const DefiAssetsSmallTable = dynamic(() => import("/src/app/components/pages/defiDashboard/defiAssetsSmallTable"));
const DefiFeeRevenueChart = dynamic(() => import("/src/app/components/pages/defiDashboard/defiFeeRevenueChart"));
const GovernanceTable = dynamic(() => import("/src/app/components/pages/defiDashboard/governanceTable"));
const DefiHotContractsSmallTable = dynamic(() => import("../components/pages/defiDashboard/DefiHotContractsSmallTable"));
const DefiInflowOutflowSmallTableComponent = dynamic(() => import('/src/app/components/pages/defiDashboard/DefiInflowOutflowSmallTable'));
import { ChevronLeftIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";

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
                    <Text variant={"h5"}
                     letterSpacing={"1.2px"}
                     _light={{color:"#16171B"}}
                     _dark={{color:"#A8ADBD"}}>
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
