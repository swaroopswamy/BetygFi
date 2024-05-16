import { Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const BTCetfSmallBox = () => {
    const { colorMode } = useColorMode();
    const TopBTCETFData = useSelector((state) => state.coinData.TopBTCETFData);
    const top3ETFData = TopBTCETFData?.data?.slice(0, 3);
    const router = useRouter();

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
            <Box layerStyle={"spaceBetween"} mb="10px">
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
                <Box layerStyle={"flexCenter"} gap={"3px"}
                    cursor={"pointer"}
                    onClick={() => {
                        router.push(`/crypto-etfs-data-tracker`);

                    }}
                >
                    <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500}
                        _light={{ color: "#757575" }}
                        _dark={{ color: "#A5A5A5" }}
                    >
                        View more
                    </Text>
                    <Image
                        height={5}
                        width={8}
                        src={colorMode === "light" ? "/icons/Arrow_Right.svg" : "/icons/Arrow_down_dark.svg"}
                        style={colorMode !== "light" ? { transform: "rotate(-90deg)" } : {}}
                        mr={"5px"}
                        alt="view_more"
                        unoptimized="true"
                        priority="true"></Image>
                </Box>
            </Box>
            {top3ETFData?.map((item, i) => (
                <Box layerStyle={"spaceBetween"} key={i} mb="10px" pl={"12px"} mt={"23px"}>
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