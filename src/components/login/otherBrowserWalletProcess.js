/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useColorMode, useSteps, useToast } from "@chakra-ui/react";
import isEmpty from "lodash/isEmpty";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useConnect } from "wagmi";
import { signMessage as wagmiSignMessage, getAccount } from '@wagmi/core';
import {
    LoginGetToken,
    StoreLoggedInUserData,
    VerifyPublicAddressData,
    verifyJWTtokenFromCookie,
} from "@redux/auth_data/authSlice";
import CustomToast from "@components/toast";
import { config } from "@app/Web3Provider";


const OtherBrowserWalletProcess = ({
    onClose,
    setBrowserWalletProcessSelected,
    web3Verification
}) => {
    const dispatch = useDispatch();
    const { connector } = getAccount(config);
    const { connect, connectors, error } = useConnect();
    const { address, isConnected } = useAccount();
    const verifiedPublicAddressData = useSelector((state) => state.authData.verifiedPublicAddressData);
    const LoggedInData = useSelector((state) => state.authData.LoggedInData);
    const { colorMode } = useColorMode();
    const toast = useToast();
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: 2,
    });
    /*     const { signMessage: wagmiSignMessage } = useSignMessage(); */
    const signMessage = async ({ message }) => {
        try {
            if (!window.ethereum) {
                toast({
                    position: "bottom",
                    render: () => (
                        <CustomToast
                            isSuccessful={false}
                            content={"No crypto wallet found. Please install it."}
                        />
                    ),
                });
                throw new Error("No crypto wallet found. Please install it.");

            }

            const result = await wagmiSignMessage(config, {
                connector,
                message: message
            });
            const signature = result;
            return {
                message,
                signature,
                address,
            };
        } catch (err) {
            // setError(err.message);
        }
    };

    const handleConnectWallet = async (connector) => {
        try {
            if (!window.ethereum) {
                toast({
                    position: "bottom",
                    render: () => (
                        <CustomToast
                            isSuccessful={false}
                            content={"No crypto wallet found. Please install it."}
                        />
                    ),
                });
                throw new Error("No crypto wallet found. Please install it.");

            }

            connect({ connector });
        } catch (err) {
            // setError(err.message);
        }
    };
    const handleVerifyWallet = () => {
        dispatch(VerifyPublicAddressData(address));
    };

    const handleSign = async () => {
        if (verifiedPublicAddressData.data?.nonce) {
            const sig = await signMessage({
                message: `I am signing my one-time nonce: ${verifiedPublicAddressData.data.nonce}`,
            });
            if (sig) {
                const payload = {
                    public_address: sig.address,
                    signature: sig.signature,
                };
                dispatch(LoginGetToken(payload));
            }
        }
    };
    useEffect(() => {
        if (!isEmpty(address)) {
            handleNext();
        } else {
            setActiveStep(0);
        }
    }, [address]);
    useEffect(() => {
        if (!isEmpty(verifiedPublicAddressData.data?.nonce)) {
            handleSign();
        }
    }, [verifiedPublicAddressData]);
    useEffect(() => {
        if (!isEmpty(LoggedInData.data?.token)) {
            setBrowserWalletProcessSelected(false);
            onClose();
            if (!web3Verification) {
                setTimeout(() => {
                    dispatch(StoreLoggedInUserData());
                }, 100);
                const payload = {
                    token: LoggedInData.data?.token,
                };
                dispatch(verifyJWTtokenFromCookie(payload));
    
            }
        }
    }, [LoggedInData]);
    const steps = [
        {
            title: isConnected ? "Wallet Connected" : "Connect Wallet",
            description: isConnected
                ? `Address: ${address?.split("").join("").substring(0, 6) +
                "..." +
                address?.slice(-5)
                }`
                : "Tell which address you want to use",
            buttonText: "Connect",
            buttonFunction: () => handleConnectWallet(connectors[0]),
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

    return (
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
    );
};
export default OtherBrowserWalletProcess;