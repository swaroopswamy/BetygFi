import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import { TRENDING_WALLETS_SLUG } from '@util/constant';
import { getToFixedValue, setSearchSuggestionToStorage } from '@util/utility';
import Image from 'next/image';
import React from 'react';

const TrendingWalletsItem = ({ searchItem, onNavigateArrowClick, groupedSearchData }) => {
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const renderWalletHeader = () => {
        return (
            <Box w={"100%"} mt={"14px"} display={"flex"} flexDirection={"row"}>
                <Text w={"72%"} fontSize={"14px"} variant={"modalTableHeader"}>
                    {""}
                </Text>
                <Text w={isMd ? "21%" : "28%"} fontSize={"14px"} display={"flex"} justifyContent={"right"} alignItems={"center"} variant={"modalTableHeader"}>
                    Net Worth
                </Text>
                {
                    isMd &&
                    <Box w={"7%"} display={"flex"} justifyContent={"right"} alignItems={"center"} >
                        {""}
                    </Box>
                }
            </Box>
        );
    };

    const calculateNetWorth = (wallet) => {
        if (wallet?.balanceArray?.length > 0) {
            const calculatedWorth = wallet.balanceArray.map(bal => bal.balance).reduce((partialSum, a) => partialSum + a, 0);
            return "$" + (getToFixedValue(calculatedWorth) || "0");
        } else {
            return "0";
        }
    };

    const onFocusWallet = event => {
        setSearchSuggestionToStorage(TRENDING_WALLETS_SLUG, event.target.ariaLabel);
    };

    const WalletItemData = ({ walletItem, index }) => {
        return (
            <Box tabIndex={walletItem?.searchIndex}
                role="dialog" aria-labelledby={`popup-${walletItem.slug}`}
                _focus={{ backgroundColor: "#adaaaa" }} onFocus={(event) => { onFocusWallet(event); }} aria-label={walletItem.slug} onClick={() => !isMd && onNavigateArrowClick(searchItem.slug, walletItem.slug)} display={"flex"} flexDirection={"row"} key={index}>
                <Box cursor={"pointer"} onClick={() => onNavigateArrowClick(searchItem.slug, walletItem.slug)} w={"72%"} mt={"12px"} mb={"18px"} display={"flex"} flexDirection={"row"}>
                    <Box mr={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Image
                            alt="wallet"
                            src={"/icons/wallet.svg"}
                            width={24}
                            height={24}
                        // unoptimized="true"
                        // priority="true"
                        />
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDir={"column"}>
                        <Text fontSize={"14px"} variant={"modalTableData"}>
                            {walletItem?.name || 'No Name'}
                        </Text>
                        <Text fontSize={"11px"} variant={"modalTableDataShort"}>
                            {walletItem.address?.split("").join("").substring(0, 8) +
                                "....." +
                                walletItem.address?.slice(-5)}
                        </Text>
                    </Box>
                </Box>
                <Box w={isMd ? "21%" : "28%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                    <Text fontSize={"14px"} ml={"10px"} variant={"modalTableData"}>
                        {calculateNetWorth(walletItem)}
                    </Text>
                </Box>
                {
                    isMd &&
                    <Box w={"7%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                        <Box
                            onClick={() => onNavigateArrowClick(searchItem.slug, walletItem.address)}
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
                                height={24}
                            // unoptimized="true"
                            // priority="true"
                            />
                        </Box>
                    </Box>
                }
            </Box>
        );
    };

    return (
        <>
            {renderWalletHeader()}
            {
                groupedSearchData?.length > 0 && groupedSearchData.map((walletItem, index) => (
                    <WalletItemData
                        walletItem={walletItem}
                        index={index}
                        key={index}
                    />
                ))
            }
        </>
    );
};

export default TrendingWalletsItem;
