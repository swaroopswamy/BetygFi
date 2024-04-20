import CustomChart from "@components/graph";
import { Box, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ETFNetInflowBox = () => {
    const { colorMode } = useColorMode();

    const [series, setSeries] = useState([
        {
            name: "Inflow",
            data: [],
            color: colorMode === "light" ? "#90BE6D" : "#60C000",
        },
        {
            name: "Outflow",
            data: [],
            color: colorMode === "light" ? "#F94144" : "#FF3535",
        },
    ]);

    useEffect(() => {
        setSeries([
            {
                name: "Inflow",
                data: ["600","200","1000","400","600","800","0","700","100"],
                color: colorMode === "light" ? "#90BE6D" : "#60C000",
            },
            {
                name: "Outflow",
                data: ["-400","-800","-100","-900","-1000","-200","-600","-700","-500"],
                color: colorMode === "light" ? "#F94144" : "#FF3535",
            },
        ]);
    }, []);

    const options = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        colors: ["#90BE6D", "#F94144"],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ["29 Jan", "31 Jan", "02 Feb", "04 Feb", "06 Feb", "08 Feb", "10 Feb", "12 Feb", "14 Feb"],
            labels: {
                style: {
                    colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                    fontSize: "12px",
                    fontWeight: 300,
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + "M";
                },
                style: {
                    colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                    fontSize: "12px",
                    fontWeight: 300,
                },
            },
        },
        grid: {
            show: false,
        },
        legend: {
            fontSize: "12px",
            fontWeight: 400,
            position: "top",
            horizontalAlign: "center",
            markers: {
                radius: 100,
            },
            labels: {
                colors: colorMode === "light" ? "#000000" : "#FFFFFF",
            },
        },
        tooltip: {
            theme: colorMode === "light" ? "light" : "dark",
        },
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}           
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <CustomChart
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </Box>
    );
};
export default ETFNetInflowBox;
