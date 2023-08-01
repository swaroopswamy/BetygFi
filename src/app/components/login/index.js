'use client'
import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text, useColorMode, useColorModeValue, useSteps } from "@chakra-ui/react";
import React, { useState } from "react";
import { useWeb3 } from "@3rdweb/hooks"

const LoginPage = ({ isOpen, onClose }) => {
    const { connectWallet, address, error } = useWeb3();
    const walletArray = [
        {
            name: "Binance",
            icon: "binance_logo.png"
        },
        {
            name: "Coinbase wallet",
            icon: "coinbase_logo.png"
        },
        {
            name: "Metamask",
            icon: "metamask_logo.png"
        },
        {
            name: "Other Browser wallet",
            icon: "coinbase_logo.png"
        },
    ];

    const [browserWalletProcessSelected, setBrowserWalletProcessSelected] = useState(false);

    const handleProcessSelector = (item) => {
        setBrowserWalletProcessSelected(item.name);
    }
    const { colorMode } = useColorMode();
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}
                borderRadius={"6px"}
                boxShadow={"0px 34px 24px 0px rgba(0, 0, 0, 0.25)"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        fontSize={"12px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        textTransform={"uppercase"}
                        _dark={{ color: "#FFF"}}
                        _light={{ color: "#202020"}}
                        bg={useColorModeValue("#F5F5F7", "#202020")}
                        position={"relative"}
                        display={"flex"}
                        flexDirection={"column"}
                        paddingBottom={"0px"}
                    >
                        Login
                        <Box
                            position={"absolute"}
                            bgImage={useColorModeValue("/public/images/login_modal_bg_dark.png", "../../../../public/images/login_modal_bg_dark.png")}
                            width={"100%"}
                            height={"100%"}
                            top={0}
                            left={0}
                        >
                        </Box>
                        <Text
                            fontSize={"24px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            _dark={{
                                color:"#FFF",
                                bgColor:"#202020"
                            }}
                            _light={{
                                color:"#202020",
                                bgColor:"#F5F5F7"
                            }}
                            textTransform={"capitalize"}
                            mt="26px"
                            mb="26px"
                        >
                            Wallet Login
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        px={0}
                    >
                        {browserWalletProcessSelected === '' ?
                            <OtherBrowserWalletProcess />
                            :
                            <>
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}

                                >
                                    {walletArray.map((item, i) => {
                                        return (
                                            <>
                                                <Box
                                                    display={"flex"}
                                                    justifyContent={"space-between"}
                                                    alignItems={"center"}
                                                    //onClick={()=>connectWallet("injected")}
                                                    onClick={() => handleProcessSelector(item.name)}
                                                    key={i}
                                                    mx={"24px"}
                                                    my={"15px"}
                                                    cursor={"pointer"}
                                                    position={"relative"}
                                                    _after={{
                                                        position: "absolute",
                                                        bottom: "-15px",
                                                        left: 0,
                                                        width: "100%",
                                                        height: "1px",
                                                        bgColor: "#EDEDED",
                                                        content: '""',
                                                    }}
                                                >
                                                    <Box
                                                        display={"flex"}
                                                        alignItems={"center"}
                                                    >
                                                        <Image
                                                            width={"36px"}
                                                            height={"36px"}
                                                            alt="Other Browser wallet"
                                                            src={`/images/${item.icon}`}
                                                        ></Image>
                                                        <Text
                                                            fontSize={"15px"}
                                                            fontWeight={400}
                                                            lineHeight={"20px"}
                                                            _dark={{ color: "#FFF"}}
                                                            _light={{ color: "#202020"}}
                                                            ml="9px"

                                                        >
                                                            {item.name}
                                                        </Text>
                                                    </Box>

                                                    <Box
                                                        width={"24px"}
                                                        height={"24px"}
                                                        _dark={{ bgImage: "/images/next_icon_light.png"}}
                                                        _light={{ bgImage: "/images/next_icon_dark.png"}}
                                                    >
                                                    </Box>
                                                </Box>
                                            </>
                                        )
                                    })}
                                    <Text
                                        fontSize={"15px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        _dark={{ color: "#FFF"}}
                                        _light={{ color: "#202020"}}
                                        width={"100%"}
                                        textAlign={"center"}
                                        mb="15px"
                                        mt="15px"
                                    >
                                        OR
                                    </Text>
                                    <Box
                                        display={"flex"}
                                        cursor={"pointer"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        padding={"15px 18px 15px 9px"}
                                        _dark={{ bgColor: "#202020"}}
                                        _light={{ bgColor: "#E7E7E7"}}
                                        opacity={0.5}
                                        borderRadius={"4px"}
                                        mx={"9px"}
                                    >
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                        >
                                            <Image
                                                width={"24px"}
                                                height={"24px"}
                                                alt="Login via social handles"
                                                src={colorMode === 'light' ?  "/images/user_light.png" : "/images/user_dark.png"}
                                              
                                            ></Image>
                                            <Text
                                                fontSize={"15px"}
                                                fontWeight={400}
                                                lineHeight={"20px"}
                                                _dark={{ color: "#FFF"}}
                                                _light={{ color: "#202020"}}
                                                ml="9px"
                                            >
                                                Login via social handles
                                            </Text>
                                        </Box>
                                        <Box
                                            width={"24px"}
                                            height={"24px"}
                                            _dark={{ bgImage: "/images/next_icon_dark.png"}}
                                            _light={{ bgImage: "/images/next_icon_light.png"}}
                                        >

                                        </Box>
                                    </Box>
                                </Box>
                            </>
                        }

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const OtherBrowserWalletProcess = () => {
    const steps = [
        {
            title: 'Connect Wallet',
            description: 'Tell which address you want to use',
            buttonText: 'Connect'
        },
        {
            title: 'Verify Address',
            description: 'Tell which address you want to use',
            buttonText: 'Verify'
        },
    ]
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
        <>
            <Box

            >
                <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>

                            <Box flexShrink='0'
                                w="100%"
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"flex-start"}

                            >
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}

                                >
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>
                                        {step.description}
                                    </StepDescription>
                                </Box>
                                <Button
                                    fontSize={"12px"}
                                    fontWeight={600}
                                    lineHeight={"20px"}
                                    _dark={{ color: "#FFF", bgColor: "#000000"}}
                                    _light={{ color: "#202020", bgColor: "#FAFAFB"}}
                                    padding={"9px 1"}
                                >
                                    {step.buttonText}
                                </Button>

                            </Box>

                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    );
}

export default LoginPage;