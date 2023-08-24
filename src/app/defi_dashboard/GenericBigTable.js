"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode, colorMode
} from "@chakra-ui/react";
// import { blockchains } from "../../../util/constant";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import BackIconWhite from '../../../public/icons/backIconWhite.svg';
import BackIconBlack from '../../../public/icons/backIconBlack.svg';
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";

const GenericBigTableComponent = ({ tableName, thread, tableData, RowComponent }) => {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const router = useRouter();

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };

    return (
        <>
            <Flex
                cursor={"pointer"}
                ml={"5px"}
                mb={"20px"}
                align={"center"}
                onClick={() => {
                    router.push(`/defi_dashboard/`)
                }}
            >
                <Icon
                    w="24px"
                    h="24px"
                    as={colorMode === "light" ? BackIconWhite : BackIconBlack}
                    mr="6px"
                />
                <Text
                    fontSize={"10px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    letterSpacing={"1px"}
                    textTransform={"uppercase"}
                    ml={"5px"}
                >BACK</Text>
            </Flex>
            <Box
                border={"2px"}
                borderColor={useColorModeValue('#FFFFFF', '#202020')}
                borderRadius={"6px"}
                mb={"30px"}
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
                            //pr={"10px"}
                            mb={"20px"}
                            mt={"20px"}
                            fontSize={"18px"}
                            fontWeight={"600"}
                            lineHeight={"20px"}
                        >
                            {tableName}
                        </Text>
                    </Box>

                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={"10px"}
                    >
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
                            fontSize={"14px"}
                            fontWeight={400}
                            flex-shrink={"0"}
                            borderRadius={'6px'}
                        >
                            {thread.map((item, i) => {
                                return (
                                    <ThreadItem
                                        key={i}
                                        name={item}
                                    />
                                );
                            })}

                        </Tr>
                    </Thead>

                    <Tbody>
                        <RowComponent
                            tableData={tableData}
                        />
                    </Tbody>
                    <Tfoot>
                    </Tfoot>

                </Table>

                <PageButtons />
            </Box>
        </>
    )
};

export default GenericBigTableComponent;

function ThreadItem({ key, name }) {
    return (
        <>
            <Th
                key={key}
                color={useColorModeValue("#434347", "#A8ADBD")}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
                letterSpacing={"1px"}
                textTransform={"uppercase"}
                textAlign={"left"}
            >
                <Flex>
                    {name}
                    {/* Add an image next to the text */}
                    <Image src={useColorModeValue("/images/Arrowdown(light).svg", "/images/Arrowdown(dark).svg")} alt="Users" ml="2" />
                </Flex>
            </Th>
        </>
    )
}

function SelectionBox({ blockchainSelected, colorMode, BlockchainTypeHandler }) {
    const dispatch = useDispatch();
    const blockchainListData = useSelector((state) => state?.appData?.BlockchainListData);
    var blockchains = [];

    if (blockchainListData.isSuccess) {
        blockchains = blockchainListData.data;
    }
    
    useEffect(() => {
        dispatch(fetchBlockchainListData());
    }, []);

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
                    fontSize={"14px"}
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
                    //textTransform={"uppercase"}
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
                                blockchainSelected.includes(item.name) && {
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
                                BlockchainTypeHandler(item.name);
                            }}
                            mr={"10px"}
                            display={"flex"}
                            alignItems={"center"}
                        >
                            <Image
                                w={"20px"}
                                h={"20px"}
                                mr={"11px"}
                                src={`/icons/${item.name}_sm_icon.svg`}
                                alt=""
                            ></Image>
                            <Text
                                fontSize={"14px"}
                                fontWeight={blockchainSelected.includes(item.name) ? "700" : "400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                color={colorMode === 'light' ?
                                    blockchainSelected.includes(item.name) ? "#191919" : "#191919"
                                    :
                                    blockchainSelected.includes(item.name) ? "#FFFFFF" : "#FFFFFF"
                                }
                               // textTransform={"uppercase"}
                            >
                                {item.name}
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
                justifyContent={"space-between"}
                padding="10px 30px 14px"
                background={useColorModeValue('#FFFFFF', '#202020')}
            >
                <Flex>
                    <Text
                        _light={{ color: "#A8ADBD" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                    >
                        Last Update
                    </Text>
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        pl={"3px"}
                    >
                        3 mins ago
                    </Text>
                </Flex>
                <Box
                    display={"flex"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"12px"}
                            fontWeight={"400"}
                        >
                            1-20
                        </Text>
                    </Box>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        padding="0px"
                    >
                        <Image
                            //mt={"10px"}
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
                            width={"12px"}
                            height={"12px"}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>
                </Box>

            </Box>
        </>)
}

