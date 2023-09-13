import { Box, Flex, Image, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useColorMode, Tooltip, Skeleton, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { SkeletonRow, USDollar } from './wallet_analytics';

const InflowTokensTable = () => {
    const { colorMode } = useColorMode();
    const inflowOutflowTokensData = useSelector((state) => state?.walletDashboardTableData?.inflowOutflowTokensForAddress);

    return (
        <>
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
                }}
                pb="14px"
            >
                <Text
                    fontSize={"18px"}
                    fontWeight={"600"}
                    lineHeight={"20px"}
                    ml={"20px"}
                    mr={"6px"}
                    paddingTop={"15px"}
                >
                    Inflow Tokens (30 Days)
                </Text>
                <>
                    <Tooltip label="Inflow/outflow shows the number of tokens that are coming in wallet.">
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
                        textTransform={"uppercase"}
                    >

                        <Tr>

                            <Th>
                                <Flex>
                                    <Text _light={{ color: "#434347" }}
                                        _dark={{ color: "#A8ADBD" }}
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        letterSpacing={"1px"}
                                        textTransform={"capitalize"}
                                    >
                                        Asset Name
                                    </Text>

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
                                    <Text _light={{ color: "#434347" }}
                                        _dark={{ color: "#A8ADBD" }}
                                        fontSize={"14px"}
                                        fontWeight={"400"}
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

                            <Th>
                                <Flex>
                                    <Text _light={{ color: "#434347" }}
                                        _dark={{ color: "#A8ADBD" }}
                                        fontSize={"14px"}
                                        fontWeight={"400"}
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
                                        _light={{ color: "#434347" }}
                                        _dark={{ color: "#A8ADBD" }}
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        letterSpacing={"1px"}
                                        textTransform={"capitalize"}
                                    >
                                        Asset Name
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
                                        _light={{ color: "#434347" }}
                                        _dark={{ color: "#A8ADBD" }}
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        letterSpacing={"1px"}
                                        textTransform={"capitalize"}
                                    >
                                        Value
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
                        _light={{ bgColor: "#FFF" }} >
                        {inflowOutflowTokensData?.isError && (
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
                                        fontWeight={400}
                                        letterSpacing={"1px"}
                                        colSpan={8}
                                        textAlign={"center"}
                                        p="20px"
                                        height={"245px"}
                                    >
                                        No Data Available
                                    </Td>
                                </Tr>
                            </>
                        )}
                        {inflowOutflowTokensData?.isLoading && (
                            <>
                                <SkeletonRow />
                                <SkeletonRow />
                                <SkeletonRow />
                                <SkeletonRow />
                                <SkeletonRow />
                            </>
                        )}
                        {inflowOutflowTokensData?.isSuccess &&
                            inflowOutflowTokensData?.data?.inflow.length > 0 ?
                            inflowOutflowTokensData.data.inflow.map((item, i) => {
                                return (
                                    <TableRow
                                        i={i}
                                        logoUrl={item?.logoUrl}
                                        value={item?.value}
                                        symbol={item?.symbol}
                                        percentage={item?.percentage}
                                    />
                                )
                            })
                            :
                            (
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
                                            fontWeight={400}
                                            letterSpacing={"1px"}
                                            colSpan={8}
                                            textAlign={"center"}
                                            height={"245px"}
                                        >
                                            No Data Available
                                        </Td>
                                    </Tr>
                                </>
                            )
                        }
                    </Tbody>

                </Table>
            </TableContainer>
        </>
    )
}

export default InflowTokensTable;

const TableRow = ({ i, logoUrl, value, symbol, percentage }) => {
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
                        {symbol}
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
                        letterSpacing={"1.4px"}
                        color={value > 0 ? '#60C000' : '#FF3535'}
                    >
                        {value > 0 ? "+" : "-"}USD {USDollar.format(value)}
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                    >
                        {percentage}%
                    </Text>
                </Box>
            </Td>
        </Tr>

        <Tr
            key={i}
            display={{ base: "table-row", md: "none" }}
            height={"50px"}
        >
            <Td
                p={0}
                colSpan={3}
            >
                <Accordion
                    allowMultiple
                >
                    <AccordionItem
                        border={"0px"}
                    >
                        <h2>
                            <AccordionButton
                                _expanded={{
                                    mt: "10px"
                                }}
                            >
                                <Box
                                    w="100%"
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >
                                    <Box
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        w={"80%"}
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
                                                {symbol}
                                            </Text>
                                        </Box>

                                        <Text
                                            color={value > 0 ? '#60C000' : '#FF3535'}
                                            fontSize={"14px"}
                                            fontStyle={"normal"}
                                            fontWeight={"600"}
                                            lineHeight={"20px"}
                                            textAlign={"left"}
                                        >
                                            {value > 0 ? "+" : "-"}USD {USDollar.format(value)}
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
                                        Share
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
                                        {percentage}%
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