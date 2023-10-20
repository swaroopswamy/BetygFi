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
                padding={"25px"}
                mb={{base: "70px", md: "30px"}}
                w={"100%"}
                bgColor={colorMode === 'light' ? "#F0F0F5" : "#191919"}
            >
                <Box
                    display={{base: "flex", md: "none"}}
                >
                    <Text
                        fontSize={"14px"}
                        lineHeight={"20px"}
                        letterSpacing={"1.4"}
                        color={colorMode ===  'light' ? "#16171B" : "#FFF"}
                    >
                        -- End of Page --
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default Prefooter;