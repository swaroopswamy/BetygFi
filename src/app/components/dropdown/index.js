import React from "react";
import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
    Select,
    chakraComponents,
} from "chakra-react-select";

const flavorOptions = [
    {
        value: "coffee",
        label: "Coffee",
    },
    {
        value: "chocolate",
        label: "Chocolate",
    },
    {
        value: "strawberry",
        label: "Strawberry",
    },
    {
        value: "cherry",
        label: "Cherry",
    },
];

const CustomDropdown = ({ name, placeholder }) => {
    const colorMode = useColorMode();
    const customComponents = {
        Option: ({ children, ...props }) => (
            <chakraComponents.Option
                {...props}
                bgColor={"transparent"}
                color={useColorModeValue("#161616", "#FFFFFF")}
                fontWeight={"400"}
                fontFamily={"Inter"}
                fontSize={"14px"}
                padding={"10px 0px"}
                border={"none"}
                borderBottom={"1px solid #8D8D8D"}
            >
                {children}
            </chakraComponents.Option>
        ),
    };
    const chakraStyles = {
        valueContainer: (provided,) => ({
            ...provided,
            bgColor: "transparent",
            color: colorMode === "light" ? "#161616" : "#FFFFFF",
            fontWeight: "400",
            fontFamily: "Inter",
            fontSize: "14px",
            padding: "15px 16px",
        }),
        indicatorsContainer: (provided,) => ({
            ...provided,
            border: "none",
        }),
        /*  menu: (provided, state) => ({
             ...provided,
             border: "none",
             borderBottom: "1px solid #8D8D8D",
         }), */
        container:
            (provided,) => ({
                ...provided,
                border: "transparent",
                borderBottom: "1px solid #8D8D8D",
            }),
    };
    return (
        <Box>
            <Text variant="dropdownName" mb="8px">
                {name}
            </Text>
            {/*      <Select
                listStyleType="none"
                defaultValue={defaultItem}
                onChange={(event) => onSelect(event.target.value)}
                border="none"
                borderBottom={"1px solid #8D8D8D"}
                borderRadius={"0px"}
                style={selectStyles}
                css={{
                    ".custom-option": {
                        backgroundColor: "transparent",
                        color: colorMode === "light" ? "#FFFFFF" : "#161616",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        padding: "10px 0px",
                        borderBottom: "1px solid #8D8D8D",
                    },
                }}
                _focusVisible={{
                    border: "none",
                    borderBottom: "1px solid #8D8D8D",
                }}
            >
                {items.map((item, index) => (
                    <option key={index} value={item} className="custom-option">
                        {item}
                    </option>
                ))}
            </Select> */}

            <Select
                useBasicStyles
                name={name}
                options={flavorOptions}
                placeholder={placeholder}
                components={customComponents}
                chakraStyles={chakraStyles}
            />
        </Box>
    );
};

export default CustomDropdown;
