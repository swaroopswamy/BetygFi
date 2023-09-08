import { Box , Text, useColorMode} from "@chakra-ui/react";
import React from "react";

const Prefooter = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position="relative"
                padding={"10px"}
                mb={{base: "70px", md: "30px"}}
                w={"100%"}
                mx={"3px"}
                bgColor={colorMode === 'light' ? "#FFF" : "#191919"}
            >
                <Text
                    fontSize={"14px"}
                    lineHeight={"20px"}
                    letterSpacing={"1.4"}
                    color={"#FFF"}
                >
                    -- End of Page --
                </Text>
            </Box>
        </>
    )
}

export default Prefooter;