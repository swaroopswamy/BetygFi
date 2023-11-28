"use client";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchDefiData } from "@/redux/defi_dashboard_data/dataSlice";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";

const Banner = dynamic(() =>
    import("@/app/components/pages/defiDashboard/banner")
);
const TVLBox = dynamic(() =>
    import("@/app/components/pages/defiDashboard/tvlBox")
);
const TrendGraph = dynamic(() =>
    import("@/app/components/pages/defiDashboard/dashboardTrendGraph")
);
const DefiUsersSmallTable = dynamic(() =>
    import("@/app/components/pages/defiDashboard/defiUsersSmallTable")
);
const DefiTVLChart = dynamic(() =>
    import("@/app/components/pages/defiDashboard/defiTVLchart")
);
const DefiAssetsSmallTable = dynamic(() =>
    import("@/app/components/pages/defiDashboard/defiAssetsSmallTable")
);
const DefiFeeRevenueChart = dynamic(() =>
    import("@/app/components/pages/defiDashboard/defiFeeRevenueChart")
);
const GovernanceTable = dynamic(() =>
    import("@/app/components/pages/defiDashboard/governanceTable")
);
const DefiHotContractsSmallTable = dynamic(() =>
    import("@/app/components/pages/defiDashboard/DefiHotContractsSmallTable")
);
const DefiInflowOutflowSmallTableComponent = dynamic(() =>
    import("@/app/components/pages/defiDashboard/DefiInflowOutflowSmallTable")
);

const DefiDashboardPage = ({ params }) => {
    const searchParamProtocolSlug = params?.protocol_slug;

    const router = useRouter();
    const dispatch = useDispatch();

    const getDefiDataHandler = () => {
        if (searchParamProtocolSlug && searchParamProtocolSlug !== "") {
            const payload = {
                id: searchParamProtocolSlug,
            };
            dispatch(fetchDefiData(payload));
        }
    };

    useEffect(() => {
        getDefiDataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <Banner />
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
                    <TVLBox />
                    <TrendGraph />
                </Box>

                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <DefiUsersSmallTable
                        searchParamProtocolSlug={searchParamProtocolSlug}
                    />
                    <DefiTVLChart
                        searchParamProtocolSlug={searchParamProtocolSlug}
                    />
                </Box>

                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <DefiAssetsSmallTable
                        searchParamProtocolSlug={searchParamProtocolSlug}
                    />
                    <DefiFeeRevenueChart
                        searchParamProtocolSlug={searchParamProtocolSlug}
                    />
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
                        searchParamProtocolSlug={searchParamProtocolSlug}
                    />
                </Box>
            </Box>
        </>
    );
};

export default DefiDashboardPage;
