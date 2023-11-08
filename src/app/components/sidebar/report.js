import React from "react";
import dynamic from "next/dynamic";
import { Box, Button,  } from "@chakra-ui/react";
const CustomInput = dynamic(() => import('../customInput'));
const CustomModal = dynamic(() => import("@/app/components/custommodal/index"));
const CustomDropdown = dynamic(() => import("@/app/components/dropdown/index"));
const ReportBugModal = ({ isOpen, onOpen, onClose }) => {
    const items = ["Option 1", "Option 2", "Option 3"];
    const handleDropdownSelect = () => {
       /*  console.log(`Selected: ${selectedItem}`); */
    };
 /*    const colorMode = useColorMode(); */
    return (
        <CustomModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            headerTitle={"Report Bug"}
            BodyComponent={() => {
                return (
                    <Box layerStyle={"FlexColumnCenter"}>
                        <Box mb="30px">
                            <CustomDropdown
                                items={items}
                                onSelect={handleDropdownSelect}
                                name="Category"
                                placeholder={"Select Category"}
                            ></CustomDropdown>
                        </Box>
                        <Box mb="30px">
                            <CustomDropdown
                                items={items}
                                onSelect={handleDropdownSelect}
                                name="Blockchain"
                                placeholder={"Select Blockchain"}
                            ></CustomDropdown>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                name="DeFi Category"
                                type={"text"}
                                placeholder={"Enter the DeFi Category"}
                            ></CustomInput>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                name="Bug Report URL"
                                type={"text"}
                                placeholder={
                                    "Enter the URL where the bug is reported"
                                }
                            ></CustomInput>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                name="Please tell us about Bug e.g. DeFi Missing, Incorrect Data*"
                                type={"textarea"}
                                placeholder={"Breif about the bug"}
                            ></CustomInput>
                        </Box>{" "}
                        <Box mb="30px">
                            <CustomInput
                                name="Your Contact (Email or Social handle)"
                                type={"text"}
                                placeholder={
                                    "Enter the details to contact you for reward"
                                }
                            ></CustomInput>
                        </Box>
                        <Box w={"100%"} layerStyle={"center"}>
                            <Button
                                variant={"submitModal"}  
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                );
            }}
        ></CustomModal>
    );
};

export default ReportBugModal;
