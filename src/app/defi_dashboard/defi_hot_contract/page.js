"use client";
import React from "react";
import DefiTable from "../defi_hot_contract/DefiTable";
import { Box, useColorModeValue } from "@chakra-ui/react";

function Defi_Hot_Contracts () {

  const thread = ["BlockChain | Function name","No. Of users","No. of Calls","No. of Calls"];
  const tableData = [
    ["AAVE V2 ","406","3457","USD 65.930000","/icons/aave_logo.svg"],
    ["AAVE V3 ","567","8765","USD 65.930000","/icons/aave_logo.svg"],
    ["Compound","234","76346","USD 35.700000","/icons/compound_logo.svg"],
    ["JustLend","5634","567","USD 0.023387","/icons/justlend_logo.svg"],
    ["Venus","12","2376","USD 5.100000","/icons/venus_logo.svg"],
    ["Morpho Aave","345","8456","USD 0.001782","/icons/morphoaave_logo.svg"],
    ["Compound V3","876","8734","USD 35.700000","/icons/compoundv3.svg"],
    ["Radiant V2","3456","436","USD 0.313472","/icons/radiantv2_logo.svg"],
    ["FluidTokens","123","864","USD 45.90988",""],
    ["Trader Joe Lend","876","963","USD 45.90988","/icons/traderjoelend_logo.svg"],
];
 
  return (
    <Box
       padding={"20px 30px"}  
       bgColor={useColorModeValue("#F0F0F5","#191919")}
       borderColor={useColorModeValue("#F0F0F5","#191919")}
    >
       <DefiTable
          thread={thread}
          tableData={tableData}
        />
    </Box>
  )
};
export default  Defi_Hot_Contracts;