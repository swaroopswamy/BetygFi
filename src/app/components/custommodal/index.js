import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    useColorMode,
    Box,
    Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";


const CustomModal = ({ isOpen, onClose, headerTitle, BodyComponent, state }) => {
    const colorMode = useColorMode();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent>
                    {state === "success" ? (<>
                        <Box layerStyle={"FlexColumnCenter"}>
                            <Box layerStyle={"flexAlignCenterJustifyCenter"}>
                                <Image
                                    src={"/icons/check_filled_green.svg"}
                                ></Image>
                                <Text variant={"h0"}>
                                    Success!
                                </Text>
                            </Box>
                            <Text variant={"h3"}>
                                Your bug report request has been successfully submitted. Thank you for your contribution.
                            </Text>
                            <Button
                                variant={"submitModal"}
                            >
                                OK
                            </Button>
                        </Box>
                    </>) : state === "failure" ? (<>
                        <Box layerStyle={"FlexColumnCenter"}>
                            <Box layerStyle={"flexAlignCenterJustifyCenter"}>
                                <Image
                                    src={"/icons/danger_filled_red.svg"}
                                ></Image>
                                <Text variant={"h0"}>
                                    Failed!
                                </Text>
                            </Box>
                            <Text variant={"h3"}>
                                Sorry, it seems like some internal server issue.
                                Please try again.
                            </Text>
                            <Button
                                variant={"submitModal"}
                            >
                                Try Again
                            </Button>
                        </Box>
                    </>) : (<>
                        <ModalHeader
                            _light={{
                                bgColor: "#D5D5D5",
                            }}
                            _dark={{
                                bgColor: "#D5D5D5",
                            }}
                            p={"35px"}
                            pb={"40px"}
                            bgRepeat={"no-repeat"}
                            bgPos={"right"}
                            bgImage={colorMode !== 'light' ? '/icons/dark_design_modal.svg' : '/icons/light_design_modal.svg'}
                        >
                            <Text variant={"customModalHeader"}>{headerTitle}</Text>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={{ md: "20px 35px 36px" }}>
                            <BodyComponent></BodyComponent>
                        </ModalBody>
                    </>)}

                </ModalContent>
            </Modal>
        </>
    );
};


export default CustomModal;
