import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CustomChart from "../../graph";
import { SingleAccordionComp } from "../../accordion";

const DevelopmentAnalysis = () => {
    const [isLg] = useMediaQuery("(min-width: 960px)");

    return isLg ? (
        <Box
            display={"flex"}
            bgColor={"background.secondary"}
            borderRadius={"6px"}
            p={"20px"}
        >
            <Box layerStyle={"flexColumn"} gap={"20px"} minW={"40%"}>
                <Text fontSize={"20px"} fontWeight={"500"} lineHeight={"22px"}>
                    Development Analysis
                </Text>

                <DevelopmentInfo />
            </Box>

            <DevelopmentChart />
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
                            Development Analysis
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
                        <DevelopmentChart />
                        <Box layerStyle={"center"}>
                            <DevelopmentInfo />
                        </Box>
                    </Box>
                );
            }}
        />
    );
};

export default DevelopmentAnalysis;

const DashboardCell = ({ label, value }) => {
    return (
        <Box layerStyle={"flexColumn"} w={"50%"}>
            <Text fontSize={"12px"} color={"text.secondary"}>
                {label}
            </Text>
            <Text fontSize={"14px"} color={"text.primary"}>
                {value}
            </Text>
        </Box>
    );
};

const DevelopmentInfo = () => {
    const CoinDevelopmentData = useSelector(
        (state) => state?.coinData?.CoinDevelopmentData?.data
    );

    return (
        <Box
            layerStyle={"flexColumn"}
            justifyContent={"space-between"}
            p={"10px"}
            pt={"40px"}
            minW={{ base: "100%", lg: "60%" }}
            gap={"30px"}
        >
            <Box display={"flex"} justifyContent={"space-between"}>
                <DashboardCell
                    label={"Stars"}
                    value={CoinDevelopmentData?.stars.toLocaleString("en-US")}
                    tooltip={"Hi"}
                />
                <DashboardCell
                    label={"Watchers"}
                    value={CoinDevelopmentData?.watchers.toLocaleString(
                        "en-US"
                    )}
                    tooltip={"Hi"}
                />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <DashboardCell
                    label={"Forks"}
                    value={CoinDevelopmentData?.forks.toLocaleString("en-US")}
                    tooltip={"Hi"}
                />
                <DashboardCell
                    label={"Contributors"}
                    value={CoinDevelopmentData?.contributors.toLocaleString(
                        "en-US"
                    )}
                    tooltip={"Hi"}
                />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <DashboardCell
                    label={"Merged Pull Requests"}
                    value={CoinDevelopmentData?.merged_prs.toLocaleString(
                        "en-US"
                    )}
                    tooltip={"Hi"}
                />
                <DashboardCell
                    label={"Closed Issues/Total Issues"}
                    value={
                        CoinDevelopmentData?.closed_issues.toLocaleString(
                            "en-US"
                        ) +
                        " / " +
                        CoinDevelopmentData?.total_issues.toLocaleString(
                            "en-US"
                        )
                    }
                    tooltip={"Hi"}
                />
            </Box>
        </Box>
    );
};

const DevelopmentChart = () => {
    const [isLg] = useMediaQuery("(min-width: 960px)");

    const CoinDevelopmentData = useSelector(
        (state) => state?.coinData?.CoinDevelopmentData?.data
    );

    const series = [
        {
            data: CoinDevelopmentData?.chartData,
        },
    ];

    const columnWidth = isLg ? 10 : 5;

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
            type: "datetime",
            position: "bottom",
            tickAmount: 4,
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: true,
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
            },
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        <Box display={"block"} w={"100%"}>
            <CustomChart
                options={options}
                type="bar"
                series={series}
                height={"300px"}
            />
        </Box>
    );
};
