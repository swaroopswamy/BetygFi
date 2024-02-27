import { Box, Input, Text, Textarea, } from "@chakra-ui/react";
import React from "react";

const InputText = ({ type, value, placeholder, height, onChange, name, isSuccess }) => {
    const calculateCharacters = () => {
        return value?.length;
    };
    return (
        <React.Fragment>
            {
                type === "textarea" ? (
                    <Box pos={"relative"} zIndex={"1"}>
                        <Textarea
                            height={"133px"}
                            name={name}
                            pb={"25px"}
                            fontSize={"12px"}
                            fontWeight={300}
                            lineHeight={"normal"}
                            _light={{
                                color: "#191919"
                            }}
                            _dark={{
                                color: "#FFFFFF"
                            }}
                            _placeholder={{
                                color: "#757575"
                            }}
                            value={value}
                            resize={"false"}
                            placeholder={placeholder}
                            onChange={(e) => onChange(e)}
                        />
                        <Box
                            pos="absolute"
                            zIndex={"2"}
                            bottom={"7px"}
                            right={"15px"}
                        >
                            <Text color={"#A5A5A5"} variant={"h5"} fontSize={"10px"}>
                                {calculateCharacters() ?? 0}/{1000} characters remaining
                            </Text>
                        </Box>
                    </Box>
                ) : (
                    name === "user_name" ? (
                        <Input
                            height={height || "35px"}
                            name={name}
                            fontSize={"12px"}
                            fontWeight={300}
                            lineHeight={"normal"}
                            _light={{
                                color: "#191919"
                            }}
                            border={isSuccess === false ? ("1px solid #FF0000") : "1px solid #D9D9D9"}
                            _dark={{
                                color: "#FFFFFF"
                            }}
                            _placeholder={{
                                color: "#757575"
                            }}
                            value={value}
                            placeholder={placeholder}
                            type={type}
                            onChange={(e) => onChange(e)}
                        />
                    ) : (
                        <Input
                            height={height || "35px"}
                            name={name}
                            fontSize={"12px"}
                            fontWeight={300}
                            lineHeight={"normal"}
                            _light={{
                                color: "#191919"
                            }}
                            _dark={{
                                color: "#FFFFFF"
                            }}
                            _placeholder={{
                                color: "#757575"
                            }}
                            value={value}
                            placeholder={placeholder}
                            type={type}
                            onChange={(e) => onChange(e)}
                        />
                    )

                )
            }


        </React.Fragment>
    );
};

export default InputText;