"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { Text, Box, useColorModeValue, Button, useColorMode, Tr, Th, Td } from "@chakra-ui/react";
import GenericTable from "/src/app/components/table";
import { DefiAssetsSmallTableHeader } from "/src/app/components/pages/defiDashboard/helper";
import LastUpdate from "/src/app/components/lastUpdate";
import { fetchDefiUsersTableData } from "/src/redux/defi_dashboard_data/dataSlice";
import TooltipComp from "/src/app/components/tooltipComp";

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function DefiAssetsSmallTable() {
    const searchParam = useSearchParams();
    const dispatch = useDispatch();
    const router = useRouter();

    const defi = searchParam.get("defi");

    const defiAssetsTableData = useSelector(
        (state) => state?.defiDashboardData?.DefiAssetCompositionTableData
    );
    console.log("assets: ", defiAssetsTableData);

    const getDefiAssetsTableDataHandler = () => {
        const payload = {
            defi: defi,
        };
        dispatch(fetchDefiUsersTableData(payload));
    };

    useEffect(() => {
        getDefiAssetsTableDataHandler();
    }, []);

    return (
        <Box w={{base: "100%", lg: "50%"}} height={"350px"} borderRadius={"6px"} bg={useColorModeValue("#FFFFFF", "#202020")} borderColor={useColorModeValue("#F0F0F5", "#272727")}>
            <Box layerStyle={"spaceBetween"} p={"20px"}>
                <Box layerStyle={"center"} gap={"5px"}> 
                    <Text variant={"smallTableHeader"}>
                        DeFi Asset Composition
                    </Text>
                    <TooltipComp label="Asset composition matrix shows the compositions of the assets of the DeFi in percentage terms and the individual value of the subclass of the assets of the DeFi." />
                </Box>


                <Button
                    variant={'viewMore'}
                    // onClick={() => {
                    //     router.push("/defi_dashboard/defi_users");
                    // }}
                > View More </Button>
            </Box>

            <Box h={"70%"} overflowY={"auto"} overflowX={"hidden"}>
                <GenericTable
                    tableHeader={DefiAssetsSmallTableHeader}
                    tableData={defiAssetsTableData}
                    TableRow={TableRow}
                    TableHeaderRowMobile={TableHeaderRowMobile}
                    ButtonComp={(item) => {
                        return (
                            <Box layerStyle={"flexCenter"}>
                                <Text variant={"h3"}> {item?.item?.user} </Text>
                            </Box>
                        )
                    }}
                    PanelComp={() => {
                        return (
                            <Box>
                                
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
                        <Image
                            height={"24px"}
                            width={"24px"}
                            src={asset.src}
                            alt="logo"
                        >
                        </Image>
                        <Text variant={"h3"}> {item?.assetName} </Text>
                    </Box>
                </Td>

                <Td>
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
                            {item?.share}
                        </Text>
                    </Box>
                </Td>

                <Td>
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
                            {USDollar(item?.value)}
                        </Text>
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
          <Box layerStyle={"flexAlignCenterJustifyCenter"} w="100%">
            <Text variant={"smallTableHeaderMobile"}>Value</Text>
          </Box>
        </Th>
      </Tr>
    );
  };
