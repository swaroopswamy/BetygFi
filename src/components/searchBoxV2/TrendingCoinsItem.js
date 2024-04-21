import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import { formatMCAPSearchTableString } from '@util/utility';
import Image from 'next/image';
import React from 'react';
import CustomAvatar from '@components/avatar';

const TrendingCoinsItem = ({ searchItem, onNavigateArrowClick, groupedSearchData }) => {
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const renderCoinHeader = () => {
        return (
            <Box w={"100%"} mt={"14px"} display={"flex"} flexDirection={"row"}>
                <Text w={"72%"} variant={"modalTableHeader"}>
                    {""}
                </Text>
                <Text w={isMd ? "21%" : "28%"} display={"flex"} justifyContent={"right"} alignItems={"center"} fontSize={"14px"} variant={"modalTableHeader"}>
                    MCap
                </Text>
                {isMd && <Box w={"7%"} display={"flex"} justifyContent={"right"} alignItems={"center"} >
                    {""}
                </Box>}
            </Box>
        );
    };

    const CoinItemData = ({ coinItem, index }) => {
        return (
            <Box tabIndex={coinItem?.searchIndex} _focus={{ backgroundColor: "#adaaaa" }} onClick={() => !isMd && onNavigateArrowClick(searchItem.slug, coinItem.slug)} display={"flex"} flexDirection={"row"} key={index}>
                <Box cursor={"pointer"} onClick={() => onNavigateArrowClick(searchItem.slug, coinItem.slug)} w={isMd ? "72%" : "50%"} mt={"12px"} mb={"18px"} display={"flex"} flexDirection={"row"}>
                    <CustomAvatar
                        width={"24px"}
                        height={"24px"}
                        style={{ borderRadius: "50%" }}
                        src={coinItem?.logo}
                    />
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box wordBreak={"break-all"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Text ml={"10px"} wordBreak={"break-all"} fontSize={"14px"} variant={"modalTableData"}>
                                {coinItem.name || "N/A"}
                            </Text>
                        </Box>
                        <Box display={"flex"} wordBreak={"break-all"} justifyContent={"center"} alignItems={"center"}>
                            <Text ml={"2px"} wordBreak={"break-all"} fontSize={"11px"} variant={"modalTableDataShort"}>
                                {coinItem.symbol || ""}
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box w={isMd ? "21%" : "50%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                    <Text ml={"10px"} fontSize={"14px"} variant={"modalTableData"}>
                        {"$" + formatMCAPSearchTableString("mcap", coinItem.mcap)}
                    </Text>
                </Box>
                {
                    isMd &&
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
                                width={24}
                                // unoptimized="true"
                                // priority="true"
                                height={24}
                            />
                        </Box>
                    </Box>
                }
            </Box>
        );
    };

    return (
        <>
            {renderCoinHeader()}
            {
                groupedSearchData?.length > 0 && groupedSearchData.map((coinItem, index) => (
                    <CoinItemData
                        key={index}
                        index={index}
                        coinItem={coinItem}
                    />
                ))
            }
        </>
    );
};

export default TrendingCoinsItem;
