"use client"
import {Text, Box, useColorModeValue, Image, useColorMode } from "@chakra-ui/react";
//import { blockchains } from "../util/constant";
import React,{ useState , useEffect} from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";


const SelectionBox =({ colorMode})=> {
    const dispatch = useDispatch();
     const blockchainListData = useSelector((state) => state?.appData?.BlockchainListData);
   
       useEffect(() => {
         dispatch(fetchBlockchainListData());
     }, []);

    const blockchainSelected = useSelector(
         (state) => state?.walletDashboardTableData?.blockchainType
    );
     const BlockchainTypeHandler = (type) => {
         dispatch(blockchainTypeChangedReducer(type));
     };

    return <>
        <Box
            display={"flex"}
            flexDirection={"column"}
        >
            <Box
                w={"100%"}
                display={"flex"}
                alignItems={"center"}
            >
                <Box
                    position={"relative"}
                    cursor={"pointer"}
                    fontSize={"14px"}
                    fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
                    letterSpacing={"1px"}
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
                            bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",

                        }
                    }
                    onClick={() => {
                        BlockchainTypeHandler("All");
                    }}
                    mr={"18px"}
                   >
                    All
                </Box>
                {blockchainListData.isSuccess && blockchainListData.data.map((item, i) => {
                    if (i >= 4) return;
                    return (
                        <Box
                            position={"relative"}
                            cursor={"pointer"}
                            key={i}
                            _after={
                                blockchainSelected.includes(item.name) && {
                                    position: "absolute",
                                    content: '""',
                                    bottom: "-14px",
                                    left: 0,
                                    width: "100%",
                                    height: "1px",
                                    bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
                                }
                            }
                            onClick={() => {
                                BlockchainTypeHandler(item.name);
                            }}
                            mr={"10px"}
                            display={"flex"}
                            alignItems={"center"}
                        >
                            <Image
                                w={"20px"}
                                h={"20px"}
                                mr={"11px"}
                                //src={`/icons/${item}_sm_icon.svg`}
                                src={item.logoUrl}
                                alt=""
                            ></Image>
                            <Text
                                fontSize={"14px"}
                                fontWeight={blockchainSelected.includes(item.name) ? "700" : "400"}
                                lineHeight={"21.826px"}
                                letterSpacing={"1.4px"}
                                color={colorMode === 'light' ?
                                    blockchainSelected.includes(item.name) ? "#191919" : "#191919"
                                    :
                                    blockchainSelected.includes(item.name) ? "#FFFFFF" : "#FFFFFF"
                                } 
                            >
                                {item.name}
                            </Text>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    </>
}
export default SelectionBox;