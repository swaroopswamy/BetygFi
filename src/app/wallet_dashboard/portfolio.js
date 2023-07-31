import { Box, Image, Input, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer, defiArrayChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from '../../../util/constant';
import DefiTable from "./DefiTable";
const PortfolioPanelComponent = () => {
    const dispatch = useDispatch();
    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const defiSelected = useSelector(
        (state) => state?.walletDashboardTableData?.defiArraySelected
    );
    console.log(blockchainSelected, 'blockchain')

    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };
    const DefiArrayHandler = (type) => {
        dispatch(defiArrayChangedReducer(type));
    };
    const defiArray = [
        "Wallet",
        "X2Y2",
        "Blur",
        "Uniswap"
    ];
    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"column"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}

                >
                    <Box
                        w={"100%"}
                        display={"flex"}
                        alignItems={"center"}
                        borderBottom={useColorModeValue("1px solid #CECECE", "1px solid #2F2F2F")}
                        pb="14px"
                    >
                        <Box
                            position={"relative"}
                            cursor={"pointer"}
                            fontSize={"10px"}
                            fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
                            lineHeight={"20px"}
                            color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                            _after={
                                blockchainSelected.length === 0 && {
                                    position: "absolute",
                                    content: '""',
                                    bottom: "-14px",
                                    left: 0,
                                    width: "100%",
                                    height: "1px",
                                    bgColor: useColorModeValue("#191919", "#FFFFFF")
                                }
                            }
                            onClick={() => {
                                BlockchainTypeHandler("All");
                            }}
                            mr={"18px"}
                        >
                            ALL
                        </Box>
                        {blockchains.map((item, i) => {
                            return (
                                <>
                                    <Box
                                        position={"relative"}
                                        cursor={"pointer"}
                                        key={i}
                                        _after={
                                            blockchainSelected.includes(item) && {
                                                position: "absolute",
                                                content: '""',
                                                bottom: "-14px",
                                                left: 0,
                                                width: "100%",
                                                height: "1px",
                                                bgColor: useColorModeValue("#191919", "#FFFFFF")
                                            }
                                        }
                                        onClick={() => {
                                            BlockchainTypeHandler(item);
                                        }}
                                        mr={"18px"}
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Image
                                            w={"20px"}
                                            h={"20px"}
                                            mr={"11px"}
                                            src={`/icons/${item}_sm_icon.svg`}
                                        ></Image>
                                        <Text
                                            fontSize={"10px"}
                                            fontWeight={blockchainSelected.includes(item) ? "700" : "400"}
                                            lineHeight={"20px"}
                                            color={useColorModeValue("#3A3A3A", "#FFFFFF")}

                                        >
                                            {item}
                                        </Text>
                                    </Box>
                                </>
                            )
                        })}
                    </Box>

                </Box>
                <Box
                    mt="25px"
                    borderRadius={"6px"}
                    bgColor={useColorModeValue("#FFFFFF", "#202020")}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        py={"18px"}
                        px="26px"
                    >
                        <Box
                            display={"flex"}
                            justifyContent={"flex-start"}
                            alignItems={"center"}
                         
                        >
                            <Box
                                textAlign={"center"}
                                p="8px"
                                bgColor={defiSelected.length === 0 ? useColorModeValue("#E3E4E8", "#191919") : useColorModeValue("#E0E0E0", "#202020")}
                                onClick={() => {
                                    DefiArrayHandler('All');
                                }}
                                borderRadius={"2px"}
                                opacity={defiSelected.length !== 0  ? "0.5" : "1"}
                                mr={"10px"}
                                border={useColorModeValue("1px solid #979AA5", "1px solid #787878")}
                            >
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={defiSelected.length === 0  ? "600" : "400"}
                                    lineHeight={"20px"}
                                    color={defiSelected.length === 0  ? useColorModeValue("#16171B", "#FFFFFF") : useColorModeValue("#000000", "#FFFFFF")}

                                >
                                    All
                                </Text>
                            </Box>
                            {defiArray.map((item, i) => {
                                return (
                                    <>
                                        <Box
                                            key={i}
                                            textAlign={"center"}
                                            p="8px"
                                            bgColor={defiSelected.includes(item) ? useColorModeValue("#E3E4E8", "#191919") : useColorModeValue("#FFFFFF", "#202020")}
                                            onClick={() => {
                                                DefiArrayHandler(item);
                                            }}
                                            opacity={defiSelected.includes(item) ?  "1" :"0.5" }
                                            mr={"10px"}
                                            borderRadius={"2px"}
                                            border={useColorModeValue("1px solid #979AA5", "1px solid #787878")}
                                        >
                                            <Text
                                                fontSize={"10px"}
                                                fontWeight={blockchainSelected.includes(item) ? "600" : "400"}
                                                lineHeight={"20px"}
                                                color={blockchainSelected.includes(item) ? useColorModeValue("#16171B", "#FFFFFF") : useColorModeValue("#000000", "#FFFFFF")}

                                            >
                                                {item}
                                            </Text>
                                        </Box>

                                    </>
                                )
                            })}
                        </Box>

                        <Input
                            borderColor={useColorModeValue("#E8E8E8", "#333")}
                            bgColor={useColorModeValue("#F5F5F7", "#191919")}
                            color={useColorModeValue("#16171B", "#A8ADBD")}
                            fontSize={"10px"}
                            fontWeight={400}
                            w="207px"
                            placeholder="Search DeFi"
                        //onChange={(e) => { searchByNameHandler(e.target.value) }} 
                        />
                    </Box>

                    <DefiTable />
                </Box>
            </Box>
        </>
    )
}

export default PortfolioPanelComponent