import { Box, Input, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, useColorMode, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import SearchItemGroup from './SearchItemGroup';

const SearchBoxV2 = ({ searchWalletAddressValue, handleSearchByWalletAddress }) => {
    const { colorMode } = useColorMode();
    const SearchOverlay = () => (
        <ModalOverlay
            mt={'78px'}
            bg='blackAlpha.300'
            // backdropFilter='auto'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    );

    const searchList = [
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

    const defiSearchList = [
        {
            name: "AAVE2",
            imgUrl: "",
            price: "$65.930000",
            tvl: "$65.930000",
            mcap: "$65.930000",
        },
        {
            name: "AAVE2",
            imgUrl: "",
            price: "$65.930000",
            tvl: "$65.930000",
            mcap: "$65.930000",
        },
        {
            name: "AAVE2",
            imgUrl: "",
            price: "$65.930000",
            tvl: "$65.930000",
            mcap: "$65.930000",
        }
    ];

    const coinSearchList = [
        {
            name: "BitCoin",
            shortName: "BTC",
            imgUrl: "",
            mcap: "$65.930000",
        },
        {
            name: "BitCoin",
            shortName: "BTC",
            imgUrl: "",
            mcap: "$65.930000",
        },
        {
            name: "BitCoin",
            shortName: "BTC",
            imgUrl: "",
            mcap: "$65.930000",
        }
    ];

    const walletSearchList = [
        {
            name: "Wallet Name",
            address: "0x8b4d84......43f72",
            imgUrl: "",
            networth: "$65.930000",
        },
        {
            name: "Wallet Name",
            address: "0x8b4d84......43f72",
            imgUrl: "",
            networth: "$65.930000",
        },
        {
            name: "Wallet Name",
            address: "0x8b4d84......43f72",
            imgUrl: "",
            networth: "$65.930000",
        }
    ];

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<SearchOverlay />);

    const onSearchInputClick = () => {
        setOverlay(<SearchOverlay />);
        onOpen();
    };

    const renderModal = () => {
        return (
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                {overlay}
                <ModalContent
                    borderRadius={"4px"}
                    background={colorMode == "light" ? "#F4F4F4" : "#282828"}
                    minW={"64%"}
                    containerProps={{ justifyContent: 'flex-start', paddingLeft: '15.3rem' }}
                >
                    <Box m={"23px 29px 22px 20px"}>
                        {
                            searchList.map((searchItem, index, searchArray) => (
                                <SearchItemGroup
                                    defiSearchList={defiSearchList}
                                    coinSearchList={coinSearchList}
                                    walletSearchList={walletSearchList}
                                    key={index}
                                    searchIndex={index}
                                    searchItem={searchItem}
                                    searchArray={searchArray}
                                />
                            ))
                        }
                    </Box>
                </ModalContent>
            </Modal>
        );
    };

    return (
        <InputGroup w="100%" alignItems={"center"}>
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
            <Input
                type="text"
                border="none"
                borderLeftRadius={"20px"}
                borderRightRadius={"20px"}
                _selected={{
                    outline: "none",
                    border: "none",
                }}
                _focusVisible={{
                    outline: "none",
                    border: "none",
                }}
                value={searchWalletAddressValue ?? ""}
                bgColor={"transparent"}
                variant={"h5"}
                letterSpacing={"1.2px"}
                _light={{ color: "#16171B" }}
                _dark={{ color: "#A8ADBD" }}
                w="100%"
                onClick={() => onSearchInputClick()}
                placeholder="Search by Coin, DeFi name, NFT, Wallet and more"
                // placeholder="Search by Wallet Address" // till 29th release only
                onKeyDown={(e) => {
                    handleSearchByWalletAddress(e);
                }}
                onChange={(e) => {
                    handleSearchByWalletAddress(e);
                }}
            />
            {renderModal()}
        </InputGroup>
    );
};

export default SearchBoxV2;
