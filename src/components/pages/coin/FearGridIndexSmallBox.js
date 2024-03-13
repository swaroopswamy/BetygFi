import { Box, Text, useColorMode } from "@chakra-ui/react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import FearMeter from "./fearScore";

const FearGridIndexSmallBox = () => {
    const { colorMode } = useColorMode();
    const FearAndGreedData = useSelector((state) => state.coinData.FearAndGreedData);
    return (
        <Box
            width={"30%"}
            minW={"295px"}
            height={"197px"}
            borderRadius={"8px"}
            mb={"15px"}
            pl={"0px"}
            pr={"0px"}
            _light={{
                bg: "#FFFFFF"
            }}
            _dark={{
                bg: "#282828"
            }}
            position={"relative"}
        >

            <Box layerStyle={"flexCenter"} p={"12px"}>
                <Image
                    height={32}
                    width={32}
                    src="/icons/bitcoin_logo.svg"
                    alt="bitcoin_icon"></Image>
                <Text variant={"contentHeading3"} fontWeight={500} ml={"8px"}>
                    Fear/Greed Index
                </Text>
            </Box>
            <Box layerStyle={"flexCenter"} pl={"10px"}>
                {FearAndGreedData?.data?.currentDay_Score?.map((item, i) => (
                    <Text variant={"textBold"} fontSize={"24px"} key={i}>
                        {item?.value_classification}
                    </Text>
                ))}
            </Box>
            <Text p={"12px"} variant={"SettingsText3"} fontWeight={500} lineHeight={"16px"}>
                Next Update: 10hrs, 59 min
            </Text>

            {FearAndGreedData?.isSuccess && (
                <Box position={"absolute"} w="140px" h="140px" top="20px" right={"0px"}>
                    <FearMeter score={FearAndGreedData?.data?.currentDay_Score[0]?.value} />
                </Box>
            )}

            <Box
                height={"70px"}
                mx={"10px"}
                backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#191919"}
                borderRadius={"6px"}
            >
                <Text p={"8px"} variant={"SettingsText3"} fontWeight={500} lineHeight={"16px"}>
                    Historical Values
                </Text>
                <Box layerStyle={"flexCenter"}>
                    {FearAndGreedData?.data?.score_1d_Ago?.map((item, i) => (
                        <Box borderRight={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} key={i}>
                            <Text p={"3px 10px 0px 10px"} variant={"modalHeader"} fontWeight={500} color={colorMode === 'light' ? "#245000" : "#60C000"}>
                                {item?.value}
                            </Text>
                            <Text p={"0px 10px 0px 10px"} variant={"SettingsText3"} fontSize={"10px"} fontWeight={500} lineHeight={"16px"}>
                                24h ago
                            </Text>
                        </Box>
                    ))}
                    {FearAndGreedData?.data?.score_7d_Ago?.map((item, i) => (
                        <Box borderRight={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} key={i}>
                            <Text p={"3px 10px 0px 10px"} variant={"modalHeader"} fontWeight={500} color={colorMode === 'light' ? "#245000" : "#60C000"}>
                                {item?.value}
                            </Text>
                            <Text p={"0px 10px 0px 10px"} variant={"SettingsText3"} fontSize={"10px"} fontWeight={500} lineHeight={"16px"}>
                                7day ago
                            </Text>
                        </Box>
                    ))}
                    {FearAndGreedData?.data?.currentDay_Score?.map((item, i) => (
                        <Box key={i}>
                            <Text p={"3px 10px 0px 10px"} variant={"modalHeader"} fontWeight={500} color={colorMode === 'light' ? "#245000" : "#60C000"}>
                                {item?.value}
                            </Text>
                            <Text p={"0px 10px 0px 10px"} variant={"SettingsText3"} fontSize={"10px"} fontWeight={500} lineHeight={"16px"}>
                                {moment(item?.timestamp, "YYYYMMDD").fromNow()}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default FearGridIndexSmallBox;