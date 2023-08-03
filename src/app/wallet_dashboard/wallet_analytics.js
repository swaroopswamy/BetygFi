import { Box, Button, Flex, Image, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, extendTheme, useColorMode, colorMode, Tooltip } from '@chakra-ui/react';
import React from 'react'
import AssetAllocationPieChart from './AssetAllocationPieChart';
import AssetTrendSplineChart from './AssetTrendSplineChart';
import PerformanceMultiLineChart from './PerformanceMultiLineChart';
import BlockchainAllocationTreemapChart from './BlockchainAllocationTreemapChart';

const WalletAnalyticsPanel = () => {
    const { colorMode } = useColorMode();
  
    return (
        <>
            <Box
                display={'inline-flex'}
                w="100%"
                my="10px"
            >
                <Box
                    w='50%'
                    display={"flex"}
                    flexDirection={"column"}
                    borderRadius={"6px"}
                    _dark={{
                        bg: "#202020",
                        border: "1px solid #272727"
                    }}
                    _light={{
                        bg: "#FFFFFF",
                        border: "1px solid #ADADAD"
                    }}
                    mr="10px"
                >
                    <Box
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        p="22px 25px"
                        paddingBottom={"0px"}
                    >
                        <Text
                            fontSize={"15px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            _dark={{ color: "#FFF" }}
                            _light={{ color: "#212121" }}
                        >
                            Blockchain Allocation
                        </Text>
                        <Button
                            fontSize={"10px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            _dark={{ color: "#FFF", bgColor: "#191919", border: "1px solid #979AA5" }}
                            _light={{ color: "#16171B", bgColor: "#979AA5", border: "1px solid #787878" }}
                            padding={"7px 11px"}
                        >
                            View More
                        </Button>
                    </Box>
                    <Box>
                        <BlockchainAllocationTreemapChart />
                    </Box>
                </Box>
                <Box
                    w='50%'
                    display={"flex"}
                    flexDirection={"column"}
                    borderRadius={"6px"}
                    _dark={{
                        bg: "#202020",
                        border: "1px solid #272727"
                    }}
                    _light={{
                        bg: "#FFFFFF",
                        border: "1px solid #ADADAD"
                    }}
                    ml="10px"
                >
                    <Box
                        display="flex"
                        p="22px 25px"
                    >
                        <Text
                            fontSize={"15px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            _dark={{ color: "#FFF" }}
                            _light={{ color: "#212121" }}
                        >
                            Assets Allocation
                        </Text>
                    </Box>
                    <Box>
                        <AssetAllocationPieChart />
                    </Box>
                </Box>
            </Box>

            <Box
            display={'inline-flex'}
            w="100%"
            my="10px"
            >
            <Box
             w='50%'
            height={"367px"}
             display={"flex"}
             flexDirection={"column"}
             borderRadius={"6px"}
             _dark={{
                 bg: "#202020",
                 border: "1px solid #272727"
             }}
             _light={{
                 bg: "#FFFFFF",
                 border: "1px solid #ADADAD"
             }}
             mr="10px"
             >
                <Flex 
                height={"50px"}
            _dark={{
                 bg: "#202020",
                 color: "#FFFFFF"
             }}
             _light={{
                 bg: "#FFFFFF",
                 color: "#16171B"
             }} >
                <Text
                fontSize={"15px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                ml={"20px"}
                mr={"6px"}
                paddingTop={"15px"}
                >
                 Protocol Allocation
                </Text>
                <>
                <Tooltip label="#Frame">
              <Image width={"12px"}
                    height={"12px"}
                    flexShrink={"0"} 
                    mt={"20px"}
                    alt=''
                    src="/images/Frame.svg">
              </Image>
              </Tooltip>
              </>
                </Flex>

                <TableContainer>
  <Table variant='simple'>
    <Thead 
         _dark={{color: "#FFFFFF",
                  bg:"#191919" }}
        _light={{color: "#16171B",
                  bg:"#F5F5F7"}} 
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}>
      <Tr>

        <Th>
            <Flex>
            <Text _light={{color:"#434347"}}
                  _dark={{color:"#A8ADBD"}}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  letterSpacing={"1px"}
                  textTransform={"uppercase"}>
                DeFi Name</Text>

        <>
              <Image  width={"12px"}
                    height={"12px"}
                    flexShrink={"0"}
                    alt=''
                    mt={"5px"}
                    src={colorMode === 'light' ?("/images/Definame(light).svg"):("/images/Definame(black).svg")}>
              </Image>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex >
            <Text _light={{color:"#434347"}}
                  _dark={{color:"#A8ADBD"}}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  letterSpacing={"1px"}
                  textTransform={"uppercase"}>
                    Share</Text>
        <>
              <Image  width={"12px"}
                    height={"12px"}
                    flexShrink={"0"}
                    alt=''
                    mt={"5px"}
                    src={colorMode === 'light' ?("/images/Definame(light).svg"):("/images/Definame(black).svg")}>
              </Image>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex>
            <Text _light={{color:"#434347"}}
                  _dark={{color:"#A8ADBD"}}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  letterSpacing={"1px"}
                  textTransform={"uppercase"}>
                    Value</Text>
        <>
              <Image width={"12px"}
                    height={"12px"}
                    flexShrink={"0"}
                    alt=''
                    mt={"5px"}
                    src={colorMode === 'light' ?("/images/Definame(light).svg"):("/images/Definame(black).svg")}>
              </Image>
              </>
              </Flex>
        </Th>
      </Tr>
    </Thead>

    <Tbody 
       fontSize={"10px"}
       fontWeight={"400"}
       lineHeight={"20px"}
       _dark={{bgColor: "#202020" }}
        _light={{bgColor: "#FFF"}} >
      <Tr  height={"40px"}>
        <Td _dark={{color: "#FFFFFF" }}
        _light={{color: "#16171B"}} 
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

       <Text ml="6px"> Venus</Text>    
            </Box>
            </Td>

        <Td>
        <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     60% 
                  </Text>
                </Box>
        </Td>
        <Td>USD 356,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td 
           _dark={{color: "#FFFFFF" }}
           _light={{color: "#16171B"}} >
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
   
          <Text ml="6px">  Morpho Aave </Text>    
            </Box>
          </Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     40%
                  </Text>
                </Box></Td>
        <Td>USD 256,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td 
           _dark={{color: "#FFFFFF" }}
           _light={{color: "#16171B"}} >
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
   
          <Text ml="6px"> Compound V3 </Text>
          </Box></Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     13.09%
                  </Text>
                </Box></Td>
        <Td>USD 46,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td 
          _dark={{color: "#FFFFFF" }}
          _light={{color: "#16171B"}} >
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
  
         <Text ml="6px">  Radiant V2 </Text>
         </Box></Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     15%
                  </Text>
                </Box></Td>
        <Td>USD 66,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td _dark={{color: "#FFFFFF" }}
          _light={{color: "#16171B"}} >
              <Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <>
                      <Image
                        width={5}
                        height={5}
                        alt='logo'
                        src="/images/Fluidtokens.svg"
                      ></Image>
                      <Image src={colorMode === 'light' ? ("/images/F(light).svg"):("/images/F(dark).svg")} ml={"-13px"}></Image>
                    </>
  
         <Text ml="10px"> FluidTokens </Text>
         </Box></Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     13.09%
                  </Text>
                </Box></Td>
        <Td>USD 56,456,560</Td>
      </Tr>


    </Tbody>
   
  </Table>
</TableContainer>
</Box>


            <Box
             w='50%'
            height={"367px"}
             display={"flex"}
             flexDirection={"column"}
             borderRadius={"6px"}
             _dark={{
                 bg: "#202020",
                 border: "1px solid #272727"
             }}
             _light={{
                 bg: "#FFFFFF",
                 border: "1px solid #ADADAD"
             }}
             mr="10px"
             >
                <Flex 
                height={"50px"}
            _dark={{
                 bg: "#202020",
                 color: "#FFFFFF"
             }}
             _light={{
                 bg: "#FFFFFF",
                 color: "#16171B"
             }} >
                <Text
                fontSize={"15px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                ml={"20px"}
                mr={"6px"}
                paddingTop={"15px"}
                >
                 Interaction with Known Entities
                </Text>
                <>
                <Tooltip label="#Frame">
              <Image width={"12px"}
                    height={"12px"}
                    flexShrink={"0"} 
                    mt={"20px"}
                    alt=''
                    src="/images/Frame.svg">
              </Image>
              </Tooltip>
              </>
                </Flex>

                <TableContainer>
  <Table variant='simple'>
    <Thead 
         _dark={{color: "#FFFFFF",
                  bg:"#191919" }}
        _light={{color: "#16171B",
                  bg:"#F5F5F7"}} 
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}>
      <Tr>

        <Th>
            <Flex>
            <Text _light={{color:"#434347"}}
                  _dark={{color:"#A8ADBD"}}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  letterSpacing={"1px"}
                  textTransform={"uppercase"}>
                DeFi Name</Text>

        <>
              <Image  width={"12px"}
                    height={"12px"}
                    flexShrink={"0"}
                    alt=''
                    mt={"5px"}
                    src={colorMode === 'light' ?("/images/Definame(light).svg"):("/images/Definame(black).svg")}>
              </Image>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex >
            <Text _light={{color:"#434347"}}
                  _dark={{color:"#A8ADBD"}}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  letterSpacing={"1px"}
                  textTransform={"uppercase"}>
                    Share</Text>
        <>
              <Image  width={"12px"}
                    height={"12px"}
                    flexShrink={"0"}
                    alt=''
                    mt={"5px"}
                    src={colorMode === 'light' ?("/images/Definame(light).svg"):("/images/Definame(black).svg")}>
              </Image>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex>
            <Text _light={{color:"#434347"}}
                  _dark={{color:"#A8ADBD"}}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  letterSpacing={"1px"}
                  textTransform={"uppercase"}>
                    Value</Text>
        <>
              <Image width={"12px"}
                    height={"12px"}
                    flexShrink={"0"}
                    alt=''
                    mt={"5px"}
                    src={colorMode === 'light' ?("/images/Definame(light).svg"):("/images/Definame(black).svg")}>
              </Image>
              </>
              </Flex>
        </Th>
      </Tr>
    </Thead>

    <Tbody 
       fontSize={"10px"}
       fontWeight={"400"}
       lineHeight={"20px"}
       _dark={{bgColor: "#202020" }}
        _light={{bgColor: "#FFF"}} >
      <Tr  height={"40px"}>
        <Td _dark={{color: "#FFFFFF" }}
        _light={{color: "#16171B"}} 
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

       <Text ml="6px"> Venus</Text>    
            </Box>
            </Td>

        <Td>
        <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     60% 
                  </Text>
                </Box>
        </Td>
        <Td>USD 356,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td 
           _dark={{color: "#FFFFFF" }}
           _light={{color: "#16171B"}} >
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
   
          <Text ml="6px">  Morpho Aave </Text>    
            </Box>
          </Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     40%
                  </Text>
                </Box></Td>
        <Td>USD 256,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td 
           _dark={{color: "#FFFFFF" }}
           _light={{color: "#16171B"}} >
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
   
          <Text ml="6px"> Compound V3 </Text>
          </Box></Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     13.09%
                  </Text>
                </Box></Td>
        <Td>USD 46,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td 
          _dark={{color: "#FFFFFF" }}
          _light={{color: "#16171B"}} >
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
  
         <Text ml="6px">  Radiant V2 </Text>
         </Box></Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     15%
                  </Text>
                </Box></Td>
        <Td>USD 66,456,560</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td _dark={{color: "#FFFFFF" }}
          _light={{color: "#16171B"}} >
              <Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <>
                      <Image
                        width={5}
                        height={5}
                        alt='logo'
                        src="/images/Fluidtokens.svg"
                      ></Image>
                      <Image src={colorMode === 'light' ? ("/images/F(light).svg"):("/images/F(dark).svg")} ml={"-13px"}></Image>
                    </>
  
         <Text ml="10px"> FluidTokens </Text>
         </Box></Td>
        <Td><Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                  >
                     13.09%
                  </Text>
                </Box></Td>
        <Td>USD 56,456,560</Td>
      </Tr>


    </Tbody>
   
  </Table>
</TableContainer>
</Box>


            </Box>

            <Box
                my="10px"
                w='100%'
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}
                _dark={{
                    bg: "#202020",
                    border: "1px solid #272727"
                }}
                _light={{
                    bg: "#FFFFFF",
                    border: "1px solid #ADADAD"
                }}
                p="25px"
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Text
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        _dark={{ color: "#FFF" }}
                        _light={{ color: "#212121" }}
                    >
                        Asset Trend
                    </Text>
                </Box>
                <Box>
                    <AssetTrendSplineChart />
                </Box>
            </Box>
            <Box
                my="10px"
                w='100%'
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}
                _dark={{
                    bg: "#202020",
                    border: "1px solid #272727"
                }}
                _light={{
                    bg: "#FFFFFF",
                    border: "1px solid #ADADAD"
                }}
                p="25px"
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Text
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        _dark={{ color: "#FFF" }}
                        _light={{ color: "#212121" }}
                    >
                        Performance
                    </Text>
                </Box>
                <Box>
                    <PerformanceMultiLineChart />
                </Box>
            </Box>
        </>
    );
}

export default WalletAnalyticsPanel;