/* eslint-disable no-prototype-builtins */
import { Divider, Text, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import TrendingDefisItem from './TrendingDefisItem';
import TrendingCoinsItem from './TrendingCoinsItem';
import TrendingWalletsItem from './TrendingWalletsItem';
import { groupListByKey } from '@util/utility';

const SearchItemGroup = ({ searchItem, searchListData, closeSearchInput }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [searchToPopulate, setSearchToPopulate] = useState([]);
    const [groupedSearchData, setGroupedSearchData] = useState({});
    const prevSearchListRef = useRef(searchListData);

    useEffect(() => {
        if (JSON.stringify(prevSearchListRef.current) !== JSON.stringify(searchListData)) {
            setSearchToPopulate([]);
        } else {
            if (searchListData?.length > 0) {
                const groupedData = groupListByKey(searchListData, 'type');
                setGroupedSearchData(groupedData);
                if (groupedData.coin !== undefined) {
                    let searchToPopulate_ = [];
                    if (searchToPopulate.length > 0) {
                        searchToPopulate_ = [...searchToPopulate];
                    }
                    searchToPopulate_.push("coin");
                    setSearchToPopulate(searchToPopulate_);
                }
                if (groupedData.defi !== undefined) {
                    let searchToPopulate_ = [];
                    if (searchToPopulate.length > 0) {
                        searchToPopulate_ = [...searchToPopulate];
                    }
                    searchToPopulate_.push("defi");
                    setSearchToPopulate(searchToPopulate_);
                }
                if (
                    searchListData.length > 0 &&
                    groupedData.undefined !== undefined
                ) {
                    groupedData.wallet = groupedData.undefined;
                    let searchToPopulate_ = [];
                    if (searchToPopulate.length > 0) {
                        searchToPopulate_ = [...searchToPopulate];
                    }
                    searchToPopulate_.push("wallet");
                    setSearchToPopulate(searchToPopulate_);
                }
            }
        }
        prevSearchListRef.current = searchListData;
    }, [searchListData]);

    const onNavigateArrowClick = (slug, itemSlug) => {
        if (slug === "trending-defis") {
            router.push(`/protocol/${itemSlug}`);
            closeSearchInput(false);
        } else if (slug === "trending-coins") {
            router.push(`/coin/${itemSlug}`);
            closeSearchInput(false);
        } else if (slug === "trending-wallets") {
            router.push(`/top-wallets/${itemSlug}`);
            closeSearchInput(false);
        }
    };

    return (
        <>
            {
                searchItem.slug === "trending-defis" ?
                    searchToPopulate.includes("defi") &&
                    <>
                        <Text variant={"modalHeader"} colorMode={colorMode}>
                            {searchItem.title}
                        </Text>
                        <TrendingDefisItem
                            groupedSearchData={groupedSearchData.defi}
                            searchItem={searchItem}
                            onNavigateArrowClick={onNavigateArrowClick}
                        />
                        {searchToPopulate.length > 1 && <Divider mt={"10px"} mb={"16px"} />}
                    </>
                    :
                    searchItem.slug === "trending-coins" ?
                        searchToPopulate.includes("coin") &&
                        <>
                            <Text variant={"modalHeader"} colorMode={colorMode}>
                                {searchItem.title}
                            </Text>
                            <TrendingCoinsItem
                                groupedSearchData={groupedSearchData.coin}
                                searchItem={searchItem}
                                onNavigateArrowClick={onNavigateArrowClick}
                            />
                            {searchToPopulate.length > 1 && <Divider mt={"10px"} mb={"16px"} />}
                        </>
                        :
                        searchToPopulate.includes("wallet") &&
                        <>
                            <Text variant={"modalHeader"} colorMode={colorMode}>
                                {searchItem.title}
                            </Text>
                            <TrendingWalletsItem
                                groupedSearchData={groupedSearchData.wallet}
                                searchItem={searchItem}
                                onNavigateArrowClick={onNavigateArrowClick}
                            />
                            {searchToPopulate.length > 1 && <Divider mt={"10px"} mb={"16px"} />}
                        </>
            }
        </>
    );
};

export default SearchItemGroup;
