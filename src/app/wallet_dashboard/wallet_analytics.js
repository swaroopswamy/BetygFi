import { Box, Button, Text, Table,Thead,Tr,Th, Td,Tfoot, Flex,Image, TableContainer,Tbody, useColorMode } from '@chakra-ui/react';
import React from 'react'
import AssetAllocationPieChart from './AssetAllocationPieChart';
import AssetTrendSplineChart from './AssetTrendSplineChart';
import PerformanceMultiLineChart from './PerformanceMultiLineChart';
import BlockchainAllocationTreemapChart from './BlockchainAllocationTreemapChart';

const WalletAnalyticsPanel = () => {
    const { colorMode } = useColorMode();
    const value1 = "300" ;
    const value2 = "-300" ;
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




        {/* this is varun part of code */}

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
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
                ml={"20px"}
                mr={"6px"}
                paddingTop={"15px"}
                >
                 Inflow Tokens (30 Days)
                </Text>
                {/* <Image src='/images/t1.png' width={"12px"} height={"12px"} flexShrink={"0"} ml={"5px"} mt={"20px"}></Image> */}
                <>
              <img  width={"12px"}
                    height={"6px"}
                    flexShrink={"0"} 
                    paddingLeft={"5px"}
                    //mt={"20px"}
                    alt='logo'
                    src={colorMode === 'light' ?("/images/icon-i-light.png"):("/images/icon-i-dark.png")}>
              </img>
              </>
                </Flex>

                <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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
            <Text paddingRight={"5px"}>Asset Name</Text>

        <>
              <img  width={10}
                    height={10}
                    alt='log'
                    src={colorMode === 'light' ?("/images/frame-light.png"):("/images/frame-dark.png")}>
              </img>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex>
        <Text paddingRight={"5px"}>Value</Text>
        <>
              <img  width={10}
                    height={10}
                    alt='log'
                    src={colorMode === 'light' ?("/images/frame-light.png"):("/images/frame-dark.png")}>
              </img>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex  paddingLeft={"20px"}>
        <Text >Share</Text>
        <>
              <img  width={10}
                    height={10}
                    alt='log'
                    src={colorMode === 'light' ?("/images/frame-light.png"):("/images/frame-dark.png")}>
              </img>
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
                    <img
                      width={20}
                      height={20}
                      alt='logo'
                      src="/images/t1.png"
                    ></img>
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
                    color={value1 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value1 >= 0 ? `+${value1} USD` : `${value1} USD`} 
                  </Text>
                </Box>
        </Td>
        <Td isNumeric>60%</Td>
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
                       <img
                         width={20}
                         height={20}
                         alt='logo'
                         src="/images/t2.png"
                       ></img>
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
                    color={value1 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value1 >= 0 ? `+${value1} USD` : `${value1} USD`} 
                  </Text>
                </Box></Td>
        <Td isNumeric>30%</Td>
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
                       <img
                         width={20}
                         height={20}
                         alt='logo'
                         src="/images/t3.png"
                       ></img>
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
                    color={value1 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value1 >= 0 ? `+${value1} USD` : `${value1} USD`} 
                  </Text>
                </Box></Td>
        <Td isNumeric>50%</Td>
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
                      <img
                        width={20}
                        height={20}
                        alt='logo'
                        src="/images/t4.png"
                      ></img>
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
                    color={value1 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value1 >= 0 ? `+${value1} USD` : `${value1} USD`} 
                  </Text>
                </Box></Td>
        <Td isNumeric>60%</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td _dark={{color: "#FFFFFF" }}
          _light={{color: "#16171B"}} >
              <Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <>
                      <img
                        width={20}
                        height={20}
                        alt='logo'
                        src="/images/t5.png"
                      ></img>
                    </>
  
         <Text ml="6px"> FluidTokens </Text>
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
                    color={value1 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value1 >= 0 ? `+${value1} USD` : `${value1} USD`} 
                  </Text>
                </Box></Td>
        <Td isNumeric>30%</Td>
      </Tr>


    </Tbody>
   
  </Table>
</TableContainer>
</Box>

       {/* Table divider */}


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
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
                ml={"20px"}
                mr={"6px"}
                paddingTop={"15px"}
                >
                 Outflow Tokens (30 Days)
                </Text>
                {/* <Image src='/images/t1.png' width={"12px"} height={"12px"} flexShrink={"0"} ml={"5px"} mt={"20px"}></Image> */}
                <>
              <img  width={"12px"}
                    height={"6px"}
                    flexShrink={"0"} 
                    paddingLeft={"5px"}
                    //mt={"20px"}
                    alt='logo'
                    src={colorMode === 'light' ?("/images/icon-i-light.png"):("/images/icon-i-dark.png")}>
              </img>
              </>
                </Flex>

                <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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
            <Text paddingRight={"5px"}>Asset Name</Text>

        <>
              <img  width={10}
                    height={10}
                    alt='log'
                    src={colorMode === 'light' ?("/images/frame-light.png"):("/images/frame-dark.png")}>
              </img>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex>
        <Text paddingRight={"5px"}>Value</Text>
        <>
              <img  width={10}
                    height={10}
                    alt='log'
                    src={colorMode === 'light' ?("/images/frame-light.png"):("/images/frame-dark.png")}>
              </img>
              </>
              </Flex>
        </Th>

        <Th>
            <Flex  paddingLeft={"20px"}>
        <Text >Share</Text>
        <>
              <img  width={10}
                    height={10}
                    alt='log'
                    src={colorMode === 'light' ?("/images/frame-light.png"):("/images/frame-dark.png")}>
              </img>
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
                    <img
                      width={20}
                      height={20}
                      alt='logo'
                      src="/images/t1.png"
                    ></img>
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
                    color={value2 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value2 >= 0 ? `+${value2} USD` : `${value2} USD`} 
                  </Text>
                </Box>
        </Td>
        <Td isNumeric>60%</Td>
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
                       <img
                         width={20}
                         height={20}
                         alt='logo'
                         src="/images/t2.png"
                       ></img>
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
                    color={value2 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value2 >= 0 ? `+${value2} USD` : `${value2} USD`} 
                  </Text>
                </Box></Td>
        <Td  isNumeric>30%</Td>
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
                       <img
                         width={20}
                         height={20}
                         alt='logo'
                         src="/images/t3.png"
                       ></img>
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
                    color={value2 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value2 >= 0 ? `+${value2} USD` : `${value2} USD`} 
                  </Text>
                </Box></Td>
        <Td isNumeric>50%</Td>
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
                      <img
                        width={20}
                        height={20}
                        alt='logo'
                        src="/images/t4.png"
                      ></img>
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
                    color={value2 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value2 >= 0 ? `+${value2} USD` : `${value2} USD`} 
                  </Text>
                </Box></Td>
        <Td isNumeric>60%</Td>
      </Tr>

      <Tr  height={"40px"}>
        <Td _dark={{color: "#FFFFFF" }}
          _light={{color: "#16171B"}} >
              <Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <>
                      <img
                        width={20}
                        height={20}
                        alt='logo'
                        src="/images/t5.png"
                      ></img>
                    </>
  
         <Text ml="6px"> FluidTokens </Text>
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
                    color={value2 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value2 >= 0 ? `+${value2} USD` : `${value2} USD`} 
                  </Text>
                </Box></Td>
        <Td isNumeric>30%</Td>
      </Tr>


    </Tbody>
   
  </Table>
</TableContainer>
</Box>

            </Box> 



         {/* End of varun's code */}



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