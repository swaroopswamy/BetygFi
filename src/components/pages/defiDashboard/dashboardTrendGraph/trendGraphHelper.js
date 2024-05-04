export const TrendGraphOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        id: "trendgraph",
        stacked: false,
        animations: {
            enabled: false,
        },
        type: 'line',
    },
    stroke: {
        show: true,
        curve: "smooth",
        width: [2, 2],
    },
    fill: {
        colors: ["#FF5C00"],
        type: "gradient",
        gradient: {
            shadeIntensity: 0.6,
            opacityFrom: 0.9,
            opacityTo: 0.8,
            stops: [0, 90, 100],
        },
    },
    colors: ["#00E272", "#FF5C00"],
    xaxis: {
        type: "datetime",
        labels: {
            show: true,
            style: {
                fontSize: "11px",
                fontWeight: 300,
            },
        },
        axisTicks: {
            show: true,
        },
    },
    yaxis: {
        tickAmount: 5,
        labels: {
            show: true,
            style: {
                fontSize: "11px",
                fontWeight: 400,
            },
        },
        axisBorder: {
            show: true,
            color: "#FF5C00",
            offsetX: "50px",
        },
        axisTicks: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    tooltip: {
        enabled: true,
    },
    grid: {
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
};