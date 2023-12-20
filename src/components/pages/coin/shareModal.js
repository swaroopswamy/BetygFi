import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ShareModal = ({ isShareOpen, onShareClose }) => {
    return (
        <Modal
            isOpen={isShareOpen}
            onClose={() => {
                onShareClose();
            }}
            borderRadius={"6px"}
        >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(3px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader>Head</ModalHeader>
                <ModalCloseButton />
                <ModalBody>HI</ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ShareModal;
