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
import Image from "next/image";

const CustomModal = ({ isOpen, onClose, headerTitle, BodyComponent, state }) => {
    const { colorMode } = useColorMode();
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent zIndex={1000000}>
                {state === "success" ? (
                    <Box layerStyle={"FlexColumnCenter"} p={"60px 26px 40px"}
                        _dark={{
                            bgColor: "#202020",
                        }}
                        borderRadius={"6px"}
                    >
                        <Box layerStyle={"flexAlignCenterJustifyCenter"} mb="60px">
                            <Image
                                unoptimized="true"
                                priority="true"
                                alt="success"
                                src={"/icons/check_filled_green.svg"}
                                width={40}
                                height={40}
                                style={{ marginRight: '10px', borderRadius: "50%" }}
                            />
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
                ) : state === "failure" ? (
                    <Box layerStyle={"FlexColumnCenter"} p={"60px 26px 40px"}
                        _dark={{
                            bgColor: "#202020",
                        }}
                        borderRadius={"6px"}
                    >
                        <Box layerStyle={"flexAlignCenterJustifyCenter"} mb="60px">
                            <Image
                                unoptimized="true"
                                priority="true"
                                alt="danger"
                                src={"/icons/danger_filled_red.svg"}
                                style={{ marginRight: '10px', borderRadius: "50%" }}
                                width={40}
                                height={40}
                            />
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
                ) : (
                    <React.Fragment>
                        <ModalHeader
                            _light={{
                                bgColor: "#D5D5D5",
                            }}
                            _dark={{
                                bgColor: "#202020",
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
                        <ModalBody p={{ md: "20px 35px 36px" }}
                            borderRadius={"6px"}
                            _light={{
                                bgColor: "white",
                            }}
                            _dark={{
                                bgColor: "#313131",
                            }}
                        >
                            <BodyComponent></BodyComponent>
                        </ModalBody>
                    </React.Fragment>)}

            </ModalContent>
        </Modal>
    );
};


export default CustomModal;
