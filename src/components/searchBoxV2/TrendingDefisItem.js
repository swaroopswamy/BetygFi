import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import { formatMCAPSearchTableString, getToFixedValue, setSearchSuggestionToStorage } from '@util/utility';
import Image from 'next/image';
import React from 'react';
import CustomAvatar from '@components/avatar';
import { TRENDING_DEFIS_SLUG } from '@util/constant';

const TrendingDefisItem = ({ searchItem, onNavigateArrowClick, groupedSearchData }) => {
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const renderDefiItemHeader = () => {
        return (
            <Box w={"100%"} mt={"14px"} display={"flex"} flexDirection={"row"}>
                <Text w={isMd ? "30%" : "50%"} fontSize={!isMd && "14px"} variant={"modalTableHeader"}>
                    {""}
                </Text>
                <Text w={isMd ? "21%" : "50%"} display={"flex"} justifyContent={"right"} alignItems={"end"} fontSize={!isMd && "14px"} variant={"modalTableHeader"}>
                    Price
                </Text>
                {
                    isMd &&
                    <Text w={"21%"} display={"flex"} justifyContent={"right"} alignItems={"center"} fontSize={!isMd && "14px"} variant={"modalTableHeader"}>
                        TVL
                    </Text>
                }
                {
                    isMd &&
                    <Text w={"21%"} display={"flex"} justifyContent={"right"} alignItems={"center"} fontSize={!isMd && "14px"} variant={"modalTableHeader"}>
                        MCap
                    </Text>
                }
                {
                    isMd &&
                    <Box w={"7%"} display={"flex"} justifyContent={"right"} fontSize={!isMd && "14px"} alignItems={"center"} >
                        {""}
                    </Box>
                }
            </Box>
        );
    };

    const onFocusDefi = event => {
        setSearchSuggestionToStorage(TRENDING_DEFIS_SLUG, event.target.ariaLabel);
    };

    const DefiItemData = ({ defiItem, index }) => {
        return (
            <Box tabIndex={defiItem?.searchIndex}
                role="dialog" aria-labelledby={`popup-${defiItem.slug}`}
                _focus={{ backgroundColor: "#adaaaa" }} onFocus={(event) => { onFocusDefi(event); }} aria-label={defiItem.slug} onClick={() => !isMd && onNavigateArrowClick(searchItem.slug, defiItem.slug)}
                display={"flex"} flexDirection={"row"} key={index}>
                <Box onClick={() => onNavigateArrowClick(searchItem.slug, defiItem.slug)} cursor={"pointer"} w={isMd ? "30%" : "50%"} mt={"12px"} mb={"18px"} display={"flex"} flexDirection={"row"}>
                    <CustomAvatar
                        width={"24px"}
                        height={"24px"}
                        style={{ borderRadius: "50%" }}
                        src={defiItem?.logo}
                    />
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Text ml={"10px"} fontSize={!isMd && "14px"} variant={"modalTableData"}>
                            {defiItem.name || "N/A"}
                        </Text>
                    </Box>
                </Box>
                <Box w={isMd ? "21%" : "50%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                    <Text ml={"10px"} fontSize={!isMd && "14px"} variant={"modalTableData"}>
                        {getToFixedValue(defiItem.price) ? "$" + getToFixedValue(defiItem.price) : "N/A"}
                    </Text>
                </Box>
                {
                    isMd &&
                    <Box w={"21%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                        <Text ml={"10px"} fontSize={!isMd && "14px"} variant={"modalTableData"}>
                            {formatMCAPSearchTableString("tvl", defiItem.tvl) ? "$" + formatMCAPSearchTableString("tvl", defiItem.tvl) : "N/A"}
                        </Text>
                    </Box>
                }
                {
                    isMd &&
                    <Box w={"21%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                        <Text ml={"10px"} fontSize={!isMd && "14px"} variant={"modalTableData"}>
                            {formatMCAPSearchTableString("mcap", defiItem.mcap) ? "$" + formatMCAPSearchTableString("mcap", defiItem.mcap) : "N/A"}
                        </Text>
                    </Box>
                }
                {
                    isMd &&
                    <Box w={"7%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                        <Box
                            onClick={() => onNavigateArrowClick(searchItem.slug, defiItem.slug)}
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
            {renderDefiItemHeader()}
            {
                groupedSearchData?.length > 0 && groupedSearchData.map((defiItem, index) => (
                    <DefiItemData
                        defiItem={defiItem}
                        key={index}
                    />
                ))
            }
        </>
    );
};

export default TrendingDefisItem;
