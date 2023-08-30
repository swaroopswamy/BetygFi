"use client"
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode
} from "@chakra-ui/react";
// import { blockchains } from "../../../util/constant";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
// import BackIconWhite from '../../../public/icons/backIconWhite.svg';
// import BackIconBlack from '../../../public/icons/backIconBlack.svg';
// import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
// import SortWhiteIcon from '../../../public/icons/sort_white.svg';
// import SortBlackIcon from '../../../public/icons/sort_black.svg';

const SmallPageButtons=()=>{

    return (
        <>
                <Flex
                padding="9px 0px 9px 320px"
                background={useColorModeValue('#FFFFFF', '#202020')}
                >
                    <Text
                        _light={{ color: "#A8ADBD" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"12px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                    >
                        Last Update
                    </Text>
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"12px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        pl={"2px"}
                    >
                        3 mins ago
                    </Text>
                </Flex>
        </>)
}
export default SmallPageButtons;