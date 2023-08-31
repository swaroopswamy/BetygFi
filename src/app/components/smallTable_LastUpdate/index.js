"use client"
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode
} from "@chakra-ui/react";


const SmallTable_LastUpdate=()=>{

    return (
        <>
        
                <Flex
                
                background={useColorModeValue('#FFFFFF', '#202020')}
                >
                    <Spacer/>
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
                    >
                        3 mins ago
                    </Text>
                </Flex>
        </>)
}
export default SmallTable_LastUpdate;