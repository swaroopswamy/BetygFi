import React, { useState } from "react";
import { Box, Select, Text, useColorMode, Tr, Td } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { tableHeader } from "./helper";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import millify from "millify";

const GenericTable = dynamic(() => import("@components/table"), { ssr: false });

const ETFTracker = () => {
    const { colorMode } = useColorMode();
    const tableData = useSelector((state) => state?.coinData?.ETFListData);
    const [selectedType, setSelectedType] = useState("All");

    const periods = [
        {
            value: "All",
            label: "All"
        },
        {
            value: "Futures",
            label: "Futures"
        },
        {
            value: "Spot",
            label: "Spot"
        },
    ];

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
        >
            <Box layerStyle={"flexSpaceBetween"}
                p={"15px"}
            >
                <Box cursor={"pointer"}>
                    <Text variant={"h2"} fontWeight={700} lineHeight={"26px"}>
                        Bitcoin ETF Tracker
                    </Text>
                    {/* <Text
                        variant={"baseStyle"}
                        fontWeight={500}
                        color={colorMode === 'light' ? "#191919" : "#FFFFFF"}
                        lineHeight={"18px"}
                        mt={"5px"}
                    >
                        Total - {tableData?.data?.length}
                    </Text> */}
                </Box>
                <Box layerStyle={"flexCenter"} gap={"20px"}>
                    {/* <InputGroup width={"250px"} height={"35px"} bg={"background.primary"} borderRadius={"20px"}>
                        <InputLeftElement>
                            <Image src={"/icons/search_Light .svg"} width={16} height={16} alt=" "></Image>
                        </InputLeftElement>
                        <Input
                            borderRadius={"20px"}
                            placeholder='Search for ETF...'
                            style={placeholderStyle}
                        />
                    </InputGroup> */}
                    <Select
                        width={"125px"}
                        height={"40px"}
                        border={"1px"}
                        borderRadius={"8px"}
                        borderColor={colorMode === "light" ? "#1C1C1CCC" : "#333"}
                        bg={colorMode === "light" ? "#FFFFFF" : "#191919"}
                        padding={"9px 5px"}
                        onChange={(e) => {
                            setSelectedType(e.target.value);
                        }}
                    >
                        {
                            periods.map((period, i) => {
                                return (
                                    <option value={period.value} key={i}>{period.label}</option>
                                );
                            })
                        }
                    </Select>
                </Box>
            </Box>

            <Box display={"flex"} overflowX={"auto"}>
                <GenericTable
                    tableHeader={tableHeader}
                    tableData={tableData}
                    TableRow={({ item, rowIndex }) => <TableRow item={item} rowIndex={rowIndex} selectedType={selectedType} />}
                    SkeletonRowsColumnsDesktop={{ numRows: 10, numColumns: 10 }}
                    slideToLeftFeature={true}
                />
            </Box>
        </Box>
    );
};
export default ETFTracker;

const TableRow = ({ item, rowIndex, selectedType }) => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    const commonStyleTdProp = {
        _light: { bgColor: "#FFFFFF" },
        _dark: { bgColor: "#202020" }
    };
    if (selectedType === "All" || item.type === selectedType) {
        return (
            <Tr
                cursor={"pointer"}
                border={"0px"}
                key={rowIndex}
                bgColor={"background.secondary"}
                onClick={() => router.push(`/crypto-etfs-data-tracker/${item?.ticker}`)}
            >
                <Td {...commonStyleTdProp} key={0} whiteSpace={"nowrap"} pl={"20px"} pr={0} >
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={500}>
                        {rowIndex + 1}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={1} whiteSpace={"nowrap"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={500}>
                        {item?.ticker === undefined ? "-" : item?.ticker}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={2} whiteSpace={"nowrap"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={500}>
                        {item?.issuer === undefined ? "-" : item?.issuer}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={3} whiteSpace={"nowrap"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                        {item?.etfName === undefined ? "-" : item?.etfName}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={4} whiteSpace={"nowrap"} textAlign={"center"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                        {item?.type === undefined ? "-" : item?.type}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={5} whiteSpace={"nowrap"} textAlign={"center"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                        ${item?.share.toFixed(2) === undefined ? "-" : item?.share.toFixed(2)}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={6} whiteSpace={"nowrap"} textAlign={"center"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                        ${millify(item?.shareOutstanding === undefined ? "-" : item?.shareOutstanding, { precision: 2 })}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={7} whiteSpace={"nowrap"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                        {item?.custodian === undefined ? "-" : item?.custodian}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={8} whiteSpace={"nowrap"} textAlign={"center"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                        ${millify(item?.volumeUsd === undefined ? "-" : item?.volumeUsd, { precision: 2 })}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={9} whiteSpace={"nowrap"} textAlign={"center"}>
                    <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                        {millify(item?.volumeBtc === undefined ? "-" : item?.volumeBtc, { precision: 2 })}
                    </Text>
                </Td>
                <Td {...commonStyleTdProp} key={10} whiteSpace={"nowrap"} textAlign={"center"}>
                    <Box width={"80px"} bg={"#245F003D"} borderRadius={"8px"}>
                        <Text variant={"contentHeading3"} lineHeight={"24px"} fontWeight={700} color={colorMode === 'light' ? "#245F00" : "#9ADA8A"} textAlign={"center"} py={"6px"} px={"7px"}>
                            Running
                        </Text>
                    </Box>
                </Td>
            </Tr>
        );
    } else {
        return null;
    }
};
