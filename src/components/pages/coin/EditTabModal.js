"use client";
import React, { useState } from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const InputText = dynamic(() => import("@components/settingsPage/editDetailsInput/input"), { ssr: false });

const EditTabModal = ({ isEditTabModalOpen, onEditTabModalClose }) => {
    const { colorMode } = useColorMode();
    const [tabName, setTabName] = useState("");
    const [tabDescription, setTabDescription] = useState("");

    return (
        <Modal isOpen={isEditTabModalOpen} onClose={onEditTabModalClose}>
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(10px)"
            />
            <ModalContent
                zIndex={10000}
                maxW={"800px"}
                width={{ base: "90%" }}
                padding={{ base: "10px", md: "20px 10px" }}
                bgColor={colorMode === 'light' ? "#FFFFFF" : "#313131"}
                position={{ md: "fixed" }}
            >
                <ModalHeader>
                    <Text variant={"bigText"} fontSize={{ base: "24px" }} fontWeight={500} lineHeight={"16px"} letterSpacing={"0.32px"}>
                        Edit Tab Info
                    </Text>
                </ModalHeader>
                <ModalCloseButton borderRadius={"50%"} backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#191919"} mt={"10px"} />
                <ModalBody mt={"25px"}>
                    <Text variant={"contentHeading4"} fontSize={{ base: "14px", md: "16px" }} lineHeight={"10px"}>
                        Tab Name
                    </Text>
                    <Box w="100%" mt={"15px"}>
                        <InputText
                            placeholder={"Enter Tab Name"}
                            type={"text"}
                            name="tab_name"
                            value={tabName}
                            onChange={(e) => setTabName(e.target.value)}
                        />
                    </Box>

                    <Box mt={"25px"}>
                        <Text variant={"contentHeading4"} fontSize={{ base: "14px", md: "16px" }} lineHeight={"10px"}>
                            Tab Description
                        </Text>
                        <Box w="100%" mt={"15px"}>
                            <InputText
                                placeholder={"Enter Tab Description (Optional)"}
                                type={"textarea"}
                                name="tab_description"
                                value={tabDescription}
                                onChange={(e) => setTabDescription(e.target.value)}
                            />
                        </Box>
                    </Box>

                    <Box layerStyle={"flexCenter"} justifyContent={"flex-end"} mt={"40px"} gap={"10px"}>
                        <Button variant={"modalButton"} width={100} height={30} onClick={onEditTabModalClose}>
                            Cancel
                        </Button>
                        <Button variant={"modalButton"} width={130} height={30}>
                            Save Changes
                        </Button>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default EditTabModal;