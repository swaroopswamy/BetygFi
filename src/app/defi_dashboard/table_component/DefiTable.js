"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode
} from "@chakra-ui/react";
import { blockchains } from "../../../../util/constant";
import { useState } from "react";
import TableData from '../../../../util/whales.json';
import millify from "millify";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";

const DefiTable = ( {thread} ) => {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };


    return (
        <>
            <Box
                border={"2px"}
                borderColor={useColorModeValue('#FFFFFF', '#202020')}
                borderRadius={"6px"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"8px 30px 8px 30px"}
                    background={useColorModeValue('#FFFFFF', '#202020')}
                >
                    <Box>
                        <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            ml={"20px"}
                            mb={"20px"}
                            mt={"20px"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                        >
                            Top Value Holders
                        </Text>
                    </Box>

                    <SelectionBox
                        blockchainSelected={blockchainSelected}
                        BlockchainTypeHandler={BlockchainTypeHandler}
                        colorMode={colorMode}
                    />

                    <Input
                        borderColor={useColorModeValue("#E8E8E8", "#333")}
                        bgColor={useColorModeValue("#F5F5F7", "#191919")}
                        color={useColorModeValue("#16171B", "#A8ADBD")}
                        fontSize={"10px"}
                        fontWeight={400}
                        w="207px"
                        placeholder="SEARCH"
                        //onChange={(e) => { searchAssetByNameHandler(e.target.value) }} 
                    />

                </Box>

                <Table variant='unstyled'
                    size={'sm'}
                    border={"1px"}
                    borderColor={useColorModeValue("#FFFFFF", "#272727")}
                    borderRadius={"6px"}
                >
                    <Thead>
                        <Tr
                            bg={useColorModeValue("#F5F5F7", "#131313")}
                            width={"20%"}
                            flex-shrink={"0"}
                            borderRadius={'6px'}
                        >
                            {thread.map((item, i) => {
                                return (
                                    <ThreadItem
                                        name={item} 
                                    />
                                );
                            })}
                        
                        </Tr>
                    </Thead>

                    <Tbody>
                        {TableData.whales.map((item, i) => {
                            return (
                                <>
                                    <TableRow
                                        key={i}                                        
                                        rowValues={[item.id, item.usd_value, item.stats.top_coins.price, "-"]}
                                    />
                                </>
                            )
                        })}
                        

                    </Tbody>
                    <Tfoot>
                    </Tfoot>

                </Table>

                <PageButtons />
            </Box>
        </>
    )
};

export default DefiTable;

function ThreadItem( {name} ) {
    return (
        <>
            <Th
                color={useColorModeValue("#434347", "#A8ADBD")}
                fontSize={"10px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
                letterSpacing={"1px"}
                textTransform={"uppercase"}
                textAlign={"left"}
            >
                {name}
            </Th>
        </>
    )
}

function SelectionBox({ blockchainSelected, colorMode, BlockchainTypeHandler }) {
    return <>
        <Box
            display={"flex"}
            flexDirection={"column"}
        >
            <Box
                w={"100%"}
                display={"flex"}
                alignItems={"center"}
            >
                <Box
                    position={"relative"}
                    cursor={"pointer"}
                    fontSize={"10px"}
                    fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
                    letterSpacing={"1px"}
                    lineHeight={"20px"}
                    color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                    _after={
                        blockchainSelected.length === 0 && {
                            position: "absolute",
                            content: '""',
                            bottom: "-14px",
                            left: 0,
                            width: "100%",
                            height: "1px",
                            bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",

                        }
                    }
                    onClick={() => {
                        BlockchainTypeHandler("All");
                    }}
                    mr={"18px"}
                    textTransform={"uppercase"}
                >
                    ALL
                </Box>
                {blockchains.map((item, i) => {
                    if (i >= 4) return;
                    return (
                        <Box
                            position={"relative"}
                            cursor={"pointer"}
                            key={i}
                            _after={
                                blockchainSelected.includes(item) && {
                                    position: "absolute",
                                    content: '""',
                                    bottom: "-14px",
                                    left: 0,
                                    width: "100%",
                                    height: "1px",
                                    bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
                                }
                            }
                            onClick={() => {
                                BlockchainTypeHandler(item);
                            }}
                            mr={"10px"}
                            display={"flex"}
                            alignItems={"center"}
                        >
                            <Image
                                w={"20px"}
                                h={"20px"}
                                mr={"11px"}
                                src={`/icons/${item}_sm_icon.svg`}
                                alt=""
                            ></Image>
                            <Text
                                fontSize={"10px"}
                                fontWeight={blockchainSelected.includes(item) ? "700" : "400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                color={colorMode === 'light' ?
                                    blockchainSelected.includes(item) ? "#191919" : "#191919"
                                    :
                                    blockchainSelected.includes(item) ? "#FFFFFF" : "#FFFFFF"
                                }
                                textTransform={"uppercase"}
                            >
                                {item}
                            </Text>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    </>
}

function PageButtons() {
    return (
        <>
            <Box
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"end"}
                padding="10px 30px 14px"
                background={useColorModeValue('#FFFFFF', '#202020')}
            >

                <Box
                    display={"flex"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"10px"}
                            fontWeight={"400"}
                        >
                            1-20
                        </Text>
                    </Box>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"12px"}
                        h={"12px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        padding="0px"
                    >
                        <Image
                            mt={"10px"}
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '90deg' }}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        borderRadius={"0px"}
                        padding="0px"
                    >
                        <Image
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '180deg' }}
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                            alt="prev-arrow"
                        ></Image>
                    </Button>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderRadius={"0px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        padding="0px"
                    >
                        <Image
                            width={15}
                            height={15}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>
                </Box>

            </Box>
        </>)
}

function TableRow({ key, rowValues }) {
    const [clicked, setClick] = useState(false);
    const { colorMode } = useColorMode();
    const router = useRouter();
    return (
        <>
            <Tr
                key={key}
                cursor={"pointer"}
                bgColor={clicked ?
                    (colorMode === "light" ? '#F5F5F7' : '#191919') :
                    (colorMode === "light" ? '#FFFFFF' : '#202020')
                }
                onClick={() => { setClick(!clicked) }}
                borderBottom={'1px'}
                borderColor={useColorModeValue('#DFDFDF', '#313131')}
                borderRadius={'2px'}
            >

                {rowValues.map((item, i) => {
                    return (
                        <>
                            <Td>
                                <Flex>
                                    <Box>
                                        <Text
                                            color={useColorModeValue("#16171B", "#FFFFFF")}
                                            fontSize={"14px"}
                                            fontStyle={"normal"}
                                            fontWeight={"600"}
                                            lineHeight={"20px"}
                                        >
                                            {item}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Td>
                        </>
                    )
                })}

            </Tr>
        </>
    );
}
