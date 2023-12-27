import {
    Box,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Text,
    useColorModeValue,
    Button,
    useColorMode,
    Avatar,
    Icon,
    useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import ScoreMeter from "@components/pages/coin/scoreMeter";
import React from "react";
import { useSelector } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdContentCopy } from "react-icons/md";
import TooltipComp from "@components/tooltipComp";

const CoinInfo = () => {
    const CoinDashboardData = useSelector(
        (state) => state?.coinData?.CoinDashboardData?.data
    );

    return (
        <Box
            display={"flex"}
            flexDir={{ base: "column", bigSize: "row" }}
            gap={"20px"}
        >
            <Box
                display={"flex"}
                flexDir={{ base: "column", bigSize: "row" }}
                justifyContent={"space-between"}
                bgColor={"background.secondary"}
                borderRadius={"6px"}
                w={{ base: "100%", bigSize: "70%" }}
            >
                <Box
                    p={"25px 15px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    minW={{ base: "100%", bigSize: "50%" }}
                >
                    {
                        CoinDashboardData?.score &&
                        <ScoreMeter score={[CoinDashboardData?.score]} />
                    }
                </Box>

                <Box
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"space-between"}
                    w={"100%"}
                    gap={"35px"}
                    p={"35px 10px 10px 10px"}
                >
                    <Box
                        layerStyle={"flexColumn"}
                        justifyContent={"space-between"}
                        p={"10px"}
                        pt={"40px"}
                        minW={{ base: "100%", bigSize: "50%" }}
                        gap={"60px"}
                    >
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <DashboardCell
                                name={"Daily Volatility"}
                                value={
                                    CoinDashboardData?.daily_vol
                                        ? 100 *
                                        CoinDashboardData?.daily_vol?.toFixed(
                                            3
                                        ) +
                                        "%"
                                        : "-"
                                }
                                tooltip={
                                    "Daily volatility measures the degree of price fluctuation in a financial asset or market over a single trading day, indicating the potential for rapid price changes and risk"
                                }
                            />
                            <DashboardCell
                                name={"Beta"}
                                value={
                                    CoinDashboardData?.beta
                                        ? CoinDashboardData?.beta.toFixed(3)
                                        : "-"
                                }
                                tooltip={
                                    "Beta in the context of cryptocurrency assesses how a particular cryptocurrency's price movements correlate with the overall cryptocurrency market. "
                                }
                            />
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <DashboardCell
                                name={"Volume"}
                                value={
                                    CoinDashboardData?.volume
                                        ? CoinDashboardData?.volume.toLocaleString(
                                            "en-US",
                                            {
                                                style: "currency",
                                                currency: "USD",
                                            }
                                        )
                                        : "-"
                                }
                            />
                            <DashboardCell
                                name={"Volume Volatility"}
                                value={
                                    CoinDashboardData?.volume_vol
                                        ? 100 *
                                        CoinDashboardData?.volume_vol?.toFixed(
                                            4
                                        )
                                        : "-"
                                }
                                tooltip={
                                    "Volume volatility for a cryptocurrency refers to the variability in the trading volume of that specific cryptocurrency."
                                }
                            />
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <DashboardCell
                                name={"Liquidity Ratio"}
                                value={
                                    CoinDashboardData?.liquid_ratio
                                        ? CoinDashboardData?.liquid_ratio?.toFixed(
                                            3
                                        )
                                        : "-"
                                }
                                tooltip={
                                    "Liquidity ratio in cryptocurrency evaluates the ability of a crypto project or token to meet its short-term financial obligations by comparing its liquid assets, like readily tradable coins, to its current liabilities. "
                                }
                            />
                            <DashboardCell
                                name={"Liquidity Volatility"}
                                value={
                                    CoinDashboardData?.liquid_vol
                                        ? CoinDashboardData?.liquid_vol?.toFixed(
                                            3
                                        )
                                        : "-"
                                }
                                tooltip={
                                    "Liquidity volatility in cryptocurrency measures the variability in how easily a cryptocurrency can be bought or sold in the market without causing significant price changes. "
                                }
                            />
                        </Box>
                    </Box>

                    <Box display={"flex"} justifyContent={"end"} gap={"5px"}>
                        <Text
                            color={"#A8ADBD"}
                            fontSize={"12px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                        >
                            Last Update
                        </Text>
                        <Text
                            variant={"h5"}
                            color={useColorModeValue("#16171B", "#A8ADBD")}
                        >
                            {CoinDashboardData?.timeStamp
                                ? getDate(CoinDashboardData?.timeStamp)
                                : "-"}
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Box
                layerStyle={"flexColumn"}
                bgColor={"background.secondary"}
                borderRadius={"6px"}
                w={{ base: "100%", bigSize: "30%" }}
                p={"15px"}
                gap={"20px"}
            >
                <Text fontSize={"20px"} fontWeight={"500"} lineHeight={"22px"}>
                    Info
                </Text>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Links
                    </Text>

                    {CoinDashboardData?.links.map((link, i) => {
                        if (i > 2) return;
                        return (
                            <Link key={i} href={link}>
                                <Text fontSize={"14px"} color={"text.primary"}>
                                    {link}
                                </Text>
                            </Link>
                        );
                    })}
                </Box>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Category
                    </Text>
                    <Text
                        fontSize={"14px"}
                        color={"text.primary"}
                        textTransform={"capitalize"}
                    >
                        {CoinDashboardData?.category}
                    </Text>
                </Box>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Explorers
                    </Text>

                    <Box display={"flex"} flexDir={"column"}>
                        {CoinDashboardData?.explorers.map((link, i) => {
                            if (i > 2) return;
                            return (
                                <Link key={i} href={link}>
                                    <Text
                                        fontSize={"14px"}
                                        color={"text.primary"}
                                    >
                                        {link
                                            .split("")
                                            .join("")
                                            .substring(0, 40) + "......"}
                                    </Text>
                                </Link>
                            );
                        })}
                    </Box>
                </Box>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Smart Contracts
                    </Text>
                    <Box display={"flex"}>
                        {CoinDashboardData?.smart_contracts?.length > 0 ? (
                            <SmartContractsMenu />
                        ) : (
                            "-"
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CoinInfo;

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

const SmartContractsMenu = () => {
    const { colorMode } = useColorMode();

    const CoinDashboardData = useSelector(
        (state) => state?.coinData?.CoinDashboardData?.data
    );

    return (
        <Menu>
            <MenuButton as={Button} variant={"menu"}>
                <Box layerStyle={"spaceBetween"}>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        <Avatar
                            src={CoinDashboardData?.smart_contracts[0].logoUrl}
                            height={"15px"}
                            width={"15px"}
                            name={
                                CoinDashboardData?.smart_contracts[0]?.platform
                                    .name
                            }
                        />
                        <Text
                            variant={"h3"}
                            color={
                                colorMode === "light" ? "#191919" : "#FFFFFF"
                            }
                        >
                            {
                                CoinDashboardData?.smart_contracts[0]?.platform
                                    .name
                            }
                        </Text>
                    </Box>
                    <ChevronDownIcon />
                </Box>
            </MenuButton>
            <MenuList
                boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
                bgColor={useColorModeValue("#FFF", "#191919")}
                maxH={"300px"}
                overflowY={"auto"}
                className="hidescrollbar"
            >
                {CoinDashboardData?.smart_contracts.map((contract, i) => {
                    return (
                        <PageMenuItem
                            key={i}
                            name={contract?.platform?.name}
                            logoUrl={contract?.logoUrl}
                            address={contract?.contract_address}
                        ></PageMenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

const PageMenuItem = ({ i, name, logoUrl, address }) => {
    const { colorMode } = useColorMode();
    const toast = useToast();

    return (
        <MenuItem
            bgColor={colorMode === "light" ? "#FFF" : "#191919"}
            _hover={{
                bg: colorMode === "light" ? "#F5F5F7" : "#202020",
            }}
            key={i}
            onClick={() => {
                navigator.clipboard.writeText(address);

                toast({
                    title: "Address Copied to Clipboard",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                    containerStyle: {
                        fontSize: "12px",
                    },
                });
            }}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"10px"}
                w={"100%"}
            >
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                    <Avatar
                        src={logoUrl}
                        height={"15px"}
                        width={"15px"}
                        name={"contract_icon"}
                    />
                    <Box layerStyle={"flexColumn"}>
                        <Text
                            variant={"h3"}
                            color={
                                colorMode === "light" ? "#191919" : "#FFFFFF"
                            }
                        >
                            {name ?? "-"}
                        </Text>
                        <Text
                            variant={"h5"}
                            color={
                                colorMode === "light" ? "#191919" : "#FFFFFF"
                            }
                        >
                            {address?.split("").join("").substring(0, 6) +
                                "......" +
                                address?.slice(-5) ?? "-"}
                        </Text>
                    </Box>
                </Box>

                <Icon
                    as={MdContentCopy}
                    boxSize={"20px"}
                    color={useColorModeValue("#161616", "white")}
                />
            </Box>
        </MenuItem>
    );
};

function getDate(timeStamp) {
    let d = new Date(0);
    d.setUTCSeconds(timeStamp);
    return d.toDateString();
}
