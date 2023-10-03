import {
    Box,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import millify from "millify";
import TooltipComp from "/src/app/components/tooltipComp"

const OverviewBox = () => {
    const overviewData = useSelector(
        (state) => state?.dashboardTableData?.OverviewData?.data
    );

    return (
        <>
            <Box w={{base: "100%", md: "50%"}} display={"flex"} flexDir={"column"} justifyContent={"start"} borderRadius={"4px"} bgColor={useColorModeValue("#FFFFFF", "#202020")} p={{ base: "10px", md: "25px 20px" }}>
                <Box layerStyle='spacebetween' gap={"10px"}>
                    <Text variant={"h2"}>
                        Overview
                    </Text>

                    <Box layerStyle={"flexcenter"} gap={"5px"}>
                        <Text variant={"h3"}>
                            Total Market Cap
                        </Text>
                        <TooltipComp label="Total Market Cap tracked by Solvendo" mr="7px" />
                        <Text variant={"h1"}>
                            {overviewData?.tvl ?
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
                <Box bg={"#00000014"} p="30px" mt={"30px"}>
                    <Text variant={"h2"} fontWeight={"300"} textAlign={"center"} opacity={0.6}>
                        For the Risk Trend to be launched, the system need to run for a minimum duration of 4 weeks.
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default OverviewBox;