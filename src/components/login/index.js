"use client";
import {
    Box,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import AppConfigContext from "@components/context/appConfigContext";
import { walletArray } from "@util/constant";
import { signIn } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const OtherBrowserWalletProcess = dynamic(() => import("@components/login/otherBrowserWalletProcess"));

const LoginPage = ({ isOpen, onClose, web3Verification = false }) => {
    const appConfig = useContext(AppConfigContext);
    const { colorMode } = useColorMode();
    const [browserWalletProcessSelected, setBrowserWalletProcessSelected] = useState(web3Verification);

    const handleProcessSelector = () => {
        setBrowserWalletProcessSelected(true);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                onClose();
                setBrowserWalletProcessSelected(false);
            }}
            borderRadius={"6px"}
            boxShadow={"0px 34px 24px 0px rgba(0, 0, 0, 0.25)"}
            mx={{ base: "14px", md: "0px" }}
            minW={{ md: "501px" }}
        >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(3px)"
            />
            <ModalContent mx={{ base: "14px", md: "0px" }}>
                <ModalHeader
                    bg={useColorModeValue("#F5F5F7", "#202020")}
                    position={"relative"}
                    display={"flex"}
                    bgRepeat={"no-repeat"}
                    bgPos={"right 5px"}
                    bgImage={useColorModeValue(
                        "/icons/light_design_modal.svg",
                        "/icons/dark_design_modal.svg"
                    )}
                    flexDirection={"column"}
                    paddingBottom={"0px"}
                >
                    {browserWalletProcessSelected === true ? (
                        <Text
                            mb="52px"
                            fontSize={"12px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            textTransform={"uppercase"}
                            _dark={{ color: "#FFF" }}
                            _light={{ color: "#202020" }}
                            letterSpacing={"2px"}
                            cursor={"pointer"}
                            onClick={() => {
                                setBrowserWalletProcessSelected(false);
                            }}
                        >
                            Back
                        </Text>
                    ) : (
                        <>
                            <Text
                                fontSize={"12px"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                textTransform={"uppercase"}
                                _dark={{ color: "#FFF" }}
                                _light={{ color: "#202020" }}
                            >
                                BetygFi
                            </Text>

                            <Text
                                fontSize={"24px"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                _dark={{
                                    color: "#FFF",
                                    bgColor: "#202020",
                                }}
                                _light={{
                                    color: "#202020",
                                    bgColor: "#F5F5F7",
                                }}
                                textTransform={"capitalize"}
                                mt="26px"
                                mb="26px"
                                w={"fit-content"}
                            >
                                {/* Join the Conversation */}
                            </Text>
                        </>
                    )}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    px={0}
                    padding={"14px"}
                    _light={{
                        bgColor: "white",
                    }}
                    _dark={{
                        bgColor: "#313131",
                    }}
                >
                    {browserWalletProcessSelected === true ? (
                        <OtherBrowserWalletProcess
                            onClose={onClose}
                            web3Verification={web3Verification}
                            setBrowserWalletProcessSelected={
                                setBrowserWalletProcessSelected
                            }
                        />
                    ) : (
                        <Box display={"flex"} flexDirection={"column"}>
                            {walletArray.map((item) => {
                                return (
                                    <Box
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                        onClick={() =>
                                            handleProcessSelector()
                                        }
                                        key={item.key}
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
                                                // unoptimized="true"
                                                // priority="true"
                                                width={36}
                                                height={36}
                                                alt="Other Browser wallet"
                                                src={`/icons/${item.icon}`}
                                            />
                                            <Text
                                                fontSize={"15px"}
                                                fontWeight={400}
                                                lineHeight={"20px"}
                                                _dark={{
                                                    color: "#FFF",
                                                }}
                                                _light={{
                                                    color: "#202020",
                                                }}
                                                ml="9px"
                                            >
                                                {item.name}
                                            </Text>
                                        </Box>

                                        <i
                                            className={`icon ${colorMode === "light"
                                                ? "next_icon_light"
                                                : "next_icon_dark"
                                                }`}
                                        ></i>
                                    </Box>
                                );
                            })}
                            <Text
                                fontSize={"15px"}
                                fontWeight={400}
                                lineHeight={"20px"}
                                _dark={{ color: "#FFF" }}
                                _light={{ color: "#202020" }}
                                width={"100%"}
                                textAlign={"center"}
                                mb="15px"
                                mt="15px"
                            >
                                OR
                            </Text>
                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                onClick={() => {
                                    localStorage.setItem('googleAuthInitiated', true);
                                    signIn('google');
                                }}
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
                                    <Icon
                                        as={FcGoogle}
                                        boxSize={"36px"}
                                        alt="Other Browser wallet"
                                    />
                                    <Text
                                        fontSize={"15px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        _dark={{ color: "#FFF" }}
                                        _light={{ color: "#202020" }}
                                        ml="9px"
                                    >
                                        Join with Google
                                    </Text>
                                </Box>

                                <i
                                    className={`icon ${colorMode === "light"
                                        ? "next_icon_light"
                                        : "next_icon_dark"
                                        }`}
                                ></i>
                            </Box>
                            <Box mt="12px" display={"flex"}>
                                <Text variant={"greySmallText"}>
                                    By continuing with the login process
                                    you are agreeging to
                                </Text>
                                <Link
                                    href={`${appConfig.NEXT_PUBLIC_BETYGFI_URL}/legal`}
                                    target="_blank"
                                >
                                    <Text
                                        variant={"greySmallText"}
                                        _light={{ color: "#191919" }}
                                        _dark={{ color: "#FFF" }}
                                        textDecoration={"underline"}
                                        ml="5px"
                                    >
                                        Terms & Conditions
                                    </Text>
                                </Link>
                            </Box>
                        </Box>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default LoginPage;
