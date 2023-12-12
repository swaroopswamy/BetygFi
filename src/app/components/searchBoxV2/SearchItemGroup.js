import { Divider, Text, useColorMode, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import TrendingDefisItem from './TrendingDefisItem';
import TrendingCoinsItem from './TrendingCoinsItem';
import TrendingWalletsItem from './TrendingWalletsItem';

const SearchItemGroup = ({ searchItem, searchArray, searchIndex, defiSearchList, walletSearchList, coinSearchList }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();

    const { onClose } = useDisclosure();

    const onNavigateArrowClick = (slug, itemSlug) => {
        if (slug === "trending-defis") {
            router.push(`/protocol/${itemSlug}`);
            onClose();
        } else if (slug === "trending-coins") {
            router.push(`/coin/${itemSlug}`);
            onClose();
        } else if (slug === "trending-wallets") {
            router.push(`/top-wallets/${itemSlug}`);
            onClose();
        }
    };

    return (
        <>
            <Text variant={"modalHeader"} colorMode={colorMode}>
                {searchItem.title}
            </Text>
            {
                searchItem.slug === "trending-defis" ?
                    <TrendingDefisItem
                        defiSearchList={defiSearchList}
                        searchItem={searchItem}
                        onNavigateArrowClick={onNavigateArrowClick}
                    />
                    :
                    searchItem.slug === "trending-coins" ?
                        <TrendingCoinsItem
                            coinSearchList={coinSearchList}
                            searchItem={searchItem}
                            onNavigateArrowClick={onNavigateArrowClick}
                        />
                        :
                        <TrendingWalletsItem
                            walletSearchList={walletSearchList}
                            searchItem={searchItem}
                            onNavigateArrowClick={onNavigateArrowClick}
                        />
            }
            {
                searchArray.length - 1 !== searchIndex && <Divider mt={"10px"} mb={"16px"} />
            }
        </>
    );
};

export default SearchItemGroup;
