import {
    Box,
    Icon,
    Text,
    useColorMode,
    useColorModeValue,
    useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CustomChart from "@components/graph";
import TooltipComp from "@components/tooltipComp";
import { SingleAccordionComp } from "@components/accordion";
import { FaGithub } from "react-icons/fa";

const DevelopmentAnalysis = () => {
    const { colorMode } = useColorMode();
    const [isLg] = useMediaQuery("(min-width: 960px)");
    const CoinDevelopmentData = useSelector(
        (state) => state?.coinData?.CoinDevelopmentData?.data
    );

    return isLg ? (
        <Box
            display={"flex"}
            bgColor={"background.secondary"}
            borderRadius={"6px"}
            p={"20px"}
        >
            <Box layerStyle={"flexColumn"} gap={"20px"} minW={"40%"}>
                <Box display={"flex"} alignItems={"center"}>
                    <Text
                        fontSize={"20px"}
                        fontWeight={"500"}
                        lineHeight={"22px"}
                    >
                        Development Analysis
                    </Text>
                    <TooltipComp
                        name={
                            "Development analysis in the crypto space evaluates the progress and potential of a cryptocurrency project or blockchain platform. It considers factors such as the project's team, technology, adoption, and community support when assessing its development trajectory. "
                        }
                    />
                </Box>

                <Box
                    as="a"
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                    cursor={"pointer"}
                    target={CoinDevelopmentData?.github_link}
                    href={CoinDevelopmentData?.github_link}
                    rel="noopener noreferrer"
                >
                    <Icon
                        as={FaGithub}
                        boxSize={"20px"}
                        color={colorMode === "light" ? "black" : "white"}
                    ></Icon>

                    <Text
                        fontSize={"14px"}
                        fontWeight={"500"}
                        lineHeight={"18px"}
                        color={"#117CCA"}
                    >
                        {CoinDevelopmentData?.github_link
                            .split("/")
                            .slice(-2)
                            .join("/") ?? "-"}
                    </Text>
                </Box>

                <DevelopmentInfo />
            </Box>

            <DevelopmentChart />
        </Box>
    ) : (
        <SingleAccordionComp
            ButtonComp={() => {
                return (
                    <Box
                        display={"flex"}
                        justifyContent={"start"}
                        py={"10px"}
                        gap={"20px"}
                    >
                        <Text
                            fontSize={"20px"}
                            fontWeight={"500"}
                            lineHeight={"22px"}
                        >
                            Development Analysis
                        </Text>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"10px"}
                            as="a"
                            target={CoinDevelopmentData?.github_link}
                            href={CoinDevelopmentData?.github_link}
                            rel="noopener noreferrer"
                        >
                            <Icon
                                as={FaGithub}
                                boxSize={"20px"}
                                color={
                                    colorMode === "light" ? "black" : "white"
                                }
                            ></Icon>
                        </Box>
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
            bgColor={"background.secondary"}
        />
    );
};

export default DevelopmentAnalysis;

const DashboardCell = ({ name, value, tooltip }) => {
    return (
        <Box layerStyle={"flexColumn"} w={"50%"}>
            <Box display={"flex"} alignItems={"center"}>
                <Text fontSize={"12px"} color={"text.secondary"}>
                    {name}
                </Text>
                {tooltip && <TooltipComp label={tooltip} />}
            </Box>
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
            minW={{ base: "100%", lg: "60%" }}
            gap={"30px"}
        >
            <Box display={"flex"} justifyContent={"space-between"}>
                <DashboardCell
                    name={"Stars"}
                    value={
                        CoinDevelopmentData?.stars
                            ? CoinDevelopmentData?.stars.toLocaleString("en-US")
                            : "-"
                    }
                    tooltip={
                        "The number of users who have marked the repository as a favourite, indicating its popularity. "
                    }
                />
                <DashboardCell
                    name={"Watchers"}
                    value={
                        CoinDevelopmentData?.watchers
                            ? CoinDevelopmentData?.watchers.toLocaleString(
                                "en-US"
                            )
                            : "-"
                    }
                    tooltip={
                        "The number of users who are actively monitoring the repository for updates. "
                    }
                />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <DashboardCell
                    name={"Forks"}
                    value={
                        CoinDevelopmentData?.forks
                            ? CoinDevelopmentData?.forks.toLocaleString("en-US")
                            : "-"
                    }
                    tooltip={
                        "The count of copies of the repository made by other users, which may be used for proposing changes or as a starting point for a new project. "
                    }
                />
                <DashboardCell
                    name={"Contributors"}
                    value={
                        CoinDevelopmentData?.contributors
                            ? CoinDevelopmentData?.contributors.toLocaleString(
                                "en-US"
                            )
                            : "-"
                    }
                />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <DashboardCell
                    name={"Merged Pull Requests"}
                    value={
                        CoinDevelopmentData?.merged_prs
                            ? CoinDevelopmentData?.merged_prs.toLocaleString(
                                "en-US"
                            )
                            : "-"
                    }
                    tooltip={
                        "The number of proposed code changes that have been successfully integrated into the project. "
                    }
                />
                <DashboardCell
                    name={"Closed Issues/Total Issues"}
                    value={
                        CoinDevelopmentData?.closed_issues &&
                            CoinDevelopmentData?.total_issues
                            ? CoinDevelopmentData?.closed_issues.toLocaleString(
                                "en-US"
                            ) +
                            " / " +
                            CoinDevelopmentData?.total_issues.toLocaleString(
                                "en-US"
                            )
                            : "-"
                    }
                    tooltip={
                        "The fraction of reported problems or enhancement requests that have been resolved to the total number reported."
                    }
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

    const columnWidth = isLg ? 8 : 5;

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
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
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
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
            },
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        CoinDevelopmentData && (
            <Box display={"block"} w={"100%"}>
                <CustomChart
                    options={options}
                    type="bar"
                    series={series}
                    height={"300px"}
                />
            </Box>
        )
    );
};
