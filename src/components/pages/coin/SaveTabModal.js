"use client";
import React from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import InputText from "@components/settingsPage/editDetailsInput/input";

const SaveTabModal = ({ isSaveTabModalOpen, onSaveTabModalClose }) => {

    const { colorMode } = useColorMode();
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    {
        ValidatedUserData?.AnnotationState &&
            <Box>
                <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
            </Box>;
    }

    return (
        <Modal isOpen={isSaveTabModalOpen} onClose={onSaveTabModalClose} >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(10px) "
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
                    <Text variant={"bigText"} fontSize={{ base: "24px" }} fontWeight={500} lineHeight={"16px"} letterSpacing={"0.32px"}>Create Tab</Text>
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
                            />
                        </Box>
                    </Box>
                    <Box layerStyle={"flexCenter"} mt={"40px"} gap={"10px"}>
                        <Image width={34} height={36} src={colorMode === 'light' ? "/icons/share_light.svg" : "/icons/share_dark.svg"}></Image>
                        <Box>
                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} pb={"2px"}>Public Access</Text>
                            <Text variant={"SettingsText3"} fontWeight={500} lineHeight={"10px"} pt={"3px"}>
                                Make your Tab visible for Community in Tab Library and via Sharing Link.
                            </Text>
                        </Box>
                    </Box>
                    <Box layerStyle={"flexCenter"} justifyContent={"flex-end"} mt={"40px"} gap={"10px"}>
                        <Button display={{ base: "none", md: "block" }} variant={"modalButton"} width={100} height={30} onClick={onSaveTabModalClose}>
                            Cancel
                        </Button>
                        <Button variant={"modalButton"} width={100} height={30}>
                            Save Tab
                        </Button>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal >
    );
};

export default SaveTabModal;