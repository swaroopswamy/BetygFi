"use client"
import { Box, Image, Link, Text, useColorModeValue, useColorMode, Spacer, Button, Flex, Input, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { List, ListItem, ListIcon,Checkbox } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import isEmpty from "is-empty";
import NextLink from 'next/link';


const GovernanceTable = ({ }) => {
    const tableData = useSelector((state) => state?.defiDashboardData?.GovernanceTableData)
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [searchByName, setSearchByName] = useState('');

    //  For Governance Table
    const Status1 = "Active";
    const Status2 = "Active";
    const Status3 = "InActive";
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

                <Flex
                    padding={"25px 29px 27px"}
                    bgColor={useColorModeValue("#FFF", "#202020")} borderRadius={"6px"} >
                    <Text
                        fontSize={"18px"}
                        fontWeight={600}
                        mr={"5px"}
                        color={useColorModeValue("#16171B", "#FFF")}>
                        Governance 
                    </Text>

                    <Text  
                           paddingTop={"5px"}
                           fontSize={"16px"}
                           fontWeight={400}
                           lineHeight={"20px"}>|  Proposals</Text>

                         <Spacer />
                        {/* <Box>
                        <Checkbox 
                            width={"14px"}
                                height={"14px"}
                                flexShrink={"0"}
                                mt={"12px"}
                                paddingRight={"20px"}
                                alt=''
                                src="/icons/square_icon.svg">
                        </Checkbox>
                        </Box>
                        <Box>
                            <Text paddingRight={"10px"}
                                fontSize={"14px"}
                                mt={"8px"}
                                fontWeight={400}
                                lineHeight={"20px"}>Filter Controversial Proposals</Text>
                        </Box> */}
                        <Box>
                            <Input
                                borderColor={useColorModeValue("#E8E8E8", "#333")}
                                bgColor={useColorModeValue("#F5F5F7", "#191919")}
                                color={useColorModeValue("#16171B", "#A8ADBD")}
                                fontSize={"12px"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                letterSpacing={"1.2px"}
                                textTransform={"uppercase"}
                                w="207px"
                                placeholder="Search Difi"
                                onChange={(e) => { searchByNameHandler(e.target.value) }}
                            />
                        </Box>

                </Flex>
                <Table variant="simple" key={1} bgColor={"#FFF"} >
                    <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
                        <Tr>
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"14px"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                letterSpacing={"1.4px"}
                                textTransform={"capitalize"}
                            >
                                Title
                            </Th>
                            <Th>
                                <Box display={"flex"}
                                    alignItems={"center"}>
                                    <Text color={useColorModeValue("#434347", "#A8ADBD")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}
                                        mr="6px">
                                        Start
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
                                    alignItems={"center"}
                                    >
                                    <Text color={useColorModeValue("#434347", "#A8ADBD")}
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        letterSpacing={"1.4px"}
                                        mr="6px"
                                        textTransform={"capitalize"}
                                    >
                                        End
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
                                        fontWeight={400}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}
                                        mr="6px">
                                        State
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
                                        fontWeight={400}
                                        letterSpacing={"1.4px"}
                                        textTransform={"capitalize"}
                                        mr="6px">
                                        Votes
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
                                fontWeight={400}
                                letterSpacing={"1.4px"}
                                textTransform={"capitalize"}
                            >
                                Winning Choice
                            </Th>
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                            >
                                <Flex>
                                    <Text
                                     color={useColorModeValue("#434347", "#A8ADBD")}
                                     fontSize={"14px"}
                                     fontWeight={400}
                                     letterSpacing={"1.4px"}
                                     textTransform={"capitalize"}
                                     >
                                        Controversy</Text>

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
        {/* {tableData.GovernanceTableData.isError && (
          <>
            <Tr>
              <Td
                color={useColorModeValue("#16171B", "#FFF")}
                fontSize={"20px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
                p="20px"
              >
                No data available
              </Td>
            </Tr>
          </>
        )}
        {tableData.GovernanceTableData.isLoading && (
          <>
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </>
        )} */}

                        <Tr 
                        height={"40px"} _dark={{ color: "#FFFFFF" }}
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
