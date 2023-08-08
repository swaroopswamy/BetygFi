"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import Governance from "./governance";
import React from "react";

const DefiDashboard = () =>{
    return(
    <Box>
        <Governance />
    </Box>
    )
};
export default DefiDashboard;