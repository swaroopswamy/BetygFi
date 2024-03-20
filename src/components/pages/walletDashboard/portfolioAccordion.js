import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Skeleton, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PorfolioAccordion = ({ thread, tableData }) => {
    return (
        <Accordion
            defaultIndex={[0]}
            allowMultiple
            background={useColorModeValue("#FFFFFF", "#202020")}
            mb={"40px"}
            borderRadius={"6px"}
        >
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                            <Box as="span" flex="1" textAlign="left">
                                <Flex>
                                    <Text
                                        color={useColorModeValue("#202020", "#FFFFFF")}
                                        fontSize={"14px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"20px"}
                                        mt={"5px"}
                                    >
                                        Savings
                                    </Text>
                                </Flex>
                            </Box>
                        </Box>

                        <Box
                            borderRadius="50%"
                            border={useColorModeValue(
                                "1px solid #E8E8E8",
                                "1px solid #333333"
                            )}
                            background={useColorModeValue("#D9D9D9", "#191919")}
                            ml={"5px"}
                        >
                            <AccordionIcon margin={"4px"} />
                        </Box>
                    </AccordionButton>
                </h2>

                <AccordionPanel
                    pb={4}
                    paddingInlineStart={"1"}
                    paddingInlineEnd={"1"}
                >
                    <Table
                        variant="simple"
                        display={{ base: "none", md: "table" }}
                        w={"100%"}
                    >
                        <Thead>
                            <Tr
                                bg={useColorModeValue("#F5F5F7", "#191919")}
                                width={"100%"}
                                flex-shrink={"0"}
                            >
                                {thread.map((item, i) => {
                                    return (
                                        <Th
                                            key={i}
                                            _light={{
                                                bgColor: "#FFFFFF",
                                                color: "#16171B",
                                                opacity: "0.8",
                                            }}
                                            _dark={{ color: "#A8ADBD", bgColor: "#202020", }}
                                            fontSize={"14px"}
                                            fontFamily={"Inter"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            textAlign={"left"}
                                        >
                                            {item}
                                        </Th>
                                    );
                                })}
                            </Tr>
                        </Thead>

                        <Tbody>
                            {(tableData?.isError || !tableData?.data?.defiBalance) && (
                                <Tr>
                                    <Td _light={{ bgColor: "#FFFFFF", }}
                                        _dark={{ bgColor: "#202020", }} colSpan={"8"}>
                                        <Text
                                            _light={{
                                                color: "#16171B",
                                            }}
                                            _dark={{
                                                color: "#FF",
                                            }}
                                            fontSize={"20px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            textAlign={"center"}
                                            p="20px"
                                            opacity={0.6}
                                        >
                                            No Data available
                                        </Text>
                                    </Td>
                                </Tr>
                            )}

                            {tableData?.isLoading && (
                                <>
                                    <SkeletonRow />
                                    <SkeletonRow />
                                    <SkeletonRow />
                                </>
                            )}

                            {tableData?.isSuccess &&
                                tableData?.data?.defiBalance &&
                                tableData?.data?.defiBalance?.map((item, i) => {
                                    return (
                                        <Tr key={i}>
                                            <Td _light={{ bgColor: "#FFFFFF", }}
                                                _dark={{ bgColor: "#202020", }}>
                                                <Flex>
                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        src={item.tokenLogoUrl}
                                                        alt="token"
                                                        unoptimized="true"
                                                        priority="true"

                                                    />
                                                    <Text
                                                        _light={{
                                                            color: "#16171B",
                                                        }}
                                                        _dark={{
                                                            color: "#FFFFFF",
                                                        }}
                                                        fontSize={"14px"}
                                                        fontStyle={"normal"}
                                                        fontWeight={"600"}
                                                        lineHeight={"11px"}
                                                        mt={"10px"}
                                                        ml={"10px"}
                                                    >
                                                        {item.token}
                                                    </Text>
                                                </Flex>
                                            </Td>

                                            <Td _light={{ bgColor: "#FFFFFF", }}
                                                _dark={{ bgColor: "#202020", }}>
                                                <Flex>
                                                    <Text
                                                        _light={{
                                                            color: "#16171B",
                                                        }}
                                                        _dark={{
                                                            color: "#FFFFFF",
                                                        }}
                                                        fontSize={"14px"}
                                                        fontStyle={"normal"}
                                                        fontWeight={"400"}
                                                        lineHeight={"20px"}
                                                    >
                                                        {item.balance}
                                                    </Text>
                                                </Flex>
                                            </Td>

                                            <Td _light={{ bgColor: "#FFFFFF", }}
                                                _dark={{ bgColor: "#202020", }}>
                                                <Flex>
                                                    <Text
                                                        _light={{
                                                            color: "#16171B",
                                                        }}
                                                        _dark={{
                                                            color: "#FFFFFF",
                                                        }}
                                                        fontSize={"14px"}
                                                        fontStyle={"normal"}
                                                        fontWeight={"400"}
                                                        lineHeight={"20px"}
                                                    >
                                                        {item.price}
                                                    </Text>
                                                </Flex>
                                            </Td>

                                            <Td _light={{ bgColor: "#FFFFFF", }}
                                                _dark={{ bgColor: "#202020", }}>
                                                <Flex>
                                                    <Text
                                                        _light={{
                                                            color: "#16171B",
                                                        }}
                                                        _dark={{
                                                            color: "#FFFFFF",
                                                        }}
                                                        fontSize={"14px"}
                                                        fontStyle={"normal"}
                                                        fontWeight={"400"}
                                                        lineHeight={"20px"}
                                                    >
                                                        {(item?.value)?.toLocaleString("en-US", {
                                                            style: "currency",
                                                            currency: "USD",
                                                        })}
                                                    </Text>
                                                </Flex>
                                            </Td>
                                        </Tr>
                                    );
                                })}
                        </Tbody>
                    </Table>

                    {tableData?.isSuccess &&
                        tableData?.data?.defiBalance &&
                        tableData?.data?.defiBalance?.map((item, i) => {
                            return (
                                <Box
                                    key={i}
                                    display={{ base: "flex", md: "none" }}
                                    flexDirection={"column"}
                                    p={2}
                                >
                                    <Box
                                        display={"flex"}
                                        alignItems={"start"}
                                        flexDirection={"column"}
                                        mb={"15px"}
                                    >
                                        <Text
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            mr={"20px"}
                                            _light={{
                                                color: "#8F8F8F",
                                                bgColor: "#FFFFFF",
                                            }}
                                            _dark={{
                                                color: "#ADADAD",
                                                bgColor: "#202020",
                                            }}
                                        >
                                            Token
                                        </Text>
                                        <Flex>
                                            <Image
                                                width={24}
                                                height={24}
                                                src={item?.tokenLogoUrl}
                                                alt="token"
                                                unoptimized="true"
                                                priority="true"
                                            />
                                            <Text
                                                _light={{
                                                    color: "#16171B",
                                                    bgColor: "#FFFFFF",
                                                }}
                                                _dark={{
                                                    color: "#FFFFFF",
                                                    bgColor: "#202020",
                                                }}
                                                fontSize={"14px"}
                                                fontStyle={"normal"}
                                                fontWeight={"600"}
                                                lineHeight={"11px"}
                                                mt={"10px"}
                                                ml={"10px"}
                                            >
                                                {item?.token}
                                            </Text>
                                        </Flex>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"start"}
                                        flexDirection={"column"}
                                        mb={"15px"}
                                    >
                                        <Text
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            mr={"20px"}
                                            _light={{
                                                color: "#8F8F8F",
                                                bgColor: "#FFFFFF",
                                            }}
                                            _dark={{
                                                color: "#ADADAD",
                                                bgColor: "#202020",
                                            }}
                                        >
                                            Balance
                                        </Text>
                                        <Text
                                            _light={{
                                                color: "#16171B",
                                                bgColor: "#FFFFFF",
                                            }}
                                            _dark={{
                                                color: "#FFFFFF",
                                                bgColor: "#202020",
                                            }}
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                        ></Text>
                                    </Box>
                                    <Box
                                        display={"flex"}
                                        alignItems={"start"}
                                        flexDirection={"column"}
                                        mb={"15px"}
                                    >
                                        <Text
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            mr={"20px"}
                                            _light={{
                                                color: "#8F8F8F",
                                                bgColor: "#FFFFFF",
                                            }}
                                            _dark={{
                                                color: "#ADADAD",
                                                bgColor: "#202020",
                                            }}
                                        >
                                            % Share
                                        </Text>
                                        <Text
                                            _light={{
                                                color: "#16171B",
                                                bgColor: "#FFFFFF",
                                            }}
                                            _dark={{
                                                color: "#FFFFFF",
                                                bgColor: "#202020",
                                            }}
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                        ></Text>
                                    </Box>
                                </Box>
                            );
                        })}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

const SkeletonRow = () => (
    <Box as="tr">
        <Td _light={{ bgColor: "#FFFFFF", }}
            _dark={{ bgColor: "#202020", }}>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td _light={{ bgColor: "#FFFFFF", }}
            _dark={{ bgColor: "#202020", }}>
            <Skeleton height="20px" my={4} />
        </Td>
        <Td _light={{ bgColor: "#FFFFFF", }}
            _dark={{ bgColor: "#202020", }}>
            <Skeleton height="20px" my={4} />
        </Td>
    </Box>
);

export default PorfolioAccordion;