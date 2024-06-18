"use client";
import { Modal, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const TabLibraryModal = ({
    isTabLibraryModalOpen,
    onTabLibraryModalClose,

}) => {
    return (
        <Modal isOpen={isTabLibraryModalOpen} onClose={onTabLibraryModalClose} >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(10px) "
            />
            <ModalContent zIndex={10000} maxW={"800px"}>
                <ModalHeader>
                    Tab Library
                </ModalHeader>
            </ModalContent>
        </Modal>
    );
};

export default TabLibraryModal;