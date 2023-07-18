import React from 'react';
import { Tooltip, useColorModeValue } from '@chakra-ui/react'

const CustomTooltip = ({ children }) => {
    return (
        <>
            <Tooltip 
             bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)","#FFF")}
             padding= "4px 8px"
             label=""
            >
                <Text
                color={useColorModeValue("#FFFF","rgba(97, 97, 97, 0.92)")}
                fontSize="10px"
                fontWeight={300}
                >
                {content}
                </Text>
            </Tooltip>
        </>
    );
}
export default CustomTooltip