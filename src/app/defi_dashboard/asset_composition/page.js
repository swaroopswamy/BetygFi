"use client";
import React from "react";
import DefiTable from "../asset_composition/DefiTable";
import { Box, useColorModeValue } from "@chakra-ui/react";

function Assetcomposition () {

  const thread = ["Asset Name","Price","AMOUNT","Value","Share"];
  const tableData = [
    ["/images/Ethereumlogo.svg","AAVE V2 ","USD 65.930000","USD 356,456,560","USD 65.930000","60%"],
    ["/images/Tronlogo.svg","AAVE V3 ","USD 65.930000","USD 1,434,771,959","USD 65.930000","56%"],
    ["/images/Binancelogo.svg","Compound","USD 35.700000","USD 1,284,778,438","USD 35.700000","45%"],
    ["/images/Arbitrumlogo.svg","JustLend","USD 0.023387","USD 3,740,295,842","USD 0.023387","40%"],
    ["/images/Polygonmaticlogo.svg","Venus","USD 5.100000","USD 802,259,792","USD 5.100000","25%"],
    ["/images/Ethereumlogo.svg","Morpho Aave","USD 0.001782","USD 315,485,747","USD 0.001782","20%"],
    ["/images/Tronlogo.svg","Compound V3","USD 35.700000","USD 563,991,620","USD 35.700000","16%"],
    ["/images/Binancelogo.svg","Radiant V2","USD 0.313472","USD 259,911,221","USD 0.313472","14%"],
    ["/images/Arbitrumlogo.svg","FluidTokens","NA","USD 234,308","NA","12%"],
    ["/images/Polygonmaticlogo.svg","Trader Joe Lend","USD 0.379546","USD 7,562,768","USD 0.379546","10%"],
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