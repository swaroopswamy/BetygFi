import {
    Box,
    Table,
    Tbody,
    Text,
    Th,
    Tr,
    Thead,
    useColorModeValue,
    useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import CustomChart from "@components/graph";
import { SingleAccordionComp } from "@components/accordion";
import TooltipComp from "@components/tooltipComp";

const RiskAnalysis = ({ coinDetails }) => {
    const [isLg] = useMediaQuery("(min-width: 960px)");

    return isLg ? (
        <Box
            display={"flex"}
            bgColor={"background.secondary"}
            borderRadius={"6px"}
            p={"20px"}
        >
            <Box layerStyle={"flexColumn"} gap={"20px"} minW={"50%"}>
                <Box display={"flex"} alignItems={"center"}>
                    <Text
                        fontSize={"20px"}
                        fontWeight={"500"}
                        lineHeight={"22px"}
                    >
                        Financial Risk Analysis
                    </Text>
                    <TooltipComp
                        label={
                            "Financial risk analysis in the context of cryptocurrency involves assessing the various financial risks associated with holding or trading cryptocurrencies, including market volatility, regulatory risks, and cybersecurity threats. "
                        }
                    />
                </Box>
                <RiskTable coinDetails={coinDetails} />
            </Box>

            <RiskChart coinDetails={coinDetails} />
        </Box>
    ) : (
        <SingleAccordionComp
            ButtonComp={() => {
                return (
                    <Box py={"10px"}>
                        <Text
                            fontSize={"20px"}
                            fontWeight={"500"}
                            lineHeight={"22px"}
                        >
                            Financial Risk Analysis
                        </Text>
                    </Box>
                );
            }}
            PanelComp={() => {
                return (
                    <Box
                        layerStyle={"flexColumn"}
                        justifyContent={"center"}
                        p={"20px 15px"}
                    >
                        <Box layerStyle={"center"}>
                            <RiskChart coinDetails={coinDetails} />
                        </Box>
                        <Box layerStyle={"center"}>
                            <RiskTable coinDetails={coinDetails} />
                        </Box>
                    </Box>
                );
            }}
            bgColor={"background.secondary"}
        />
    );
};

export default RiskAnalysis;

const RiskTable = ({ coinDetails }) => {
    const commonStyleTdProp = {
        _light: { bgColor: "#FFFFFF", },
        _dark: { bgColor: "#202020", }
    };
    return (
        <Table variant="unstyled" w={"80%"}>
            <Thead>
                <Tr>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        lineHeight={"18px"}
                        letterSpacing={"0.16px"}
                        {...commonStyleTdProp}
                    ></Th>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Text variant="tableHead2">Risk 95% Level</Text>
                    </Th>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Text variant="tableHead2">Risk 95% Level</Text>
                    </Th>
                </Tr>
            </Thead>

            <Tbody>
                <Tr>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Text variant="tableHead2">Value at Risk</Text>
                    </Th>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Box layerStyle={"center"}>
                            <Text
                                fontSize={"14px"}
                                fontWeight={"500"}
                                lineHeight={"18px"}
                                color={"text.primary"}
                            >
                                $ {coinDetails?.daily_value[0].toFixed(3)}
                            </Text>
                        </Box>
                    </Th>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Box layerStyle={"center"}>
                            <Text
                                fontSize={"14px"}
                                fontWeight={500}
                                lineHeight={"18px"}
                                color={"text.primary"}
                            >
                                $ {coinDetails?.daily_value[1].toFixed(3)}
                            </Text>
                        </Box>
                    </Th>
                </Tr>
                <Tr>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Text variant="tableHead2">
                            Expected Daily Shortfall
                        </Text>
                    </Th>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Box layerStyle={"center"}>
                            <Text
                                fontSize={"14px"}
                                fontWeight={"500"}
                                lineHeight={"18px"}
                                color={"text.primary"}
                            >
                                ${" "}
                                {coinDetails?.daily_shortfall[0].toFixed(
                                    3
                                )}
                            </Text>
                        </Box>
                    </Th>
                    <Th
                        border={"1px"}
                        borderColor={useColorModeValue("#E0E0E0", "#494949")}
                        textTransform={"none"}
                        {...commonStyleTdProp}
                    >
                        <Box layerStyle={"center"}>
                            <Text
                                fontSize={"14px"}
                                fontWeight={500}
                                lineHeight={"18px"}
                                color={"text.primary"}
                            >
                                ${" "}
                                {coinDetails?.daily_shortfall[1].toFixed(
                                    3
                                )}
                            </Text>
                        </Box>
                    </Th>
                </Tr>
            </Tbody>
        </Table>
    );
};

const RiskChart = ({ coinDetails }) => {
    const [isLg] = useMediaQuery("(min-width: 960px)");

    const cleanedData = [];
    coinDetails?.chartData.map((dataPoint) => {
        if (dataPoint.y != 0)
            cleanedData.push({
                x: dataPoint.x.toFixed(3).toString(),
                y: dataPoint.y,
            });
    });

    const series = [
        {
            data: cleanedData,
        },
    ];

    const columnWidth = isLg ? 7 : 5;

    var options = {
        series: series,
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: columnWidth,
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["rgba(83, 136, 216, 0.60)"],
        xaxis: {
            position: "bottom",
            tickAmount: 4,
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: true,
            },
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
            },
        },
        yaxis: {
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: true,
            },
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
            },
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        <Box display={"block"} w={{ base: "100%", lg: "60%" }}>
            <CustomChart
                options={options}
                type="bar"
                series={series}
                height={"350px"}
            />
        </Box>
    );
};
