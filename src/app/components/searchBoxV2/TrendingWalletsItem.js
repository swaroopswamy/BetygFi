import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const TrendingWalletsItem = ({ walletSearchList, searchItem, onNavigateArrowClick }) => {
    const renderWalletHeader = () => {
        return (
            <Box w={"100%"} mt={"14px"} display={"flex"} flexDirection={"row"}>
                <Text w={"72%"} variant={"modalTableHeader"}>
                    {""}
                </Text>
                <Text w={"21%"} display={"flex"} justifyContent={"right"} alignItems={"center"} variant={"modalTableHeader"}>
                    Net Worth
                </Text>
                <Box w={"7%"} display={"flex"} justifyContent={"right"} alignItems={"center"} >
                    {""}
                </Box>
            </Box>
        );
    };

    const WalletItemData = ({ walletItem, index }) => {
        return (
            <Box display={"flex"} flexDirection={"row"} key={index}>
                <Box w={"72%"} mt={"12px"} mb={"18px"} display={"flex"} flexDirection={"row"}>
                    <Box mr={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Image
                            alt="wallet"
                            src={"/icons/wallet.svg"}
                            width={"24"}
                            height={"24"}
                        />
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flexDir={"column"}>
                        <Text variant={"modalTableData"}>
                            {walletItem.name}
                        </Text>
                        <Text variant={"modalTableDataShort"}>
                            {walletItem.address?.split("").join("").substring(0, 8) +
                                "....." +
                                walletItem.address?.slice(-5)}
                        </Text>
                    </Box>
                </Box>
                <Box w={"21%"} mt={"12px"} mb={"18px"} display={"flex"} justifyContent={"right"} alignItems={"center"} flexDirection={"row"}>
                    <Text ml={"10px"} variant={"modalTableData"}>
                        {walletItem.networth}
                    </Text>
                </Box>
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
                            width={"24"}
                            height={"24"}
                        />
                    </Box>
                </Box>
            </Box>
        );
    };

    return (
        <>
            {renderWalletHeader()}
            {
                walletSearchList.map((walletItem, index) => (
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
