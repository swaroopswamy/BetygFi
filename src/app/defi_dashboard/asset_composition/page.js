"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Text, Icon, Td, Tr, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode } from "@chakra-ui/react";
import GenericBigTableComponent from "../GenericBigTable";
import BackIconWhite from '../../../../public/icons/backIconWhite.svg';
import BackIconBlack from '../../../../public/icons/backIconBlack.svg';

function Assetcomposition() {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const tableName = "DeFi Asset Composition";
    const thread = ["Asset Name", "Price", "Amount", "Value", "Share"];
    const tableData = [
        ["/images/Ethereumlogo.svg", "AAVE V2 ", "USD 65.930000", "USD 356,456,560", "USD 65.930000", "60%"],
        ["/images/Tronlogo.svg", "AAVE V3 ", "USD 65.930000", "USD 1,434,771,959", "USD 65.930000", "56%"],
        ["/images/Binancelogo.svg", "Compound", "USD 35.700000", "USD 1,284,778,438", "USD 35.700000", "45%"],
        ["/images/Arbitrumlogo.svg", "JustLend", "USD 0.023387", "USD 3,740,295,842", "USD 0.023387", "40%"],
        ["/images/Polygonmaticlogo.svg", "Venus", "USD 5.100000", "USD 802,259,792", "USD 5.100000", "25%"],
        ["/images/Ethereumlogo.svg", "Morpho Aave", "USD 0.001782", "USD 315,485,747", "USD 0.001782", "20%"],
        ["/images/Tronlogo.svg", "Compound V3", "USD 35.700000", "USD 563,991,620", "USD 35.700000", "16%"],
        ["/images/Binancelogo.svg", "Radiant V2", "USD 0.313472", "USD 259,911,221", "USD 0.313472", "14%"],
        ["/images/Arbitrumlogo.svg", "FluidTokens", "NA", "USD 234,308", "NA", "12%"],
        ["/images/Polygonmaticlogo.svg", "Trader Joe Lend", "USD 0.379546", "USD 7,562,768", "USD 0.379546", "10%"],
    ];

    return (
        <Box
            padding={"20px 30px"}
            bgColor={useColorModeValue("#F0F0F5", "#191919")}
            borderColor={useColorModeValue("#F0F0F5", "#191919")}
            textTransform={"capitalize"}
        >
            <Flex
                cursor={"pointer"}
                ml={"5px"}
                mb={"20px"}
                align={"center"}
                onClick={() => {
                    router.push(`/defi_dashboard?defi=aave-v2&id=64dd07303aadfa8bc5badabc`)
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
            <GenericBigTableComponent
                tableName={tableName}
                thread={thread}
                tableData={tableData}
                RowComponent={RowComponent}
            />
        </Box>
    )
};
export default Assetcomposition;

function RowComponent({ tableData }) {
    return (
        <>
            {tableData.map((item, i) => {
                return (
                    <>
                        <TableRow
                            key={i}
                            asset={{ name: item[1], src: item[0] }}
                            price={item[2]}
                            amount={item[3]}
                            value={item[4]}
                            share={item[5]}
                        />
                    </>
                )
            })}

        </>
    );
}

function TableRow({ key, asset, price, amount, value, share }) {
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
                                height={"24px"}
                                width={"24px"}
                                src={asset.src}
                                alt="logo"
                            >
                            </Image>
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {asset.name}
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
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {price}
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
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {amount}
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
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {value}
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
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {share}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

            </Tr>
        </>
    );
}