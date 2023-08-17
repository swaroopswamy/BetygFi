"use client";
import React from "react";
import DefiTable from "../TVL_ranking/DefiTable";
import { Box, useColorModeValue } from "@chakra-ui/react";

function Defi_Hot_Contracts () {

  const thread = ["DeFi Category","Available Blockchains","Available DeFi ","TVL","7 Days"];
  const tableData = [
    ["AAVE V2 ","2","100","USD 65.930000","/icons/aave_logo.svg",""],
    ["AAVE V3 ","10","57","USD 65.930000","/icons/aave_logo.svg",""],
    ["Compound","4","67","USD 35.700000","/icons/compound_logo.svg",""],
    ["JustLend","7","80","USD 0.023387","/icons/justlend_logo.svg",""],
    ["Venus","4","60","USD 5.100000","/icons/venus_logo.svg",""],
    ["Morpho Aave","8","90","USD 0.001782","/icons/morphoaave_logo.svg",""],
    ["Compound V3","6","70","USD 35.700000","/icons/compoundv3.svg",""],
    ["Radiant V2","2","87","USD 0.313472","/icons/radiantv2_logo.svg"],
    ["FluidTokens","9","63","NA","",""],
    ["Trader Joe Lend","3","82","USD 0.313472","/icons/traderjoelend_logo.svg"],
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