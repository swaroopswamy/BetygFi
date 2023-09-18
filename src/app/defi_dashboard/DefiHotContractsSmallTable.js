"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Skeleton } from "@chakra-ui/react";
import GenericSmallTableComponent from "./GenericSmallTable";
import { useSelector } from "react-redux";
import { SP } from "next/dist/shared/lib/utils";

function Defihotcontracts() {

    const tableName = "DeFi Hot/Active Contracts";
    const thread = ["Contract Name", "No. of users", "No. of Transactions"];
    const Tablepath = "/defi_dashboard/defi_hot_contract";
    const Definitions = "DeFi Hot/Active contract is a list of the most interacted smart contract address(es) by wallet address(es)."
    const defiHotContractsTableData = useSelector(
        (state) => state?.defiDashboardData?.DefiHotContractsTableData
    )
    return (
        <Box
            width={"50%"}
            bgColor={useColorModeValue("#F0F0F5", "#191919")}
            borderColor={useColorModeValue("#F0F0F5", "#191919")}
        >
            <GenericSmallTableComponent
                tableName={tableName}
                thread={thread}
                tableData={defiHotContractsTableData}
                RowComponent={RowComponent}
                Definitions={Definitions}
                Tablepath={Tablepath}
            />
        </Box>
    )
};
export default Defihotcontracts;

function RowComponent({ tableData }) {
    return (
        /*    <>
               {tableData?.isError && (
                   <>
                       <Tr
                           height={"250px"}
                       >
                           <Td
                               colSpan={3}
                           >
                               <Text
                                   _light={{
                                       color: "#16171B"
                                   }}
                                   _dark={{
                                       color: "#FFF"
                                   }}
                                   fontSize={"20px"}
                                   fontWeight={"400"}
                                   letterSpacing={"1px"}
                                   textAlign={"center"}
                                   p="20px"
   
                               >
                                   No Data available
                               </Text>
                           </Td>
                       </Tr>
                   </>
               )}
               {tableData?.isLoading && (
                   <>
                       <SkeletonRow />
                       <SkeletonRow />
                       <SkeletonRow />
                   </>
               )}
               {tableData?.isSuccess && tableData?.data?.data?.map((item, i) => {
                   if (i < 5) {
                       return (
                           <>
                               <TableRow
                                   key={i}
                                   contract={{ name: item[1], src: item[0] }}
                                   users={item[2]}
                                   transactions={item[3]}
                               />
                           </>
                       )
                   }
               })}
           </> */
        <>
            <Tr
                height={"250px"}
            >
                <Td
                    colSpan={3}
                >
                    <Text
                        _light={{
                            color: "#16171B"
                        }}
                        _dark={{
                            color: "#FFF"
                        }}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        textAlign={"center"}
                        p="20px"

                    >
                        No Data available
                    </Text>
                </Td>
            </Tr>
        </>
    )
}

function TableRow({ key, contract, users, transactions }) {
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
                                src={contract.src}
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
                                {contract.name}
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
                                {users}
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
                                {transactions}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

            </Tr>
        </>
    );
}

const SkeletonRow = () => (
    <Box as="tr">
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
    </Box>
)
