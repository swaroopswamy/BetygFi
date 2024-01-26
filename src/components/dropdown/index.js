import React from "react";
import {
    Box, Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const CustomDropdown = ({ label, placeholder, options = [], onSelect, selectedValue = "" }) => {
    return (
        <Box>
            <Text variant="dropdownName" mb="8px">
                {label}
            </Text>
            <Menu isLazy matchWidth>
                <MenuButton
                    as={Button}
                    w='100%'
                    p={"15px"}
                    _light={{
                        bgColor: "#F4F4F4"
                    }}
                    _dark={{
                        bgColor: "#262626"
                    }}
                    borderBottom="1px solid #8D8D8D"
                    rightIcon={<ChevronDownIcon />}>

                    <Text
                        textAlign={"left"}
                        variant={"h3"}
                        _light={{
                            color: selectedValue !== '' ? '#191919' : "#757575",
                        }}
                        _dark={{
                            color: selectedValue !== '' ? '#C6C6C6' : "#757575",
                        }}
                    >
                        {selectedValue === "" ? placeholder : selectedValue}
                    </Text>
                </MenuButton>
                <MenuList px={"10px"}>
                    {options.map((option, i) => {
                        return (
                            <>
                                <MenuItem
                                    key={i}
                                    onClick={() => onSelect(option.name)}
                                    py={"8px"}
                                    borderBottom={"1px solid #D9D9D9"}
                                    _last={{
                                        borderBottom: "none"
                                    }}
                                >
                                    <Text variant={"h3"}>
                                        {option.label}
                                    </Text></MenuItem>
                            </>);
                    })}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default CustomDropdown;
