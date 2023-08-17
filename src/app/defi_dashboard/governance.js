"use client"
import { Box, Image, Link,  Text, useColorModeValue, useColorMode,Spacer,Button, Flex,Input, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import {List,ListItem,ListIcon} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import NextLink from 'next/link';


const Governance = ({} ) => {

    const { colorMode } = useColorMode();

    //For DeFi Inflow/Outflow Table
    const value1 = "+356,456,560";
    const value2 = "+ 256,456,560";
    const value3 = "+ 46,456,560";
    const value4 = "+ 66,456,560";
    const value5 = "+ 56,456,560";

    //  For Governance Table
    const Status1 = "Active";
    const Status2 = "Active";
    const Status3 = "InActive";
    const [searchByName, setSearchByName] = useState('');
    const searchByNameHandler = (name) => {
        setSearchByName(name);
      }


    return (
        <Box 
             _dark={{ bg: "#191919" }}
             _light={{ bg: " #F0F0F5" }}>
        
            <Box  w="100%"
                 my="20px"
            display={'inline-flex'}
            ml={"10px"}
             >

                <Box
                     mr={"10px"}
                     ml={"20px"}

                    w='49.5%'

                    height={"390px"}

                    display={"flex"}

                    flexDirection={"column"}

                    borderRadius={"6px"}

                    _dark={{

                        bg: "#202020"

                    }}

                    _light={{

                        bg: "#FFFFFF"

                    }}

                   

                >

                    <Flex

                        height={"70px"}
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

                            fontSize={"15px"}

                            fontStyle={"normal"}

                            fontWeight={"400"}

                            lineHeight={"20px"}

                            ml={"20px"}

                            mr={"6px"}

                            paddingTop={"15px"}

                        >

                          DeFi Hot/Active Contracts

                        </Text>

                       <>

                       <Tooltip label='#Frame'

                                padding='14px 8px'

                                fontWeight={400}

                                fontSize={"10px"}>

                               

                                <Image width={"12px"}
                                    height={"12px"}
                                    flexShrink={"0"}
                                    mt={"20px"}
                                    alt=''
                                    src="/images/Frame.svg">
                                </Image>



                            </Tooltip>

                        </>

                        <Spacer />
                        
            <Button 
            variant={"outline"} 
            size={"xs"}
            _light={{ colorScheme: "#F5F5F7", stroke: "#000"}}
            _dark={{ colorScheme: "#191919", stroke: "#333" }}
             strokeWidth={"1px"}
            mt={"15px"}
            mr={"20px"}
            >
            
            <Text
            _light={{ color: "#16171B" }}
            _dark={{ color: "#FFFFFF" }}
            fontSize={"10px"}
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

                                fontSize={"10px"}

                                fontWeight={"400"}

                                lineHeight={"20px"}

                                letterSpacing={"1px"}

                                textTransform={"uppercase"}>

                                <Tr>



                                    <Th>

                                        <Flex>

                                            <Text paddingRight={"5px"}
                                                _light={{ color: "#434347" }}
                                                _dark={{ color: "#A8ADBD" }}
                                                fontSize={"10px"}
                                                fontWeight={"400"}
                                                lineHeight={"20px"}
                                                letterSpacing={"1px"}
                                                textTransform={"uppercase"}>Contract Name</Text>



                                            <>

                                                <Image width={"12px"}
                                                    height={"12px"}
                                                    flexShrink={"0"}
                                                    alt=''
                                                    mt={"5px"}
                                                    src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                                                </Image>
                                            </>

                                        </Flex>

                                    </Th>



                                    <Th>

                                        <Flex >

                                            <Text paddingRight={"5px"}
                                                _light={{ color: "#434347" }}
                                                _dark={{ color: "#A8ADBD" }}
                                                fontSize={"10px"}
                                                fontWeight={"400"}
                                                lineHeight={"20px"}
                                                letterSpacing={"1px"}
                                                textTransform={"uppercase"}>No. of users</Text>

                                            <>

                                                <Image width={"12px"}
                                                    height={"12px"}
                                                    flexShrink={"0"}
                                                    alt=''
                                                    mt={"5px"}
                                                    src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                                                </Image>
                                            </>

                                        </Flex>

                                    </Th>



                                    <Th>

                                        <Flex>

                                            <Text _light={{ color: "#434347" }}
                                                _dark={{ color: "#A8ADBD" }}
                                                fontSize={"10px"}
                                                fontWeight={"400"}
                                                lineHeight={"20px"}
                                                letterSpacing={"1px"}
                                                textTransform={"uppercase"}>No. of Transactions</Text>

                                            <>

                                                <Image width={"12px"}
                                                    height={"12px"}
                                                    flexShrink={"0"}
                                                    alt=''
                                                    mt={"5px"}
                                                    src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
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

                                _dark={{ bgColor: "#202020" }}

                                _light={{ bgColor: "#FFF" }} >

                                <Tr height={"40px"}   _dark={{ color: "#FFFFFF" }}

                                                      _light={{ color: "#16171B" }}>

                                    <Td  >



                                        <Box

                                            display={"flex"}

                                            alignItems={"center"}

                                        >

                                            <>

                                                <Image

                                                    width={5}

                                                    height={5}

                                                    alt='logo'

                                                    src="/icons/Ethereum_sm_icon.svg"

                                                ></Image>

                                            </>



                                            <Text ml="6px"> Venus</Text>

                                        </Box>

                                    </Td>



                                    <Td>

                                        <Box

                                            display={"flex"}

                                            alignItems={"center"}>

                                            <Text

                                                fontSize={"10px"}

                                                fontWeight={"600"}

                                                letterSpacing={"1px"}

                                                ml="6px">

                                                500

                                            </Text>

                                        </Box>

                                    </Td>

                                    <Td>4607</Td>

                                </Tr>



                                <Tr height={"40px"}  _dark={{ color: "#FFFFFF" }}

                                                     _light={{ color: "#16171B" }}>

                                    <Td>

                                        <Box

                                            display={"flex"}

                                            alignItems={"center"}

                                        >

                                            <>

                                                <Image

                                                    width={5}

                                                    height={5}

                                                    alt='logo'

                                                    src="/icons/Tron_sm_icon.svg"

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

                                            ml="6px">

                                            250

                                        </Text>

                                    </Box></Td>

                                    <Td>3523</Td>

                                </Tr>



                                <Tr height={"40px"}  

                                    _dark={{ color: "#FFFFFF" }}

                                    _light={{ color: "#16171B" }}>

                                    <Td >

                                        <Box

                                            display={"flex"}

                                            alignItems={"center"}

                                        >

                                            <>

                                                <Image

                                                    width={5}

                                                    height={5}

                                                    alt='logo'

                                                    src="/icons/BSC_sm_icon.svg"

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

                                            ml="6px">

                                            190

                                        </Text>

                                    </Box></Td>

                                    <Td>507</Td>

                                </Tr>



                                <Tr height={"40px"}   

                                    _dark={{ color: "#FFFFFF" }}

                                    _light={{ color: "#16171B" }}>

                                    <Td >

                                        <Box

                                            display={"flex"}

                                            alignItems={"center"}

                                        >

                                            <>

                                                <Image

                                                    width={5}

                                                    height={5}

                                                    alt='logo'

                                                    src="/icons/Arbitrum_sm_icon.svg"

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

                                            ml="6px">

                                            140

                                        </Text>

                                    </Box></Td>

                                    <Td>1205</Td>

                                </Tr>



                                <Tr height={"40px"}   _dark={{ color: "#FFFFFF" }}

                                                      _light={{ color: "#16171B" }} >

                                    <Td >

                                        <Box

                                            display={"flex"}

                                            alignItems={"center"}

                                        >

                                            <>

                                                <Image

                                                    width={5}

                                                    height={5}

                                                    alt='logo'

                                                    src="/icons/Polygon_sm_icon.svg"

                                                ></Image>

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

                                            ml="6px">

                                           120

                                        </Text>

                                    </Box></Td>

                                    <Td>5207</Td>

                                </Tr>

                                <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td >
                                        <Text   paddingLeft={"40px"}  paddingBottom={"100px"}>
                                            Last Update 3 mins ago</Text></Td>
                                </Tr>





                            </Tbody>



                        </Table>

                    </TableContainer>

                </Box>



                {/* Table divider */}





                <Box

                    w='45%'

                    height={"390px"}

                    display={"flex"}

                    flexDirection={"column"}

                    borderRadius={"6px"}

                    _dark={{

                        bg: "#202020"

                    }}

                    _light={{

                        bg: "#FFFFFF"

                    }}

                    mr="10px"

                >

                    


                    <Flex
            height={"70px"}
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
              fontSize={"15px"}
              fontWeight={"400"}
              lineHeight={"20px"}
              ml={"20px"}
              mr={"6px"}
              paddingTop={"15px"}
            >
              DeFi Inflow/Outflow
            </Text> 
            <Tooltip label="#Frame">
                          <Image width={"12px"}
                                height={"12px"}
                                flexShrink={"0"}
                                mt={"20px"}
                                alt=''
                                src="/images/Frame.svg">
                          </Image>
                        </Tooltip>
            <Spacer />
            
            <Button 
            variant={"outline"} 
            size={"xs"}
            _light={{ colorScheme: "#F5F5F7", stroke: "#000"}}
            _dark={{ colorScheme: "#191919", stroke: "#333" }}
             strokeWidth={"1px"}
            mt={"15px"}
            mr={"20px"}
            >
            
            <Text
            _light={{ color: "#16171B" }}
            _dark={{ color: "#FFFFFF" }}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"10px"}
            >
            View More
            </Text>         
             
            </Button>
           </Flex>


                    <TableContainer>

                        <Table variant='simple'>

                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

                            <Thead

                                _dark={{
                                    color: "#FFFFFF",

                                    bg: "#191919"
                                }}

                                _light={{
                                    color: "#16171B",

                                    bg: "#F5F5F7"
                                }}

                                // fontSize={"10px"}

                                fontWeight={"400"}

                                lineHeight={"20px"}

                                letterSpacing={"1px"}

                                textTransform={"uppercase"}>

                                <Tr>



                                    <Th>

                                        <Flex>

                                            <Text paddingRight={"5px"}
                                                _light={{ color: "#434347" }}
                                                _dark={{ color: "#A8ADBD" }}
                                                fontSize={"10px"}
                                                fontWeight={"400"}
                                                lineHeight={"20px"}
                                                letterSpacing={"1px"}
                                                textTransform={"uppercase"}>Users Address</Text>



                                            <>

                                                <Image width={"12px"}
                                                    height={"12px"}
                                                    flexShrink={"0"}
                                                    alt=''
                                                    mt={"5px"}
                                                    src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                                                </Image>
                                            </>

                                        </Flex>

                                    </Th>



                                    <Th>

                                        <Flex>

                                            <Text 
                                                _light={{ color: "#434347" }}
                                                _dark={{ color: "#A8ADBD" }}
                                                fontSize={"10px"}
                                                fontWeight={"400"}
                                                lineHeight={"20px"}
                                                letterSpacing={"1px"}
                                                textTransform={"uppercase"}>Net Value Flow (7 Days)</Text>

                                            <>

                                                <Image width={"12px"}
                                                    height={"12px"}
                                                    flexShrink={"0"}
                                                    alt=''
                                                    mt={"5px"}
                                                    src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
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

                                _dark={{ bgColor: "#202020" }}

                                _light={{ bgColor: "#FFF" }} >

                                <Tr height={"40px"}>

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

                                                    src="/icons/Ethereum_sm_icon.svg"
                                                ></Image>

                                            </>



                                            <Text ml="6px"> Etherium</Text>

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
                                </Tr>



                                <Tr height={"40px"}>

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

                                                src="/icons/Tron_sm_icon.svg"

                                                ></Image>

                                            </>



                                            <Text ml="6px">  Tron </Text>

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

                                </Tr>



                                <Tr height={"40px"}>

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

                                                    src="/icons/BSC_sm_icon.svg"

                                                ></Image>

                                            </>



                                            <Text ml="6px"> BSC </Text>

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

                                            color={value3 < 0 ? "#EF1E1E" : "#245F00"}

                                        >

                                            {value3 >= 0 ? `+${value3} USD` : `${value3} USD`}

                                        </Text>

                                    </Box></Td>

                                </Tr>



                                <Tr height={"40px"}>

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

                                                    src="/icons/Arbitrum_sm_icon.svg"

                                                ></Image>

                                            </>



                                            <Text ml="6px"> Arbitrum </Text>

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

                                            color={value4 < 0 ? "#EF1E1E" : "#245F00"}

                                        >

                                            {value4 >= 0 ? `+${value4} USD` : `${value4} USD`}

                                        </Text>

                                    </Box></Td>

                                </Tr>



                                <Tr height={"40px"}>

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

                                                    src="/icons/Polygon_sm_icon.svg"

                                                ></Image>

                                            </>



                                            <Text ml="6px"> Polygon</Text>

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

                                            color={value5 < 0 ? "#EF1E1E" : "#245F00"}

                                        >

                                            {value5 >= 0 ? `+${value5} USD` : `${value5} USD`}

                                        </Text>

                                    </Box></Td>

                                </Tr>

 
                                <Tr>
                                    <Td></Td>
                                    
                                    <Td >
                                        <Text   paddingLeft={"100px"}  paddingBottom={"100px"}>
                                            Last Update 3 mins ago</Text></Td>
                                </Tr>



                            </Tbody>



                        </Table>

                    </TableContainer>

                </Box>



            </Box>







            {/* End of varun's code */}
       









            <Box  mr={"20px"}
             ml={"20px"}
             paddingBottom={"60px"}>



        

        {/* Governance Table */}
        
        <Flex justifyContent={"space-between"} padding={"23px 29px 27px"}
        bgColor={useColorModeValue("#FFF", "#202020")} borderRadius={"6px"} >
        <Text
          fontSize="xl"
          fontWeight={"400"}
          color={useColorModeValue("#16171B", "#FFF")}


        >
          Governance | proposals
        </Text>

        <Flex alignItems={"center"}>
       
                  <Box>
                     <Image width={"12px"}
                                    height={"12px"}
                                    flexShrink={"0"}
                                    paddingRight={"5px"}
                                    alt=''
                                    src="/icons/square_icon.svg">
                                </Image></Box>
                                <Box>
                    <Text paddingRight={"10px"}
                          fontSize={"10px"}>Filter Controversial Proposals</Text>
                    </Box>
                    <Box>
                    <Input
                      borderColor={useColorModeValue("#E8E8E8", "#333")}
                      bgColor={useColorModeValue("#F5F5F7", "#191919")}
                      color={useColorModeValue("#16171B", "#A8ADBD")}
                      fontSize={"10px"}
                      fontWeight={400}
                      w="207px"
                      placeholder="Search DeFi"
                      onChange={(e) => { searchByNameHandler(e.target.value) }}
                      />
                  </Box>
                </Flex>

      </Flex>
      <Table variant="simple" key={1} bgColor={"#FFF"} >
        <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
          <Tr>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              alignItems={"center"}
            >
              TITLE
            </Th>
            <Th>
              <Box display={"flex"}
                alignItems={"center"}>
                <Text color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  mr="6px">
                  START
                </Text>

                <>
                  <Image width={2}
                    height={2}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
            </Th>


            <Th>
              <Box display={"flex"}
                alignItems={"center"}>

                <Text color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  mr="6px"
                >
                  END
                </Text>
                <>
                  <Image width={2}
                    height={2}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
            </Th>


            <Th>
            <Box display={"flex"}
                alignItems={"center"}>
                <Text color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  mr="6px">
                  STATE
                </Text>

                <>
                  <Image width={2}
                    height={2}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
            </Th>

            <Th>
            <Box display={"flex"}
                alignItems={"center"}>
                <Text color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  mr="6px">
                  VOTES
                </Text>

                <>
                  <Image width={2}
                    height={2}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
              </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              WINNING CHOICE
            </Th>

            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
                <Flex>
            <Text>CONTROVERSY</Text>  

              <>

<Tooltip label='#Frame'
         fontWeight={400}
         fontSize={"10px"}>

      <Image width={"12px"}
             height={"12px"}
             flexShrink={"0"}
             mt={"3px"}
             paddingRight={"2px"}
             alt=''
             src="/images/Frame.svg">
         </Image>
 </Tooltip>
 </>
 </Flex>

            </Th>


            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              DISCUSSION
            </Th>
          </Tr>
        </Thead>


        <Tbody

fontSize={"10px"}

fontWeight={"400"}

lineHeight={"20px"}

_dark={{ bgColor: "#202020" }}

_light={{ bgColor: "#FFF" }} >

<Tr height={"40px"}   _dark={{ color: "#FFFFFF" }}

                      _light={{ color: "#16171B" }}>

<Td>Gauge Weight for Week of 11th May 2023</Td>
   
   <Td>11 May, 2023, 00:00 </Td>

    <Td>15 May, 2023, 23:50    </Td>

    <Td>
  <List spacing={1} display="flex" alignItems="center">
    <ListIcon as={MdCheckCircle} color={Status1 === 'Active' ? '#62D845' : '#FF4848'} />
    <ListItem>
      <Text>{Status1 === 'Active' ? 'Active' : 'Inactive'}</Text>
    </ListItem>
  </List>
</Td>

  
   
   <Td>3,388,851</Td>

    <Td>CRV+cvxCRV (0x971a…) (28.43% of votes)</Td>
   
   <Td>481759.04</Td>

    <Td>   </Td>

</Tr>

<Tr height={"40px"}   _dark={{ color: "#FFFFFF" }}

                      _light={{ color: "#16171B" }}>

<Td>Gauge Weight for Week of 11th May 2023</Td>
   
   <Td>11 May, 2023, 00:00 </Td>

    <Td>15 May, 2023, 23:50    </Td>

    <Td>
  <List spacing={1} display="flex" alignItems="center">
    <ListIcon as={MdCheckCircle} color={Status2 === 'Active' ? '#62D845' : '#FF4848'} />
    <ListItem>
      <Text>{Status2 === 'Active' ? 'Active' : 'Inactive'}</Text>
    </ListItem>
  </List>
</Td>
   
   <Td>3,388,851</Td>

    <Td>CRV+cvxCRV (0x971a…) (28.43% of votes)</Td>
   
   <Td>481759.04</Td>

    <Td>   </Td>

</Tr>

<Tr height={"40px"}   _dark={{ color: "#FFFFFF" }}

                      _light={{ color: "#16171B" }}>

<Td>Gauge Weight for Week of 11th May 2023</Td>
   
   <Td>11 May, 2023, 00:00 </Td>

    <Td>15 May, 2023, 23:50    </Td>

    <Td>
  <List spacing={1} display="flex" alignItems="center">
    <ListIcon as={MdCheckCircle} color={Status3 === 'Active' ? '#62D845' : '#FF4848'} />
    <ListItem>
      <Text>{Status3 === 'Active' ? 'Active' : 'Inactive'}</Text>
    </ListItem>
  </List>
</Td>
   
   <Td>3,388,851</Td>

    <Td>CRV+cvxCRV (0x971a…) (28.43% of votes)</Td>
   
   <Td>481759.04</Td>

    <Td>   </Td>

</Tr>
</Tbody>
        </Table>
        </Box>


        </Box>
        
    )

}
export default Governance;