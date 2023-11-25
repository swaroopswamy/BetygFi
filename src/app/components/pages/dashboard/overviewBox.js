/* eslint-disable max-len */
import React, { useEffect } from "react";
import { Box, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import millify from "millify";
import TooltipComp from "@/app/components/tooltipComp";
import { SingleAccordionComp } from "@/app/components/accordion";
import OverviewAreaChart from "@/app/components/pages/dashboard/overviewAreaChart";
import {
    fetchOverviewData,
    fetchOverviewGraphData,
} from "@/redux/dashboard_data/dataSlice";

const OverviewBox = () => {
    const dispatch = useDispatch();
    const [isLg] = useMediaQuery("(min-width: 960px)");
    const { colorMode } = useColorMode();

    const overviewData = useSelector(
        (state) => state?.dashboardTableData?.OverviewData?.data
    );

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

    const getOverviewGraphDataHandler = () => {
        const payload = {
            category: categorySelected,
            startDate: "1637750033",
            groupType: "day",
        };
        dispatch(fetchOverviewGraphData(payload));
    };

    useEffect(() => {
        getOverviewDataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blockchainSelected, categorySelected]);

    useEffect(() => {
        getOverviewGraphDataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorySelected]);

    return (
        <>
            {isLg ? (
                <Box
                    w="100%"
                    display={{ base: "none", lg: "flex" }}
                    flexDir={"column"}
                    justifyContent={"start"}
                    borderRadius={"4px"}
                    bgColor={colorMode === "light" ? "#FFFFFF" : "#202020"}
                >
                    <Box
                        layerStyle="spaceBetween"
                        p={{ base: "10px", md: "25px 20px" }}
                    >
                        <Text variant={"h2"}>Overview</Text>

                        <Box layerStyle={"flexCenter"} gap={"10px"}>
                            <Box layerStyle={"center"}>
                                <Text variant={"h3"}>Total Market Cap</Text>
                                <TooltipComp label="Total Market Cap tracked by Solvendo" />
                            </Box>
                            {overviewData?.tvl !== undefined ? (
                                <Text variant={"h1"} suppressHydrationWarning>
                                    {millify(overviewData?.tvl, {
                                        precision: 2,
                                        locales: "en-US",
                                    })}
                                </Text>
                            ) : (
                                <Text variant={"h1"}>NA</Text>
                            )}
                        </Box>
                    </Box>

                    <OverviewAreaChart />
                    {/* <Box bg={"#00000014"} p="30px" mt={"30px"}>
                        <Text variant={"h2"} fontWeight={"300"} textAlign={"center"} opacity={0.6}>
                            For the Risk Trend to be launched, the system need to run for a minimum duration of 4 weeks.
                        </Text>
                    </Box> */}
                </Box>
            ) : (
                <SingleAccordionComp
                    display={{ base: "flex", lg: "none" }}
                    minH={"50px"}
                    ButtonComp={() => {
                        return (
                            <Box
                                layerStyle="spaceBetween"
                                w={"100%"}
                                gap={"10px"}
                                mr={"10px"}
                            >
                                <Text variant={"h2"}>Overview</Text>

                                <Box layerStyle={"flexCenter"} gap={"5px"}>
                                    <Text variant={"h3"}>Total Market Cap</Text>
                                    <TooltipComp
                                        label="Total Market Cap tracked by Solvendo"
                                        mr="7px"
                                    />
                                    {overviewData?.tvl !== undefined ? (
                                        <Text
                                            variant={"h1"}
                                            suppressHydrationWarning
                                        >
                                            {millify(overviewData?.tvl, {
                                                precision: 2,
                                                locales: "en-US",
                                            })}
                                        </Text>
                                    ) : (
                                        <Text variant={"h1"}>NA</Text>
                                    )}
                                </Box>
                            </Box>
                        );
                    }}
                    PanelComp={() => {
                        return (
                            <OverviewAreaChart />
                            // <Box bg={"#00000014"} p="30px" mt={"30px"} minH={"100px"}>
                            //     <Text variant={"h2"} fontWeight={"300"} textAlign={"center"} lineHeight={"20px"} opacity={0.6}>
                            //         For the Risk Trend to be launched, the system need to run for a minimum duration of 4 weeks.
                            //     </Text>
                            // </Box>
                        );
                    }}
                />
            )}
        </>
    );
};

export default OverviewBox;
