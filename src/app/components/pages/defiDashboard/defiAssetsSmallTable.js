"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { Text, Box, useColorModeValue, Button, useColorMode, Tr, Th, Td, Avatar } from "@chakra-ui/react";
import GenericTable from "/src/app/components/table";
import { DefiAssetsSmallTableHeader } from "/src/app/components/pages/defiDashboard/helper";
import LastUpdate from "/src/app/components/lastUpdate";
import { fetchDefiAssetCompositionTableData } from "/src/redux/defi_dashboard_data/dataSlice";
import TooltipComp from "/src/app/components/tooltipComp";
import Image from "next/image";

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function DefiAssetsSmallTable() {
    const searchParam = useSearchParams();
    const dispatch = useDispatch();
    const router = useRouter();

    const defi = searchParam.get("defi");
    const id = searchParam.get("id");

    const defiAssetsTableData = useSelector(
        (state) => state?.defiDashboardData?.DefiAssetCompositionTableData
    );

    const getDefiAssetsTableDataHandler = () => {
        const payload = {
            defi: defi,
        };
        dispatch(fetchDefiAssetCompositionTableData(payload));
    };

    useEffect(() => {
        getDefiAssetsTableDataHandler();
    }, []);

    return (
        <Box w={{base: "100%", lg: "50%"}} height={"370px"} borderRadius={"6px"} bg={useColorModeValue("#FFFFFF", "#202020")} borderColor={useColorModeValue("#F0F0F5", "#272727")}>
            <Box layerStyle={"spaceBetween"} p={"20px"}>
                <Box layerStyle={"center"} gap={"5px"}> 
                    <Text variant={"smallTableHeader"}>
                        DeFi Asset Composition
                    </Text>
                    <TooltipComp label="Asset composition matrix shows the compositions of the assets of the DeFi in percentage terms and the individual value of the subclass of the assets of the DeFi." />
                </Box>


                {defiAssetsTableData?.isSuccess && 
                    <Button
                        variant={'viewMore'}
                        onClick={() => {
                            router.push(`/defi_dashboard/asset_composition?defi=${defi}&id=${id}`);
                        }}
                    > View More </Button>
                }
            </Box>

            <Box h={"70%"} overflowY={"auto"} overflowX={"auto"}>
                <GenericTable
                    tableHeader={DefiAssetsSmallTableHeader}
                    tableData={defiAssetsTableData}
                    TableRow={TableRow}
                    TableHeaderRowMobile={TableHeaderRowMobile}
                    ButtonComp={(item) => {
                        return (
                            <Box layerStyle={"spaceBetween"} w={"90%"}>
                                <Box layerStyle={"flexCenter"} gap={"10px"}>
                                    <Avatar
                                        height={"24px"}
                                        width={"24px"}
                                        src={item?.item?.logoUrl}
                                        name={item?.item?.assetName}
                                    >
                                    </Avatar>
                                    <Text variant={"h3"}> {item?.item?.assetName} </Text>
                                </Box>
                                <Box layerStyle={"center"}>
                                    <Text variant={"h3"}
                                        fontWeight={"600"}
                                        letterSpacing={"1.4px"}
                                        color={item?.item?.value > 0 ? '#245F00' : "#EF1E1E"}
                                    >
                                        {item?.item?.value > 0 ? '+ ' : "- "}{USDollar.format(item?.item?.value)}
                                    </Text>
                                </Box>
                            </Box>
                        )
                    }}
                    PanelComp={(item) => {
                        return (
                            <Box display={"flex"} minH={"50px"} gap={"20px"}>
                                <Text variant={"h3"} color={"#8F8F8F"}> Share </Text>
                                <Text variant={"h3"}> {item?.item?.share}% </Text>
                            </Box>
                        )
                    }}
                    SkeletonRowsColumnsDesktop={{
                        numColumns: 3,
                        numRows: 5
                    }}
                    SkeletonRowsColumnsMobile={{
                        numColumns: 2,
                        numRows: 5
                    }}
                />
            </Box>
            
            <LastUpdate p={"10px"} time={"3"} />
        </Box>
    )
};
export default DefiAssetsSmallTable;

function TableRow({ item, i }) {
    const router = useRouter();

    return (
        <>
            <Tr
                key={i}
                cursor={"pointer"}
                bgColor={useColorModeValue('#FFFFFF', '#202020')}
                borderBottom={'1px'}
                borderColor={useColorModeValue('#DFDFDF', '#313131')}
                borderRadius={'2px'}
            >
                <Td>
                    <Box layerStyle={"flexCenter"} gap={"10px"}>
                        <Avatar
                            height={"24px"}
                            width={"24px"}
                            src={item?.logoUrl}
                            name={item?.assetName}
                        >
                        </Avatar>
                        <Text variant={"h3"}> {item?.assetName} </Text>
                    </Box>
                </Td>

                <Td>
                    <Box>
                        <Text variant={"h3"}> {item?.share}% </Text>
                    </Box>
                </Td>

                <Td>
                    <Box>
                        <Text variant={"h3"}> {USDollar.format(item?.value)} </Text>
                    </Box>
                </Td>

            </Tr>
        </>
    );
}

const TableHeaderRowMobile = () => {
    return (
      <Tr>
        <Th>
          <Box layerStyle={"flexCenter"}>
            <Text variant={"smallTableHeaderMobile"}>Asset Name</Text>
          </Box>
        </Th>
        <Th>
          <Box layerStyle={"flexCenter"} >
            <Text variant={"smallTableHeaderMobile"}>Value</Text>
          </Box>
        </Th>
      </Tr>
    );
  };
