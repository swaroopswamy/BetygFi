"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {  Text, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode, Tooltip, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer} from "@chakra-ui/react";
import GenericBigTableComponent from "./GenericSmallTable";
import GenericSmallTableComponent from "./GenericSmallTable";
import DefiUsers from "./defi_users/page";

function Defiusers () {

  const tableName = "DeFi Users";
  const thread = ["Users Address","Share","Top Tokens"];
  const tableData = [
    ["/images/Ethdefiusers.svg","0xe984…1cc2"," $39,689,191","14.09%","/images/Ethereumlogo.svg","ETH","50.11%","/images/Polygonmaticlogo.svg","MATIC","49.11%"],
    ["/images/Trondefiusers.svg","0xe984…1cc2"," $39,689,191","13.09%","/images/Ethereumlogo.svg","ETH","50.11%","/images/Polygonmaticlogo.svg","MATIC","49.11%"],
    ["/images/Binancedefiusers.svg","0xe984…1cc2"," $39,689,191","15.09%","/images/Ethereumlogo.svg","ETH","50.11%","/images/Polygonmaticlogo.svg","MATIC","49.11%"],
    ["/images/Arbitrumdefiusers.svg","0xe984…1cc2"," $39,689,191","17.09%","/images/Ethereumlogo.svg","ETH","50.11%","/images/Polygonmaticlogo.svg","MATIC","49.11%"],
    ["/images/Polygondefiusers.svg","0xe984…1cc2"," $39,689,191","16.09%","/images/Ethereumlogo.svg","ETH","50.11%","/images/Polygonmaticlogo.svg","MATIC","49.11%"],
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
export default Defiusers;

function RowComponent({ tableData }) {
  return (
      <>
           {tableData.map((item, i) => {
                            return (
                                <>
                                    <TableRow
                                        key={i}
                                        address={{src:item[0],name:item[1],amount:item[2]}}
                                        share={item[3]}
                                        tokens={{src1:item[4],name1:item[5],percentage1:item[6],src2:item[7],name2:item[8],percentage2:item[9]}}
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
                         <Image
                              height={"14px"}
                              width={"8.595px"}
                              src={tokens.src1}
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
                          <Image
                              height={"14px"}
                              width={"16.048px"}
                              src={tokens.src2}
                              alt="logo"
                              ml={"10px"}
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