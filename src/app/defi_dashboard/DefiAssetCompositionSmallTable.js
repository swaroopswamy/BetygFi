"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {  Text, Td, Tr, Flex, Box, useColorModeValue, Image, Spacer, Button, useColorMode, colorMode} from "@chakra-ui/react";
import GenericBigTableComponent from "./GenericSmallTable";

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
                                        asset={{name:item[1],src:item[0]}}
                                        share={item[2]}
                                        value={item[3]}
                                    />
                                </>
                            )
                        })}

<<<<<<< HEAD
      </>
  );
=======
    return (
        <>
            <Box
                width={'50%'}
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}
                _dark={{ bg: "#202020" }}
                _light={{ bg: "#FFFFFF" }}                
            >
                <Flex
                    height={"50px"}
                    borderRadius={"6px"}
                    _dark={{
                        bg: "#202020",
                        color: "#FFFFFF"
                    }}
                    _light={{
                        bg: "#FFFFFF",
                        color: "#16171B"
                    }} >
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"18px"}
                        fontWeight={"600"}
                        lineHeight={"20px"}
                        ml={"22px"}
                        paddingTop={"15px"}
                    >
                        DeFi Asset Composition
                    </Text>
                    <Tooltip label="#Frame">
                        <Image width={"12px"}
                            height={"12px"}
                            flexShrink={"0"}
                            mt={"20px"}
                            ml={"5px"}
                            alt=''
                            src="/images/Frame.svg">
                        </Image>
                    </Tooltip>
                    <Spacer />
                    <Button
                        variant={"outline"}
                        size={"xs"}
                        _light={{ colorScheme: "#F5F5F7", stroke: "#000" }}
                        _dark={{ colorScheme: "#191919", stroke: "#333" }}
                        strokeWidth={"1px"}
                        mt={"15px"}
                        mr={"20px"}
                        onClick={() => {
                            router.push(`/defi_dashboard/asset_composition`)
                        }}
                    >
                        <Text
                            _light={{ color: "#16171B" }}
                            _dark={{ color: "#FFFFFF" }}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            lineHeight={"10px"}
                        >
                            View More
                        </Text>
                    </Button>
                </Flex>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead
                            _dark={{
                                color: "#FFFFFF",
                                bg: "#191919"
                            }}
                            _light={{
                                color: "#16171B",
                                bg: "#F5F5F7"
                            }}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            textTransform={"uppercase"}>
                            <Tr>

                                <Th>
                                    <Flex>
                                        <Text
                                            _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                        >
                                            Asset Name
                                        </Text>
                                        <Image src={useColorModeValue("/images/Definame(light).svg", "/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
                                    </Flex>
                                </Th>

                                <Th>
                                    <Flex >
                                        <Text _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}>
                                            Share
                                        </Text>
                                        <Image src={useColorModeValue("/images/Definame(light).svg", "/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
                                    </Flex>
                                </Th>

                                <Th>
                                    <Flex>
                                        <Text _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                        >
                                            Value
                                        </Text>
                                        <Image src={useColorModeValue("/images/Definame(light).svg", "/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
                                    </Flex>
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody
                            fontSize={"14px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            _dark={{ bgColor: "#202020" }}
                            _light={{ bgColor: "#FFF" }} >
                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }}
                                >

                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Venus.svg"
                                            ></Image>
                                        </>

                                        <Text ml="6px"  fontSize={"14px"}> Venus</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Text
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml="6px"
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            60%
                                        </Text>
                                    </Box>
                                </Td>
                                <Td  fontSize={"14px"}>USD 356,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td
                                    _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Morphoaave.svg"
                                            ></Image>
                                        </>

                                        <Text ml="6px"  fontSize={"14px"}>  Morpho Aave </Text>
                                    </Box>
                                </Td>
                                <Td><Box
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        40%
                                    </Text>
                                </Box></Td>
                                <Td  fontSize={"14px"}>USD 256,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td
                                    _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Compoundv3.svg"
                                            ></Image>
                                        </>

                                        <Text ml="6px"  fontSize={"14px"}> Compound V3 </Text>
                                    </Box></Td>
                                <Td><Box
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        13.09%
                                    </Text>
                                </Box></Td>
                                <Td  fontSize={"14px"}>USD 46,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td
                                    _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Radiantv2.svg"
                                            ></Image>
                                        </>

                                        <Text ml="6px"  fontSize={"14px"}>  Radiant V2 </Text>
                                    </Box></Td>
                                <Td><Box
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        15%
                                    </Text>
                                </Box></Td>
                                <Td  fontSize={"14px"}>USD 66,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/icons/fluidtoken_logo.svg"
                                            ></Image>
                                            {/* {/* <Image src={colorMode === 'light' ? ("/images/F(light).svg") : ("/images/F(dark).svg")} ml={"-13px"} alt=''></Image> */}
                                        </>

                                        <Text ml="10px"  fontSize={"14px"}> FluidTokens </Text>
                                    </Box></Td>
                                <Td><Box
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        13.09%
                                    </Text>
                                </Box></Td>
                                <Td  fontSize={"14px"}>USD 56,456,560</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Box
                        display={"flex"}
                        justifyContent={"end"}
                        my={"10px"}
                        mr="25px"
                    >
                        <Flex>
                            <Text
                                _light={{ color: "#A8ADBD" }}
                                _dark={{ color: "#A8ADBD" }}
                                fontSize={"12px"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                Last Update
                            </Text>
                            <Text
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                                fontSize={"12px"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                ml={"3px"}
                            >
                                3 mins ago
                            </Text>
                        </Flex>
                    </Box>
                </TableContainer>
            </Box>

        </>
    )
>>>>>>> 7a38f978b1ed8e2a0bed13766df741e9455403f4
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