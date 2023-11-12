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
    Image,
} from "@chakra-ui/react";
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
                        <Box layerStyle={"FlexColumnCenter"} p={"60px 26px 40px"}>
                            <Box layerStyle={"flexAlignCenterJustifyCenter"} mb="60px">
                                <Image
                                    alt="success"
                                    src={"/icons/check_filled_green.svg"}
                                    mr={'10px'}
                                ></Image>
                                <Text variant={"h0"}>
                                    Success!
                                </Text>
                            </Box>
                            <Text variant={"h3"} mb="55px" textAlign={"center"}>
                                Your bug report request has been successfully submitted.<br /> Thank you for your contribution.
                            </Text>
                            <Box
                                w={"100%"}
                                display={"flex"}
                                justifyContent={"center"}
                            >
                                <Button
                                    variant={"submitModal"}
                                    w="140px"
                                    onClick={onClose}
                                >
                                    OK
                                </Button>
                            </Box>

                        </Box>
                    </>) : state === "failure" ? (<>
                        <Box layerStyle={"FlexColumnCenter"} p={"60px 26px 40px"}>
                            <Box layerStyle={"flexAlignCenterJustifyCenter"} mb="60px">
                                <Image
                                    alt="danger"
                                    src={"/icons/danger_filled_red.svg"}
                                    mr={'10px'}
                                ></Image>
                                <Text variant={"h0"}>
                                    Failed!
                                </Text>
                            </Box>
                            <Text variant={"h3"} mb="55px" textAlign={"center"}>
                                Sorry, it seems like some internal server issue.<br />
                                Please try again.
                            </Text>
                            <Box
                                w={"100%"}
                                display={"flex"}
                                justifyContent={"center"}
                            >
                                <Button
                                    variant={"submitModal"}
                                    w="140px"
                                    onClick={onClose}
                                >
                                    OK
                                </Button>
                            </Box>

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
                            backgroundPosition={"top 0px right 30px"}
                            bgImage={colorMode !== 'light' ? '/icons/design_triangle.svg' : '/icons/light_design_modal.svg'}
                        >
                            <Text variant={"customModalHeader"}>{headerTitle}</Text>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody p={{ md: "20px 35px 36px" }} bg={"#F4F4F4"}>
                            <BodyComponent></BodyComponent>
                        </ModalBody>
                    </>)}

                </ModalContent>
            </Modal>
        </>
    );
};


export default CustomModal;
