"use client";
import React, { useState } from "react";
//import { useSelector } from "react-redux";
import { Box, Text, Button, useMediaQuery, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import EditPage from "./editModal";


const ProfileBox = () => {
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const [isModalOpen, setIsModalOpen] = useState(false);
    /* const handleOpenModal = () => {
        setIsModalOpen(true);
    }; */
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const { colorMode } = useColorMode();
    //const UserDetailsData = useSelector((state) => state.authData.UserDetailsData);

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
                        <Button variant={"settingsButton"}>
                            <Text variant={"SettingsButtonText"}>
                                Edit Details
                            </Text>
                        </Button>
                    </Box>
                    <Box pt={"20px"} layerStyle={"flexCenterSpaceBetween"}>
                        <Box layerStyle={"flexCenter"} gap={"17px"}>
                            <Image
                                style={{
                                    borderRadius: "50%",
                                }}
                                width={150}
                                height={150}
                                alt="profile_img"
                                src="/images/Profile_photo.svg"
                            ></Image>
                            <Box >
                                <Text variant={"smallTableHeader"} lineHeight={"normal"}>
                                    Cameron Williamson
                                </Text>
                                <Text variant={"h3"} lineHeight={"normal"}
                                    _light={{
                                        color: "#757575"
                                    }}
                                    _dark={{
                                        bg: "#A5A5A5"
                                    }}
                                    pt={"6px"}>
                                    @TBgjD…CYVg4
                                </Text>
                                <Text variant={"h3"} lineHeight={"normal"}
                                    _light={{
                                        color: "#757575"
                                    }}
                                    _dark={{
                                        bg: "#A5A5A5"
                                    }} pt={"6px"}>
                                    Member since: 12/11/2022
                                </Text>
                            </Box>
                        </Box>
                        <Box
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
                                72
                            </Text>
                        </Box>
                    </Box>
                    <Box pt={"20px"}>
                        <Text variant={"h3"} lineHeight={"normal"}
                            _light={{
                                color: "#757575"
                            }}
                            _dark={{
                                bg: "#A5A5A5"
                            }}

                        >
                            About Me:
                        </Text>
                        <Text variant={"h3"} lineHeight={"normal"}
                            _light={{
                                color: "#757575"
                            }}
                            _dark={{
                                bg: "#A5A5A5"
                            }}
                            paddingTop={"10px"}>
                            I’m a crypto enthusiast—navigating the blockchain with a passion for decentralized innovation and a keen eye on the ever-evolving landscape, reshaping the future of finance one digital asset at a time.
                        </Text>
                    </Box>
                </Box>
            ) : (
                <Box
                    height={"525px"}
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
                            width={20}
                            height={20}
                            src={colorMode === "light" ? ("/icons/Edit_icon.svg") : ("/icons/Edit_icon(Dark).svg")}
                            alt="edit_icon"
                            mr={"25px"}
                        ></Image>
                    </Box>

                    <Box layerStyle={"flexColumnCenterSpaceAround"}>
                        <Image
                            style={{
                                borderRadius: "50%",
                            }}
                            width={150}
                            height={150}
                            alt="profile_img"
                            src="/images/Profile_photo.svg"
                        ></Image>
                        <Text variant={"smallTableHeader"} lineHeight={"normal"} pt={"15px"}>
                            Cameron Williamson
                        </Text>
                        <Text variant={"h3"} lineHeight={"normal"} _light={{
                            color: "#757575"
                        }}
                            _dark={{
                                color: "#A5A5A5"
                            }} pt={"10px"}>
                            @TBgjD…CYVg4
                        </Text>
                        <Text variant={"h3"} lineHeight={"normal"}
                            _light={{
                                color: "#757575"
                            }}
                            _dark={{
                                color: "#A5A5A5"
                            }}
                            pt={"10px"}>
                            Member since: 12/11/2022
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
                                I’m a crypto enthusiast—navigating the blockchain with a passion for decentralized innovation and a keen eye on the ever-evolving landscape, reshaping the future of finance one digital asset at a time.
                            </Text>
                        </Box>
                        <Box
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
                                    72
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            )

        }



            <EditPage isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default ProfileBox;
