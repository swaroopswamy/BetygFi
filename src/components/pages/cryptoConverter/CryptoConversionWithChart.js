import { Box, Text, useColorMode, useColorModeValue, } from "@chakra-ui/react";
import { renderSVG } from "@util/utility";
import CryptoConversionChart from "./CryptoConversionChart";
import IntervalWiseTableData from "./IntervalWiseTableData";

const CryptoConversionWithChart = ({ coinDetails, toCurrency, currentPrice }) => {
    const { colorMode } = useColorMode();
    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} p={"1.7rem 1.5rem"} layerStyle={"flexColumn"} gap={"1.2rem"}>
            <Box gap={"0.5rem"} display={"flex"} flexDir={"row"} justifyContent={"start"} alignItems={"center"}>
                <Text colorMode={colorMode} variant={"converter_heading"}>
                    {coinDetails?.ticker} to {toCurrency?.toUpperCase()} Chart
                </Text>
                <Box cursor={"pointer"}>
                    {renderSVG("info")}
                </Box>
                <Box cursor={"pointer"}>
                    {renderSVG("download")}
                </Box>
                <Box cursor={"pointer"}>
                    {renderSVG("share")}
                </Box>
            </Box>
            <Box>
                <Text variant={"converter_calc_desc"}>
                    {coinDetails?.name} ({coinDetails?.ticker}) is worth ₹ {currentPrice?.toLocaleString('en-IN')} today, which is a 0.5% increase from an hour ago and a 6.5% increase since yesterday. The value of {coinDetails?.ticker} today is 15.8% lower compared to its value 7 days ago. In the last 24 hours, the total volume of {coinDetails?.name} traded was ₹6,484,692,477,114..
                </Text>
            </Box>
            <Box>
                <CryptoConversionChart
                    coinDetails={coinDetails}
                />
            </Box>
            <Box p={{ base: "0.8rem 0.4rem", md: "1.4rem 1.5rem" }}>
                <IntervalWiseTableData />
            </Box>
        </Box>
    );
};

export default CryptoConversionWithChart;
