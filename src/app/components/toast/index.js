import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const CustomToast = ({
    isSuccessful,
    content
}) => {
    const { colorMode } = useColorMode();
    return (
        <Box
            layerStyle={"flexCenter"}
            h="67px"
        >
            {isSuccessful ? (
                <React.Fragment>
                    <Box
                        bg={"#60C000"}
                        w="14px"
                        h="100%"
                    ></Box>
                    <Box layerStyle={"flexCenter"} pl="14px" h="100%" bg={colorMode === "light" ? "#494949" : "#D5D5D5"}>
                        <i className="icon green_check_circle" />
                        <Text variant={"toastText"} mx="14px" >
                            {content}
                        </Text>
                    </Box>
                </React.Fragment>
            )
                : (
                    <React.Fragment>
                        <Box
                            bg={"#FF0000"}
                            w="14px"
                            h="100%"
                        ></Box>
                        <Box layerStyle={"flexCenter"} pl="14px" h="100%" bg={colorMode === "light" ? "#494949" : "#D5D5D5"}>
                            <i className="icon red_check_circle" />
                            <Text variant={"toastText"} mx="14px">
                                {content}
                            </Text>
                        </Box>
                    </React.Fragment>
                )}
        </Box>
    );
};

export default CustomToast;