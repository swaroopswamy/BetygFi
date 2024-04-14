import { Box, Text, /* useColorMode */ } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const BTCetfSmallBox = () => {
    // const { colorMode } = useColorMode();
    const TopBTCETFData = useSelector((state) => state.coinData.TopBTCETFData);
    const top3ETFData = TopBTCETFData?.data?.slice(0, 3);

    return (
        <Box
            mx={"10px"}
            width={"30%"}
            height={"197px"}
            minW={"295px"}
            borderRadius={"8px"}
            mb={"15px"}
            p={"12px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <Box layerStyle={"spaceBetween"} mb="12px">
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        alt="trophy_icon"
                        unoptimized="true"
                        priority="true"
                        ></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} ml={"8px"}>
                        BTC ETF
                    </Text>
                </Box>
            </Box>
            {top3ETFData?.map((item, i) => (
                <Box layerStyle={"spaceBetween"} key={i} mb="18px" pl={"12px"}>
                    <Box layerStyle={"flexCenter"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            {item?.symbol}
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            ${item?.price?.toFixed(2)}
                        </Text>
                        <Box
                            width={"70px"}
                            layerStyle={"flexCenter"}
                            justifyContent={"center"}
                            height={"21px"}
                            mr={"5px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            _light={{ bg: "#245F001F" }}
                            _dark={{ bg: "#60C0003F" }}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"}
                                _light={{ color: "#245F00" }}
                                _dark={{ color: "#60C000" }}
                            >
                                {`${item?.percentageChange?.toFixed(1)}%`}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};


export default BTCetfSmallBox;