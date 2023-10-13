"use client";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useColorMode,
  useColorModeValue,
  useSteps,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import isEmpty from "is-empty";
import { useDispatch, useSelector } from "react-redux";
import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  LoginMetamask,
  VerifyPublicAddressData,
  loadToken,
  saveToken,
} from "@/redux/auth_data/authSlice";
import { ethers } from "ethers";

const LoginPage = ({ isOpen, onClose }) => {
  const walletArray = [
    /*  {
             name: "Binance",
             icon: "binance_logo.png"
         },
         {
             name: "Coinbase wallet",
             icon: "coinbase_logo.png"
         }, */
    {
      name: "Metamask",
      icon: "metamask_logo.png",
      key: 1,
    },
    /* {
            name: "Other Browser wallet",
            icon: "coinbase_logo.png"
        }, */
  ];

  const [browserWalletProcessSelected, setBrowserWalletProcessSelected] =
    useState(false);

  const handleProcessSelector = (item) => {
    setBrowserWalletProcessSelected(true);
  };
  const { colorMode } = useColorMode();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        borderRadius={"6px"}
        boxShadow={"0px 34px 24px 0px rgba(0, 0, 0, 0.25)"}
        mx={{ base: "14px", md: "0px" }}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(3px) hue-rotate(90deg)"
        />
        <ModalContent mx={{ base: "14px", md: "0px" }}>
          <ModalHeader
            bg={useColorModeValue("#F5F5F7", "#202020")}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            paddingBottom={"0px"}
          >
            {browserWalletProcessSelected === true ? (
              <>
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
                  <TriangleDownIcon mb={"4px"} transform={`rotate(${90}deg)`} />
                  Back
                </Text>
              </>
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
                  Login
                </Text>

                <Box
                  position={"absolute"}
                  bgImage={
                    colorMode === "light"
                      ? "../../../../public/images/login_modal_bg_dark.png"
                      : "/public/images/login_modal_bg_dark.png"
                  }
                  width={"100%"}
                  height={"100%"}
                  top={0}
                  left={0}
                ></Box>
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
                >
                  Wallet Login
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
              <OtherBrowserWalletProcess onClose={onClose} />
            ) : (
              <>
                <Box display={"flex"} flexDirection={"column"}>
                  {walletArray.map((item, i) => {
                    return (
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        onClick={() => handleProcessSelector(item.name)}
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
                        <Box display={"flex"} alignItems={"center"}>
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
                            _dark={{ color: "#FFF" }}
                            _light={{ color: "#202020" }}
                            ml="9px"
                          >
                            {item.name}
                          </Text>
                        </Box>

                        <Box
                          width={"24px"}
                          height={"24px"}
                          _dark={{ bgImage: "/images/next_icon_light.png" }}
                          _light={{ bgImage: "/images/next_icon_dark.png" }}
                        ></Box>
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
                    cursor={"pointer"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"15px 18px 15px 9px"}
                    _dark={{ bgColor: "#202020" }}
                    _light={{ bgColor: "#E7E7E7" }}
                    opacity={0.5}
                    borderRadius={"4px"}
                    mx={"9px"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Image
                        width={"24px"}
                        height={"24px"}
                        alt="Login via social handles"
                        src={
                          colorMode === "light"
                            ? "/images/user_light.png"
                            : "/images/user_dark.png"
                        }
                      ></Image>
                      <Text
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        _dark={{ color: "#FFF" }}
                        _light={{ color: "#202020" }}
                        ml="9px"
                      >
                        Login via social handles
                      </Text>
                    </Box>
                    <Box
                      width={"24px"}
                      height={"24px"}
                      _dark={{ bgImage: "/images/next_icon_dark.png" }}
                      _light={{ bgImage: "/images/next_icon_light.png" }}
                    ></Box>
                  </Box>
                </Box>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const OtherBrowserWalletProcess = ({ onClose }) => {
  const dispatch = useDispatch();
  const { connectWallet, address, error } = useWeb3();
  const UserData = useSelector((state) => state.authData.UserData);
  const LoggedInData = useSelector((state) => state.authData.LoggedInData);
  const { colorMode } = useColorMode();
  const signMessage = async ({ message }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      return {
        message,
        signature,
        address,
      };
    } catch (err) {
      // setError(err.message);
      console.log(err, "Error");
    }
  };

  const handleConnectWallet = () => {
    connectWallet("injected");
  };
  const handleVerifyWallet = () => {
    dispatch(VerifyPublicAddressData(address));
  };

  const handleSign = async () => {
    if (UserData.data?.nonce) {
      const sig = await signMessage({
        message: `I am signing my one-time nonce: ${UserData.data.nonce}`,
      });
      if (sig) {
        const payload = {
          public_address: sig.address,
          signature: sig.signature,
        };
        dispatch(LoginMetamask(payload));
      }
    }
  };
  useEffect(() => {
    if (!isEmpty(address)) {
      handleNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);
  useEffect(() => {
    if (!isEmpty(UserData.data?.nonce)) {
      handleSign();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [UserData]);
  useEffect(() => {
    if (!isEmpty(LoggedInData.data?.token)) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LoggedInData]);
  const { activeStep, isCompleteStep, setActiveStep } = useSteps({
    index: 0,
    count: 2,
  });

  const steps = [
    {
      title: isCompleteStep(0) ? "Wallet Connected" : "Connect Wallet",
      description: isCompleteStep(0)
        ? `Address: ${address}`
        : "Tell which address you want to use",
      buttonText: "Connect",
      buttonFunction: handleConnectWallet,
      isError: error,
    },
    {
      title: "Verify Address",
      description: "Tell which address you want to use",
      buttonText: "Verify",
      buttonFunction: handleVerifyWallet,
      isError: error,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <Box>
        <Stepper index={activeStep} orientation="vertical" gap="0">
          {steps.map((step, index) => (
            <Step
              key={index}
              width={"100%"}
              activeStep={activeStep}
              bgColor={
                colorMode === "light"
                  ? activeStep === index
                    ? "#E7E7E7"
                    : "transparent"
                  : activeStep === index
                  ? "#202020"
                  : "transparent"
              }
              padding={"16px 22px 16px 13px"}
              opacity={activeStep !== index ? "0.4" : "1"}
              borderRadius={"4px"}
            >
              <StepIndicator
                borderColor={activeStep === index && "#71D268!important"}
              >
                <StepStatus
                  complete={<StepIcon bgColor={"#71D268!important"} />}
                  incomplete={<StepNumber borderColor={"#71D268!important"} />}
                  active={<StepNumber borderColor={"#71D268!important"} />}
                />
              </StepIndicator>

              <Box
                w="100%"
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>
                {activeStep === index && (
                  <Button
                    onClick={step.buttonFunction}
                    fontSize={"14px"}
                    fontWeight={600}
                    lineHeight={"20px"}
                    _dark={{ color: "#000", bgColor: "#FFFFFF" }}
                    _light={{ color: "#FFF", bgColor: "#202020" }}
                    padding={"11px"}
                    width={"101px"}
                    borderRadius={"4px"}
                    disabled={!isEmpty(step.isError)}
                  >
                    {!isEmpty(step.isError) ? "Pending" : step.buttonText}
                  </Button>
                )}
              </Box>

              <StepSeparator
                bgColor={"#71D268"}
                maxHeight={
                  "calc(100% - var(--stepper-indicator-size) - 0px)!important"
                }
                top={"calc(var(--stepper-indicator-size) + 16px)!important"}
                left={
                  "calc(var(--stepper-indicator-size) / 2 - -13px)!important"
                }
              />
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default LoginPage;
