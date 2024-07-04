import { useColorMode } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import React from "react";

const ScoreMeter = ({ score, rank }) => {
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
                        show: false,
                    },
                    value: {
                        show: false,
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
        <div style={{ position: 'relative', width: '252px', height: '252px' }}>
            <CustomChart
                className="overview-chart"
                options={options}
                series={series}
                type="radialBar"
                width={252}
                height={252}
            />
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -70%)',
                color: colorMode === "light" ? "#191919" : "#FFFFFF",
                fontSize: '20px',
                textAlign: 'center'
            }}>
                #{rank}
            </div>
            <div style={{
                position: 'absolute',
                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -30%)',
                color: colorMode === "light" ? "#191919" : "#FFFFFF",
                fontSize: '32px',
                textAlign: 'center',
                whiteSpace: 'nowrap',
            }}>
                {series[0].toFixed(0)}/100
            </div>
            <div style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -30%)',
                color: colorMode === "light" ? "#191919" : "#FFFFFF",
                fontSize: '18px',
                textAlign: 'center',
                whiteSpace: 'nowrap',
            }}>
                BetygFi Score
            </div>
        </div>
    );
};

export default ScoreMeter;

