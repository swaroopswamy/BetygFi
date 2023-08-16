"use client";
import React from "react";
import DefiTable from "../asset_composition/DefiTable";
import { Box, useColorModeValue } from "@chakra-ui/react";

function Assetcomposition () {

  const thread = ["Asset Name","Price","AMOUNT","Value","Share"];
  const tableData = [
    ["AAVE V2 ","USD 65.930000","USD 356,456,560","USD 65.930000","60%"],
    ["AAVE V3 ","USD 65.930000","USD 1,434,771,959","USD 65.930000","56%"],
    ["Compound","USD 35.700000","USD 1,284,778,438","USD 35.700000","45%"],
    ["JustLend","USD 0.023387","USD 3,740,295,842","USD 0.023387","40%"],
    ["Venus","USD 5.100000","USD 802,259,792","USD 5.100000","25%"],
    ["Morpho Aave","USD 0.001782","USD 315,485,747","USD 0.001782","20%"],
    ["Compound V3","USD 35.700000","USD 563,991,620","USD 35.700000","16%"],
    ["Radiant V2","USD 0.313472","USD 259,911,221","USD 0.313472","14%"],
    ["FluidTokens","NA","USD 234,308","NA","12%"],
    ["Trader Joe Lend","USD 0.379546","USD 7,562,768","USD 0.379546","10%"],
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
export default Assetcomposition;