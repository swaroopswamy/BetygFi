import { Box, useColorMode, useColorModeValue, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { fetchScoreGraphData } from "@/redux/dashboard_data/dataSlice";  
import { useDispatch, useSelector } from "react-redux";
import { SingleAccordionComp } from "../../accordion";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const OverviewColumnChart = () => {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const graphData = useSelector((state) => state.dashboardTableData.ScoreGraphData);

    const categorySelected = useSelector(
        (state) => state?.dashboardTableData?.categorySelected
    );
    const blockchainSelected = useSelector(
        (state) => state?.dashboardTableData?.blockchainType
    );

    const getScoreGraphDataHandler = () => {
        const payload = {
            blockchain: blockchainSelected,
            category: categorySelected,
        };
        dispatch(fetchScoreGraphData(payload));
    };

    useEffect(() => {
        getScoreGraphDataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blockchainSelected, categorySelected]);    

    const labels = ["Worst", "Below Average", "Above Average", "Best"];
    const colors = ["#FF7272", "#FF9F6A", "#FFD976", "#9ADA8A"];

    const options = {
        chart: {
            height: 205,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        tooltip: {
            theme: colorMode,
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
              return (
                '<div class="column_tooltip">' +
                    '<div class="column_tooltip_text">' +
                    `<span style="display: inline-block; border-radius: 50%; height: 14px; width: 14px; background-color: ${colors[dataPointIndex]};"></span>` + " " + series[0][dataPointIndex] + " DeFi" +
                    "</div>" +
                "</div>"
              );
            }
        },
        grid: {
            show: false,
        },
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
                distributed: true,
                borderRadius: 6,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
                dataLabels: {
                    show: false,
                    position: "top", // top, center, bottom
                },
                columnWidth: "36px",
            },
        },
        fill: {
            type: ["gradient"],
            shade: "dark",
            gradient: {
                type: "vertical",
                opacityFrom: 0,
                opacityTo: 0.9,
                stops: [0, 100],
                gradientToColors: ["#FFACAC", "#FFCCAF", "#FFD976", "#C3F0B8"],
            },
        },
        colors: ["#FF7272", "#FF9F6A", "#FFD976", "#9ADA8A"],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "numeric",
            tickAmount: 4,
            min: 0,
            max: 100,
            tickPlacement: "on",
            position: "bottom",
            labels: {
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "12px",
                    fontWeight: "300",
                    lineHeight: "20px", 
                },
            },
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: true,
                height: 12,
                offsetY: 0,
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            tooltip: {
                enabled: false,
                offsetX: 0,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val;
                },
            },
        },
    };
    const series = [
        {
            data: [
                {
                    x: 12.5,
                    y: graphData?.data?.safety_score[0].value,
                },
                {
                    x: 37.5,
                    y: graphData?.data?.safety_score[1].value,
                },
                {
                    x: 62.5,
                    y: graphData?.data?.safety_score[2].value,
                },
                {
                    x: 87.5,
                    y: graphData?.data?.safety_score[3].value,
                },
            ],
        },
    ];


    return (
        <>
            <Box w={"40%"} display={{base: "none", lg: "flex"}} flexDir={"column"} justifyContent={"space-between"} borderRadius={"4px"} bgColor={useColorModeValue("#FFFFFF", "#202020")} p={"25px 20px"} >
                <Text variant='h2'> Score Distribution </Text>

                <Box height={"100%"} p={"20px"}>
                    <ApexCharts options={options} series={series} type="bar" height={"100%"} />
                </Box>
            </Box>

            <SingleAccordionComp display={{base: "flex", lg: "none"}} minH="50px"
                ButtonComp={() => {
                    return (
                        <Box display={"flex"}>
                            <Text variant='h2'> Score Distribution </Text>
                        </Box>
                    )
                }}
                PanelComp={() => {
                    return (
                        <Box>
                            <ApexCharts options={options} series={series} type="bar" height={205} />
                        </Box>
                    )
                }}
            />
        </>
    );
}
export default OverviewColumnChart;