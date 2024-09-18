"use client";
import { Box, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const CustomChart = dynamic(() => import("@components/graph"), { ssr: false });

const FearMeter = ({ score }) => {
    const { colorMode } = useColorMode();
    const series = [parseInt(score)];
    const color =
        score >= 0.75
            ? "#0E6027"
            : score < 0.75 && score >= 0.5
                ? "#00799F"
                : score < 0.5 && score >= 0.25
                    ? "#B87A00"
                    : "#FF0000";

    var options = {
        chart: {

            type: "radialBar",

        },
        labels: [''],
        plotOptions: {
            radialBar: {
                startAngle: -180,
                endAngle: 180,
                dataLabels: {
                    value: {
                        fontSize: "24px",
                        offsetY: -5,
                        color: colorMode === "light" ? "#191919" : "#FFFFFF",
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
            },
        },
        colors: [color],
        grid: {
            padding: {
                top: -20,
                right: -30
            },
        },
        fill: {
            type: "solid",
        },
        dataLabels: {
            enabled: false,
        }
    };

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <CustomChart
                className="fearscore-chart"
                options={options}
                series={series}
                type="radialBar"
                width={"auto"}
                height={90}
            />
        </Box>
    );
};

export default FearMeter;
