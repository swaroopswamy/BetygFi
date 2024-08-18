"use client";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightAddon, Menu, MenuButton, MenuItem, MenuList, Progress, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import CustomAvatar from "@components/avatar";
import { renderSVG } from "@util/utility";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "rsuite/esm/useMediaQuery/useMediaQuery";
import CoinData from "./CoinData";
import CoinRankRepresentator from "./CoinRankRepresentator";
import CryptoConversionTable from "./CryptoConversionTable";
import CryptoConversionWithChart from "./CryptoConversionWithChart";
import CryptoDescription from "./CryptoDescription";
import CryptoNews from "./CryptoNews";
import SevenDaysPriceHistory from "./SevenDaysPriceHistory";

const CryptoConverterPage = () => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [isMd] = useMediaQuery("(min-width: 768px)");
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
                        Coin Listing/Bitcoin/INR
                    </Text>
                </Box>
            </Box>

            <Box
                display={"flex"}
                // flexDir={"column"}
                flexDir={{ base: "column", md: "column", lg: "column" }}
                bg={useColorModeValue("#F0F0F5", "#191919")}
                p={"20px"}
                gap={"20px"}
            >
                <Box
                    display={"flex"}
                    width={"100%"}
                    flexDir={{ base: "column", md: "row", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <Box bg={useColorModeValue("#FFFFFF", "#191919")} borderRadius={"3px"} p={"20px"} display={"flex"} justifyContent={"start"} flexDir={"column"} gap={"1.5rem"} width={{ base: "100%", md: "30%" }}>

                        <Box width={"100%"} justifyContent={"start"} alignItems={"center"} gap={"0.5rem"} display={"flex"} flexDir={"row"}>
                            <CustomAvatar
                                width={"54px"}
                                height={"54px"}
                                src={"https://platform.betygfi.com/_next/image?url=https%3A%2F%2Fs2.coinmarketcap.com%2Fstatic%2Fimg%2Fcoins%2F64x64%2F1.png&w=64&q=75"}
                                name={"Coin Name"}
                            />
                            <Text variant={"converter_heading"} colorMode={colorMode}>
                                Bitcoin
                            </Text>

                            <Box borderRadius={"3.36px"} padding={"3.3px 6.7px"} bgColor={"rgba(70, 130, 180, 0.10)"}>
                                <Text colorMode={colorMode} variant={"converter_coin_ship"}>
                                    BTC
                                </Text>
                            </Box>

                            {renderSVG("star")}
                            {renderSVG("share")}
                        </Box>

                        <Box gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                            <Box gap={"0.5rem"} display={"flex"} flexDir={"row"}>
                                <Box display={"flex"} alignItems={"start"} justifyContent={"start"}>
                                    <Text colorMode={colorMode} variant={"converter_main_price"}>
                                        $26,238.50
                                    </Text>
                                </Box>

                                <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                    <Text colorMode={colorMode} variant={"converter_price_inc_dec"} type={"increase"}>
                                        +2%
                                    </Text>
                                </Box>

                                <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                    {renderSVG("trending_up")}
                                </Box>
                            </Box>

                            <Box gap={"0.5rem"} display={"flex"} flexDir={"row"}>
                                <Box display={"flex"} alignItems={"start"} justifyContent={"start"}>
                                    <Text colorMode={colorMode} variant={"converter_price_info"}>
                                        Bitcoin Price(USD)
                                    </Text>
                                </Box>

                                <Box display={"flex"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                                    {renderSVG("info")}
                                </Box>
                            </Box>
                        </Box>

                        <Box   >
                            <Box display='inline-flex' alignItems='center' gap='20px'>

                                <Box padding={"3.363px 6.725px"} borderRadius={'3.363px'} background='rgba(70, 130, 180, 0.10)'>
                                    <Text colorMode={colorMode} variant={"converter_rank"}>
                                        Rank #1
                                    </Text>
                                </Box>

                                <Text colorMode={colorMode} variant={"converter_price_info"}>
                                    Coin
                                </Text>

                                <Text colorMode={colorMode} variant={"converter_price_info"}>
                                    On 2,771,773 watchlists
                                </Text>

                            </Box>
                        </Box>


                        <Box display={"flex"} gap={"1rem"} flexDir={"column"} >
                            <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"}>

                                <Box display={"flex"} alignItems={"end"}>
                                    <Text colorMode={colorMode} variant={"converter_price_info"}>
                                        Price Range
                                    </Text>
                                </Box>

                                <Menu>
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
                                </Menu>
                            </Box>


                            <Progress borderRadius={"60px"} value={80} />

                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Box display={"flex"}>
                                    <Text colorMode={colorMode} variant={"converter_low_high"}>
                                        Low:
                                    </Text>&nbsp;
                                    <Text colorMode={colorMode} variant={"converter_low_high_value"}>
                                        $37,005.19
                                    </Text>
                                </Box>

                                <Box display={"flex"}>
                                    <Text colorMode={colorMode} variant={"converter_low_high"}>
                                        High:
                                    </Text>&nbsp;
                                    <Text colorMode={colorMode} variant={"converter_low_high_value"}>
                                        $37,005.19
                                    </Text>
                                </Box>
                            </Box>
                        </Box>

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
                                        { title: "Market Cap", slug: "market-cap", amount: "$826,445,951,378", increaseDecreaseBy: "2", type: "increase" },
                                        { title: "Full Diluted", slug: "full-diluted", amount: "$826,445,951,378", increaseDecreaseBy: "2", type: "decrease" },
                                        { title: "24hr Volume", slug: "24hr-volume", amount: "$826,445,951,378", increaseDecreaseBy: "2", type: "increase" },
                                        { title: "Circulating Supply", slug: "circulating-supply", amount: "$826,445,951,378", increaseDecreaseBy: "2", type: "increase" }
                                    ].map((item, index) => (
                                        <Box padding={"1rem"} key={index} gap={"0.8rem"}
                                            bgColor={index == 0 ? "#C8E2F9" : (index == 1 ? "rgba(255, 163, 163, 0.24)" : (index == 2 ? "rgba(154, 218, 138, 0.24)" : "#E6F3FF"))
                                            }
                                        >
                                            <Box>
                                                <Text colorMode={colorMode} variant={"converter_left_box_title"}>{item.title}</Text>
                                            </Box>
                                            <Box>
                                                <Text colorMode={colorMode} variant={"converter_low_high_value"}>{item.amount}</Text>
                                            </Box>
                                            <Box>
                                                {
                                                    item.slug === "circulating-supply" ?
                                                        <Box>
                                                            <Text colorMode={colorMode}>asfsd</Text>
                                                        </Box>
                                                        :
                                                        <Box display={"flex"} gap={"0.5rem"}>
                                                            <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                                                <Text colorMode={colorMode} variant={"converter_price_inc_dec"} type={item.type}>
                                                                    {item.type === "increase" ? `+${item.increaseDecreaseBy}%` : `-${item.increaseDecreaseBy}%`}
                                                                </Text>
                                                            </Box>

                                                            <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                                                {renderSVG(item.type === "increase" ? "trending_up" : "trending_down")}
                                                            </Box>
                                                        </Box>
                                                }
                                            </Box>
                                        </Box>
                                    ))
                                }

                            </Box>
                        </Box>

                        <Box display={"flex"} flexDir={"column"} gap={"0.4rem"}>
                            <Text colorMode={colorMode} variant={"converter_low_high_value"}>
                                Betygfi Score
                            </Text>
                            <Box display={"flex"} justifyContent={"start"} alignItems={"center"} >

                                <Text colorMode={colorMode} variant={"converter_betygfi_score"}>90</Text>
                                <Box ml={"0.5rem"} display={"inline-flex"}
                                    padding={"3.363px 6.725px"}
                                    justifyContent="center"
                                    alignItems="center"
                                    gap="8.407px" borderRadius={"3.363px"}
                                    background={"rgba(70, 130, 180, 0.10)"}>
                                    Rank #1
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <CoinRankRepresentator />
                        </Box>
                        <Box>
                            <CoinData />
                        </Box>
                    </Box>

                    <Box borderRadius={"3px"} gap={"1.25rem"} flexDir={"column"} display={"flex"} width={{ base: "100%", md: "70%" }}>
                        <Box p={"1.25rem"} display={"flex"} gap={"1rem"} bg={useColorModeValue("#FFFFFF", "#191919")} flexDir={"column"}>
                            <Box display={"flex"} gap={"0.5rem"} flexDir={"column"}>

                                <Text colorMode={colorMode} variant={"converter_heading"} lineHeight={"22px"}>Convert Bitcoin to Indian Rupee (BTC to INR)</Text>
                                <Text colorMode={colorMode} variant={"converter_calc_desc"}>The price of converting 1 Bitcoin (BTC) to INR is ₹4,705,512 today.</Text>
                            </Box>
                            <Box borderRadius='2px' background='rgba(70, 130, 180, 0.10)'>
                                <Box p={"1.25rem"} gap={"0.5rem"} flexDir={"column"} display={"flex"}>

                                    <Box w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={{ base: "1rem", md: "2rem" }} flexDir={{ base: "column", md: "row" }}>
                                        <InputGroup colorScheme={"#4682B4"} borderRadius={"2px"} size='md'>
                                            <Input type="number" min={0} />
                                            <InputRightAddon>
                                                <Text colorMode={colorMode} variant={"converter_calc_desc"} fontWeight={600}>
                                                    {"BTC"}
                                                </Text>
                                            </InputRightAddon>
                                        </InputGroup>
                                        <Box transform={`rotate(${isMd ? '0deg' : '90deg'})`}>
                                            {renderSVG("right-arrow")}
                                        </Box>
                                        <InputGroup colorScheme={"#4682B4"} size='md'>
                                            <Input type="number" min={0} />
                                            <InputRightAddon>
                                                <Text colorMode={colorMode} variant={"converter_calc_desc"} fontWeight={600}>
                                                    {"INR"}
                                                </Text>
                                            </InputRightAddon>
                                        </InputGroup>
                                    </Box>
                                    <Box display={"flex"} justifyContent={"space-between"}   >
                                        <Box display={"flex"} justifyContent={"flex-start"}>
                                            <Text colorMode={colorMode} textAlign='start' variant={"cookies_footer"}>
                                                1 BTC = ₹4,619,183
                                            </Text>
                                        </Box>
                                        <Box display={"flex"} justifyContent={"flex-end"}>
                                            <Text colorMode={colorMode} textAlign='end' variant={"cookies_footer"}>
                                                1 INR = 0.000000212393 BTC
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>



                        <Box bg={useColorModeValue("#FFFFFF", "#191919")}>
                            <CryptoConversionWithChart />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <SevenDaysPriceHistory />
                </Box>
                <Box>
                    <CryptoConversionTable />
                </Box>
                <Box>
                    <CryptoNews />
                </Box>

                <Box>
                    <CryptoDescription />
                </Box>
            </Box >
        </>
    );
};

export default CryptoConverterPage;
