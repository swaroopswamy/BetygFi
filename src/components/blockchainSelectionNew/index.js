"use client";
import React, { /* useEffect, useState */ } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@redux/dashboard_data/dataSlice";
import CustomAvatar from "@components/avatar";

const BlockchainSelectionMenuNew = ({ w = "100%" }) => {
    const dispatch = useDispatch();
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

    return (
        <Box
            display={"flex"}
            alignItems={{ base: "start", md: "center" }}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
            w={w}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                p={{ base: "10px 0px 10px 10px" }}
                w="100%"
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
                <Box
                    id="blockchain-container"
                    w="90%"
                    overflowX="auto"
                    display={"flex"}
                    alignItems={"center"}
                    flexWrap="nowrap"
                    css={{
                        "&::-webkit-scrollbar": {
                            width: "0.2rem",
                            height: "0.2rem",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    {blockchains?.data?.map((item, i) => {
                        return (
                            <Box layerStyle={"flexCenter"} gap={"3px"} ml={"15px"} key={i}>
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

                                    onClick={() => {
                                        BlockchainTypeHandler(item.id);
                                    }}
                                >
                                    <CustomAvatar
                                        style={{ borderRadius: "50%" }}
                                        width={"21px"}
                                        height={"21px"}
                                        src={item?.logoUrl}
                                        name={item.id ?? "Coin"}
                                    />
                                </Box>
                                <Text variant={"h3"} whiteSpace={"nowrap"}>
                                    {item?.name}
                                </Text>
                            </Box>
                        );
                    })}
                </Box>

            </Box>

            {/* {blockchains?.data?.length > 6 && (
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
                                zIndex={"100"}
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
                                        value={searchTerm}
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
                                                            <CustomAvatar
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
                                                            />
                                                            <Text
                                                                ml={"8px"}
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
            )} */}
        </Box>
    );
};

export default BlockchainSelectionMenuNew;
