"use client";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Skeleton } from "@chakra-ui/react";
import GenericSmallTableComponent from "./GenericSmallTable";


let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function Assetcomposition() {
    const tableName = "DeFi Asset Composition";
    const thread = ["Asset Name",   /* "Share",  */"Value"];
    const Definitions = "Asset composition matrix shows the compositions of the assets of the DeFi in percentage terms and the individual value of the subclass of the assets of the DeFi."
    const Tablepath = "/defi_dashboard/asset_composition"
    /*  const tableData = [
         ["/images/Ethdefiusers.svg", "Ethereum", "+ 356,456,560 USD "],
         ["/images/Trondefiusers.svg", "Tron", "+ 256,456,560 USD"],
         ["/images/Binancedefiusers.svg", "BSC", "+ 46,456,560 USD"],
         ["/images/Arbitrumdefiusers.svg", "Arbitrum", "+ 66,456,560 USD"],
         ["/images/Polygondefiusers.svg", "Polygon", "+ 56,456,560 USD"],
     ]; */

    const AssetcompositionTableData = useSelector(
        (state) => state?.defiDashboardData?.DefiAssetCompositionTableData
    )

    return (
        <Box
            width={{ base: "100%", md: "100%",bigSize:"50%" }}
            bgColor={useColorModeValue("#F0F0F5", "#191919")}
            borderColor={useColorModeValue("#F0F0F5", "#191919")}
        >
            <GenericSmallTableComponent
                tableName={tableName}
                thread={thread}
                tableData={AssetcompositionTableData}
                RowComponent={RowComponent}
                Definitions={Definitions}
                Tablepath={Tablepath}
            />
        </Box>
    )
};
export default Assetcomposition;

function RowComponent({ tableData }) {

    return (
        <>
            {tableData?.isError && (
                <>
                    <Tr
                        height={"200px"}
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
            {tableData?.isSuccess && tableData?.data?.data?.filter((item) => {
                if (item?.symbol !== null) {
                    return item
                }
            }).map((item, i) => {
                if (i < 7) {
                    return (
                        <>
                            <TableRow
                                key={i}
                                asset={{ name: item?.symbol, src: '' }}
                                // share={item[2]}
                                value={item?.adjusted_liquidityIndex}
                            />
                        </>
                    )
                }

            })}
        </>

    )
}

function TableRow({ key, asset, share, value }) {
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
                            {/*   <Image
                                height={"24px"}
                                width={"24px"}
                                src={asset.src}
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
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                {asset.name}
                            </Text>
                        </Box>
                    </Flex>
                </Td>

                {/*                 <Td>
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
                </Td> */}

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
                                {value / 10 ** 6}
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
        {/*  <Td>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td>
            <Skeleton height="20px" my={4} />
        </Td> */}
    </Box>
)