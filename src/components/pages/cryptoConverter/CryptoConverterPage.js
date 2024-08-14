"use client";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Menu, MenuButton, MenuItem, MenuList, Progress, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import CustomAvatar from "@components/avatar";
import { useRouter } from "next/navigation";

const CryptoConverterPage = () => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const renderSVG = type => {
        if (type == "star") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M8.36067 1L10.6351 5.60778L15.7213 6.35121L12.041 9.93586L12.9096 15L8.36067 12.6078L3.81178 15L4.68034 9.93586L1 6.35121L6.08622 5.60778L8.36067 1Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            );
        } else if (type == "share") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M12.7213 5.33337C13.8259 5.33337 14.7213 4.43794 14.7213 3.33337C14.7213 2.2288 13.8259 1.33337 12.7213 1.33337C11.6168 1.33337 10.7213 2.2288 10.7213 3.33337C10.7213 4.43794 11.6168 5.33337 12.7213 5.33337Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.72134 10C5.82591 10 6.72134 9.10457 6.72134 8C6.72134 6.89543 5.82591 6 4.72134 6C3.61677 6 2.72134 6.89543 2.72134 8C2.72134 9.10457 3.61677 10 4.72134 10Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.7213 14.6666C13.8259 14.6666 14.7213 13.7712 14.7213 12.6666C14.7213 11.5621 13.8259 10.6666 12.7213 10.6666C11.6168 10.6666 10.7213 11.5621 10.7213 12.6666C10.7213 13.7712 11.6168 14.6666 12.7213 14.6666Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.44801 9.00671L11.0013 11.66" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.9947 4.33997L6.44801 6.9933" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            );
        } else if (type == "trending_up") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#245F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 6H23V12" stroke="#245F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            );
        } else if (type == "trending_down") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_6937_7147)">
                        <path d="M15.3333 12L8.99999 5.66667L5.66666 9L0.666656 4" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.3333 12H15.3333V8" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6937_7147">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        } else if (type == "info") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_6937_5802)">
                        <path d="M7.99935 1.33464C4.31745 1.33464 1.33268 4.3194 1.33268 8.0013C1.33268 11.6832 4.31745 14.668 7.99935 14.668C11.6812 14.668 14.666 11.6832 14.666 8.0013C14.666 4.3194 11.6812 1.33464 7.99935 1.33464Z" stroke="#757575" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 10.668V8.0013" stroke="#757575" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 5.33203H7.99333" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6937_5802">
                            <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16)" />
                        </clipPath>
                    </defs>
                </svg>
            );
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
                    onClick={() => router.push(`/protocol`)}
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

            <Box style={{ border: '1px solid red' }}
                display={"flex"}
                flexDir={"column"}
                bg={useColorModeValue("#F0F0F5", "#191919")}
                p={"20px"}
                gap={"20px"}
            >
                <Box
                    display={"flex"}
                    width={"100%"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"space-between"}
                    gap={"20px"}
                >
                    <Box bg={useColorModeValue("#FFFFFF", "#191919")} borderRadius={"3px"} p={"20px"} display={"flex"} justifyContent={"start"} flexDir={"column"} gap={"1.5rem"} style={{ border: '1px solid green' }} width={"30%"}>

                        <Box style={{ border: '1px solid red' }} width={"100%"} justifyContent={"start"} alignItems={"center"} gap={"0.5rem"} display={"flex"} flexDir={"row"}>
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
                            <Box style={{ border: '1px solid red' }} gap={"0.5rem"} display={"flex"} flexDir={"row"}>
                                <Box display={"flex"} alignItems={"start"} justifyContent={"start"}>
                                    <Text colorMode={colorMode} variant={"converter_main_price"}>
                                        $26,238.50
                                    </Text>
                                </Box>

                                <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                    <Text colorMode={colorMode} variant={"converter_price_inc_dec"}>
                                        +2%
                                    </Text>
                                </Box>

                                <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                    {renderSVG("trending_up")}
                                </Box>
                            </Box>

                            <Box style={{ border: '1px solid red' }} gap={"0.5rem"} display={"flex"} flexDir={"row"}>
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

                        <Box style={{ border: '1px solid red' }} >
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


                        <Box style={{ border: '1px solid red' }} display={"flex"} gap={"1rem"} flexDir={"column"} >
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
                            <Box style={{ border: '1px solid red' }} display={"grid"}
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
                                            style={{ border: '1px solid red' }}>
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
                                                                <Text colorMode={colorMode} variant={"converter_price_inc_dec"} color type={item.type}>
                                                                    {item.type === "increase" ? `+${item.increaseDecreaseBy}%` : `-${item.increaseDecreaseBy}%`}
                                                                </Text>
                                                            </Box>

                                                            <Box display={"flex"} textAlign={"end"} justifyContent={"end"} alignItems={"end"}>
                                                                {renderSVG(item.type === "increase" ? "trending_up" : "trending_down")}
                                                            </Box>
                                                        </Box>
                                                    // <Text variant={"converter_low_high_value"}>{item.amount}</Text>
                                                }
                                            </Box>
                                        </Box>
                                    ))
                                }

                            </Box>
                        </Box>

                        <Box>
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
                    </Box>

                    <Box bg={useColorModeValue("#FFFFFF", "#191919")} borderRadius={"3px"} style={{ border: '1px solid red' }} width={"70%"}>
                        dkmklfg
                    </Box>
                </Box>
            </Box >
        </>
    );
};

export default CryptoConverterPage;
