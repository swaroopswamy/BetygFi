import { Avatar, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const TrendingCoinsItem = ({ coinSearchList, searchItem, onNavigateArrowClick }) => {
    return (
        <>
            <Box w={"100%"} mt={"14px"} display={"flex"} flexDirection={"row"}>
                <Text w={"72%"} variant={"modalTableHeader"}>
                    {""}
                </Text>
                <Text w={"21%"} display={"flex"} justifyContent={"right"} alignItems={"center"} variant={"modalTableHeader"}>
                    MCap
                </Text>
                <Box w={"7%"} display={"flex"} justifyContent={"right"} alignItems={"center"} >
                    {""}
                </Box>
            </Box>
            {
                coinSearchList.map((coinItem, index) => (
                    <Box display={"flex"} flexDirection={"row"} key={index}>
                        <Box w={"72%"} mt={"12px"} mb={"18px"} display={"flex"} flexDirection={"row"}>
                            <Avatar
                                width={"24px"}
                                height={"24px"}
                                style={{ borderRadius: "50%" }}
                                src={coinItem?.imgUrl}
                            ></Avatar>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Text ml={"10px"} variant={"modalTableData"}>
                                    {coinItem.name}
                                </Text>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Text ml={"2px"} variant={"modalTableDataShort"}>
                                        {coinItem.shortName}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box w={"21%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                            <Text ml={"10px"} variant={"modalTableData"}>
                                {coinItem.mcap}
                            </Text>
                        </Box>
                        <Box w={"7%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                            <Box
                                onClick={() => onNavigateArrowClick(searchItem.slug, coinItem.slug)}
                                cursor={"pointer"}
                                width={"16px"}
                                height={"16px"}
                                flexShrink={"0"}
                                mr={'7px'}
                                fill="rgba(255, 255, 255, 0.00)"
                                backgroundBlendMode="multiply"
                            >
                                <Image
                                    alt="right-arrow"
                                    src={"/icons/right-arrow.svg"}
                                    width={"24"}
                                    height={"24"}
                                ></Image>
                            </Box>
                        </Box>
                    </Box>
                ))
            }
        </>
    );
};

export default TrendingCoinsItem;
