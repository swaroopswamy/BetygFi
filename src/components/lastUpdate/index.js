import React from "react";
import { Box, Text } from "@chakra-ui/react";

const LastUpdate = ({ time, ...rest }) => {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"end"}
            gap={"10px"}
            {...rest}
        >
            <Text
                color={"#A8ADBD"}
                fontSize={"12px"}
                fontWeight={400}
                lineHeight={"20px"}
            >
                Last Update On
            </Text>
            <Text
                variant={"h5"}
                _light={{ color: "#16171B" }}
                _dark={{ color: "#A8ADBD" }}
            >
                {time} min ago
            </Text>
        </Box>
    );
};

export default LastUpdate;
