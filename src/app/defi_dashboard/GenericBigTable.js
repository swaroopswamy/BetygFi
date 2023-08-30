"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode, colorMode
} from "@chakra-ui/react";
import { blockchains } from "../../../util/constant";
import React,{ useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import BigTablePageButtons from '/src/app/components/BigTable_pagebutton';
//import SelectionBox from '/src/app/components/selection_box';

const GenericBigTableComponent = ({ tableName, thread, tableData, RowComponent }) => {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const router = useRouter();
    const [searchByName, setSearchByName] = useState('');

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };

    const searchAssetByNameHandler = (name) => {
        setSearchByName(name);
    }

    return (
        <>
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
                            lineHeight={"20px"}
                            letterSpacing={"1.2px"}
                            textTransform={"capitalize"}
                            w="207px"
                            placeholder="Search"
                            onChange={(e) => { searchAssetByNameHandler(e.target.value) }} 
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
                            textTransform={"capitalize"}
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

                <BigTablePageButtons />
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
                textTransform={"capitalize"}
                textAlign={"left"}
            >
                <Flex>
                    {name}
                    {/* Add an image next to the text */}
                    <Image mt={"2px"} src={useColorModeValue("/images/Arrowdown(light).svg", "/images/Arrowdown(dark).svg")} alt="Users" ml="2" />
                </Flex>
            </Th>
        </>
    )
}

function SelectionBox ({ blockchainSelected, colorMode, BlockchainTypeHandler }) {
    // const dispatch = useDispatch();
    // const blockchainListData = useSelector((state) => state?.appData?.BlockchainListData);
    // var blockchains = [];

    // if (blockchainListData.isSuccess) {
    //     blockchains = blockchainListData.data;
    // }
    
    // useEffect(() => {
    //     dispatch(fetchBlockchainListData());
    // }, []);

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
                    //textTransform={"lowercase"}
                >
                    All
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
                                fontSize={"14px"}
                                fontWeight={blockchainSelected.includes(item) ? "700" : "400"}
                                lineHeight={"21.826px"}
                                letterSpacing={"1.4px"}
                                color={colorMode === 'light' ?
                                    blockchainSelected.includes(item) ? "#191919" : "#191919"
                                    :
                                    blockchainSelected.includes(item) ? "#FFFFFF" : "#FFFFFF"
                                }
                                //textTransform="uppercase"
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

