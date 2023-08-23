"use client"
import { Box, Image, Link, Text, useColorModeValue, useColorMode, Spacer, Button, Flex, Input, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from 'next/link';


const GovernanceTable = ({ }) => {

    const { colorMode } = useColorMode();

    const router = useRouter();


    

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
            _light={{ bg: " #F0F0F5" }}
            mr={"20px"}
            ml={"30px"}
            paddingBottom={"60px"}
        >
                {/* Governance Table */}

                <Flex justifyContent={"space-between"} padding={"23px 29px 27px"}
                    bgColor={useColorModeValue("#FFF", "#202020")} borderRadius={"6px"} >
                    <Text
                        fontSize="18"
                        fontWeight={"600"}
                        //paddingRight={"15px"}
                        color={useColorModeValue("#16171B", "#FFF")}>
                        Governance 
                    </Text>

                    <Text  marginRight={"410px"}
                           paddingTop={"2px"}
                           fontSize={"16px"}
                           fontWeight={"400"}
                           lineHeight={"20px"}>| proposals</Text>

                    <Flex alignItems={"center"}>

                        <Box>
                            <Image width={"14px"}
                                height={"14px"}
                                flexShrink={"0"}
                                paddingRight={"5px"}
                                alt=''
                                src="/icons/square_icon.svg">
                            </Image></Box>
                        <Box>
                            <Text paddingRight={"10px"}
                                fontSize={"14px"}
                                fontWeight={400}
                                lineHeight={"20px"}>Filter Controversial Proposals</Text>
                        </Box>
                        <Box>
                            <Input
                                borderColor={useColorModeValue("#E8E8E8", "#333")}
                                bgColor={useColorModeValue("#F5F5F7", "#191919")}
                                color={useColorModeValue("#16171B", "#A8ADBD")}
                                fontSize={"12px"}
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
                                fontSize={"14px"}
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
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        letterSpacing={"1px"}
                                        mr="6px">
                                        START
                                    </Text>

                                    <>
                                        <Image width={"6px"}
                                            height={"8px"}
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
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        letterSpacing={"1px"}
                                        mr="6px"
                                    >
                                        END
                                    </Text>
                                    <>
                                        <Image width={"6px"}
                                            height={"8px"}
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
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        letterSpacing={"1px"}
                                        mr="6px">
                                        STATE
                                    </Text>

                                    <>
                                        <Image width={"1.5"}
                                            height={"2"}
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
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        letterSpacing={"1px"}
                                        mr="6px">
                                        VOTES
                                    </Text>

                                    <>
                                        <Image width={"6px"}
                                            height={"8px"}
                                            alt='logo'
                                            src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                                        </Image>
                                    </>
                                </Box>
                            </Th>
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                            >
                                WINNING CHOICE
                            </Th>

                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                            >
                                <Flex>
                                    <Text  fontSize={"14px"}>CONTROVERSY</Text>

                                    {/* <>

                                        <Tooltip label='#Frame'
                                            fontWeight={400}
                                            fontSize={"14px"}>

                                            <Image width={"12px"}
                                                height={"12px"}
                                                flexShrink={"0"}
                                                mt={"3px"}
                                                paddingRight={"2px"}
                                                alt=''
                                                src="/images/Frame.svg">
                                            </Image>
                                        </Tooltip>
                                    </> */}
                                </Flex>

                            </Th>


                            {/* <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                            >
                                DISCUSSION
                            </Th> */}
                        </Tr>
                    </Thead>


                    <Tbody

                        fontSize={"14px"}

                        fontWeight={"400"}

                        lineHeight={"20px"}

                        _dark={{ bgColor: "#202020" }}

                        _light={{ bgColor: "#FFF" }} >

                        <Tr height={"40px"} _dark={{ color: "#FFFFFF" }}

                            _light={{ color: "#16171B" }}>

                            <Td  fontSize={"14px"}>Gauge Weight for Week of 11th May 2023</Td>

                            <Td  fontSize={"14px"}>11 May, 2023, 00:00 </Td>

                            <Td  fontSize={"14px"}>15 May, 2023, 23:50    </Td>

                            <Td  fontSize={"14px"}>
                                <List spacing={1} display="flex" alignItems="center">
                                    <ListIcon as={MdCheckCircle} color={Status1 === 'Active' ? '#62D845' : '#FF4848'} />
                                    <ListItem>
                                        <Text  paddingBottom={"10px"}>{Status1 === 'Active' ? 'Active' : 'Inactive'}</Text>
                                    </ListItem>
                                </List>
                            </Td>



                            <Td  fontSize={"14px"}>3,388,851</Td>

                            <Td  fontSize={"14px"}>CRV+cvxCRV (0x971a…) (28.43% of votes)</Td>

                            <Td  fontSize={"14px"}>481759.04</Td>

                           

                        </Tr>

                        <Tr height={"40px"} _dark={{ color: "#FFFFFF" }}

                            _light={{ color: "#16171B" }}>

                            <Td  fontSize={"14px"}>Gauge Weight for Week of 11th May 2023</Td>

                            <Td  fontSize={"14px"}>11 May, 2023, 00:00 </Td>

                            <Td  fontSize={"14px"}>15 May, 2023, 23:50    </Td>

                            <Td  fontSize={"14px"}>
                                <List spacing={1} display="flex" alignItems="center">
                                    <ListIcon as={MdCheckCircle} color={Status2 === 'Active' ? '#62D845' : '#FF4848'} />
                                    <ListItem>
                                        <Text  paddingBottom={"10px"}>{Status2 === 'Active' ? 'Active' : 'Inactive'}</Text>
                                    </ListItem>
                                </List>
                            </Td>

                            <Td  fontSize={"14px"}>3,388,851</Td>

                            <Td  fontSize={"14px"}>CRV+cvxCRV (0x971a…) (28.43% of votes)</Td>

                            <Td  fontSize={"14px"}>481759.04</Td>

                           

                        </Tr>

                        <Tr height={"40px"} _dark={{ color: "#FFFFFF" }}

                            _light={{ color: "#16171B" }}>

                            <Td  fontSize={"14px"}>Gauge Weight for Week of 11th May 2023</Td>

                            <Td  fontSize={"14px"}>11 May, 2023, 00:00 </Td>

                            <Td  fontSize={"14px"}>15 May, 2023, 23:50    </Td>

                            <Td  fontSize={"14px"}>
                                <List spacing={1} display="flex" alignItems="center">
                                    <ListIcon as={MdCheckCircle} color={Status3 === 'Active' ? '#62D845' : '#FF4848'} />
                                    <ListItem>
                                        <Text  paddingBottom={"10px"}>{Status3 === 'Active' ? 'Active' : 'Inactive'}</Text>
                                    </ListItem>
                                </List>
                            </Td>

                            <Td  fontSize={"14px"}>3,388,851</Td>

                            <Td  fontSize={"14px"}>CRV+cvxCRV (0x971a…) (28.43% of votes)</Td>

                            <Td  fontSize={"14px"}>481759.04</Td>

                            
                        </Tr>
                    </Tbody>
                  
                </Table>
                
            </Box>

    )

}
export default GovernanceTable;