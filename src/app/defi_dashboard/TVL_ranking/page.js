"use client";
import React from "react";
import DefiTable from "../TVL_ranking/DefiTable";
import { Box, useColorModeValue } from "@chakra-ui/react";

function TVL_Ranking () {

  const thread = ["DeFi Category","Available Blockchains","Available DeFi ","TVL","7 Days"];
  const tableData = [
    ["AAVE V2 ","406","3457","USD 65.930000","/icons/aave_logo.svg","/icons/line_graph.svg"],
    ["AAVE V3 ","567","8765","USD 65.930000","/icons/aave_logo.svg","/icons/line_graph.svg"],
    ["Compound","234","76346","USD 35.700000","/icons/compound_logo.svg","/icons/line_graph.svg"],
    ["JustLend","5634","567","USD 0.023387","/icons/justlend_logo.svg","/icons/line_graph.svg"],
    ["Venus","12","2376","USD 5.100000","/icons/venus_logo.svg","/icons/line_graph.svg"],
    ["Morpho Aave","345","8456","USD 0.001782","/icons/morphoaave_logo.svg","/icons/line_graph.svg"],
    ["Compound V3","876","8734","USD 35.700000","/icons/compoundv3.svg","/icons/line_graph.svg"],
    ["Radiant V2","3456","436","USD 0.313472","/icons/radiantv2_logo.svg","/icons/line_graph.svg"],
    ["FluidTokens","123","864","USD 45.90988","","/icons/line_graph.svg"],
    ["Trader Joe Lend","876","963","USD 45.90988","/icons/traderjoelend_logo.svg","/icons/line_graph.svg"],
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
export default  TVL_Ranking;