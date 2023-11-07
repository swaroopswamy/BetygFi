import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
} from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, headerTitle, BodyComponent }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent>
                    <ModalHeader
                        _light={{
                            bgColor: "#D5D5D5",
                        }}
                        _dark={{
                            bgColor: "#D5D5D5",
                        }}
                        p={"35px"}
                        pb={"40px"}
                    >
                        <Text variant={"customModalHeader"}>{headerTitle}</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={{ md: "20px 35px 36px" }}>
                        <BodyComponent></BodyComponent>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
export default CustomModal;
