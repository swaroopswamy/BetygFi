"use client";
import React, { useState } from "react";
import { Box, Text, Checkbox, CloseButton } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Image from "next/image";

const CustomizeTabLayoutPanel = () => {
    const TabLayoutsData = useSelector((state) => state.coinData.TabLayoutsData);
    const [selectedItems, setSelectedItems] = useState({});

    const handleCheckboxChange = (event, itemName) => {
        const isChecked = event.target.checked;
        setSelectedItems((prev) => ({
            ...prev,
            [itemName]: isChecked,
        }));
    };

    const handleRemoveItem = (itemName) => {
        setSelectedItems((prev) => ({
            ...prev,
            [itemName]: false,
        }));
    };

    const renderCheckboxes = (categoryName, categoryItems) => {
        // Ensure categoryItems is an array before mapping
        if (!Array.isArray(categoryItems)) {
            return null; // Do not render anything if categoryItems is not an array
        }

        return (
            <Box p={"20px"} bg={"background.primary"} borderRadius={"6px"} mt={"3px"}>
                <Box layerStyle={"flexCenter"} gap={"7px"}>
                    <Text variant={"SettingsText3"} fontSize={"14px"} fontWeight={500} lineHeight={"16px"}>
                        {categoryName}
                    </Text>
                    <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" " />
                </Box>
                <Box layerStyle={"flexColumn"} gap={"8px"} mt={"10px"}>
                    {categoryItems.map((item) => (
                        <Checkbox
                            key={item}
                            isChecked={selectedItems[item] || false}
                            onChange={(e) => handleCheckboxChange(e, item)}
                        >
                            <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>
                                {item}
                            </Text>
                        </Checkbox>
                    ))}
                </Box>
            </Box>
        );
    };

    return (
        <Box width={"100%"}>
            <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"10px"} mt={"25px"}>
                Layout Settings
            </Text>
            <Box display={{ base: "none", md: "flex" }} layerStyle={"flexCenter"} width={"100%"} mt={"20px"} gap={"8px"}>
                <Box width={"50%"} className="hidescrollbar" overflowY={"auto"}>
                    {/* Render each category with checkboxes dynamically */}
                    {Object.entries(TabLayoutsData).map(([categoryName, categoryItems]) => (
                        <React.Fragment key={categoryName}>
                            {renderCheckboxes(categoryName, categoryItems)}
                        </React.Fragment>
                    ))}
                </Box>
                <Box width={"50%"} className="hidescrollbar" overflowY={"auto"} maxHeight={"350px"}>
                    {/* Selected Items List */}
                    {Object.entries(selectedItems)
                        .filter(([isChecked]) => isChecked)
                        .map(([itemName], index) => (
                            <Box
                                key={index}
                                bg={"background.primary"}
                                borderRadius={"4px"}
                                padding={"8px 10px"}
                                layerStyle={"flexSpaceBetween"}
                                mt={"3px"}
                            >
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" " />
                                    <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>
                                        {itemName}
                                    </Text>
                                </Box>
                                <CloseButton onClick={() => handleRemoveItem(itemName)} />
                            </Box>
                        ))}
                </Box>
            </Box>

            {/* Mobile View */}
            <Box display={{ base: "block", md: "none" }} width={"100%"} mt={"20px"} gap={"8px"}>
                <Box width={"100%"} className="hidescrollbar" overflowY={"auto"} maxHeight={"350px"}>
                    {Object.entries(selectedItems)
                        .filter(([value]) => value)
                        .map(([item], index) => (
                            <Box
                                key={index}
                                bg={"background.primary"}
                                borderRadius={"4px"}
                                padding={"8px 10px"}
                                layerStyle={"flexSpaceBetween"}
                                mt={"3px"}
                            >
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" " />
                                    <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>
                                        {item}
                                    </Text>
                                </Box>
                                <CloseButton onClick={() => handleRemoveItem(item)} />
                            </Box>
                        ))}
                </Box>
            </Box>
        </Box>
    );
};

export default CustomizeTabLayoutPanel;

