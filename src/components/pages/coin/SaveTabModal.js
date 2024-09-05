"use client";
import React from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Image from "next/image";

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
                    <Text variant={"bigText"} fontSize={{ base: "24px" }} fontWeight={500} lineHeight={"16px"} letterSpacing={"0.32px"}>Tab Name</Text>
                </ModalHeader>
                <ModalCloseButton borderRadius={"50%"} backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#191919"} mt={"10px"} />
                <ModalBody>
                    <Text>Hello World</Text>
                </ModalBody>
            </ModalContent>
        </Modal >
    );
};

export default SaveTabModal;