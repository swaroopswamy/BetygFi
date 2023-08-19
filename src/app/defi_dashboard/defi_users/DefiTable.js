"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode, colorMode
} from "@chakra-ui/react";
import { blockchains } from "../../../../util/constant";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import BackIconWhite from '../../../../public/icons/backIconWhite.svg';
import BackIconBlack from '../../../../public/icons/backIconBlack.svg';
import GenericBigTableComponent from "../GenericBigTable";

const DefiTable = ({ thread, tableData }) => {
   

    return (
        <>
            <GenericBigTableComponent
                thread={thread}
                tableData={tableData}
                //TableRow={TableRow}
                RowComponent={RowComponent}
            />
        </>
    )
};

export default DefiTable;


