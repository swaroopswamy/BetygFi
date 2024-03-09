import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NoDataAvailable = () => {
    return (
        <Box w="100%" h="100%" layerStyle={"flexCenter"} justifyContent={"center"}>
            <Text variant={"noDataText"}>No data available</Text>
        </Box>
    );
};


export default NoDataAvailable;