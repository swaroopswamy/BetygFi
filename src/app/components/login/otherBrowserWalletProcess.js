import { Box, Button, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useColorMode, useSteps } from "@chakra-ui/react";
import { ethers } from "ethers";
import isEmpty from "is-empty";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useConnect } from "wagmi";
import {
    LoginGetToken,
    StoreLoggedInUserData,
    VerifyPublicAddressData,
} from "@/redux/auth_data/authSlice";
import { signIn } from "next-auth/react";



const OtherBrowserWalletProcess = ({
    onClose,
    setBrowserWalletProcessSelected,
}) => {
    const dispatch = useDispatch();
    const { connect, connectors, error } = useConnect();
    const { address, isConnected } = useAccount();
    const verifiedPublicAddressData = useSelector((state) => state.authData.verifiedPublicAddressData);
    const LoggedInData = useSelector((state) => state.authData.LoggedInData);
    const { colorMode } = useColorMode();

    // eslint-disable-next-line no-unused-vars
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: 2,
    });
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
            // console.log(err, "Error");
        }
    };

    const handleConnectWallet = async (connector) => {
        try {
            if (!window.ethereum)
                throw new Error("No crypto wallet found. Please install it.");

            await window.ethereum.send("eth_requestAccounts");
            connect({ connector });
        } catch (err) {
            // setError(err.message);
            // console.log(err, "Error");
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address]);
    useEffect(() => {
        if (!isEmpty(verifiedPublicAddressData.data?.nonce)) {
            handleSign();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [verifiedPublicAddressData]);

    useEffect(() => {
        if (!isEmpty(LoggedInData.data?.token)) {
            setBrowserWalletProcessSelected(false);
            onClose();
            setTimeout(() => {
                dispatch(StoreLoggedInUserData());
                setTimeout(() => {
                    signIn("web3",LoggedInData?.data);
                }, 100);
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [LoggedInData]);

    const steps = [
        {
            title: isConnected ? "Wallet Connected" : "Connect Wallet",
            description: isConnected
                ? `Address: ${address.split("").join("").substring(0, 6) +
                "..." +
                address.slice(-5)
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

    // const handleBack = () => {
    //   setActiveStep((prevStep) => prevStep - 1);
    // };

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