import { Box, Text, useColorMode, useColorModeValue, useToast, } from "@chakra-ui/react";
import { copyToClipboard_, renderSVG } from "@util/utility";
import CryptoConversionChart from "./CryptoConversionChart";
import IntervalWiseTableData from "./IntervalWiseTableData";

const CryptoConversionWithChart = ({ coinDetails, coinAnalyticsData, toCurrency, currentPrice }) => {
    const toast = useToast();
    const { colorMode } = useColorMode();
    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} p={"1.7rem 1.5rem"} layerStyle={"flexColumn"} gap={"1.2rem"}>
            <Box gap={"0.5rem"} display={"flex"} flexDir={"row"} justifyContent={"start"} alignItems={"center"}>
                <Text colorMode={colorMode} variant={"converter_heading"}>
                    {coinDetails?.ticker} to {toCurrency?.toUpperCase()} Chart
                </Text>
                {/* <Box cursor={"pointer"}>
                    {renderSVG("info")}
                </Box> */}
                <Box cursor={"pointer"}>
                    {renderSVG("download")}
                </Box>
                <Box onClick={() => {
                    copyToClipboard_(window.location.href);
                    toast({
                        title: 'Link copied!!',
                        description: "You can share it now",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                }} cursor={"pointer"}>
                    {renderSVG("share")}
                </Box>
            </Box>
            <Box>
                <Text variant={"converter_calc_desc"}>
                    {coinDetails?.name} ({coinDetails?.ticker}) is worth ₹ {currentPrice?.toLocaleString('en-IN')} today, which is a {Math.abs(+coinAnalyticsData?.percentageChange_1hr)?.toFixed(4)}% {+coinAnalyticsData?.percentageChange_1hr > 0 ? "increase" : "decrease"} from an hour ago and a {Math.abs(+coinAnalyticsData?.percentageChange_24hr)?.toFixed(4)}% {+coinAnalyticsData?.percentageChange_24hr > 0 ? "increase" : "decrease"} since yesterday. The value of {coinDetails?.ticker} today is {Math.abs(+coinAnalyticsData?.percentageChange_7d)?.toFixed(4)}% {+coinAnalyticsData?.percentageChange_7d > 0 ? "higher" : "lower"} compared to its value 7 days ago. In the last 24 hours, the total volume of {coinDetails?.name} traded was ₹ {coinAnalyticsData?.volumeTraded?.toLocaleString('en-IN')}.
                </Text>
            </Box>
            <Box>
                <CryptoConversionChart
                    coinAnalyticsData={coinAnalyticsData}
                    coinDetails={coinDetails}
                />
            </Box>
            <Box p={{ base: "0.8rem 0.4rem", md: "0.5rem 1.5rem" }}>
                <IntervalWiseTableData
                    coinAnalyticsData={coinAnalyticsData}
                />
            </Box>
        </Box>
    );
};

export default CryptoConversionWithChart;
