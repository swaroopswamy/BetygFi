"use client"
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode
} from "@chakra-ui/react";


<<<<<<< HEAD:src/app/components/smallTable_LastUpdate/index.js
const SmallTable_LastUpdate=()=>{
=======
const SmallPageButtons = () => {
>>>>>>> a2b3ba7854eec7d248619a870530961c7433c69f:src/app/components/smallTable_pagebutton/index.js

    return (
        <>

            <Box
                display={"flex"}
                width={"100%"}
                alignItems={"flex-end"}
                justifyContent={"end"}
                py="14px"
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
                    mr={"20px"}
                    ml={"10px"}
                >
                    3 mins ago
                </Text>
            </Box>
        </>)
}
export default SmallTable_LastUpdate;