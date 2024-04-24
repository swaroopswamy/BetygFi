"use client";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import InputText from "./editDetailsInput/input";
import React, { useState, useEffect } from "react";
import { ResetEditUserDetailsData, ResetUsernameValidData, editUserDetails, usernameValidity } from "@/redux/auth_data/authSlice";
import { useRouter } from "next/navigation";


const EditPage = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const UserDetailsData = useSelector((state) => state.authData.UserDetailsData);
    const EditUserDetailsData = useSelector((state) => state.authData.editUserDetailsData);
    const UsernameValidData = useSelector((state) => state.authData.UsernameValidData);
    const [newUsername, setNewUserame] = useState(null);

    const [userData, setUserData] = useState({
        fullname: UserDetailsData?.data?.user?.name ?? "",
        user_name: UserDetailsData?.data?.user?.user_name ?? "",
        email: UserDetailsData?.data?.user?.email ?? "",
        twitter: UserDetailsData?.data?.user?.twitter ?? "",
        aboutme: UserDetailsData?.data?.user?.about ?? "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "user_name") {
            setUserData((prevData) => ({
                ...prevData,
                user_name: value,
            }));
            setNewUserame(value);
            const payload = {
                user_name: value,
            };
            dispatch(usernameValidity(payload));
        } else {
            setUserData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = () => {
        const payload = {
            name: userData?.fullname,
            user_name: userData?.user_name,
            email: userData?.email,
            twitter: userData?.twitter,
            about: userData?.aboutme
        };
        dispatch(editUserDetails(payload));
    };

    useEffect(() => {
        if (EditUserDetailsData?.isSuccess && newUsername !== null) {
            onClose();
            dispatch(ResetEditUserDetailsData());
            dispatch(ResetUsernameValidData());
            setTimeout(() => {
                window.location.reload();
            }, 500);
            router.replace(`/settings/${newUsername}`);

        } else if (EditUserDetailsData.isSuccess) {
            onClose();
        }
    }, [dispatch, EditUserDetailsData]);
    useEffect(() => {
        setUserData({
            fullname: UserDetailsData?.data?.user?.name ?? "",
            user_name: UserDetailsData?.data?.user?.user_name ?? "",
            email: UserDetailsData?.data?.user?.email ?? "",
            twitter: UserDetailsData?.data?.user?.twitter ?? "",
            aboutme: UserDetailsData?.data?.user?.about ?? "",
        });
    }, [UserDetailsData]);

    const handleSuggestionSelected = (suggested) => {
        setUserData((prevData) => ({
            ...prevData,
            user_name: suggested
        }));
        dispatch(usernameValidity(suggested));
    };
    const handleClose = () => {
        Promise.all([
            setUserData({
                fullname: UserDetailsData?.data?.user?.name ?? "",
                user_name: UserDetailsData?.data?.user?.user_name ?? "",
                email: UserDetailsData?.data?.user?.email ?? "",
                twitter: UserDetailsData?.data?.user?.twitter ?? "",
                aboutme: UserDetailsData?.data?.user?.about ?? "",
            }),
            onClose(),
            dispatch(ResetEditUserDetailsData()),
            dispatch(ResetUsernameValidData()),
        ]).then(res => res);
    };
    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                onClose();
            }}
            borderRadius={"6px"}
            boxShadow={"0px 34px 24px 0px rgba(0, 0, 0, 0.25)"}
        >
            <ModalOverlay
                bg="blackAlpha.100"
                backdropFilter="blur(3px)"
            />
            <ModalContent
                p={{ base: "20px 15px", md: "41px 32px" }}
                _light={{
                    bg: "#FFFFFF"
                }}
                _dark={{
                    bg: "#313131"
                }}
                minW={{ md: "580px" }}
            >
                <ModalHeader p={"0px"}>Edit Profile Details</ModalHeader>
                <ModalBody p={"0px"}
                    // onChange={(e) => {
                    //     handleSubmit(e);
                    // }}
                    mt={"30px"}
                >

                    <Box
                        display={"flex"}
                        flexDir={"column"}
                    >
                        <Box display={"flex"} w="100%" flexDir={"row"} pb="24px">
                            <Box w="17%" layerStyle={"flexCenter"} >
                                <Text variant={"editModalText"}>
                                    Full Name:
                                </Text>
                            </Box>
                            <Box w="83%">
                                <InputText
                                    value={userData?.fullname}
                                    placeholder={"Enter your Full Name"}
                                    type={"text"}
                                    name="fullname"
                                    onChange={handleInputChange}
                                />
                            </Box>
                        </Box>
                        <Box display={"flex"} w="100%" flexDir={"row"} pb="24px">
                            <Box w="17%" layerStyle={"flexCenter"} >
                                <Text variant={"editModalText"}>
                                    User Name:
                                </Text>
                            </Box>
                            <Box w="83%">
                                    <InputText
                                        value={userData?.user_name}
                                        placeholder={"Enter your Username"}
                                        type={"text"}
                                        onChange={handleInputChange}
                                        name="user_name"
                                        validUsername={UsernameValidData?.isSuccess}
                                    />
                            </Box>
                        </Box>
                        <Box display={"flex"} w="100%" flexDir={"row"} >
                            <Box w="17%"></Box>
                            <Box w="83%">
                                {
                                    userData?.user_name === '' ?
                                        <Text variant={"warningText"} color={"#525252"} pt="5px">
                                            -  3 to 68 characters long       -  A-Z, a-z, 0-9, _, and - are allowed
                                        </Text>
                                        : (
                                            !UsernameValidData?.isSuccess ?
                                                (
                                                    <Box layerStyle={"flexColumn"} pb="14px">
                                                        <Text variant={"warningText"} color={"#FF0000"} py="10px">
                                                            {
                                                                UsernameValidData?.data?.error
                                                            }
                                                        </Text>
                                                        <Box layerStyle={"flexCenter"}>
                                                            {UsernameValidData?.data?.data?.map((suggestedUsername, i) => {
                                                                return (
                                                                    <Box key={i} bgColor={"#EEEEEE"} borderRadius={"4px"} p={"3px 8px"} mr={"8px"} cursor={"pointer"}
                                                                        onClick={() => {
                                                                            handleSuggestionSelected(suggestedUsername);
                                                                        }}
                                                                    >
                                                                        <Text variant={"editModalText"}>
                                                                            {suggestedUsername}
                                                                        </Text>
                                                                    </Box>
                                                                );
                                                            })}
                                                        </Box>

                                                    </Box>
                                                ) :
                                                (
                                                    <Box layerStyle={"flexCenter"} pb="14px">
                                                        <i className="icon green_check_circle" />
                                                        <Text variant={"warningText"} color={"#245F00"} ml={"5px"}>
                                                            Username available
                                                        </Text>
                                                    </Box>
                                                )
                                        )

                                }
                            </Box>
                        </Box>
                        <Box display={"flex"} w="100%" flexDir={"row"} pb="24px">
                            <Box w="17%" layerStyle={"flexCenter"}>
                                <Text variant={"editModalText"}>
                                    Wallet:
                                </Text>
                            </Box>
                            <Box w="83%">
                                <Box w="100%"
                                    _dark={{
                                        bgColor: "#494949",
                                        border: "1px solid #D9D9D9"
                                    }}
                                    _light={{
                                        bgColor: "#EDEDED",
                                        border: "1px solid #D9D9D9"
                                    }}
                                    p={"9px 14px"}
                                    borderRadius={"7px"}
                                >
                                    <Text variant={"editModalText"}>
                                        {UserDetailsData?.data?.user?.public_address}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box display={"flex"} w="100%" flexDir={"row"} pb="24px">
                            <Box w="17%" layerStyle={"flexCenter"}>
                                <Text variant={"editModalText"}>
                                    Email:
                                </Text>
                            </Box>
                            <Box w="83%">
                                <InputText
                                    value={userData?.email}
                                    placeholder={"Enter your E-mail"}
                                    type={"text"}
                                    name="email"
                                    onChange={handleInputChange}
                                />
                            </Box>
                        </Box>
                        <Box display={"flex"} w="100%" flexDir={"row"} pb="24px">
                            <Box w="17%" layerStyle={"flexCenter"}>
                                <Text variant={"editModalText"}>
                                    Twitter:
                                </Text>
                            </Box>
                            <Box w="83%">
                                <InputText
                                    value={userData?.twitter}
                                    placeholder={"Enter your Twitter Profile URL"}
                                    type={"text"}
                                    name="twitter"
                                    onChange={handleInputChange}
                                />
                            </Box>
                        </Box>
                        <Box display={"flex"} w="100%" flexDir={"row"} pb="20px">
                            <Box w="17%" layerStyle={"flexCenter"} alignItems={"flex-start"} pt="10px">
                                <Text variant={"editModalText"}>
                                    About me:
                                </Text>
                            </Box>
                            <Box w="83%">
                                <InputText
                                    value={userData?.aboutme}
                                    placeholder={"Breif about yourself"}
                                    type={"textarea"}
                                    name="aboutme"
                                    onChange={handleInputChange}
                                />
                            </Box>
                        </Box>
                        <Box display={"flex"} w="100%" flexDir={"row"} >
                            <Box w="17%"></Box>
                            <Box w="83%" display={"flex"} flexDir={"row"} justifyContent={"center"}>
                                <Button
                                    variant={"whiteButton"}
                                    onClick={() => {
                                        handleClose();
                                    }}
                                    mr="18px"
                                    w="154px"
                                    borderRadius={"6px"}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    w="154px"
                                    borderRadius={"6px"}
                                    variant={"blackButton"}
                                    onClick={(e) => {
                                        handleSubmit(e);
                                    }}
                                >
                                    Update
                                </Button>
                            </Box>
                        </Box>

                    </Box>
                </ModalBody>

            </ModalContent>
        </Modal >
    );
};

export default EditPage;


