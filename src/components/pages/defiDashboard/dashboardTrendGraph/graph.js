import React from "react";
import CustomChart from "@components/graph";


const Graph = ({ series, options }) => {
    const seriesGraphData = [{
        name: 'trendgraph',
        data: series[0].data
    }];
    return (
        <>
            <CustomChart
                className="overview-chart"
                options={options}
                series={seriesGraphData}
                type={options.chart.type}
                height={"200px"}
            />

            {/* <CustomChart
                className="overview-chart"
                options={options}
                series={seriesGraphData}
                type="line"
                height={205}
            /> */}

            {/*   <Box
                _dark={{
                    color: "#FFF"
                }}
                _light={{
                    color: "#16171B"
                }}
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
            </Box> */}
        </>
    );
};

export default Graph;
