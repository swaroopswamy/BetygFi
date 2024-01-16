import { Box, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
const CustomInput = ({ name, label, placeholder, handleChange, type, value }) => {
    return (
        <>
            <Box>
                <Text variant="dropdownName" mb="8px">
                    {label}
                </Text>
                {type === "textarea" ? (
                    <Textarea
                        _placeholder={{
                            color: "#757575"
                        }}
                        key={name}
                        name={name}
                        type={type}
                        defaultValue={value || ""}
                        placeholder={placeholder}
                        onBlur={handleChange}
                        border="none"
                        borderBottom={"1px solid #8D8D8D"}
                        borderRadius={"0px"}
                        _focusVisible={{
                            border: "none",
                            borderBottom: "1px solid #8D8D8D",
                        }}
                        fontFamily={"Inter"}
                        fontWeight="400"
                        _light={{
                            color: "#191919"
                        }}
                        _dark={{
                            color: "#525252"
                        }}
                        fontSize="12px"
                    />
                ) : (
                    <Input
                        _placeholder={{
                            color: "#757575"
                        }}
                        key={name}
                        name={name}
                        type={type}
                        defaultValue={value || ""}
                        placeholder={placeholder}
                        onBlur={handleChange}
                        border="none"
                        borderBottom={"1px solid #8D8D8D"}
                        borderRadius={"0px"}
                        _focusVisible={{
                            border: "none",
                            borderBottom: "1px solid #8D8D8D",
                        }}
                        fontFamily={"Inter"}
                        fontWeight="400"
                        _light={{
                            color: "#191919"
                        }}
                        _dark={{
                            color: "#525252"
                        }}
                        fontSize="12px"
                    />
                )}
            </Box>
        </>
    );
};

export default CustomInput;
