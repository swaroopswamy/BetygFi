"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {  Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer} from "@chakra-ui/react";
import GenericSmallTableComponent from "./GenericSmallTable";

function Assetcomposition () {

  const tableName = "DeFi Asset Composition";
  const thread = ["Asset Name","Share","Value"];
  const tableData = [
    ["/images/Venus.svg","Venus","60%","USD 356,456,560"],
    ["/images/Morphoaave.svg","Morpho Aave","40%","USD 256,456,560"],
    ["/images/Compoundv3.svg","Compound V3","13.09%","USD 46,456,560"],
    ["/images/Radiantv2.svg","Radiant V2","15%","USD 66,456,560"],
    ["/icons/fluidtoken_logo.svg","FluidTokens","13.09%","USD 56,456,560"],
];
 
  return (
    <Box
       width={"50%"}  
       bgColor={useColorModeValue("#F0F0F5","#191919")}
       borderColor={useColorModeValue("#F0F0F5","#191919")}
    >
       <GenericSmallTableComponent
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