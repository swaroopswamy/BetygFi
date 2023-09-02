"use client"
import { Box, Image, Link, Text, useColorModeValue, useColorMode, Spacer, Button, Flex, Input, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { List, ListItem, ListIcon,Checkbox } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import isEmpty from "is-empty";
import NextLink from 'next/link';
const axios = require('axios');


const GovernanceTable = ({ }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [searchByName, setSearchByName] = useState('');
  const [governanceTableData, setGovernanceTableData] = useState({
    data: null,
    isSuccess: false,
    isError: false,
  });

  useEffect(() => {
    let response = axios.get('https://governance.aave.com/categories.json')
        .then(function (response) {
            setGovernanceTableData({
                data: response.data['category_list']['categories'],
                isSuccess: true,
                isError: false
            });
        })
        .catch(function (error) {
            setGovernanceTableData({
                data: null,
                isSuccess: false,
                isError: true
            });
            console.log(error);
        });
    }, []);

    console.log("gtd: ", governanceTableData.data, governanceTableData.isError);

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
                        {/* <Box>
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
                        </Box> */}

                </Flex>
                <Table variant="simple" key={1} bgColor={"#FFF"} >
                    <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
                        <Tr>
                            {/* <Th
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
                                        Controversy
                                    </Text>
                                </Flex>

                            </Th> */}

                            {['Title', 'Description', 'Topics', ' '].map((item, i) => {
                                return (
                                    <>
                                        <Th
                                            key={i}
                                            color={useColorModeValue("#434347", "#A8ADBD")}
                                            fontSize={"14px"}
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1.4px"}
                                            textTransform={"capitalize"}
                                        >
                                            {item}
                                        </Th>
                                    </>
                                );
                            })}


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
                    _light={{ bgColor: "#FFF" }}
                    >

                    {governanceTableData.isError && (
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

                    {governanceTableData.isLoading && (
                    <>
                        <SkeletonRow />
                        <SkeletonRow />
                        <SkeletonRow />
                    </>
                    )}

                    {governanceTableData.isSuccess && governanceTableData?.data?.map((item, i) => {
                        return (
                        <>
                            <Tr 
                                height={"40px"}
                                _dark={{ color: "#FFFFFF" }}
                                _light={{ color: "#16171B" }}
                            >
                                <Td  fontSize={"14px"}>{item.name}</Td>
                                <Td  fontSize={"14px"}>{item.description_text}</Td>
                                <Td  fontSize={"14px"}>{item.topics.length}</Td>
                                <Td  fontSize={"14px"}>
                                    <Button
                                        size={"sm"}
                                        onClick={() => {
                                            router.push(`https://governance.aave.com${item.topic_url}`)
                                        }}
                                    >
                                        View More
                                    </Button>
                                </Td>
                            </Tr>
                        </>
                    );
                    })}

                    </Tbody>
                  
                </Table>
                
            </Box>

    )

}
export default GovernanceTable;
