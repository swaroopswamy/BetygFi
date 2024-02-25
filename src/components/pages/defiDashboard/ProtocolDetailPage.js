/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchDefiAssetCompositionTableData, fetchDefiFeeRevenueData, fetchDefiGovernanceTableData, fetchDefiGraphData, fetchDefiTvlBorrowData, fetchDefiUsersTableData, } from "@redux/defi_dashboard_data/dataSlice";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";
import GovernanceTable from "@components/pages/defiDashboard/governanceTable";
import DashboardTrendGraph from "@components/pages/defiDashboard/dashboardTrendGraph";

const Banner = dynamic(() => import("@components/pages/defiDashboard/banner"));
const TVLBox = dynamic(() => import("@components/pages/defiDashboard/tvlBox"));
const DefiUsersSmallTable = dynamic(() => import("@components/pages/defiDashboard/defiUsersSmallTable"));
const DefiTVLChart = dynamic(() => import("@components/pages/defiDashboard/defiTVLchart"));
const DefiAssetsSmallTable = dynamic(() => import("@components/pages/defiDashboard/defiAssetsSmallTable"));
const DefiFeeRevenueChart = dynamic(() => import("@components/pages/defiDashboard/defiFeeRevenueChart"));
/* const GovernanceTable = dynamic(() => import("@components/pages/defiDashboard/governanceTable")); */
const DefiHotContractsSmallTable = dynamic(() => import("@components/pages/defiDashboard/DefiHotContractsSmallTable"));
const DefiInflowOutflowSmallTableComponent = dynamic(() => import("@components/pages/defiDashboard/DefiInflowOutflowSmallTable"));

const DefiDashboardPage = ({ searchParamProtocolSlug, defiData }) => {

    const router = useRouter();
    const dispatch = useDispatch();

    const blockchainSelected = useSelector((state) => state?.dashboardTableData?.blockchainType);

    const getDefiUsersTableDataHandler = () => {
        const payload = {
            defi: searchParamProtocolSlug,
            blockchain: blockchainSelected,
        };
        dispatch(fetchDefiUsersTableData(payload));
    };

    const getTvlBorrowDataHandler = () => {
        const payload = {
            defi: searchParamProtocolSlug,
            blockchain: blockchainSelected,
        };
        dispatch(fetchDefiTvlBorrowData(payload));
    };
    const getDefiAssetsTableDataHandler = () => {
        const payload = {
            blockchain: blockchainSelected,
            page: 1,
            limit: 20,
        };
        if (searchParamProtocolSlug && searchParamProtocolSlug !== '') {
            payload.defi = searchParamProtocolSlug;
        }
        dispatch(fetchDefiAssetCompositionTableData(payload));
    };

    const getFeeRevenueDataHandler = () => {
        const payload = {
            blockchain: blockchainSelected,
        };
        if (searchParamProtocolSlug && searchParamProtocolSlug !== '') {
            payload.defi = searchParamProtocolSlug;
        }
        dispatch(fetchDefiFeeRevenueData(payload));
    };

    const [tablePage, setTablePage] = useState(1);
    const [tableLimit, setTableLimit] = useState(10);

    const pageChangeHandler = (page) => {
        if (page == "") {
            setTablePage(page);
        }
        if (page >= 1) {
            setTablePage(page);
        }
    };
    const getDefiGovernanceTableDataHandler = () => {
        const payload = {
            page: tablePage,
            limit: tableLimit
        };
        if (searchParamProtocolSlug && searchParamProtocolSlug !== '') {
            payload.defi = searchParamProtocolSlug;
        }
        dispatch(fetchDefiGovernanceTableData(payload));
    };


    useEffect(() => {
        if (tablePage != "") {
            setTimeout(() => {
                getDefiGovernanceTableDataHandler();
            }, 1500);
        }
    }, [tablePage, tableLimit, setTablePage]);

    useEffect(() => {
        Promise.all([
            getDefiUsersTableDataHandler(),
            getTvlBorrowDataHandler(),
            getDefiAssetsTableDataHandler(),
            getFeeRevenueDataHandler(),
            getDefiGraphDataHandler(),
        ]).then(result => result);
    }, [blockchainSelected]);

    const getDefiGraphDataHandler = () => {
        const payload = {
            defi: searchParamProtocolSlug,
            blockchain: blockchainSelected,
        };
        dispatch(fetchDefiGraphData(payload));
    };

    return (
        <>
            <Box
                bgColor={{
                    base: useColorModeValue("#FFFFFF", "#202020"),
                    md: useColorModeValue("#F0F0F5", "#191919"),
                }}
                display={"flex"}
                flexDir={"column"}
                w={"100%"}
            >
                <Box
                    layerStyle={"flexCenter"}
                    cursor={"pointer"}
                    gap={"10px"}
                    p={"10px 20px"}
                    onClick={() => router.push(`/`)}
                >
                    <ChevronLeftIcon
                        w={"24px"}
                        h={"24px"}
                        borderRadius={"50%"}
                        border={useColorModeValue(
                            "1px solid #E1E1E1",
                            "1px solid #333333"
                        )}
                    />
                    <Text
                        variant={"h5"}
                        letterSpacing={"1.2px"}
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#A8ADBD" }}
                    >
                        Home/DeFi Dashboard
                    </Text>
                </Box>
                <Banner defiData={defiData} />
            </Box>

            <Box
                display={"flex"}
                flexDir={"column"}
                bg={useColorModeValue("#F0F0F5", "#191919")}
                p={"20px"}
                gap={"20px"}
            >
                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <TVLBox defiData={defiData} />
                    {/*   <TrendGraph /> */}
                    <DashboardTrendGraph searchParamProtocolSlug={searchParamProtocolSlug} />
                </Box>

                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <DefiAssetsSmallTable searchParamProtocolSlug={searchParamProtocolSlug} />
                    <DefiFeeRevenueChart searchParamProtocolSlug={searchParamProtocolSlug} />
                </Box>

                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <DefiUsersSmallTable searchParamProtocolSlug={searchParamProtocolSlug} />
                    <DefiTVLChart searchParamProtocolSlug={searchParamProtocolSlug} />
                </Box>

                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <DefiHotContractsSmallTable />
                    <DefiInflowOutflowSmallTableComponent />
                </Box>

                <Box>
                    <GovernanceTable
                        setTablePage={setTablePage}
                        tablePage={tablePage}
                        tableLimit={tableLimit}
                        setTableLimit={setTableLimit}
                        pageChangeHandler={pageChangeHandler}
                        searchParamProtocolSlug={searchParamProtocolSlug}
                    />
                </Box>
            </Box>
        </>
    );
};

export default DefiDashboardPage;
