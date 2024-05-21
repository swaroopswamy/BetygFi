"use client";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

const EnterpriseFooter = () => {
    const [formValue, setFormValue] = useState({
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const mailtoLink = `mailto:sid.rawat.sr2@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
            `Email: ${formValue.email}`
        )}`;

        window.location.href = mailtoLink;
    };

    return (
        <Box
            bg={"#F8F9FA"}
            pt={"86px"}
            pb={"40px"}
            layerStyle={"flexColumn"}
            alignItems={"center"}
            mt={"100px"}
        >
            <Box w={"80%"} layerStyle={"flexCenter"} borderBottom={"1px solid rgba(51, 51, 51, 0.24)"} pb={"50px"}>
                <Box mb={"50px"}>
                    <Image src={"/icons/New_BetgFi_Logo_Light.svg"} width={138} height={22} alt="logo"></Image>
                    <Text
                        fontFamily={"Roboto"}
                        variant={"h4"}
                        lineHeight={"24px"}
                        textAlign={"left"}
                        color={"#77808B"}
                        mt={"20px"}
                    >
                        BetygFi is an Information Utility dedicated to democratizing access to information.
                    </Text>
                    <Text
                        fontFamily={"Roboto"}
                        variant={"h4"}
                        lineHeight={"24px"}
                        textAlign={"left"}
                        color={"#283646"}
                        mt={"20px"}
                    >
                        Copyright BetygFi
                    </Text>
                </Box>
                <Box ml={"100px"}>
                    <Text
                        fontFamily={"Roboto"}
                        fontSize={"16px"}
                        fontWeight={700}
                        lineHeight={"22px"}
                        color={"#333333"}
                    >
                        Service
                    </Text>
                    <Box
                        fontFamily={"Roboto"}
                        variant={"h4"}
                        lineHeight={"24px"}
                        textAlign={"left"}
                        color={"#77808B"}
                    >
                        <Text mt={"25px"} cursor={"pointer"}>
                            Illustration
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Mobile Design
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Motion Graphic
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Web Design
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Development
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            SEO
                        </Text>
                    </Box>
                </Box>
                <Box ml={"100px"}>
                    <Text
                        fontFamily={"Roboto"}
                        fontSize={"16px"}
                        fontWeight={700}
                        lineHeight={"22px"}
                        color={"#333333"}
                    >
                        Company
                    </Text>
                    <Box
                        fontFamily={"Roboto"}
                        variant={"h4"}
                        lineHeight={"24px"}
                        textAlign={"left"}
                        color={"#77808B"}                    >
                        <Text mt={"25px"} cursor={"pointer"}>
                            Service
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Features
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Our Team
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            About Us
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Blog
                        </Text>
                        <Text mt={"15px"} cursor={"pointer"}>
                            Contact Us
                        </Text>
                    </Box>
                </Box>
                <Box ml={"100px"} mb={"65px"}>
                    <Text
                        fontFamily={"Roboto"}
                        fontSize={"16px"}
                        fontWeight={700}
                        lineHeight={"22px"}
                        color={"#333333"}
                        mb={"25px"}
                    >
                        Join a Newsletter
                    </Text>
                    <Text
                        fontFamily={"Roboto"}
                        variant={"h4"}
                        lineHeight={"24px"}
                        color={"#77808B"}
                    >
                        Your Email
                    </Text>
                    <Box layerStyle={"flexCenter"} mt={"10px"} gap={"25px"} as="form" onSubmit={handleSubmit}>
                        <Input
                            placeholder='Enter Your Email'
                            width={"300px"}
                            height={"40px"}
                            border={"1px solid rgba(51, 51, 51, 0.24)"}
                            focusBorderColor={"#77808B"}
                            borderRadius={"0px"}
                            name="email"
                            required
                            onChange={(e) => handleInputChange(e)}
                        />
                        <Button
                            width={"163px"}
                            height={"40pxpx"}
                            padding={"16px 48px 16px 48px"}
                            gap={"10px"}
                            opacity={"0px"}
                            background={"#060606"}
                            color={"#FFFFFF"}
                            _active={{ background: "#FFFFFF", color: "#060606" }}
                            border={"1px solid #060606"}
                            type="submit"
                        >
                            Subscribe
                        </Button>
                    </Box>
                    <Box layerStyle={"flexCenter"} mt={"20px"} gap={"25px"} cursor={"pointer"}>
                        <a href="https://x.com/BetygFi" target="_blank">
                            <Image src={"/icons/twitter-icon.svg"}
                                alt="icon"
                                width={25} height={25} />
                        </a>
                        <a href="https://www.reddit.com/r/betygFi/" target="_blank">
                            <Image src={"/images/reddit_black.svg"} width={30} height={30} alt="icon"></Image>
                        </a>
                        <a href="https://www.youtube.com/channel/UCwX7D6Z9u8zB5UixSAcfnyA" target="_blank">
                            <Image src={"/images/youtube_black.svg"} width={30} height={30} alt="icon"></Image>
                        </a>
                    </Box>
                </Box>
            </Box>
            <Box w={"80%"} layerStyle={"flexCenterSpaceBetween"}>
                <Box>
                    <Text
                        fontFamily={"Roboto"}
                        variant={"h4"}
                        lineHeight={"24px"}
                        textAlign={"left"}
                        color={"#283646"}
                    >
                        Copyright BetygFi
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"}>
                    <Box display={"flex"} gap={"15px"} mr={"50px"}>
                        <Image src={"/icons/Location_Icon.svg"} width={15} height={20} alt="logo"></Image>
                        <Text variant={"h4"} lineHeight={"24px"} color={"#77808B"} mt={"50px"}>
                            303 -D02, Cloud Spaces Level 15,<br />
                            Al Sarab Tower ADGM Square,<br />
                            Al Maryah Island Abu Dhabi<br />
                            PO BOX 764629
                        </Text>
                    </Box>
                    <Box display={"flex"} gap={"15px"} mr={"50px"}>
                        <Image src={"/icons/Mail_Icon.svg"} width={24} height={24} alt="logo"></Image>
                        <Text variant={"h4"} lineHeight={"24px"} color={"#77808B"}>
                            info@betygfi.com
                        </Text>
                    </Box>
                    <Box display={"flex"} gap={"15px"}>
                        <Image src={"/icons/Call_Icon.svg"} width={24} height={24} alt="logo"></Image>
                        <Text variant={"h4"} lineHeight={"24px"} color={"#77808B"}>
                            +1 386-688-3295
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default EnterpriseFooter;