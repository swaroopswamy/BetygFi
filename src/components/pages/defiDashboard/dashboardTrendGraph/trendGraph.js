import { Box, useColorModeValue } from "@chakra-ui/react";
import millify from "millify";
import React from "react";
import CustomChart from "@components/graph";
import moment from "moment";
import { TrendGraphOptions } from "./trendGraphHelper";

const TrendGraph = ({ series, colorMode, searchParamProtocolSlug }) => {
    TrendGraphOptions.xaxis.labels.style.colors = useColorModeValue("#16171B", "#FFF");
    TrendGraphOptions.xaxis.labels.formatter = (val) => moment(val * 1000).format("MMM YY");
    TrendGraphOptions.yaxis.labels.style.colors = useColorModeValue("#16171B", "#FFF");
    TrendGraphOptions.yaxis.labels.formatter = (val) => ("$" + millify(val, { precision: 2, locales: "en-US" }));
    TrendGraphOptions.tooltip.theme = colorMode;
    TrendGraphOptions.grid.borderColor = useColorModeValue("#191919", "#36363A");
    TrendGraphOptions.tooltip.custom = ({ series, seriesIndex, dataPointIndex }) => (
        '<div class="donut_tooltip">' +
        '<div class="donut_tooltip_text">' +
        searchParamProtocolSlug +
        "</div>" +
        '<div class="donut_tooltip_text">' +
        millify(series[seriesIndex][dataPointIndex]) +
        " USD" +
        "</div>" +
        "</div>"
    );

    const seriesData = series[0].data;
    const seriesGraphData = () => [{
        name: 'trendgraph',
        data: seriesData
    }];

    return (
        <>
            {
                seriesData ?
                    <CustomChart
                        className="overview-chart"
                        options={TrendGraphOptions}
                        series={seriesGraphData()}
                        type={TrendGraphOptions.chart.type}
                        height={"200px"}
                    />
                    :
                    <Box
                        _dark={{ color: "#FFF" }}
                        _light={{ color: "#16171B" }}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        textAlign={"center"}
                        height={"245px"}
                        mb={"20px"}
                    >
                        No Data Available
                    </Box>
            }
        </>
    );
};

export default TrendGraph;
