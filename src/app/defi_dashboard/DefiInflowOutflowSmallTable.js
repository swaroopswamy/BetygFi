"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {  Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer} from "@chakra-ui/react";
import GenericBigTableComponent from "./GenericSmallTable";

function Assetcomposition () {

  const tableName = "DeFi Inflow/Outflow";
  const thread = ["Users Address","Net Value Flow (7 Days)"];
  const tableData = [
    ["/images/Ethdefiusers.svg","Ethereum","+ 356,456,560 USD "],
    ["/images/Trondefiusers.svg","Tron","+ 256,456,560 USD"],
    ["/images/Binancedefiusers.svg","BSC","+ 46,456,560 USD"],
    ["/images/Arbitrumdefiusers.svg","Arbitrum","+ 66,456,560 USD"],
    ["/images/Polygondefiusers.svg","Polygon","+ 56,456,560 USD"],
];
 
  return (
    <Box
       width={"50%"}  
       bgColor={useColorModeValue("#F0F0F5","#191919")}
       borderColor={useColorModeValue("#F0F0F5","#191919")}
    >
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
                                        address={{name:item[1],src:item[0]}}
                                        value={item[2]}
                                    />
                                </>
                            )
                        })}
     </>
  )
}

function TableRow({ key, address, value }) {
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
                              src={address.src}
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
                              {address.name}
                          </Text>
                      </Box>
                  </Flex>
              </Td>

              <Td>
                  <Flex>
                      <Box>
                          <Text
                              _dark={{
                                  color: "#60C000"
                              }}
                              _light={{
                                  color: "#245F00"
                              }}
                              fontSize={"14px"}
                              fontStyle={"normal"}
                              fontWeight={600}
                              lineHeight={"20px"}
                              letterSpacing={"1.4px"}
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