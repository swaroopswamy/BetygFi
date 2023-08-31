"use client"
import {Text, Box, useColorModeValue, Image, useColorMode } from "@chakra-ui/react";
//import { blockchains } from "../util/constant";
import React,{ useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import BigTablePageButtons from '/src/app/components/BigTable_pagebutton';

const SelectionBox =({ blockchainSelected, colorMode, BlockchainTypeHandler})=> {
 
    // const dispatch = useDispatch();
    // const blockchainListData = useSelector((state) => state?.appData?.BlockchainListData);
    // var blockchains = [];

    // if (blockchainListData.isSuccess) {
    //     blockchains = blockchainListData.data;
    // }
    
    // useEffect(() => {
    //     dispatch(fetchBlockchainListData());
    // }, []);


    // const { colorMode } = useColorMode();
    // const dispatch = useDispatch();
    // const router = useRouter();
    // const [searchByName, setSearchByName] = useState('');

    // const blockchainSelected = useSelector(
    //     (state) => state?.walletDashboardTableData?.blockchainType
    // );
    // const BlockchainTypeHandler = (type) => {
    //     dispatch(blockchainTypeChangedReducer(type));
    // };

    // const searchAssetByNameHandler = (name) => {
    //     setSearchByName(name);
    // }


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
                    //textTransform={"lowercase"}
                >
                    All
                </Box>
                {blockchains.map((item, i) => {
                    if (i >= 4) return;
                    return (
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
                                    bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
                                }
                            }
                            onClick={() => {
                                BlockchainTypeHandler(item);
                            }}
                            mr={"10px"}
                            display={"flex"}
                            alignItems={"center"}
                        >
                            <Image
                                w={"20px"}
                                h={"20px"}
                                mr={"11px"}
                                src={`/icons/${item}_sm_icon.svg`}
                                alt=""
                            ></Image>
                            <Text
                                fontSize={"14px"}
                                fontWeight={blockchainSelected.includes(item) ? "700" : "400"}
                                lineHeight={"21.826px"}
                                letterSpacing={"1.4px"}
                                color={colorMode === 'light' ?
                                    blockchainSelected.includes(item) ? "#191919" : "#191919"
                                    :
                                    blockchainSelected.includes(item) ? "#FFFFFF" : "#FFFFFF"
                                }
                                //textTransform="uppercase"
                            >
                                {item}
                            </Text>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    </>
}
export default SelectionBox;