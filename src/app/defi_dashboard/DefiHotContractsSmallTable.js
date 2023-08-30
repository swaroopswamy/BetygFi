"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {  Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer} from "@chakra-ui/react";
import GenericBigTableComponent from "./GenericSmallTable";
import GenericSmallTableComponent from "./GenericSmallTable";

function Defihotcontracts () {

  const tableName = "DeFi Hot/Active Contracts";
  const thread = ["Contract Name","No. of users","No. of Transactions"];
  const tableData = [
    ["/images/Venus.svg","Venus","500","4607"],
    ["/images/Morphoaave.svg","Morpho Aave","250","3523"],
    ["/images/Compoundv3.svg","Compound V3","190","507"],
    ["/images/Radiantv2.svg","Radiant V2","140","1205"],
    ["/icons/fluidtoken_logo.svg","FluidTokens","120","5207"],
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
export default Defihotcontracts;

function RowComponent({ tableData }) {
  return (
      <>
           {tableData.map((item, i) => {
                            return (
                                <>
                                    <TableRow
                                        key={i}
                                        contract={{name:item[1],src:item[0]}}
                                        users={item[2]}
                                        transactions={item[3]}
                                    />
                                </>
                            )
                        })}
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