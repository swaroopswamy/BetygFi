import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
<<<<<<< HEAD
import ApexChart from 'react-apexcharts';

const OverviewColumnChart = () => {
    if ( window === "object") {
        //This code is executed in the browser
         console.log(window.innerWidth)
     }
    const options = {
        chart: {
            height: 205,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            }
        },
        grid: {
            show: false,
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                distributed: true,
                borderRadius: 6,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
                dataLabels: {
                    show: false,
                    position: 'top', // top, center, bottom
                },
                columnWidth: '36px'
            }
        },
        fill: {
            type: ["gradient"],
            shade: 'dark',
            gradient: {
                type: "vertical",
                opacityFrom: 0,
                opacityTo: 0.9,
                stops: [0, 100],
                gradientToColors: ["#FFACAC", "#FFCCAF", "#FFD976", "#C3F0B8"],
            }
        },
        colors: ['#FF7272', '#FF9F6A', '#FFD976', '#9ADA8A'],
=======

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const OverviewColumnChart = () => {
  const graphData = useSelector((state) => state.dashboardTableData.ScoreGraphData);
  console.log(graphData, 'graphData');
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
    tooltip:{
      style: {
        fontSize: '12px',
      },
      x:{
        show:false,
      },
      y:{
        title:{
          formatter:() => `DeFis :`
        }
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
>>>>>>> 5fc3d296becdbd6626a6f2dbac8ae754bd990860
        dataLabels: {
            enabled: false,
        },
<<<<<<< HEAD
        xaxis: {
            type: 'numeric',
            tickAmount: 4,
            min: 0,
            max: 100,
            tickPlacement: 'on',
            position: 'bottom',
            labels: {
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: '300',
                },
=======
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
          fontSize: "11px",
          fontWeight: "300",
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
>>>>>>> 5fc3d296becdbd6626a6f2dbac8ae754bd990860

            },
            axisBorder: {
                show: true,
                
            },
            axisTicks: {
                show: true,
                height: 12,
                offsetY: 0
            },
            tooltip: {
                enabled: false,
            }
        },
        yaxis: {
            tooltip: {
                enabled: false,
                offsetX: 0,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }

        },
        title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        }
    };
    const series = [{
        data: [
            {
                x: 12.5,
                y: 54
            },
            {
                x: 37.5,
                y: 66
            },
            {
                x: 62.5,
                y: 66
            },
            {
                x: 87.5,
                y: 66
            }
        ],
    }];


    return (
        <>
            <ApexChart options={options} series={series} type="bar" height={205} />
        </>
    );
}
export default OverviewColumnChart;