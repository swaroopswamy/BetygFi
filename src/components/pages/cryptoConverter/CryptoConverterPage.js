"use client";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Progress, Text, useColorMode, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import CustomAvatar from "@components/avatar";
import { fetchCoinRankingsTableData, fetchConversionCoinChartGraphData, fetchCurrencyListData } from "@redux/coin_data/dataSlice";
import { convertToInternationalCurrencySystem, getCurrencyDetails, renderSVG } from "@util/utility";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CoinConverterRightBlock from "./CoinConverterRightBlock";
import CoinData from "./CoinData";
import CoinRankRepresentator from "./CoinRankRepresentator";
import CryptoConversionTable from "./CryptoConversionTable";
import CryptoNews from "./CryptoNews";
import SevenDaysPriceHistory from "./SevenDaysPriceHistory";

const CryptoConverterPage = ({ coinDetails, coinAnalyticsData, currentPrice, coinNewsData, toCurrency }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [isMd] = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        dispatch(fetchConversionCoinChartGraphData({ coinSlug: coinDetails?.slug, filter: "price", interval: "24h", currency: toCurrency?.toUpperCase() }));
    }, [coinDetails?.slug]);

    const getCoinListDataHandler = () => {
        const payload = {
            category: "all",
            page: 1,
            limit: 50,
            score_dist: '',
        };
        dispatch(fetchCoinRankingsTableData(payload));
    };

    useEffect(() => {
        getCoinListDataHandler();
        dispatch(fetchCurrencyListData());
    }, []);

    const getHighLowProgressValue = () => {
        const lowPrice = coinAnalyticsData?.price_low;
        const highPrice = coinAnalyticsData?.price_high;
        return (100 - (((highPrice - lowPrice) / highPrice) * 100));
    };

    const getBgColorForStatistics = (index, colorMode) => {
        if (colorMode === "light") {
            return index == 0 ? "#C8E2F9" : (index == 1 ? "rgba(255, 163, 163, 0.24)" : (index == 2 ? "rgba(154, 218, 138, 0.24)" : "#E6F3FF"));
        } else {
            return index == 0 ? "#C8E2F9" : (index == 1 ? "#FFA3A3" : (index == 2 ? "#9ADA8A" : "#E6F3FF"));
        }
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
                        colorMode={colorMode}
                        variant={"h5"}
                        letterSpacing={"1.2px"}
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#A8ADBD" }}
                    >
                        {`Coin Listing/${coinDetails?.name}/${toCurrency?.toUpperCase()}`}
                    </Text>
                </Box>
            </Box>

            <Box
                display={"flex"}
                flexDir={{ base: "column", md: "column", lg: "column" }}
                bg={useColorModeValue("#F0F0F5", "#191919")}
                p={{ base: "0px", md: "20px" }}
                gap={"20px"}
            >
                <Box
                    display={"flex"}
                    width={"100%"}
                    flexDir={{ base: "column", md: "row", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <Box bg={useColorModeValue("#FFFFFF", "#191919")} borderRadius={"3px"} p={"20px"} display={"flex"} justifyContent={"start"} flexDir={"column"} gap={"1.5rem"} width={{ base: "100%", md: "26%" }}>

                        <Box width={"100%"} justifyContent={"start"} alignItems={"center"} gap={"0.5rem"} display={"flex"} flexDir={"row"}>
                            <CustomAvatar
                                width={"54px"}
                                height={"54px"}
                                src={coinDetails?.logoUrl}
                                name={coinDetails?.name}
                            />
                            <Text variant={"converter_heading"} colorMode={colorMode}>
                                {coinDetails?.name}
                            </Text>

                            <Box borderRadius={"3.36px"} padding={"3.3px 6.7px"} bgColor={"rgba(70, 130, 180, 0.10)"}>
                                <Text colorMode={colorMode} variant={"converter_coin_ship"}>
                                    {coinDetails?.ticker}
                                </Text>
                            </Box>

                            {/* {renderSVG("star")}
                            {renderSVG("share")} */}
                        </Box>

                        <Box gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                            <Box gap={"0.5rem"} display={"flex"} flexDir={"row"}>
                                <Box display={"flex"} alignItems={"start"} justifyContent={"start"}>
                                    <Text colorMode={colorMode} variant={"converter_main_price"}>
                                        {`$${convertToInternationalCurrencySystem(coinDetails?.price)}`}
                                    </Text>
                                </Box>

                                {/* <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                    <Text colorMode={colorMode} variant={"converter_price_inc_dec"} type={"increase"}>
                                        +2%
                                    </Text>
                                </Box>

                                <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                    {renderSVG(checkIfIsCoinRising() ? "trending_up" : "trending_down")}
                                </Box> */}
                            </Box>

                            <Box gap={"0.5rem"} display={"flex"} flexDir={"row"}>
                                <Box display={"flex"} alignItems={"start"} justifyContent={"start"}>
                                    <Text colorMode={colorMode} variant={"converter_price_info"} color={colorMode === "dark" ? "#FFFFFF" : "#585858"}>
                                        {coinDetails?.name} Price (USD)
                                    </Text>
                                </Box>

                                {/* <Box display={"flex"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                                    {renderSVG("info")}
                                </Box> */}
                            </Box>
                        </Box>

                        <Box>
                            <Box display='inline-flex' alignItems='center' gap='20px'>

                                <Box padding={"3.363px 6.725px"} borderRadius={'3.363px'} background='rgba(70, 130, 180, 0.10)'>
                                    <Text colorMode={colorMode} variant={"converter_rank"}>
                                        Rank #{coinDetails?.rank}
                                    </Text>
                                </Box>

                                <Text colorMode={colorMode} variant={"converter_price_info"} color={colorMode === "dark" ? "#585858" : "#585858"} >
                                    Coin
                                </Text>

                                {/* <Text colorMode={colorMode} variant={"converter_price_info"} color={colorMode === "dark" ? "#FFFFFF" : "#585858"}>
                                    On 2,771,773 watchlists
                                </Text> */}

                            </Box>
                        </Box>

                        <Box display={"flex"} gap={"1rem"} flexDir={"column"} >
                            <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"}>

                                <Box display={"flex"} alignItems={"end"}>
                                    <Text colorMode={colorMode} opacity={colorMode === "light" ? "1" : "0.5"} variant={"converter_price_info"} color={colorMode === "dark" ? "#FFFFFF" : "#585858"} >
                                        Price Range
                                    </Text>
                                </Box>

                                {/* <Menu>
                                    <MenuButton
                                        px={4}
                                        py={2}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        borderWidth='1px'
                                        bgColor={"rgba(70, 130, 180, 0.10)"}
                                        // _hover={{ bg: 'gray.400' }}
                                        // _expanded={{ bg: 'blue.400' }}
                                        _focus={{ boxShadow: 'outline' }}
                                    >
                                        24h <ChevronDownIcon />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>24h</MenuItem>
                                        <MenuItem>5day</MenuItem>
                                    </MenuList>
                                </Menu> */}
                            </Box>


                            <Progress borderRadius={"60px"} value={getHighLowProgressValue()} />
                            {isMd && <Box display={"flex"} justifyContent={"space-between"}>
                                <Box display={"flex"}>
                                    <Text colorMode={colorMode} variant={"converter_low_high"}>
                                        Low:
                                    </Text>&nbsp;
                                    <Text colorMode={colorMode} variant={"converter_low_high_value"}>

                                        {`${getCurrencyDetails(toCurrency, 'symbol')}${coinAnalyticsData?.price_low?.toLocaleString(getCurrencyDetails(toCurrency, 'locale'))}`}
                                    </Text>
                                </Box>

                                <Box display={"flex"}>
                                    <Text colorMode={colorMode} variant={"converter_low_high"}>
                                        High:
                                    </Text>&nbsp;
                                    <Text colorMode={colorMode} variant={"converter_low_high_value"}>
                                        {`${getCurrencyDetails(toCurrency, 'symbol')}${coinAnalyticsData?.price_high?.toLocaleString(getCurrencyDetails(toCurrency, 'locale'))}`}
                                    </Text>
                                </Box>
                            </Box>}
                        </Box>

                        {
                            !isMd &&
                            <CoinConverterRightBlock
                                toCurrency={toCurrency}
                                coinAnalyticsData={coinAnalyticsData}
                                coinDetails={coinDetails}
                                currentPrice={currentPrice}
                            />
                        }

                        {
                            !isMd && <Text _dark={{ color: '#FFFFFF' }}
                                _light={{ color: '#191919' }}
                                fontFamily='Inter'
                                fontSize='18px'
                                fontStyle='normal'
                                fontWeight='500'
                                lineHeight='22px'  >
                                {coinDetails?.ticker} Statistics
                            </Text>
                        }
                        <Box>
                            <Box display={"grid"}
                                gridTemplateColumns={"1fr 1fr"}
                                gridTemplateRows={"1fr 1fr"}
                                gridRow={"auto auto"}
                                gridColumnGap={"1rem"}
                                gridRowGap={"1rem"}
                                width={"100%"}
                            >
                                {
                                    [
                                        { title: "Market Cap", slug: "market-cap", amount: "mcap", increaseDecreaseBy: "mcap_percentage", type: "increase" },
                                        { title: "Full Diluted", slug: "full-diluted", amount: null, increaseDecreaseBy: null, type: "decrease" },
                                        { title: "24hr Volume", slug: "24hr-volume", amount: "volume_24hr", increaseDecreaseBy: "volume_change_24hr", type: "increase" },
                                        { title: "Circulating Supply", slug: "circulating-supply", amount: "circulating_supply", increaseDecreaseBy: "2", type: "increase" }
                                    ].map((item, index) => (
                                        <Box borderRadius={"0.45rem"} padding={"0.8rem"} key={index} gap={"0.8rem"}
                                            bgColor={getBgColorForStatistics(index, colorMode)}
                                        >
                                            <Box mb={"0.8rem"}>
                                                <Text colorMode={colorMode} variant={"converter_left_box_title"}>{item?.title || 'N/A'}</Text>
                                            </Box>
                                            <Box>
                                                <Text colorMode={colorMode} variant={"converter_low_high_value_tile"}>
                                                    {
                                                        item?.amount ? `$ ${convertToInternationalCurrencySystem(coinDetails?.[item?.amount])}` : "No info available"
                                                    }

                                                </Text>
                                            </Box>
                                            <Box>
                                                {
                                                    item.slug === "circulating-supply" ?
                                                        <Box mt={"0.2rem"}>
                                                            {
                                                                coinDetails?.ticker == "BTC" &&
                                                                <Text variant={"converter_max_supply"} colorMode={colorMode}>Max supply {convertToInternationalCurrencySystem(coinDetails?.total_supply)}</Text>
                                                            }
                                                        </Box>
                                                        :
                                                        <>
                                                            {
                                                                item.increaseDecreaseBy && coinDetails?.[item.increaseDecreaseBy] &&
                                                                <Box display={"flex"} gap={"0.5rem"}>
                                                                    <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                                                        <Text colorMode={colorMode} variant={"converter_price_inc_dec"} type={coinDetails[item.increaseDecreaseBy] > 0 ? "increase" : "decrease"}>
                                                                            {`${+coinDetails[item.increaseDecreaseBy]?.toFixed(2)}%`}
                                                                        </Text>
                                                                    </Box>

                                                                    <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                                                        {renderSVG(coinDetails[item.increaseDecreaseBy] > 0 ? "trending_up" : "trending_down")}
                                                                    </Box>
                                                                </Box>
                                                            }
                                                        </>
                                                }
                                            </Box>
                                        </Box>
                                    ))
                                }

                            </Box>
                        </Box>

                        <Box display={"flex"} flexDir={"column"} gap={"0.4rem"}>
                            <Text colorMode={colorMode} type={"score"} variant={"converter_low_high_value"}>
                                Betygfi Score
                            </Text>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} >

                                <Text colorMode={colorMode} variant={"converter_betygfi_score"}>{coinDetails?.score.toFixed(2) * 100}</Text>
                                <Box ml={"0.5rem"} display={"inline-flex"}
                                    padding={"3.363px 6.725px"}
                                    justifyContent="center"
                                    alignItems="center"
                                    color={"#4682B4"}
                                    gap="8.407px" borderRadius={"3.363px"}
                                    background={"rgba(70, 130, 180, 0.10)"}>
                                    Rank #{coinDetails?.rank}
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <CoinRankRepresentator
                                coinDetails={coinDetails}
                            />
                        </Box>
                        <Box>
                            <CoinData
                                coinDetails={coinDetails}
                            />
                        </Box>
                    </Box>

                    {
                        isMd &&
                        <CoinConverterRightBlock
                            toCurrency={toCurrency}
                            coinAnalyticsData={coinAnalyticsData}
                            coinDetails={coinDetails}
                            currentPrice={currentPrice}
                        />
                    }

                </Box>

                <SevenDaysPriceHistory
                    coinDetails={coinDetails}
                    toCurrency={toCurrency}
                    coinAnalyticsData={coinAnalyticsData}
                />

                <CryptoConversionTable
                    coinAnalyticsData={coinAnalyticsData}
                    coinDetails={coinDetails}
                    currentPrice={currentPrice}
                    toCurrency={toCurrency}
                />

                <Box>
                    <CryptoNews
                        coinNewsData={coinNewsData}
                        coinDetails={coinDetails}
                        toCurrency={toCurrency}
                    />
                </Box>

                {/* <Box>
                    <CryptoDescription />
                </Box> */}
            </Box >
        </>
    );
};

export default CryptoConverterPage;
