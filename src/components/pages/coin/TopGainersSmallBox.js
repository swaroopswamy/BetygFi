import { Box, Text, Tooltip, useColorMode } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const TopGainersSmallBox = () => {
    const { colorMode } = useColorMode();
    const TopGainersAndLosersData = useSelector((state) => state.coinData.TopGainersAndLosersData);
    const router = useRouter();

    return (
        <Box
            width={"30%"}
            height={"197px"}
            minW={"295px"}
            borderRadius={"8px"}
            mb={"15px"}
            mx={"10px"}
            p={"12px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <Box layerStyle={"spaceBetween"} mb="12px">
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/trophy.svg"
                        alt="trophy_icon"
                        unoptimized="true"
                        priority="true"
                    ></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} ml={"8px"}>
                        Top Gainers
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"}
                    cursor={"pointer"}
                    onClick={() => {
                        router.push(`/coin?on=change_24hr&by=desc`);

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
            {TopGainersAndLosersData.data?.gainers?.map((gainer, i) => (
                <Box layerStyle={"spaceBetween"} key={i} mb="12px">
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            height={35}
                            width={35}
                            src={gainer?.logoUrl ?? '/icons/bitcoin_logo.svg'}
                            style={{ marginRight: "7px", borderRadius: "50%" }}
                            alt="bitcoin_logo"></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            {gainer?.name}
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"2px"}>
                        <Tooltip hasArrow label={`$ ${gainer?.price}`}>
                            <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                                ${gainer.price.toString().split('').slice(0, 4).join('') +
                                    "..." +
                                    gainer.price.toString().slice(-2)}
                            </Text>
                        </Tooltip>
                        <Box
                            width={"70px"}
                            layerStyle={"flexCenter"}
                            justifyContent={"center"}
                            height={"21px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            _light={{ bg: "#245F001F" }}
                            _dark={{ bg: "#60C0003F" }}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"}
                                _light={{ color: "#245F00" }}
                                _dark={{ color: "#60C000" }}
                            >
                                {`${gainer?.change?.toFixed(1)}%`}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            ))
            }
        </Box >
    );
};


export default TopGainersSmallBox;
