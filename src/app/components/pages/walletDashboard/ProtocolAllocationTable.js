import { Box, Flex, Image, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useColorMode, Tooltip, Skeleton, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { USDollar } from "../../../../../util/globalHelper";

const ProtocolAllocationTable = () => {
    const { colorMode } = useColorMode();
    const protocolAllocationData = useSelector((state) => state?.walletDashboardTableData?.protocolAllocationForAddress);

    return (
        <>
            <Box px={"2px"}>
                <Flex
                    height={"50px"}
                    borderRadius={"6px"}
                    _dark={{
                        bg: "#202020",
                        // color: "#FFFFFF"
                    }}
                    _light={{
                        bg: "#FFFFFF",
                        // color: "#16171B"
                    }}
                    // borderColor={colorMode === 'light' ? }
                    pb="14px"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    px={"20px"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Text
                            fontSize={"18px"}
                            fontWeight={"600"}
                            lineHeight={"20px"}
                            mr={"6px"}
                            paddingTop={"15px"}
                        >
                            Protocol Allocation
                        </Text>
                        <>
                            <Tooltip
                                bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                                padding="4px 8px"
                                fontWeight={400}
                                fontSize={"10px"}

                                label="Protocol allocation list shows how the assets of an individual wallet are distributed between DeFi’s in value and percentage terms.">
                                <Image
                                    width={"12px"}
                                    height={"12px"}
                                    flexShrink={"0"}
                                    mt={"20px"}
                                    alt=''
                                    src="/images/Frame.svg">
                                </Image>
                            </Tooltip>
                        </>
                    </Box>

                    {/*  <Image
                        display={{ base: "block", md: "none" }}
                        cursor={"pointer"}
                        width={"24px"}
                        height={"24px"}
                        src={colorMode === 'light' ? ('/icons/Filter.svg') : ('/icons/Filter-darkmode.svg')}
                    ></Image> */}

                </Flex>

                <TableContainer>
                    <Table variant='simple'>

                        <Thead
                            display={{ base: "none", md: "table-header-group" }}
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
                            w={"90%"}
                            textTransform={"uppercase"}
                        >

                            <Tr w={"90%"}>

                                <Th>
                                    <Flex>
                                        <Text
                                            _light={{
                                                color: "#16171B",
                                                opacity: "0.8"
                                            }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontFamily={"Manrope"}
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"capitalize"}>
                                            DeFi Name</Text>

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
                                        <Text
                                            _light={{
                                                color: "#16171B",
                                                opacity: "0.8"
                                            }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontFamily={"Manrope"}
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"capitalize"}>
                                            Share</Text>
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
                                            _light={{
                                                color: "#16171B",
                                                opacity: "0.8"
                                            }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontFamily={"Manrope"}
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"capitalize"}>
                                            Value</Text>
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

                        <Thead
                            display={{ base: "table-header-group", md: "none" }}
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
                            textTransform={"uppercase"}
                        >

                            <Tr>
                                <Th
                                    width={"50%"}
                                >
                                    <Flex>
                                        <Text
                                            _light={{
                                                color: "#16171B",
                                                opacity: "0.8"
                                            }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontFamily={"Manrope"}
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"capitalize"}
                                        >
                                            DeFi Name
                                        </Text>
                                    </Flex>
                                </Th>

                                <Th
                                    width={"50%"}
                                >
                                    <Flex
                                        ml={"25px"}
                                    >
                                        <Text
                                            _light={{
                                                color: "#16171B",
                                                opacity: "0.8"
                                            }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontFamily={"Manrope"}
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"capitalize"}
                                        >
                                            Share
                                        </Text>
                                    </Flex>
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

                            {protocolAllocationData?.isError && (
                                <>
                                    <Tr >
                                        <Td
                                            _dark={{
                                                color: "#FFF"
                                            }}
                                            _light={{
                                                color: "#16171B"
                                            }}
                                            fontSize={"20px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            colSpan={8}
                                            textAlign={"center"}
                                            height={"245px"}
                                            opacity={0.6}
                                        >
                                            No Data Available
                                        </Td>
                                    </Tr>
                                </>
                            )}
                            {protocolAllocationData?.isLoading && (
                                <>
                                    <SkeletonRow />
                                    <SkeletonRow />
                                    <SkeletonRow />
                                    <SkeletonRow />
                                    <SkeletonRow />
                                </>
                            )}
                            {protocolAllocationData?.isSuccess &&
                                (Object.keys(protocolAllocationData?.data)?.length > 0 ?
                                    (
                                        Object.keys(protocolAllocationData?.data)?.map((item, i) => {
                                            return (
                                                <TableRow
                                                    key={i}
                                                    logoUrl={item.logoUrl}
                                                    name={item.name}
                                                    percentage={item.percentage}
                                                    value={item.value}
                                                />
                                            )
                                        }
                                        )
                                    )
                                    :
                                    (
                                        <>
                                            <>
                                                <Tr >
                                                    <Td
                                                        _dark={{
                                                            color: "#FFF"
                                                        }}
                                                        _light={{
                                                            color: "#16171B"
                                                        }}
                                                        fontSize={"20px"}
                                                        fontWeight={"400"}
                                                        letterSpacing={"1px"}
                                                        colSpan={3}
                                                        textAlign={"center"}
                                                        height={"245px"}
                                                        opacity={0.6}
                                                    >
                                                        No Data Available
                                                    </Td>
                                                </Tr>
                                            </>
                                        </>
                                    )
                                )
                            }

                            {/* {[0, 1, 2, 3, 4].map((item, i) => {
                                return (
                                    <TableRow
                                        key={i}
                                        logoUrl={"https://assets.coingecko.com/coins/images/25244/thumb/Optimism.png?1660904599"}
                                        name={"Placeholder Name"}
                                        percentage={"70"}
                                        value={"7657"}
                                    />
                                )
                            })} */}

                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default ProtocolAllocationTable;

const TableRow = ({ i, logoUrl, name, percentage, value }) => {
    return <>
        <Tr
            height={"40px"}
            key={i}
            display={{ base: "none", md: "table-row" }}
        >
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
                            src={logoUrl}
                        ></Image>
                    </>

                    <Text
                        ml="6px"
                        fontSize={"14px"}
                    >
                        {name}
                    </Text>
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
                        letterSpacing={"1px"}
                        ml="6px"
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                    >
                        {percentage}%
                    </Text>
                </Box>
            </Td>
            <Td
                fontSize={"14px"}
            >
                USD {USDollar.format(value)}
            </Td>
        </Tr>

        <Tr
            key={name}
            display={{ base: "table-row", md: "none" }}
            height={"50px"}
        >
            <Td
                p={0}
                colSpan={3}
            >
                <Accordion
                    p={"0"}
                    allowMultiple
                >
                    <AccordionItem
                        border={"0px"}
                    >
                        <h2>
                            <AccordionButton
                                p={"0"}
                            // _expanded={{
                            //     mt: "10px"
                            // }}
                            >
                                <Box
                                    w="100%"
                                    m={"16px"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >
                                    <Box
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        w={"70%"}
                                    >
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                        >
                                            <Image
                                                w={"20px"}
                                                h={"20px"}
                                                src={logoUrl}
                                                borderRadius={"50%"}
                                                alt=""
                                            ></Image>

                                            <Text
                                                _light={{
                                                    color: "#16171B"
                                                }}
                                                _dark={{
                                                    color: "#FFFFFF"
                                                }}
                                                fontSize={"14px"}
                                                fontStyle={"normal"}
                                                fontWeight={"600"}
                                                letterSpacing={"1.4px"}
                                                lineHeight={"20px"}
                                                ml="12px"
                                            >
                                                {name}
                                            </Text>
                                        </Box>

                                        <Text
                                            _light={{
                                                color: "#16171B"
                                            }}
                                            _dark={{
                                                color: "#FFFFFF"
                                            }}
                                            fontSize={"14px"}
                                            fontStyle={"normal"}
                                            fontWeight={"600"}
                                            lineHeight={"20px"}
                                            textAlign={"left"}
                                        >
                                            {percentage}%
                                        </Text>
                                    </Box>

                                    <AccordionIcon
                                    />

                                </Box>
                            </AccordionButton>
                        </h2>

                        <AccordionPanel>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                my={"10px"}
                            >
                                <Box
                                    display={"flex"}
                                >
                                    <Text
                                        color="#8F8F8F"
                                        fontSize={"14px"}
                                        fontStyle={"normal"}
                                        fontWeight={"400"}
                                        letterSpacing={"1.4"}
                                        textAlign={"left"}
                                    >
                                        Value
                                    </Text>

                                    <Text
                                        _light={{
                                            color: "#16171B"
                                        }}
                                        _dark={{
                                            color: "#FFF"
                                        }}
                                        fontSize={"14px"}
                                        fontStyle={"normal"}
                                        fontWeight={"400"}
                                        letterSpacing={"1.4"}
                                        textAlign={"left"}
                                        ml={"20px"}
                                    >
                                        USD {USDollar.format(value)}
                                    </Text>
                                </Box>
                            </Box>
                        </AccordionPanel>

                    </AccordionItem>
                </Accordion>
            </Td>
        </Tr>
    </>;
}
