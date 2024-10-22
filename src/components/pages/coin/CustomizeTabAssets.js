"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Checkbox, Text, useColorMode, InputGroup, InputLeftElement, Input, CloseButton } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CustomAvatar from "@components/avatar";

const CustomizeTabAssetsPanel = () => {
    const { colorMode } = useColorMode();
    const [selectedCoins, setSelectedCoins] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef(null);

    const tableData = useSelector((state) => state?.coinData?.CoinRankingsTableData || []);
    const filteredData = tableData?.data?.data?.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const storedCoins = JSON.parse(localStorage.getItem('selectedCoins')) || [];
        setSelectedCoins(storedCoins);
    }, []);

    const handleCheckboxChange = (slug) => {
        let updatedSelectedCoins;
        if (selectedCoins.includes(slug)) {
            updatedSelectedCoins = selectedCoins.filter((coin) => coin !== slug);
        } else {
            updatedSelectedCoins = [...selectedCoins, slug];
        }
        setSelectedCoins(updatedSelectedCoins);
        localStorage.setItem('selectedCoins', JSON.stringify(updatedSelectedCoins));
    };

    const handleRemoveSelectedCoin = (slug) => {
        const updatedSelectedCoins = selectedCoins.filter((coin) => coin !== slug);
        setSelectedCoins(updatedSelectedCoins);
        localStorage.setItem('selectedCoins', JSON.stringify(updatedSelectedCoins));
    };

    return (
        <Box mt={"15px"} width={"100%"}>
            <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"10px"} mt={"25px"}>Assets</Text>
            <InputGroup width={"100%"}>
                <InputLeftElement m={"15px 10px 0px 10px"}>
                    <Image src={colorMode === 'light' ? "/icons/search_Light.svg" : "/icons/search_Dark.svg"} width={18} height={18} alt=" " />
                </InputLeftElement>
                <Input
                    bg={colorMode === 'light' ? "#F0F0F5" : "#282828"}
                    mt={"15px"}
                    width={"100%"}
                    placeholder='Search for asset'
                    size='md'
                    color={colorMode === 'light' ? "#6F6F6F" : "#A5A5A5"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    ref={inputRef}
                />
            </InputGroup>
            <Box layerStyle={"flexCenterSpaceBetween"} mt={"15px"}>
                <Text variant={"baseStyle"} fontWeight={500} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>All</Text>
                <Text variant={"baseStyle"} fontWeight={500} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>Exclude</Text>
            </Box>
            <Box className="hidescrollbar" layerStyle={"flexColumn"} overflowY={"auto"} maxHeight={"250px"} mt={"15px"}>
                {filteredData && filteredData.length > 0 ? (
                    <Box>
                        {filteredData.map((item, i) => (
                            <TableRow
                                key={i}
                                item={item}
                                isSelected={selectedCoins.includes(item.slug)}
                                handleCheckboxChange={handleCheckboxChange}
                            />
                        ))}
                    </Box>
                ) : (
                    <Text>No assets found</Text>
                )}
            </Box>
            <Box layerStyle={"flexCenter"} flexWrap="wrap" mt={"15px"} width={"100%"}>
                {selectedCoins.map((slug, index) => {
                    const coin = tableData?.data?.data?.find((coin) => coin.slug === slug);
                    return coin ? (
                        <Box
                            key={index}
                            layerStyle={"flexCenter"}
                            width={"auto"}
                            height={"30px"}
                            border={colorMode === 'light' ? "1px solid #333333CC" : "1px solid #A5A5A5"}
                            borderRadius={"16px"}
                            px={"8px"}
                            m={"5px"}
                        >
                            <CustomAvatar
                                width={"16px"}
                                height={"16px"}
                                style={{ borderRadius: "50%" }}
                                src={coin.logoUrl ?? '/icons/coin_icon.svg'}
                            />
                            <Text variant={"h4"} ml={"4px"}>
                                {coin.name}
                            </Text>
                            <CloseButton
                                width={"15px"}
                                height={"15px"}
                                ml={"5px"}
                                onClick={() => handleRemoveSelectedCoin(coin.slug)}
                            />
                        </Box>
                    ) : null;
                })}
            </Box>
        </Box>
    );
};

const TableRow = ({ item, isSelected, handleCheckboxChange }) => {
    const { colorMode } = useColorMode();

    return (
        <Box layerStyle={"flexCenterSpaceBetween"} my={"10px"}>
            <Box layerStyle={"flexCenter"}>
                <CustomAvatar
                    width={"32px"}
                    height={"32px"}
                    style={{ borderRadius: "50%" }}
                    name={item?.name}
                    src={item?.logoUrl ?? '/icons/coin_icon.svg'}
                />
                <Box layerStyle={"flexCenter"} ml={"15px"}>
                    <Box m={"5px 0px 0px 1px"}>
                        <Box layerStyle={"flexCenter"}>
                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"}>
                                {item?.ticker}
                            </Text>
                            <Box backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#A5A5A5"} borderRadius={"4px"} ml={"10px"} padding={"2px 4px"}>
                                <Text variant={"footnoteText"} fontWeight={500} lineHeight={"10px"} color={"#191919"}>
                                    {item?.rank === undefined ? "-" : item?.rank}
                                </Text>
                            </Box>
                        </Box>
                        <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                            {item?.name}
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Checkbox isChecked={isSelected} onChange={() => handleCheckboxChange(item.slug)} mr={"15px"} />
        </Box>
    );
};

export default CustomizeTabAssetsPanel;
