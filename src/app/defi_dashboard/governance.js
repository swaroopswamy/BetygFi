"use client"
import { Box, Image, Link, Text, useColorModeValue, useColorMode, Spacer, Button, Flex, Input, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Skeleton, Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from "@chakra-ui/react";
import { List, ListItem, ListIcon, Checkbox } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import isEmpty from "is-empty";
import NextLink from 'next/link';
import categoriesFile from './categories.json';
const axios = require('axios');

const GovernanceTable = ({ }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();
    const [searchByName, setSearchByName] = useState('');
    const [governanceTableData, setGovernanceTableData] = useState({
        data: categoriesFile['category_list']['categories'],
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
                    data: categoriesFile['category_list']['categories'],
                    isSuccess: false,
                    isError: true
                });
                console.log(error);
            });
    }, []);


    //  For Governance Table
    const Status1 = "Active";
    const Status2 = "Active";
    const Status3 = "InActive";
    const searchByNameHandler = (name) => {
        setSearchByName(name);
    }


    return (
        <>
            <Box display={{ base: "none", md: "block" }}
                _dark={{ bg: "#191919" }}
                _light={{ bg: " #F0F0F5" }}
                mr={"20px"}
                ml={"30px"}
                paddingBottom={"60px"}
                borderRadius={"6px"}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
                    padding={"25px 29px 27px"}
                    bgColor={useColorModeValue("#FFF", "#202020")}
                //borderRadius={"6px"}
                >
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
                        lineHeight={"20px"}>|  Proposals
                    </Text>
                    <Tooltip
                        bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                        padding="4px 8px"
                        fontWeight={400}
                        fontSize={"10px"}
                        label="Governance in DeFi is to ensure the integrity and stability of the decentralized financial system. DeFi governance allows for greater participation, accountability, and efficiency. Proposals form the basis of the decentralized/open/ transparent nature of DeFi’s. Proposals when voted become rules, that are programmed for the benefit of governance of DeFi’s."

                    >
                        <Image
                            src={"/icons/info_sm_icon.svg"}
                            width={3}
                            height={3}
                            alt='info-icon'
                            style={{ marginLeft: "8px", marginTop: "8px" }}
                        ></Image>
                    </Tooltip>

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

                </Box>
                <Table
                    variant="simple"
                    key={1}
                >
                    <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}
                    >
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
                                            _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
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

                        {/* {governanceTableData.isError && (
                        <>
                            <Tr>
                                <Td
                                    _dark={{ color: "#FFF" }}
                                    _light={{ color: "#16171B" }}
                                    fontSize={"20px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    p="20px"
                                    colSpan={4}
                                    textAlign={"center"}
                                >
                                    No data available
                                </Td>
                            </Tr>
                        </>
                    )} */}

                        {governanceTableData.isLoading && (
                            <>
                                <SkeletonRow />
                                <SkeletonRow />
                                <SkeletonRow />
                            </>
                        )}

                        {governanceTableData?.data?.map((item, i) => {
                            return (
                                <>
                                    <Tr
                                        height={"40px"}
                                        _dark={{ color: "#FFFFFF" }}
                                        _light={{ color: "#16171B" }}
                                    >
                                        <Td fontSize={"14px"}>{item.name}</Td>
                                        <Td fontSize={"14px"}>{item.description_text}</Td>
                                        <Td fontSize={"14px"}>{item.topics.length}</Td>
                                        <Td fontSize={"14px"}>
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

            <Box display={{ base: "block", md: "none" }}
                w={"90%"}
                _dark={{ bg: "#191919" }}
                _light={{ bg: " #F0F0F5" }}
                mr={"20px"}
                ml={"30px"}
                mb={"30px"}
                paddingBottom={"60px"}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
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
                        lineHeight={"20px"}>|  Proposals
                    </Text>
                    <Tooltip
                        bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                        padding="4px 8px"
                        fontWeight={400}
                        fontSize={"10px"}
                        label="Governance in DeFi is to ensure the integrity and stability of the decentralized financial system. DeFi governance allows for greater participation, accountability, and efficiency. Proposals form the basis of the decentralized/open/ transparent nature of DeFi’s. Proposals when voted become rules, that are programmed for the benefit of governance of DeFi’s."

                    >
                        <Image
                            src={"/icons/info_sm_icon.svg"}
                            width={3}
                            height={3}
                            alt='info-icon'
                            style={{ marginLeft: "8px", marginTop: "8px" }}
                        ></Image>
                    </Tooltip>

                </Box>
                <Table variant="unstyled" key={1} bgColor={"#FFF"}
                    display={{ base: "table", md: "none" }}
                    width={"100%"} >
                    <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
                        <Tr>
                            {/* {['Title', 'Topics'].map((item, i) => {
                                return (
                                    <>
                                        <Th
                                            colSpan={1}
                                            key={i}
                                            _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
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
                            })} */}
                            <Th
                                display={"flex"}
                                flexDirection={"row"}
                                _light={{ color: "#434347" }}
                                _dark={{ color: "#A8ADBD" }}
                                fontSize={"14px"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                letterSpacing={"1.4px"}
                                textTransform={"capitalize"}
                                justifyContent={"space-between"}>
                                <Text
                                    justifyContent={"space-between"}>Title</Text>

                            </Th>

                        </Tr>
                    </Thead>


                    <Tbody
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        _dark={{ bgColor: "#202020" }}
                        _light={{ bgColor: "#FFF" }}
                    >

                        {governanceTableData.isLoading && (
                            <>
                                <MobileSkeletonRow />
                                <MobileSkeletonRow />
                                <MobileSkeletonRow />
                            </>
                        )}

                        {governanceTableData?.data?.map((item, i) => {
                            return (
                                <>
                                    <Tr
                                        //height={"10px"}
                                        _dark={{ color: "#FFFFFF" }}
                                        _light={{ color: "#16171B" }}
                                    >
                                        <Td colSpan={1}
                                            p={0}>
                                            <Accordion allowMultiple>
                                                <AccordionItem>
                                                    <AccordionButton
                                                        justifyContent={"space-between"}
                                                    >
                                                        {/* <Flex
                                                           justifyContent={"space-between"}
                                                           flexDirection={"row"}
                                                           alignItems={"center"}
                                                        > */}
                                                        <Box justifyContent={"space-between"}
                                                            alignItems={"center"}>
                                                            <Text
                                                                _light={{ color: "#434347" }}
                                                                _dark={{ color: "#A8ADBD" }}
                                                                fontSize={"14px"}
                                                                fontWeight={"400"}
                                                                lineHeight={"20px"}
                                                                letterSpacing={"1.4px"}
                                                                textTransform={"capitalize"}
                                                            >
                                                                {item.name}
                                                            </Text></Box>
                                                        {/* </Flex> */}

                                                        <AccordionIcon />
                                                    </AccordionButton>


                                                    <AccordionPanel>
                                                        <Box display={"flex"}
                                                            flexDirection={"column"}
                                                            _light={{ color: "#434347" }}
                                                            _dark={{ color: "#A8ADBD" }}
                                                            fontSize={"14px"}
                                                            letterSpacing={"1.4px"}
                                                            textTransform={"capitalize"}
                                                            justifyContent={"space-between"}>


                                                            <Box display={"flex"}
                                                                alignItems={"center"}
                                                                justifyContent={"space-between"}>
                                                                <Box display={"flex"}
                                                                    alignItems={"center"}
                                                                    justifyContent={"space-between"}
                                                                >
                                                                    <Text mb={"35px"}>Description:</Text></Box>

                                                                <Box display={"flex"}
                                                                    alignItems={"center"}
                                                                    justifyContent={"space-between"}
                                                                    ml={"30px"}
                                                                >
                                                                    <Text>{item.description_text}</Text></Box>
                                                            </Box>

                                                            <Box display={"flex"}
                                                                alignItems={"center"}
                                                                mt={"10px"}>

                                                                <Box display={"flex"}
                                                                    alignItems={"center"}>

                                                                    <Text
                                                                        justifyContent={"space-between"}
                                                                    >Topics:</Text></Box>

                                                                <Box display={"flex"}
                                                                    alignItems={"center"}
                                                                >
                                                                    <Text
                                                                        _light={{ color: "#434347" }}
                                                                        _dark={{ color: "#A8ADBD" }}
                                                                        fontSize={"14px"}
                                                                        letterSpacing={"1.4px"}
                                                                        textTransform={"capitalize"}
                                                                        ml={"65px"}
                                                                        justifyContent={"flex-end"}
                                                                    >
                                                                        {item.topics.length}
                                                                    </Text></Box></Box>

                                                        </Box>

                                                        <Box alignItems={"center"}
                                                            justifyContent={"space-between"}
                                                            ml={"130px"}
                                                            mt={"10px"}>
                                                            <Button
                                                                size={"sm"}
                                                                onClick={() => {
                                                                    router.push(`https://governance.aave.com${item.topic_url}`)
                                                                }}
                                                            >
                                                                View More
                                                            </Button>
                                                        </Box>

                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>

                                        </Td>
                                    </Tr>
                                </>
                            );
                        })}

                    </Tbody>

                </Table>
            </Box>
        </>
    )
}

const SkeletonRow = () => (
    <Box as="tr">
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
    </Box>
)

const MobileSkeletonRow = () => (
    <Box as="tr">
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td>
            <Skeleton height="20px" my={4} />
        </Td>
    </Box>
)
export default GovernanceTable;
