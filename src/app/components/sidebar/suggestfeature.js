import React from "react";
import dynamic from "next/dynamic";
import { Box, Button, } from "@chakra-ui/react";
const CustomInput = dynamic(() => import('../customInput'));
const CustomUpload = dynamic(() => import('../customUpload'));
const CustomModal = dynamic(() => import("@/app/components/custommodal/index"));
const SuggestFeatureModal = ({ isOpen, onOpen, onClose }) => {
    return (
        <CustomModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            state={"success"}
            headerTitle={"Suggest a Feature"}
            BodyComponent={() => {
                return (
                    <Box layerStyle={"FlexColumnCenter"}>
                        <Box mb="30px">
                            <CustomInput
                                name="Name of the Feature*"
                                type={"text"}
                                placeholder={"Enter the name of the feature"}
                            ></CustomInput>
                        </Box>
                        <Box mb="30px">
                            <CustomInput
                                name="Tell us more about the feature*"
                                type={"textarea"}
                                placeholder={"Tell us more about the feature*"}
                            ></CustomInput>
                        </Box>

                        <Box mb="30px">
                            <CustomUpload></CustomUpload>
                        </Box>
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

export default SuggestFeatureModal;
