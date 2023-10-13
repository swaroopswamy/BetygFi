import {
    Box,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import millify from "millify";
import TooltipComp from "/src/app/components/tooltipComp"
import { SingleAccordionComp } from "/src/app/components/accordion";
import OverviewAreaChart from "/src/app/components/pages/dashboard/overviewAreaChart";

const OverviewBox = () => {
    const overviewData = useSelector(
        (state) => state?.dashboardTableData?.OverviewData?.data
    );

    return (
        <>
            <Box w="50%" display={{base: "none", lg: "flex"}} flexDir={"column"} justifyContent={"space-between"} borderRadius={"4px"} bgColor={useColorModeValue("#FFFFFF", "#202020")} p={{ base: "10px", md: "25px 20px" }}>
                <Box layerStyle='spaceBetween' gap={"10px"}>
                    <Text variant={"h2"}>
                        Overview
                    </Text>

                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"h3"}>
                            Total Market Cap
                        </Text>
                        <TooltipComp label="Total Market Cap tracked by Solvendo" mr="7px" />
                        <Text variant={"h1"}>
                            {overviewData?.tvl !== undefined ?
                                <>
                                    ${""}{millify(overviewData?.tvl, {
                                        precision: 2,
                                        locales: "en-US"
                                    })}
                                </>
                                :
                                <>
                                    NA
                                </>
                            }
                        </Text>
                    </Box>
                </Box>

                <OverviewAreaChart />
            </Box>

            <SingleAccordionComp display={{base: "flex", lg: "none"}} minH={"50px"}
                ButtonComp={() => {
                    return (
                        <Box layerStyle='spaceBetween' w={"100%"} gap={"10px"} mr={"10px"}>
                            <Text variant={"h2"}>
                                Overview
                            </Text>

                            <Box layerStyle={"flexCenter"} gap={"5px"}>
                                <Text variant={"h3"}>
                                    Total Market Cap
                                </Text>
                                <TooltipComp label="Total Market Cap tracked by Solvendo" mr="7px" />
                                <Text variant={"h1"}>
                                    {overviewData?.tvl !== undefined ?
                                        <>
                                            ${""}{millify(overviewData?.tvl, {
                                                precision: 2,
                                                locales: "en-US"
                                            })}
                                        </>
                                        :
                                        <>
                                            NA
                                        </>
                                    }
                                </Text>
                            </Box>
                        </Box>
                    )}}
                PanelComp={() => {
                    return (
                        <OverviewAreaChart />
                    )}}
            />
        </>
    )
}

export default OverviewBox;