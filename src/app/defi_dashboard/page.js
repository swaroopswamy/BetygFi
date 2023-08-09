// eslint-disable-next-line react-hooks/exhaustive-deps

"use client"
import Governance from "./governance";


import React, { useCallback, useEffect, useState } from "react";
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Tooltip, Menu, MenuButton, MenuList, MenuItem, Checkbox } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer, fetchWalletBalanceData, fetchWalletTransactionsData, walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from "../../../util/constant";
import { useRouter, useSearchParams } from "next/navigation";
import millify from "millify";

const DefiDashboardPage = () => {
    const searchParam = useSearchParams();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const walletAddress = useSelector(
        (state) => state?.walletDashboardTableData?.walletAddress
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };

    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData?.data)

    const fetchWalletBalanceDataHandler = useCallback(() => {
        const payload = {
            blockchain: blockchainSelected
        }
        dispatch(fetchWalletBalanceData(searchParam.get("address"), payload));
    }, [blockchainSelected, walletAddress])
    const fetchWalletTransactionsDataHandler = useCallback(() => {
        /* const payload = {
            blockchain: blockchainSelected
        } */
        dispatch(fetchWalletTransactionsData(searchParam.get("address")));
    }, [blockchainSelected, walletAddress])
    useEffect(() => {
        dispatch(walletAddressChangedReducer(searchParam.get("address")))
        fetchWalletBalanceDataHandler();
        fetchWalletTransactionsDataHandler();
    }, [fetchWalletBalanceDataHandler, fetchWalletTransactionsDataHandler])

    return (
        <>
            <Box
                bgColor={useColorModeValue("#FFFFFF", "#131313")}
                display={"flex"}
                flexDirection={"column"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    margin={"38px 30px 50px 30px"}
                    paddingBottom={"33px"}
                    borderBottom={useColorModeValue("1px solid #2F2F2F", "1px solid #BFBFBF")}

                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Box
                            marginRight={"22px"}
                        >
                            <Image
                                w="47px"
                                h="47px"
                                borderRadius={"50%"}
                                src="/images/basic_profile.png"
                                alt="proifile_img"
                            />
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            {
                                walletBalanceData?.name === undefined && (
                                    <Text
                                        fontSize={"24px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        opacity={"0.5"}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        letterSpacing={"2.4px"}
                                    >
                                        No Name
                                    </Text>
                                )}
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                mt={"13px"}
                            >
                                <Box
                                    borderRight={useColorModeValue("1px solid #000000", "1px solid #A8ADBD")}
                                    h="100%"
                                    py={"11px"}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={"400"}

                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        paddingRight={"15px"}
                                    >
                                        www.sushi.com/swap
                                    </Text>
                                </Box>

                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    h="100%"
                                    paddingRight={"20px"}
                                    borderRight={useColorModeValue("1px solid #000000", "1px solid #A8ADBD")}

                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        color={useColorModeValue("#3A3A3A", "#A8ADBD")}
                                        paddingLeft={"15px"}
                                        marginRight={"13px"}
                                    >
                                        {blockchains?.length} chains
                                    </Text>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        ml={"15px"}

                                    >
                                        {blockchains?.map((item, i) => (
                                            <>
                                                {i < 4 &&
                                                    <Tooltip key={i} label={item}>
                                                        <Box
                                                            display={"flex"}
                                                            cursor={"pointer"}
                                                            alignItems={"center"}
                                                            justifyContent={"center"}

                                                            flexDirection={"row"}
                                                            bg={"#D9D9D9"}
                                                            borderRadius="50%"
                                                            border={blockchainSelected.includes(item) ? "3px solid #55A406" : ""}
                                                            boxShadow={!blockchainSelected.includes(item) ? "-2px 0px 5px 1px rgba(0, 0, 0, 0.10)" : ""}
                                                            w="40px"
                                                            h="40px"
                                                            ml={i !== 0 && '-10px'}

                                                            _hover={{ borderColor: "blue" }}
                                                            /* bgColor={
                                                              blockchainSelected.includes(item)
                                                                ? useColorModeValue("#F5F5F7", "#191919")
                                                                : useColorModeValue("#FFFFFF", "#202020")
                                                            }
                                                            border={useColorModeValue(
                                                              "1px solid #E0E0E0",
                                                              "1px solid #333"
                                                            )}  */
                                                            onClick={() => {
                                                                BlockchainTypeHandler(item);
                                                            }}
                                                        >
                                                            <Image
                                                                width={18}
                                                                height={18}
                                                                src={`/icons/${item}_sm_icon.svg`}
                                                                alt={`${item}_icon`}

                                                            ></Image>
                                                            {/* <Text
                     fontSize={"10px"}
                     fontWeight={"400"}
                     lineHeight={"20px"}
                     letterSpacing={"1px"}
                     color={useColorModeValue("#16171B", "#FFF")}
                   >
                     {item}
                   </Text> */}
                                                        </Box>
                                                    </Tooltip>
                                                }
                                            </>
                                        ))}
                                        <Menu closeOnSelect={false}>
                                            <MenuButton
                                                bg={"#D9D9D9"}
                                                borderRadius="50%"
                                                w="40px"
                                                h="40px"
                                                transition='all 0.2s'

                                                border="2px solid #191919"
                                                ml='-10px'
                                                _focus={{ boxShadow: 'outline' }}
                                                color="#000"
                                            >
                                                +3
                                            </MenuButton>
                                            <MenuList
                                                boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
                                                bgColor={useColorModeValue("#FFF", "#191919")}
                                            >
                                                {blockchains.map((item, i) => {
                                                    return (
                                                        <>
                                                            {i >= 4 &&
                                                                <MenuItem key={i}
                                                                    _light={{
                                                                        bgColor: "#FFF",
                                                                    }}
                                                                    _dark={{
                                                                        bgColor: "#191919",
                                                                    }}
                                                                    _hover={{ bg: colorMode === 'light' ? "#F5F5F7" : "#202020" }}
                                                                >
                                                                    <Checkbox colorScheme='green'
                                                                        value={item}
                                                                        checked={blockchainSelected.includes(item)} onChange={(e) => {
                                                                            BlockchainTypeHandler(item);
                                                                        }}>
                                                                        <Box
                                                                            display={"flex"}
                                                                            cursor={"pointer"}
                                                                            alignItems={"center"}
                                                                            justifyContent={"center"}
                                                                        >
                                                                            <Image
                                                                                width={18}
                                                                                height={18}
                                                                                src={`/images/${item}_sm_icon.png`}
                                                                                alt={`${item}_icon`}

                                                                                style={{ marginRight: "20px", marginLeft: "14px" }}
                                                                            ></Image>
                                                                            <Text
                                                                                fontSize={"12px"}
                                                                                fontWeight={"400"}
                                                                                lineHeight={"20px"}
                                                                                letterSpacing={"1px"}
                                                                                _light={{
                                                                                    color: "#16171B",
                                                                                }}
                                                                                _dark={{
                                                                                    color: "#FFF",
                                                                                }}
                                                                            >
                                                                                {item}
                                                                            </Text>
                                                                        </Box>
                                                                    </Checkbox>
                                                                </MenuItem>
                                                            }
                                                        </>)
                                                })}
                                            </MenuList>
                                        </Menu>
                                    </Box>
                                </Box>
                                <Box
                                    h="100%"
                                    py={"11px"}
                                    pl="15px"
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={"400"}

                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        paddingRight={"15px"}
                                    >
                                        Token
                                    </Text>
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={"400"}

                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        paddingRight={"15px"}
                                    >
                                        No name
                                    </Text>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        position={"relative"}
                        bgColor={useColorModeValue("#FF", "#202020")}
                        padding={"10px 10px"}
                        h="fit-content"
                        borderRadius={"6px"}
                        _after={{
                            position: "absolute",
                            content: '""',
                            bottom: "0px",
                            left: "10px",
                            width: "85%",
                            height: "1px",
                            bgColor: "#00B913",

                        }}
                    >
                        Safety Score
                        <Text
                            ml="10px"
                            fontWeight={"600"}
                            fontSize={"16px"}
                            _dark={{
                                color: "#FFFFFF"
                            }}
                            _light={{
                                color: "#191919"
                            }}
                        >
                            91%
                        </Text>
                    </Box>
                </Box>

            </Box>
            <Box>
                <Governance />
            </Box>
        </>
    );
};

export default DefiDashboardPage;
