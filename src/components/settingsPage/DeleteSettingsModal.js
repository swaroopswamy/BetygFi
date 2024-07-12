"use client";

import { Box, Button, FormControl, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

const DeleteSettingsModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "lg" }}>
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(3px)"
            />
            <ModalContent
                _light={{
                    bg: "#FFFFFF"
                }}
                _dark={{
                    bg: "#313131"
                }}
                mx={{ base: "18px", md: "0px" }}>
                <ModalHeader py={"40px"}>
                    <Text variant={"approachPaperHeading"} lineHeight={"20px"}>
                        Delete BetygFi Account Confirmation
                    </Text>
                </ModalHeader>
                <ModalBody>
                    <Text variant={"baseStyle"}
                        _light={{
                            color: "#191919"
                        }}
                        _dark={{
                            color: "#FFFFFF"
                        }} >
                        We’re sorry to see you go. We will retain your data for 15 days and then it will be permanently deleted. You can reactivate your account at any point within 15 days of deactivation by logging back in. Once your account is deleted, all your content will be permanently gone, including your profile, posts, queries, comments, and followers.
                    </Text>
                    <Box layerStyle={"flexCenterSpaceAround"}>
                        <Text variant={"baseStyle"}
                            _light={{
                                color: "#191919"
                            }}
                            _dark={{
                                color: "#FFFFFF"
                            }} p={"30px 0px 15px 0px"}>
                            To confirm deletion, type “delete” below:
                        </Text>
                    </Box>
                    <FormControl px={{ base: "0px", md: "50px" }} borderRadius={"7px"}>
                        <Input placeholder='Type “delete”' />
                    </FormControl>
                </ModalBody>

                <ModalFooter
                    justifyContent={{ base: "none", md: "space-evenly" }}
                    layerStyle={{ base: "flexColumnCenterSpaceAround", md: "none" }}
                    mx={{ base: "0px", md: "50px" }}
                >
                    <Button variant={"modalButton"}>
                        Confirm Account Deletion
                    </Button>
                    <Button onClick={onClose} variant={"modalButton"} mt={"20px"}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteSettingsModal;
