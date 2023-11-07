import { Box, Input, Text, Textarea, useColorMode } from "@chakra-ui/react";
import React from "react";

const CustomInput = ({ name, placeholder, onChange,  type }) => {
    const colorMode = useColorMode();
    return (
        <>
            <Box>
                <Text variant="dropdownName" mb="8px">
                    {name}
                </Text>
                {type === "textarea" ? (
                    <Textarea
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        border="none"
                        borderBottom={"1px solid #8D8D8D"}
                        borderRadius={"0px"}
                        _focusVisible={{
                            border: "none",
                            borderBottom: "1px solid #8D8D8D",
                        }}
                        fontFamily={"Inter"}
                        fontWeight="400"
                        color={colorMode === "light" ? "#FFF" : "#A8A8A8"}
                        fontSize="12px"
                    />
                ) : (
                    <Input
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        border="none"
                        borderBottom={"1px solid #8D8D8D"}
                        borderRadius={"0px"}
                        _focusVisible={{
                            border: "none",
                            borderBottom: "1px solid #8D8D8D",
                        }}
                        fontFamily={"Inter"}
                        fontWeight="400"
                        color={colorMode === "light" ? "#FFF" : "#A8A8A8"}
                        fontSize="12px"
                    />
                )}
            </Box>
        </>
    );
};

export default CustomInput;
