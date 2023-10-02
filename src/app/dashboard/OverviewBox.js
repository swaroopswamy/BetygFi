import {
    Box,
    Text,
    Tooltip,
    useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import millify from "millify";

const OverviewBox = () => {
    const overviewData = useSelector(
        (state) => state?.dashboardTableData?.OverviewData?.data
    );

    return (
        <>
            <Box
                w={{base: "100%", md: "50%"}}
                borderRadius={"4px"}
                bgColor={useColorModeValue("#FFFFFF", "#202020")}
                filter={"filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));"}
                px={{ base: "10px", md: "20px" }}
                py={{ base: "10px", md: "25px" }}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Text
                        color={useColorModeValue("#16171B", "#FFF")}
                        fontSize={"18px"}
                        fontWeight={"600"}
                        lineHeight={"20px"}
                    >
                        Overview
                    </Text>
                    <Box display={"flex"} alignItems={"center"}

                    >
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            mr="7px"
                        >
                            Total Market Cap
                        </Text>
                        <Tooltip
                            bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                            padding="4px 8px"
                            label="Total Market Cap tracked by Solvendo"
                            fontWeight={400}
                            fontSize={"10px"}
                            mr="7px"
                        >
                            <Image
                                src={"/icons/info_sm_icon.svg"}
                                width={12}
                                height={12}
                                alt='info-icon'
                                style={{ marginRight: "7px" }}
                            ></Image>
                        </Tooltip>
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"24px"}
                            fontWeight={"600"}
                            lineHeight={"20px"}
                            letterSpacing={"2.4px"}
                        >
                            {overviewData?.tvl ?

                                /* (Math.trunc(overviewData?.tvl)).toLocaleString('en-US', {
                                  style: 'currency',
                                  currency: 'USD'
                                }) */
                                <>
                                    ${""}{millify(overviewData?.tvl, {
                                        precision: 2,
                                        locales: "en-US"
                                    })}
                                </>

                                :
                                (
                                    <>
                                        NA
                                    </>
                                )
                            }
                        </Text>
                    </Box>
                </Box>
                <Box
                    bg={"#00000014"}
                    p="30px"
                    mt='30px'
                >
                    <Text
                        color={useColorModeValue("#16171B", "#FFF")}
                        fontSize={"18px"}
                        fontWeight={300}
                        textAlign={"center"}
                        opacity={0.6}
                    >
                        For the Risk Trend to be launched, the system need to run for a minimum duration of 4 weeks.
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default OverviewBox;