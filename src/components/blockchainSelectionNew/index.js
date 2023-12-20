/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
"use client";
import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Checkbox,
    CheckboxGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Tooltip,
    useColorMode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/dashboard_data/dataSlice";
import dynamic from "next/dynamic";
const SearchBox = dynamic(() => import("@components/searchBox"));

const BlockchainSelectionMenuNew = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();

    const [tempBlockchain, setTempBlockchain] = useState([]);

    const [searchableBlockchains, setSearchableBlockchains] = useState([]);
    const blockchainSearchHandler = (e) => {
        const value = e.target.value;
        if (searchableBlockchains && value !== "") {
            let tempBlockchainArray = searchableBlockchains.filter((item) => {
                return item.name.toLowerCase().includes(value);
            });
            setTempBlockchain(tempBlockchainArray);
        } else {
            setTempBlockchain(blockchainListData?.data.slice(5));
        }
    };
    const blockchainListData = useSelector(
        (state) => state?.appData?.BlockchainListData
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };
    const blockchainSelected = useSelector(
        (state) => state?.dashboardTableData?.blockchainType
    );

    let blockchains = {
        data: blockchainListData.data,
        isSuccess: blockchainListData.isSuccess,
    };
    useEffect(() => {
        setSearchableBlockchains(blockchainListData?.data?.slice(5));
        setTempBlockchain(blockchainListData?.data?.slice(5));
    }, [blockchainListData]);

    return (
        <>
            <Box
                display={"flex"}
                alignItems={{ base: "start", md: "center" }}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={{ md: "space-between" }}
                w="100%"
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    p={{ base: "10px 14px" }}
                >
                    <Box
                        borderRadius={"20px"}
                        p={"2px 20px"}
                        cursor={"pointer"}
                        onClick={() => {
                            BlockchainTypeHandler("All");
                        }}
                        _light={{
                            bg:
                                blockchainSelected.length === 0
                                    ? "#D9D9D9"
                                    : "#FFF",
                        }}
                        _dark={{
                            bg:
                                blockchainSelected.length === 0
                                    ? "#FFFFFF"
                                    : "#989898",
                        }}
                        border={
                            blockchainSelected.length === 0
                                ? "2px solid #245F00"
                                : "1px solid rgba(0, 0, 0, 0.10)"
                        }
                    >
                        <Text
                            variant={"content"}
                            _dark={{
                                color:
                                    blockchainSelected.length === 0 &&
                                    "#161616",
                            }}
                        >
                            All
                        </Text>
                    </Box>
                    {blockchains?.data?.map((item, i) => {
                        if (i >= 5) return;
                        return (
                            <Tooltip key={i} label={item.name}>
                                <Box
                                    layerStyle={"flexCenter"}
                                    justifyContent={"center"}
                                    cursor={"pointer"}
                                    _light={{
                                        bg: blockchainSelected.includes(item.id)
                                            ? "#D9D9D9"
                                            : "#FFF",
                                    }}
                                    _dark={{
                                        bg: blockchainSelected.includes(item.id)
                                            ? "#FFFFFF"
                                            : "#989898",
                                    }}
                                    border={
                                        blockchainSelected.includes(item.id)
                                            ? "2px solid #245F00"
                                            : "1px solid rgba(0, 0, 0, 0.10)"
                                    }
                                    dropShadow={
                                        "0px 4px 4px rgba(0, 0, 0, 0.25)"
                                    }
                                    borderRadius="50%"
                                    w="32px"
                                    h="32px"
                                    ml={"15px"}
                                    onClick={() => {
                                        BlockchainTypeHandler(item.id);
                                    }}
                                >
                                    <Avatar
                                        style={{ borderRadius: "50%" }}
                                        width={"21px"}
                                        height={"21px"}
                                        src={item?.logoUrl}
                                        name={item.id ?? "Coin"}
                                    ></Avatar>
                                </Box>
                            </Tooltip>
                        );
                    })}
                </Box>

                {blockchains?.data?.length > 6 && (
                    <Menu
                        closeOnSelect={false}
                        suppressHydrationWarning={true}
                        isLazy
                        matchWidth
                    >
                        {({ isOpen }) => (
                            <>
                                <MenuButton
                                    isActive={isOpen}
                                    borderRadius="8px"
                                    p="8px 12px"
                                    transition="all 0.2s"
                                    _focus={{ boxShadow: "outline" }}
                                    color="#000"
                                    _focusVisible={{ outline: "none" }}
                                    suppressHydrationWarning={true}
                                    zIndex={"10"}
                                    w={{ base: "90%", md: "300px" }}
                                    m={{ base: "0px 14px" }}
                                    _light={{
                                        background: isOpen
                                            ? "rgba(28, 28, 28, 0.05)"
                                            : "transparent",
                                        border: "1px solid #1C1C1C",
                                    }}
                                    _dark={{
                                        background: "#191919",
                                        border: "1px solid #FFF",
                                    }}
                                >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        flexDirection={"row"}
                                        justifyContent={"space-between"}
                                    >
                                        <Text
                                            variant={"extraSmall"}
                                            _dark={{
                                                color: "white",
                                            }}
                                        >
                                            More DeFi Markets
                                        </Text>
                                        <i
                                            className={`icon ${colorMode === "light"
                                                ? isOpen
                                                    ? "dropdown_black_open"
                                                    : "dropdown_black"
                                                : isOpen
                                                    ? "dropdown_white_open"
                                                    : "dropdown_white"
                                                }`}
                                        />
                                    </Box>
                                </MenuButton>
                                <MenuList
                                    zIndex={"10"}
                                    boxShadow={
                                        "0px 5px 4px 0px rgba(0, 0, 0, 0.10)"
                                    }
                                    bgColor={
                                        colorMode === "light"
                                            ? "#FFF"
                                            : "#191919"
                                    }
                                >
                                    <Box p={"10px"}>
                                        <SearchBox
                                            placeholder="Search"
                                            onChange={(e) =>
                                                blockchainSearchHandler(e)
                                            }
                                            width={"100%"}
                                        ></SearchBox>
                                    </Box>
                                    <CheckboxGroup value={blockchainSelected}>
                                        {blockchainListData?.isSuccess &&
                                            tempBlockchain?.map((item, i) => {
                                                return (
                                                    <MenuItem
                                                        key={i}
                                                        bgColor={
                                                            colorMode ===
                                                                "light"
                                                                ? "#FFF"
                                                                : "#191919"
                                                        }
                                                        _hover={{
                                                            bg:
                                                                colorMode ===
                                                                    "light"
                                                                    ? "#F5F5F7"
                                                                    : "#202020",
                                                        }}
                                                    >
                                                        <Checkbox
                                                            colorScheme="green"
                                                            value={item.id}
                                                            // checked={blockchainSelected.includes(
                                                            //     item.id
                                                            // )}
                                                            onChange={() => {
                                                                BlockchainTypeHandler(
                                                                    item.id
                                                                );
                                                            }}
                                                        >
                                                            <Box
                                                                display={"flex"}
                                                                cursor={
                                                                    "pointer"
                                                                }
                                                                alignItems={
                                                                    "center"
                                                                }
                                                                justifyContent={
                                                                    "center"
                                                                }
                                                            >
                                                                <Avatar
                                                                    width={
                                                                        "24px"
                                                                    }
                                                                    height={
                                                                        "24px"
                                                                    }
                                                                    src={
                                                                        item.logoUrl
                                                                    }
                                                                    name={
                                                                        item.id ??
                                                                        "Coin"
                                                                    }
                                                                    style={{
                                                                        marginRight:
                                                                            "20px",
                                                                        marginLeft:
                                                                            "14px",
                                                                    }}
                                                                ></Avatar>
                                                                <Text
                                                                    fontSize={
                                                                        "12px"
                                                                    }
                                                                    fontWeight={
                                                                        "400"
                                                                    }
                                                                    lineHeight={
                                                                        "20px"
                                                                    }
                                                                    letterSpacing={
                                                                        "1px"
                                                                    }
                                                                    color={
                                                                        colorMode ===
                                                                            "light"
                                                                            ? "#16171B"
                                                                            : "#FFF"
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </Text>
                                                            </Box>
                                                        </Checkbox>
                                                    </MenuItem>
                                                );
                                            })}
                                    </CheckboxGroup>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                )}
            </Box>
        </>
    );
};

export default BlockchainSelectionMenuNew;
