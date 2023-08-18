"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode
} from "@chakra-ui/react";
import BackIconWhite from '../../../../public/icons/backIconWhite.svg';
import BackIconBlack from '../../../../public/icons/backIconBlack.svg';
import { blockchains } from "../../../../util/constant";
import { useState } from "react";
import TableData from '../../../../util/whales.json';
import millify from "millify";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { ChevronLeftIcon } from '@chakra-ui/icons'

const DefiName = ({ thread, tableData }) => {
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
                    padding={"8px 30px 8px 15px"}
                    background={useColorModeValue('#FFFFFF', '#202020')}
                >
                    <Box>
                        <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            // ml={"20px"}
                            mb={"20px"}
                            mt={"20px"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                        >
                            DeFi Name
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
                        {tableData.map((item, i) => {
                            return (
                                <>
                                   <TableRow
                                        key={i}
                                        Asset={{name: item[0],
                                            src: item[4]
                                        }}
                                        Inflow={item[1]}
                                        Outflow={item[2]}
                                        NetValueflow ={item[3]}
                                      
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

export default DefiName;

function ThreadItem({ key, name }) {
    const { colorMode } = useColorMode();
    return (
        <>
            <Th
                key={key}
                color={useColorModeValue("#434347", "#A8ADBD")}
                fontSize={"10px"}
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
                {name === "Blockchain | Asset Name" && <Image src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")} alt="Users" ml="1" />}
                {name === "Inflow (7 Days)" && <Image src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")} alt="Deposited" ml="1" />}
                {name === "Outflow (7 Days)" && <Image src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")} alt="Borrowed" ml="1"  />}
                {name === "Net Value flow " && <Image src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")} alt="Assets" ml="1" />}
                
                </Flex>
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

function TableRow({ key,Asset , Inflow, Outflow,NetValueflow }) {
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

<Td>
                    <Flex>
                        <Box
                            alignItems={"center"}
                            display={"flex"}
                            gap={"10px"}
                        >
                            <Image
                                height={"10px"}
                                width={"10px"}
                                src={ Asset.src}
                                alt="logo"
                                // url={"/icons/Ethereum_sm_icon.svg"}
                                //  src="/icons/aave_logo.svg"


                            >
                            </Image>
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                { Asset.name}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

                <Td>
                    <Flex>
                        <Box>
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {Inflow}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

                <Td>
                    <Flex>
                        <Box>
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {Outflow}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

                <Td>
                    <Flex>
                        <Box>
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {NetValueflow}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

                
            </Tr>
        </>
    );
}
