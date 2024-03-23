import { Box, Text, useColorMode } from "@chakra-ui/react";
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
                        alt="trophy_icon"></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} ml={"8px"}>
                        Top Gainers
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"}
                    cursor={"pointer"}
                    onClick={() => {
                        router.push(`?on=change_24hr&by=desc`);
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
                        alt="view_more"></Image>
                </Box>
            </Box>
            {TopGainersAndLosersData.data?.gainers?.map((gainer, i) => (
                <Box layerStyle={"spaceBetween"} key={i} mb="12px">
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            height={32}
                            width={32}
                            src={gainer?.logoUrl ?? '/icons/bitcoin_logo.svg'}
                            style={{ marginRight: "10px" }}
                            alt=" "></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            {gainer?.name}
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            ${gainer?.price?.toFixed(2)}
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
                                {`${gainer?.change?.toFixed(1)}%`}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};


export default TopGainersSmallBox;






{/* <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        style={{ margin: "5px 10px" }}
                        alt=" "></Image>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                        Livepeer
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"5px"}>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                        $12.29
                    </Text>
                    <Box
                        width={"57px"}
                        height={"21px"}
                        mr={"5px"}
                        top={"67px"}
                        left={"226px"}
                        padding={"2px 8px"}
                        borderRadius={"16px"}
                        gap={"10px"}
                        _light={{ bg: "#245F001F" }}
                        _dark={{ bg: "#60C0003F" }}
                    >
                        <Text variant={"baseStyle"} lineHeight={"17px"}
                            _light={{ color: "#245F00" }}
                            _dark={{ color: "#60C000" }}
                        >
                            52.0%
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        style={{ margin: "5px 10px" }}
                        alt=" "></Image>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                        Livepeer
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"5px"}>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                        $12.29
                    </Text>
                    <Box
                        width={"57px"}
                        height={"21px"}
                        mr={"5px"}
                        top={"67px"}
                        left={"226px"}
                        padding={"2px 8px"}
                        borderRadius={"16px"}
                        gap={"10px"}
                        _light={{ bg: "#245F001F" }}
                        _dark={{ bg: "#60C0003F" }}
                    >
                        <Text variant={"baseStyle"} lineHeight={"17px"}
                            _light={{ color: "#245F00" }}
                            _dark={{ color: "#60C000" }}
                        >
                            52.0%
                        </Text>
                    </Box>
                </Box>
            </Box> */}