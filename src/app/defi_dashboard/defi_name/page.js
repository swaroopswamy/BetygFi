"use client";
import React from "react";
import DefiTable from "../defi_name/DefiTable";
import { Box, useColorModeValue } from "@chakra-ui/react";

function Defi_Hot_Contracts () {

  const thread = ["Blockchain | Asset Name","Inflow (7 Days)","Outflow (7 Days)","Outflow (7 Days)"];
  const tableData = [
    ["AAVE V2 ","+USD 65.930000","-USD 356,456,560","-USD 65.930000"],
    ["AAVE V3 ","+USD 65.930000","-USD 1,434,771,959","+USD 65.930000"],
    ["Compound","+USD 35.700000","-USD 1,284,778,438","-USD 35.700000"],
    ["JustLend","+USD 0.023387","-USD 3,740,295,842","-USD 0.023387"],
    ["Venus","+USD 5.100000","-USD 802,259,792","+USD 5.100000"],
    ["Morpho Aave","+USD 0.001782","-USD 315,485,747","+USD 0.001782"],
    ["Compound V3","+USD 35.700000","-USD 563,991,620","+USD 35.700000"],
    ["Radiant V2","USD 0.313472","-USD 259,911,221","-USD 0.313472"],
    ["FluidTokens","NA","-USD 234,308","-USD 45.90988"],
    ["Trader Joe Lend","+USD 45.90988","-USD 7,562,768","-USD 45.90988"],
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