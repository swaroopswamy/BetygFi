import { Box, Input, InputGroup, InputRightAddon, Text, useColorMode, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { renderSVG } from "@util/utility";
import CryptoConversionWithChart from "./CryptoConversionWithChart";

const CoinConverterRightBlock = ({ coinDetails, toCurrency, currentPrice }) => {
    const { colorMode } = useColorMode();
    const [isMd] = useMediaQuery("(min-width: 768px)");

    const getFullForm = (currency) => {
        const currencyMappingObject = {
            inr: "Indian Rupee",
        };
        return currencyMappingObject[currency] || currency;
    };
    return (
        <Box borderRadius={"3px"} gap={"1.25rem"} flexDir={"column"} display={"flex"} width={{ base: "100%", md: "70%" }}>
            <Box p={"1.25rem"} display={"flex"} gap={"1rem"} bg={useColorModeValue("#FFFFFF", "#191919")} flexDir={"column"}>
                <Box display={"flex"} gap={"0.5rem"} flexDir={"column"}>

                    <Text colorMode={colorMode} variant={"converter_heading"} lineHeight={"22px"}>Convert {coinDetails?.name} to {getFullForm(toCurrency)} ({coinDetails?.ticker} to {toCurrency?.toUpperCase()})</Text>
                    <Text colorMode={colorMode} variant={"converter_calc_desc"}>The price of converting 1 {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()} is ₹ {currentPrice.toLocaleString('en-IN')} today.</Text>
                </Box>
                <Box borderRadius='2px' background='rgba(70, 130, 180, 0.10)'>
                    <Box p={"1.25rem"} gap={"0.5rem"} flexDir={"column"} display={"flex"}>

                        <Box w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={{ base: "1rem", md: "2rem" }} flexDir={{ base: "column", md: "row" }}>
                            <InputGroup colorScheme={"#4682B4"} borderRadius={"2px"} size='md'>
                                <Input type="number" min={0} />
                                <InputRightAddon>
                                    <Text colorMode={colorMode} variant={"converter_calc_desc"} fontWeight={600}>
                                        {coinDetails?.ticker}
                                    </Text>
                                </InputRightAddon>
                            </InputGroup>
                            {
                                isMd ?
                                    <Box>
                                        {renderSVG("right-arrow", colorMode)}
                                    </Box>
                                    :
                                    <Box transform={`rotate(90deg)`}>
                                        {renderSVG("right-arrow", colorMode)}
                                    </Box>
                            }
                            <InputGroup colorScheme={"#4682B4"} size='md'>
                                <Input type="number" min={0} />
                                <InputRightAddon>
                                    <Text colorMode={colorMode} variant={"converter_calc_desc"} fontWeight={600}>
                                        {toCurrency?.toUpperCase()}
                                    </Text>
                                </InputRightAddon>
                            </InputGroup>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}   >
                            <Box display={"flex"} justifyContent={"flex-start"}>
                                <Text colorMode={colorMode} textAlign='start' variant={"cookies_footer"}>
                                    1 {coinDetails?.ticker} = ₹4,619,183
                                </Text>
                            </Box>
                            <Box display={"flex"} justifyContent={"flex-end"}>
                                <Text colorMode={colorMode} textAlign='end' variant={"cookies_footer"}>
                                    1 {toCurrency?.toUpperCase()} = 0.000000212393 {coinDetails?.ticker}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box bg={useColorModeValue("#FFFFFF", "#191919")}>
                <CryptoConversionWithChart
                    coinDetails={coinDetails}
                    toCurrency={toCurrency}
                    currentPrice={currentPrice}
                />
            </Box>
        </Box>
    );
};

export default CoinConverterRightBlock;
