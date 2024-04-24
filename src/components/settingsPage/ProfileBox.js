"use client";
import React, { useEffect, useRef, useState } from "react";
//import { useSelector } from "react-redux";
import { Box, Text, Button, useMediaQuery, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import EditPage from "./editModal";
import { useDispatch, useSelector } from "react-redux";
import { PublicAddressStringFormatter } from "@util/utility";
import moment from "moment";
import { changeProfilePic } from "@redux/auth_data/authSlice";

const ProfileBox = () => {
    const fileInputRef = useRef(null);
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const { colorMode } = useColorMode();
    const UserDetailsData = useSelector((state) => state.authData.UserDetailsData);

    const [userImg, setUserImg] = useState(null);
    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const i = e.target.files[0];
            let formData = new FormData();
            formData.append('profilePic', i);
            setUserImg(URL.createObjectURL(i));
            dispatch(changeProfilePic(formData));
        }
    };

    useEffect(() => {
        setUserImg(UserDetailsData?.data?.user?.profile_url);
    }, [UserDetailsData]);

    return (
        <>{
            isMd ? (

                <Box
                    borderRadius={"6px"}
                    _light={{
                        bg: "#FFFFFF"
                    }}
                    _dark={{
                        bg: "#202020"
                    }}
                    p={"10px 20px 20px"}
                >
                    <Box layerStyle={"flexCenter"} gap={"17px"}>
                        <Text variant={"contentHeading3"} fontWeight={"400"}>
                            Profile Details
                        </Text>
                        <Button variant={"settingsButton"} onClick={handleOpenModal}>
                            <Text variant={"SettingsButtonText"}>
                                Edit Details
                            </Text>
                        </Button>
                    </Box>
                    <Box pt={"20px"} layerStyle={"flexCenterSpaceBetween"}>
                        <Box layerStyle={"flexCenter"} gap={"17px"}>
                            <Box
                                pos={"relative"}
                            >
                                <Image
                                    // unoptimized={'true'}
                                    // priority={'true'}
                                    style={{
                                        borderRadius: "50%",
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                        background: " linear-gradient(36deg, #272b66 42.34%, transparent 42.34%) 0 0",
                                        backgroundRepeat: " no-repeat"
                                    }}
                                    width={150}
                                    height={150}
                                    alt="profile_img"
                                    src={userImg === null || userImg === undefined ? "/icons/avatar_icon_light.svg" : userImg}
                                ></Image>
                                <Box pos={"absolute"} zIndex={"10"} bottom={"-4px"} left={"5px"} bgImage={"/icons/intersect.svg"} bgPosition={"center"} bgRepeat={"no-repeat"} width={"140px"} height={"43px"}
                                    cursor={"pointer"}
                                >
                                    <input type="file" onChange={(e) => handleChange(e)} hidden ref={fileInputRef} />
                                    <Text variant={"h5"} color={"#FFFFFF"} textAlign={"center"} pt="5px"
                                        onClick={() => {
                                            fileInputRef.current.click();
                                        }}
                                    >
                                        Change
                                    </Text>
                                </Box>
                            </Box>

                            <Box >
                                <Text variant={"smallTableHeader"} lineHeight={"normal"}>
                                    {UserDetailsData?.data?.user?.name ? (
                                        UserDetailsData?.data?.user?.name
                                    ) : (
                                        "No Name"
                                    )}
                                </Text>
                                <Text variant={"h3"} lineHeight={"normal"}
                                    _light={{
                                        color: "#757575"
                                    }}
                                    _dark={{
                                        color: "#A5A5A5"
                                    }}
                                    pt={"6px"}>
                                    @{PublicAddressStringFormatter(UserDetailsData?.data?.user?.user_name)}
                                </Text>
                                <Text variant={"h3"} lineHeight={"normal"}
                                    _light={{
                                        color: "#757575"
                                    }}
                                    _dark={{
                                        color: "#A5A5A5"
                                    }} pt={"6px"}>
                                    Member since: {UserDetailsData?.data?.memberSince ? moment(UserDetailsData?.data?.memberSince).format("DD/MM/YYYY") : "-"}
                                </Text>
                            </Box>
                        </Box>
                        {/* <Box
                            width={"184px"}
                            height={"70px"}
                            background={"#494949"}
                            borderRadius={"10px"}

                        >
                            <Box p={"12px 0px 3px"} layerStyle={"flexCenterSpaceAround"}>
                                <Box borderBottom={"dotted"} borderColor={"#A4A8AB"} pt={"2px"}>
                                    <Text variant={"profileText"} pb={"5px"}>
                                        Profile Score
                                    </Text>
                                </Box>
                                <Image src="/icons/question_mark_lg_icon.svg" width={20} height={20} alt="question_mark"></Image>
                            </Box>
                            <Text variant={"profileText"} fontSize={"24px"} p={"1px 24px"}>
                                {UserDetailsData?.data?.user?.profile_score ? (
                                    "-"
                                ) : (
                                    UserDetailsData?.data?.user?.profile_score
                                )}

                            </Text>
                        </Box> */}
                    </Box>
                    <Box pt={"20px"}>
                        <Text variant={"h3"} lineHeight={"normal"}
                            _light={{
                                color: "#757575"
                            }}
                            _dark={{
                                color: "#A5A5A5"
                            }}

                        >
                            About Me:
                        </Text>
                        <Text variant={"h3"} lineHeight={"normal"}
                            _light={{
                                color: "#757575"
                            }}
                            _dark={{
                                color: "#A5A5A5"
                            }}
                            paddingTop={"10px"}>
                            {UserDetailsData?.data?.user?.about ? (
                                UserDetailsData?.data?.user?.about
                            ) : (
                                "I’m a crypto enthusiast—navigating the blockchain with a passion for decentralized innovation and a keen eye on the ever-evolving landscape, reshaping the future of finance one digital asset at a time."
                            )}
                        </Text>
                    </Box>
                </Box>
            ) : (
                <Box
                    pb={"20px"}
                    flexShrink={0}
                    borderRadius={"6px"}
                    _light={{
                        bg: "#FFFFFF"
                    }}
                    _dark={{
                        bg: "#202020"
                    }}
                    mx={"15px"}
                >
                    <Box p={"15px 0px 20px 21px"} layerStyle={"flexCenterSpaceBetween"}>
                        <Text variant={"contentHeading3"} fontWeight={"400"}>
                            Profile Details
                        </Text>
                        <Image
                            onClick={handleOpenModal}
                            width={20}
                            height={20}
                            src={colorMode === "light" ? ("/icons/Edit_icon.svg") : ("/icons/Edit_icon(Dark).svg")}
                            alt="edit_icon"
                            style={{ marginRight: "25px" }}
                        ></Image>
                    </Box>

                    <Box layerStyle={"flexColumnCenterSpaceAround"}>
                        <Box
                            pos={"relative"}
                        >
                            <Image
                                // unoptimized={'true'}
                                // priority={'true'}
                                style={{
                                    borderRadius: "50%",
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover",
                                    background: " linear-gradient(36deg, #272b66 42.34%, transparent 42.34%) 0 0",
                                    backgroundRepeat: " no-repeat"
                                }}
                                width={150}
                                height={150}
                                alt="profile_img"
                                src={userImg === null || userImg === undefined ? "/icons/avatar_icon_light.svg" : userImg}
                            ></Image>
                            <Box pos={"absolute"} zIndex={"10"} bottom={"-4px"} left={"5px"} bgImage={"/icons/intersect.svg"} bgPosition={"center"} bgRepeat={"no-repeat"} width={"140px"} height={"43px"}
                                cursor={"pointer"}
                            >
                                <input type="file" onChange={(e) => handleChange(e)} hidden ref={fileInputRef} />
                                <Text variant={"h5"} color={"#FFFFFF"} textAlign={"center"} pt="5px"
                                    onClick={() => {
                                        fileInputRef.current.click();
                                    }}
                                >
                                    Change
                                </Text>
                            </Box>
                        </Box>
                        <Text variant={"smallTableHeader"} lineHeight={"normal"} pt={"15px"}>
                            {UserDetailsData?.data?.user?.name ? (
                                UserDetailsData?.data?.user?.name
                            ) : (
                                "No Name"
                            )}
                        </Text>
                        <Text variant={"h3"} lineHeight={"normal"} _light={{
                            color: "#757575"
                        }}
                            _dark={{
                                color: "#A5A5A5"
                            }} pt={"10px"}>
                            @{PublicAddressStringFormatter(UserDetailsData?.data?.user?.user_name)}

                        </Text>
                        <Text variant={"h3"} lineHeight={"normal"}
                            _light={{
                                color: "#757575"
                            }}
                            _dark={{
                                color: "#A5A5A5"
                            }}
                            pt={"10px"}>
                            Member since: {UserDetailsData?.data?.memberSince ? moment(UserDetailsData?.data?.memberSince).format("DD/MM/YYYY") : "-"}
                        </Text>
                        <Box mx={"20px"} pt={"25px"}>
                            <Text variant={"h3"} lineHeight={"normal"}
                                _light={{
                                    color: "#757575"
                                }}
                                _dark={{
                                    color: "#A5A5A5"
                                }}>
                                About Me:
                            </Text>
                            <Text variant={"h3"} lineHeight={"normal"}
                                _light={{
                                    color: "#191919"
                                }}
                                _dark={{
                                    color: "#FFFFFF"
                                }} paddingTop={"10px"}>
                                {UserDetailsData?.data?.user?.about ? (
                                    UserDetailsData?.data?.user?.about
                                ) : (
                                    "I’m a crypto enthusiast—navigating the blockchain with a passion for decentralized innovation and a keen eye on the ever-evolving landscape, reshaping the future of finance one digital asset at a time."
                                )}
                            </Text>
                        </Box>
                        {/* <Box
                            width={"290px"}
                            height={"50px"}
                            background={"#494949"}
                            borderRadius={"10px"}
                            mt={"20px"}
                        >
                            <Box p={"5px 0px 20px 13px"} borderColor={"#A4A8AB"} layerStyle={"flexCenterSpaceBetween"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Text variant={"profileText"}>
                                        Profile Score
                                    </Text>
                                    <Image src="/icons/question_mark_lg_icon.svg" width={20} height={20} alt="question_mark"></Image>
                                </Box>
                                <Text variant={"profileText"} fontSize={"24px"} p={"5px 24px"}>
                                    {UserDetailsData?.data?.user?.profile_score ? (
                                        "-"
                                    ) : (
                                        UserDetailsData?.data?.user?.profile_score
                                    )}
                                </Text>
                            </Box>
                        </Box> */}
                    </Box>
                </Box>
            )
        }
            <EditPage isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default ProfileBox;
