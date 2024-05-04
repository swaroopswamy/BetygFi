/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Input, InputGroup, InputLeftElement, Text, Tooltip, useColorMode, useMediaQuery, useOutsideClick } from '@chakra-ui/react';
import { SEARCH_LIST, TRENDING_COINS_SLUG, TRENDING_DEFIS_SLUG, TRENDING_WALLETS_SLUG } from '@util/constant';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearSearchSuggestionToStorage, getSearchSuggestionToStorage } from '@util/utility';

const SearchItemGroup = dynamic(() => import("@components/searchBoxV2/SearchItemGroup"), { ssr: false });

const SearchBoxV2 = ({ handleSearchInputChange, searchValue, searchListData, searchListTrendingData, clearValueMobileSearch, setSearchValue }) => {
    const [openSearchSuggestion, setOpenSearchSuggestion] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const ref = useRef();
    const router = useRouter();

    useOutsideClick({ ref: ref, handler: () => searchSuggestionOpenState(false) });
    const { colorMode } = useColorMode();

    const handleSearchInputClick = () => {
        if (searchValue.length == 0) {
            setSearchList(searchListTrendingData);
        }
        setOpenSearchSuggestion(true);
    };

    useEffect(() => {
        window.addEventListener('keydown', function (event) {
            let key = event.key;
            if (key === "/") {
                if (searchValue.charAt(searchValue.length - 1) === '/') {
                    const charValue = searchValue.replace(searchValue.substring(searchValue.length - 1, searchValue.length), "");
                    clearSearchSuggestionToStorage();
                    setSearchValue(charValue);
                }
                setOpenSearchSuggestion(true);
                if (document.getElementById("searchInputDesktop")) {
                    setTimeout(() => {
                        document.getElementById("searchInputDesktop").focus();
                    }, 1000);
                }
            }
            if (key === 'Tab') {
                setOpenSearchSuggestion(true);
            }
            if (key === "Escape") {
                setOpenSearchSuggestion(false);
            }
            if (key === "Enter") {
                checkAndRedirectToActiveTabIndex();
            }
        }, false);
    }, []);

    const checkAndRedirectToActiveTabIndex = () => {
        const searchSuggestion = getSearchSuggestionToStorage();
        if (searchSuggestion) {
            const suggestion = JSON.parse(searchSuggestion);
            if (suggestion.searchType === TRENDING_DEFIS_SLUG) {
                onNavigateArrowClick(TRENDING_DEFIS_SLUG, suggestion.searchValue);
            } else if (suggestion.searchType === TRENDING_COINS_SLUG) {
                onNavigateArrowClick(TRENDING_COINS_SLUG, suggestion.searchValue);
            } else if (suggestion.searchType === TRENDING_WALLETS_SLUG) {
                onNavigateArrowClick(TRENDING_WALLETS_SLUG, suggestion.searchValue);
            }
        }
    };

    const onNavigateArrowClick = (slug, itemSlug) => {
        if (slug === TRENDING_DEFIS_SLUG) {
            router.push(`/protocol/${itemSlug}`);
            searchSuggestionOpenState(false);
        } else if (slug === TRENDING_COINS_SLUG) {
            router.push(`/coin/${itemSlug}`);
            searchSuggestionOpenState(false);
        } else if (slug === TRENDING_WALLETS_SLUG) {
            router.push(`/top-wallets/${itemSlug}`);
            searchSuggestionOpenState(false);
        }
    };

    useEffect(() => {
        if (searchValue?.length == 0) {
            searchSuggestionOpenState(false);
            setSearchList(searchListTrendingData);
        }
    }, [searchValue]);

    const [isMd] = useMediaQuery("(min-width: 768px)");

    const searchSuggestionOpenState = (isToOpen) => {
        if (isToOpen) {
            setOpenSearchSuggestion(true);
            document.body.style['overflow-y'] = "hidden";
        } else {
            setOpenSearchSuggestion(false);
            document.body.style['overflow-y'] = "auto";
        }
    };

    useEffect(() => {
        if (searchListData?.length > 0) {
            searchSuggestionOpenState(true);
            setSearchList(searchListData);
        } else {
            searchSuggestionOpenState(false);
            setSearchList(searchListTrendingData);
        }
    }, [searchListData, searchListTrendingData]);

    const searchDataContent = () => {
        return (
            <Box m={"23px 20px 22px 20px"}>
                {
                    SEARCH_LIST.map((searchItem, index) => (
                        <SearchItemGroup
                            searchItem={searchItem}
                            searchListData={searchList}
                            key={index}
                            onNavigateArrowClick={onNavigateArrowClick}
                        />
                    ))
                }
            </Box>
        );
    };

    const renderSearchExpander = () => {
        return (
            <>
                {
                    openSearchSuggestion &&
                    (
                        isMd ?
                            <Box
                                id='searchSuggestionDesktop'
                                borderRadius={"4px"}
                                zIndex={"9999"}
                                width={"100%"}
                                position={"absolute"}
                                top={"45px"}
                                background={colorMode === "light" ? "#F4F4F4" : "#282828"}
                                overflowX="auto"
                                maxW="100vw"
                                maxH="80vh"
                                whiteSpace="nowrap"
                                sx={{ '::-webkit-scrollbar': { display: 'none' } }}
                            >
                                {/* <Box> */}
                                {searchDataContent()}
                                {/* <Box border={"1px solid red"} display={"flex"} justifyContent={"space-between"} backgroundColor={"#FFFFFF"} m={"12px 29px 15px 20px"}>
                                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                            <Box display={"flex"} padding={"2px"} >
                                                <i className={`icon up_arrow`} />
                                                <i className={`icon down_arrow`} />
                                            </Box>
                                            To enter
                                        </Box>

                                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                            <Box display={"flex"} padding={"2px"} >
                                                <i className={`icon to_enter`} />
                                            </Box>
                                            To enter
                                        </Box>

                                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                            <Box display={"flex"} padding={"2px"} >
                                                <i className={`icon to_enter`} />
                                            </Box>
                                            To enter
                                        </Box>
                                    </Box> */}
                                {/* </Box> */}
                            </Box>
                            :
                            <Box
                                borderRadius={"4px"}
                                zIndex={"999"}
                                width={"100%"}
                                position={"absolute"}
                                top={"42px"}
                                background={colorMode === "light" ? "#F4F4F4" : "#282828"}
                                overflowX="auto"
                                maxW="100vw"
                                maxH="80vh"
                                whiteSpace="nowrap"
                                sx={
                                    {
                                        '::-webkit-scrollbar': {
                                            display: 'none'
                                        }
                                    }
                                }
                            >
                                {searchDataContent()}
                            </Box>
                    )
                }
            </>
        );
    };

    const desktopPlaceholder = "Search by Coin, DeFi, Wallet and more";
    const mobilePlaceholder = "Search by Coin, DeFi, Wallet and more";

    const renderMDInputGroup = () => {
        return (
            <InputGroup ref={ref} w="100%" zIndex={"99999999"} alignItems={"center"}>
                <Box position={"relative"} w="100%" display={"flex"} flexDir={"column"}>
                    <Box display={"flex"} flexDir={"row"}>
                        <InputLeftElement pointerEvents="none">
                            <Image
                                src="/images/search_icon.svg"
                                width={20}
                                height={20}
                                // unoptimized="true"
                                // priority="true"
                                alt="search_icon"
                                borderLeftRadius={"20px"}
                                borderRightRadius={"20px"}
                            />
                        </InputLeftElement>
                        <Box
                            w="100%"
                            marginLeft={"1.5rem"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Input
                                type="text"
                                border="none"
                                borderLeftRadius={"20px"}
                                borderRightRadius={"20px"}
                                id="searchInputDesktop"
                                _selected={{
                                    outline: "none",
                                    border: "none",
                                }}
                                _focusVisible={{
                                    outline: "none",
                                    border: "none",
                                }}
                                value={searchValue}
                                bgColor={"transparent"}
                                variant={"h5"}
                                letterSpacing={"1.2px"}
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#A8ADBD" }}
                                w="100%"
                                placeholder={desktopPlaceholder}
                                onChange={(e) => { handleSearchInputChange(e.target.value); }}
                                onClick={() => { handleSearchInputClick(); }}
                            />
                            <Tooltip label={`Press / to search`}>
                                <Box mr={"1%"} cursor={"pointer"} borderRadius={"50px"} width={"35px"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"35px"}
                                    _light={{ backgroundColor: "#FFFFFF" }}
                                    _dark={{ backgroundColor: "#202020" }}>
                                    <Text variant={"h5"} colorMode={colorMode}>
                                        /
                                    </Text>
                                </Box>
                            </Tooltip>
                        </Box>
                        {
                            searchValue?.length > 0 &&
                            <Box
                                layerStyle={"center"}
                                cursor={"pointer"}
                                bgColor={colorMode === "light" ? "#F4F4F4" : "#000000"}
                                width={"35px"}
                                marginRight={"15px"}
                                borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                                onClick={() => { clearValueMobileSearch(); }}
                            >
                                <Image
                                    src={`/icons/cross-${colorMode}.svg`}
                                    height={24}
                                    // unoptimized="true"
                                    // priority="true"
                                    width={24}
                                    cursor={"pointer"}
                                    alt="logo"
                                />
                            </Box>
                        }
                    </Box>
                    {renderSearchExpander()}
                </Box>
            </InputGroup>
        );
    };

    const renderSMInputGroup = () => {
        return (
            <InputGroup id={"searchMobileInput"} ref={ref} w="100%" zIndex={"1000"}>
                <Box position={"relative"} w="100%" display={"flex"} flexDir={"column"}>
                    <Box display={"flex"} flexDir={"row"} backgroundColor={colorMode === 'light' ? "#FFFFFF" : "#191919"}>
                        <InputLeftElement pointerEvents="none">
                            <Image
                                src={`/icons/search_icon_${colorMode}.svg`}
                                width={18}
                                height={18}
                                // unoptimized="true"
                                // priority="true"
                                alt="search_icon_mob"
                            />
                        </InputLeftElement>
                        <Box w="100%" marginLeft={"1.7rem"}>
                            <Input
                                type="text"
                                id="searchInputMobile"
                                borderRadius="0px"
                                borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                                bgColor={colorMode === "light" ? "#FFFFFF" : "#191919"}
                                variant={"h5"}
                                letterSpacing={"1.2px"}
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#A5A5A5" }}
                                placeholder={mobilePlaceholder}
                                value={searchValue}
                                fontSize={"12px"}
                                onClick={() => { handleSearchInputClick(); }}
                                onChange={(e) => { handleSearchInputChange(e.target.value); }}
                            />
                        </Box>
                        {
                            searchValue?.length > 0 &&
                            <Box
                                layerStyle={"center"}
                                cursor={"pointer"}
                                bgColor={colorMode === "light" ? "#FFFFFF" : "#191919"}
                                width={"35px"}
                                borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                                onClick={() => { clearValueMobileSearch(); }}
                            >
                                <Image
                                    src={`/icons/cross-${colorMode}.svg`}
                                    height={24}
                                    // unoptimized="true"
                                    // priority="true"
                                    width={24}
                                    cursor={"pointer"}
                                    alt="logo"
                                />
                            </Box>
                        }
                    </Box>
                    {renderSearchExpander()}
                </Box>
            </InputGroup>
        );
    };

    return (
        <>
            {isMd ? renderMDInputGroup() : renderSMInputGroup()}
            {
                openSearchSuggestion &&
                <Box
                    style={{
                        position: "fixed",
                        zIndex: 999,
                        top: "80px",
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        backgroundColor: "blackAlpha.700",
                        backdropFilter: 'blur(10px)'
                    }}
                >
                </Box>
            }
        </>
    );
};

export default SearchBoxV2;
