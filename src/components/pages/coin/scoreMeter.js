import { useColorMode } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import React from "react";

// const colors = [ "#245F00", "#00799F", "#B87A00", "#FF0000"];

const ScoreMeter = ({ score }) => {
    const { colorMode } = useColorMode();
    const series = [score * 100];

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
            offsetY: -20,
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: "16px",
                        color: colorMode === "light" ? "#191919" : "#FFFFFF",
                        offsetY: 80,
                    },
                    value: {
                        fontSize: "32px",
                        offsetY: -5,
                        color: colorMode === "light" ? "#191919" : "#FFFFFF",
                        formatter: function (val) {
                            return val.toFixed(0) + "/100";
                        },
                    },
                },
            },
        },
        colors: [color],
        grid: {
            padding: {
                top: -10,
            },
        },
        fill: {
            type: "solid",
        },
        labels: ["BetygFi Score"],
    };

    return (
        <CustomChart
            className="overview-chart"
            options={options}
            series={series}
            type="radialBar"
            width="auto"
        />
    );
};

export default ScoreMeter;
