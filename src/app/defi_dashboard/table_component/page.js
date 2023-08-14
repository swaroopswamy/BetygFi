"use client";
import React from 'react';
import DefiTable from './DefiTable';
import { Box, useColorModeValue } from '@chakra-ui/react';

function TableExamplePage() {

    const thread = ["item1", "item2", "item3", "item4"];

    return (
        <Box
            padding={"20px 30px"}
            bgColor={useColorModeValue("#F0F0F5", "#191919")}
            borderRadius={"6px"}
            borderColor={useColorModeValue("#F0F0F5","#272727")}
        >
            <DefiTable
                thread={thread}
            />
        </Box>
    )
}

export default TableExamplePage;