"use client";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {  Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Skeleton} from "@chakra-ui/react";
import GenericSmallTableComponent from "./GenericSmallTable";

function Assetcomposition () {

  const tableName = "DeFi Asset Composition";
  const thread = ["Asset Name","Share","Value"];
  const Definitions= "DeFi Asset Composition: Asset composition matrix shows the distribution of value in different assets. "
  const Tablepath = "/defi_dashboard/asset_composition"
  

    const AssetcompositionTableData = useSelector(
        (state) => state?.defiDashboardData?.DefiHotContractsTableData
    )
 
  return (
    <Box
       width={"50%"}  
       bgColor={useColorModeValue("#F0F0F5","#191919")}
       borderColor={useColorModeValue("#F0F0F5","#191919")}
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
    console.log(tableData);
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
          {tableData?.isSuccess && tableData?.data?.data?.map((item, i) => {
                            return (
                                <>
                                    <TableRow
                                        key={i}
                                        asset={{name:item[1],src:item[0]}}
                                        share={item[2]}
                                        value={item[3]}
                                    />
                                </>
                            )
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
                              {share}
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