"use client";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import GenericSmallTableComponent from "./GenericSmallTable";

function DefiUsersSmallTableComponent() {

    const tableName = "DeFi Users";
    const thread = ["Users Address", "Share", "Top Tokens"];

    const defiUsersTableData = useSelector(
        (state) => state?.defiDashboardData?.DefiUsersTableData
    )
    console.log(defiUsersTableData, "tabledata");

    return (
        <Box
            width={"50%"}
            bgColor={useColorModeValue("#F0F0F5", "#191919")}
            borderColor={useColorModeValue("#F0F0F5", "#191919")}
        >
            <GenericSmallTableComponent
                tableName={tableName}
                thread={thread}
                tableData={defiUsersTableData}
                RowComponent={RowComponent}
            />
        </Box>
    )
};
export default DefiUsersSmallTableComponent;

function RowComponent({ tableData }) {
    return (
        <>
            {tableData?.isSuccess && tableData?.data?.data?.map((item, i) => {
                return (
                    <>
                        <TableRow
                            key={i}
                            address={{
                                src: '',
                                name: item?.user,
                                amount: ''
                            }}
                            share={''}
                            tokens={{ src1: '', name1: '', percentage1: '', src2: '', name2: '', percentage2: '' }}
                        //user={item.id}
                        />
                    </>
                )
            })}
        </>
    )
}

function TableRow({ key, address, share, tokens }) {
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

                onClick={() => {
                    setClick(!clicked)
                    router.push(`/wallet_dashboard?address=${address.name}`)
                }}

                //   onClick={() => { setClick(!clicked) }}
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
                            {/*  <Image
                              height={"24px"}
                              width={"24px"}
                              src={address.src}
                            //   alt="logo"
                          >
                          </Image> */}
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                            >
                                {address.name}
                            </Text>
                            <Text
                                _dark={{
                                    color: "#A8ADBD"
                                }}
                                _light={{
                                    color: "#A8ADBD"
                                }}
                                fontSize={"12px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                textTransform={"uppercase"}
                            >
                                {address.amount}
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
                                fontWeight={400}
                                lineHeight={"20px"}
                            >
                                {share}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

                <Td>
                    <Flex>
                        <Box
                            alignItems={"center"}
                            display={"flex"}
                        >
                            {/*  <Image
                              height={"14px"}
                              width={"8.595px"}
                              src={tokens.src1}
                              alt="logo"
                          >
                          </Image> */}
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                ml={"5px"}
                            >
                                {tokens.name1}
                            </Text>
                            <Text
                                _dark={{
                                    color: "#A8ADBD"
                                }}
                                _light={{
                                    color: "#A8ADBD"
                                }}
                                fontSize={"12px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                textTransform={"uppercase"}
                                mt={"2px"}
                                ml={"3px"}
                            >
                                {tokens.percentage1}
                            </Text>
                            {/*  <Image
                              height={"14px"}
                              width={"16.048px"}
                              src={tokens.src2}
                              alt="logo"
                              ml={"10px"}
                          >
                          </Image> */}
                            <Text
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"14px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                ml={"5px"}
                            >
                                {tokens.name2}
                            </Text>
                            <Text
                                _dark={{
                                    color: "#A8ADBD"
                                }}
                                _light={{
                                    color: "#A8ADBD"
                                }}
                                fontSize={"12px"}
                                fontStyle={"normal"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                textTransform={"uppercase"}
                                mt={"2px"}
                                ml={"3px"}
                                mr={"25px"}
                            >
                                {tokens.percentage2}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

            </Tr>
        </>
    );
}