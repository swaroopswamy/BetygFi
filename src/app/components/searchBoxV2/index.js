"use client";
import { Box, Input, InputGroup, InputLeftElement, useColorMode, useOutsideClick } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const SearchItemGroup = dynamic(() => import("./SearchItemGroup"), { ssr: false });

const SEARCH_LIST = [
    {
        title: "Trending DeFi’s",
        slug: "trending-defis",
    },
    {
        title: "Trending Coin’s",
        slug: "trending-coins",
    },
    {
        title: "Trending Wallet’s",
        slug: "trending-wallets",
    },
];

const SearchBoxV2 = ({ /* searchWalletAddressValue, handleSearchByWalletAddressV2, clearValueMobileSearch, */ handleSearchInputChange, searchValue, searchListData }) => {
    /*  const initialRef = useRef(null); */
    const [openSearchSuggestion, setOpenSearchSuggestion] = useState(false);
    const ref = useRef();
    useOutsideClick({
        ref: ref,
        handler: () => searchSuggestionOpenState(false),
    });
    const { colorMode } = useColorMode();

    useEffect(() => {
        if (searchValue?.length == 0) {
            searchSuggestionOpenState(false);
        }
    }, [searchValue]);

    // const [isMd] = useMediaQuery("(min-width: 768px)");

    // const SearchOverlay = () => (
    //     <ModalOverlay
    //         mt={'105px'}
    //         // mt={{ base: '150px', md: '78px' }}
    //         bg='blackAlpha.300'
    //         // backdropFilter='auto'
    //         backdropFilter='blur(10px) hue-rotate(90deg)'
    //     />
    // );

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
        } else {
            searchSuggestionOpenState(false);
        }
    }, [searchListData]);

    // const { isOpen, onOpen, onClose } = useDisclosure();
    // const [overlay, setOverlay] = useState(<SearchOverlay />);

    // const onSearchInputClick = () => {
    //     setOverlay(<SearchOverlay />);
    //     onOpen();
    // };

    const searchDataContent = () => {
        return (
            <>
                <Box m={"23px 29px 22px 20px"}>
                    {
                        SEARCH_LIST.map((searchItem, index) => (
                            <SearchItemGroup
                                searchItem={searchItem}
                                searchListData={searchListData}
                                key={index}
                                closeSearchInput={searchSuggestionOpenState}
                            />
                        ))
                    }
                </Box>
            </>
        );
    };
    // const renderSearchModal = () => {
    //     return (
    //         (
    //             <Modal
    //                 initialFocusRef={initialRef}
    //                 finalFocusRef={initialRef}
    //                 isOpen={isOpen} onClose={onClose} size={"xl"}>
    //                 {overlay}
    //                 <ModalContent
    //                     borderRadius={"4px"}
    //                     background={colorMode == "light" ? "#F4F4F4" : "#282828"}
    //                     minW={{ base: "0%", md: "63.5%" }}
    //                     containerProps={isMd ? { justifyContent: 'flex-start', paddingLeft: '15.9rem' } : { paddingTop: '4.3rem' }}
    //                 >
    //                     {searchDataContent()}
    //                 </ModalContent>
    //             </Modal>
    //         )
    //     );
    // };

    const renderSearchExpander = () => {
        return (
            <>
                {
                    openSearchSuggestion &&
                    <Box
                        borderRadius={"4px"}
                        zIndex={"9999"}
                        width={"100%"}
                        position={"absolute"}
                        top={"45px"}
                        background={colorMode === "light" ? "#F4F4F4" : "#282828"}

                        overflowX="auto"
                        maxW="100vw"
                        h="80vh"
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
                }
            </>
        );
    };

    const renderMDInputGroup = () => {
        return (
            <InputGroup ref={ref} w="100%" zIndex={"99999999"} alignItems={"center"}>
                <Box position={"relative"} w="100%" display={"flex"} flexDir={"column"}>
                    <Box display={"flex"} flexDir={"row"}>
                        <InputLeftElement pointerEvents="none">
                            <Image
                                src="/images/search_icon.svg"
                                width="20"
                                height="20"
                                alt="search_icon"
                                borderLeftRadius={"20px"}
                                borderRightRadius={"20px"}
                            />
                        </InputLeftElement>
                        <Box w="100%" marginLeft={"1.5rem"}>
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
                                placeholder="Search by Coin, DeFi name, NFT, Wallet and more"
                                onChange={(e) => { handleSearchInputChange(e.target.value); }}
                            />
                        </Box>
                    </Box>
                    {renderSearchExpander()}
                </Box>
            </InputGroup>
        );
    };

    /* const renderSMInputGroup = () => {
        return (
            <InputGroup ref={ref} w="100%" zIndex={"99999999"}>
                <InputLeftElement pointerEvents="none">
                    <Image
                        src={
                            colorMode === "light"
                                ? "/icons/search_icon_light.svg"
                                : "/icons/search_icon_dark.svg"
                        }
                        width={14}
                        height={14}
                        alt="search_icon"
                    />
                </InputLeftElement>
                <Input
                    type="text"
                    border="1px"
                    id="searchInputMobile"
                    borderRadius="0px"
                    ref={initialRef}
                    borderColor={
                        colorMode === "light" ? "#E1E1E1" : "#333"
                    }
                    bgColor={
                        colorMode === "light" ? "#F0F0F5" : "#191919"
                    }
                    variant={"h5"}
                    letterSpacing={"1.2px"}
                    _light={{ color: "#16171B" }}
                    _dark={{ color: "#A5A5A5" }}
                    w="100%"
                    placeholder="Search by Coin, DeFi name, NFT, Wallet and more"
                    value={searchWalletAddressValue ?? ""}
                    fontSize={"10px"}
                    // onClick={() => onSearchInputClick()}
                    onChange={(e) => {
                        handleSearchByWalletAddressV2(e);
                    }}
                />
                <Box
                    layerStyle={"center"}
                    cursor={"pointer"}
                    // w={"70px"} //todo
                    // p={"14px 10px"} //todo
                    bgColor={
                        colorMode === "light" ? "#F0F0F5" : "#191919"
                    }
                    border="1px"
                    borderColor={
                        colorMode === "light" ? "#E1E1E1" : "#333"
                    }
                    onClick={() => {
                        clearValueMobileSearch();
                    }}
                >
                    <Image
                        src={`/icons/cross-${colorMode}.svg`}
                        height={24}
                        width={24}
                        cursor={"pointer"}
                        alt="logo"
                    />
                </Box>
                {renderSearchExpander()}
            </InputGroup>
        );
    }; */

    return (
        <>
            {renderMDInputGroup()}
            {/* {isMd ? renderMDInputGroup() : renderSMInputGroup()} */}
            {
                openSearchSuggestion &&
                <Box
                    style={{
                        position: "fixed",
                        zIndex: 9999999,
                        top: "80px",
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        backgroundColor: "blackAlpha.700",
                        backdropFilter: 'blur(10px) hue-rotate(180deg)'
                    }}
                >
                </Box>
            }
        </>
    );
};

export default SearchBoxV2;
