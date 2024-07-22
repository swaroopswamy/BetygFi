"use client";
import { Box, Button, Input, Text, Link, useMediaQuery } from "@chakra-ui/react";
import AppConfigContext from "@components/context/appConfigContext";
import Image from "next/image";
import React, { useState, useContext } from "react";

const CampaignPageFooter = () => {
    const appConfig = useContext(AppConfigContext);
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
        const mailtoLink = `mailto:info@betygfi.com?subject=Contact Form Submission&body=${encodeURIComponent(
            `Email: ${formValue.email}`
        )}`;

        window.location.href = mailtoLink;
    };

    /* const scrollToElementById = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }; */


    const [isCustomPoint] = useMediaQuery("(min-width: 935px)");

    return (
        isCustomPoint ?
            <Box
                bg={"#F8F9FA"}
                pt={"86px"}
                pb={"40px"}
                layerStyle={"flexColumn"}
                alignItems={"center"}
                px={{ md: "15px" }}
            >
                <Box w={{ md: "100%", bigSize: "80%" }}
                    layerStyle={"flexCenter"}
                    alignItems={"start"}
                    borderBottom={"1px solid rgba(51, 51, 51, 0.24)"} pb={"50px"}
                    gap={{ md: "30px", bigSize: "75px" }}
                >
                    <Box >
                        <Image src={"/icons/New_BetgFi_Logo_Light.svg"} width={138} height={22} alt="logo"></Image>
                        <Text
                            variant={"h4"}
                            lineHeight={"24px"}
                            textAlign={"left"}
                            color={"#77808B"}
                            mt={"20px"}
                        >
                            BetygFi is an Information Utility dedicated to democratizing access to information.
                        </Text>
                    </Box>
                    <Box mb={"40px"}>
                        <Text
                            fontSize={"16px"}
                            fontWeight={700}
                            lineHeight={"22px"}
                            color={"#333333"}
                        >
                            Product
                        </Text>
                        <Box
                            variant={"h4"}
                            lineHeight={"24px"}
                            textAlign={"left"}
                            color={"#77808B"}
                        >
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}`} target="_blank"><Text mt={"25px"} whiteSpace={"nowrap"}>Platform</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/coin`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Coin Ranking</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_STUDIO_URL}`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Data Studio</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/crypto-etfs-data-tracker`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>ETF Tracker</Text></Link>
                        </Box>
                    </Box>
                    <Box mb={"40px"}>
                        <Text
                            fontSize={"16px"}
                            fontWeight={700}
                            lineHeight={"22px"}
                            color={"#333333"}
                        >
                            Company
                        </Text>
                        <Box
                            variant={"h4"}
                            lineHeight={"24px"}
                            textAlign={"left"}
                            color={"#77808B"}
                        >
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/about`} target="_blank"><Text mt={"25px"} whiteSpace={"nowrap"}>About</Text></Link>
                            {/* 
                            <Link onClick={() => scrollToElementById('get_in_touch')}><Text mt={"15px"} whiteSpace={"nowrap"}>Contact</Text></Link>
                             */}
                            {/* 
                        <Link href="https://blog.betygfi.com" target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Blog</Text></Link>
                         */}
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/legal`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Legal</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/approach-paper`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Approach paper</Text></Link>
                        </Box>
                    </Box>
                    <Box mb={"40px"}>
                        <Text
                            fontSize={"16px"}
                            fontWeight={700}
                            lineHeight={"22px"}
                            color={"#333333"}
                            mb={"25px"}
                        >
                            Join a Newsletter
                        </Text>
                        <Text
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
                                <Image src={"/images/twitter_black.svg"}
                                    alt="icon"
                                    width={30} height={30} />
                            </a>
                            {/* <a href="https://www.reddit.com/r/betygFi/" target="_blank">
                                <Image src={"/images/reddit_black.svg"} width={30} height={30} alt="icon"></Image>
                            </a> */}
                            <a href="https://www.youtube.com/@betygfi" target="_blank">
                                <Image src={"/images/youtube_black.svg"} width={30} height={30} alt="icon"></Image>
                            </a>
                            <a href="https://www.linkedin.com/company/betygfi/" target="_blank">
                                <Image src={"/images/linkedin_black.svg"} width={30} height={30} alt="icon"></Image>
                            </a>
                        </Box>
                    </Box>
                </Box>
                <Box w={{ md: "100%", bigSize: "80%" }}
                    layerStyle={"flexCenterSpaceBetween"}>
                    <Box>
                        <Text
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
            </Box>
            :
            <Box
                bg={"#F8F9FA"}
                p={"20px"}
                layerStyle={"flexColumn"}
                alignItems={"left"}
            >
                <Box mb={"25px"}>
                    <Image src={"/icons/New_BetgFi_Logo_Light.svg"} width={138} height={22} alt="logo"></Image>
                    <Text
                        variant={"h4"}
                        lineHeight={"24px"}
                        textAlign={"left"}
                        color={"#77808B"}
                        mt={"20px"}
                        fontSize={"14px"}
                    >
                        BetygFi is an Information Utility dedicated to democratizing access to information.
                    </Text>
                </Box>

                <Box layerStyle={'center'} w="100%" justifyContent={"left"} gap={"50px"}>
                    <Box>
                        <Text
                            fontSize={"16px"}
                            fontWeight={700}
                            lineHeight={"22px"}
                            color={"#333333"}
                        >
                            Product
                        </Text>
                        <Box
                            variant={"h4"}
                            lineHeight={"24px"}
                            textAlign={"left"}
                            color={"#77808B"}
                        >
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}`} target="_blank"><Text mt={"25px"} whiteSpace={"nowrap"}>Platform</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/coin`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Coin Ranking</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_STUDIO_URL}`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Data Studio</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/crypto-etfs-data-tracker`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>ETF Tracker</Text></Link>
                        </Box>
                    </Box>
                    <Box>
                        <Text
                            fontSize={"16px"}
                            fontWeight={700}
                            lineHeight={"22px"}
                            color={"#333333"}
                        >
                            Company
                        </Text>
                        <Box
                            variant={"h4"}
                            lineHeight={"24px"}
                            textAlign={"left"}
                            color={"#77808B"}
                        >
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/about`} target="_blank"><Text mt={"25px"} whiteSpace={"nowrap"}>About</Text></Link>
                            {/* 
                            <Link onClick={() => scrollToElementById('get_in_touch')}><Text mt={"15px"} whiteSpace={"nowrap"}>Contact</Text></Link>
                            */}
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/legal`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Legal</Text></Link>
                            <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/approach-paper`} target="_blank"><Text mt={"15px"} whiteSpace={"nowrap"}>Approach paper</Text></Link>
                        </Box>
                    </Box>
                </Box>
                <Box mt={"30px"}>
                    <Text
                        fontSize={"16px"}
                        fontWeight={700}
                        lineHeight={"22px"}
                        color={"#333333"}
                        mb={"25px"}
                    >
                        Join a Newsletter
                    </Text>
                    <Text
                        variant={"h4"}
                        lineHeight={"24px"}
                        color={"#77808B"}
                    >
                        Your Email
                    </Text>
                    <Box layerStyle={"flexCenter"} mt={"10px"} gap={"25px"} as="form" onSubmit={handleSubmit}>
                        <Input
                            placeholder='Enter Your Email'
                            width={"100%"}
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
                    <Box layerStyle={"flexCenter"} justifyContent={"left"} flexDir={"column"} gap={"15px"} mt="30px">
                        <Box display={"flex"} alignItems={"start"} gap={"15px"} w={"100%"}>
                            <Image src={"/icons/Location_Icon.svg"} width={15} height={20} alt="logo"></Image>
                            <Text variant={"h4"} lineHeight={"24px"} color={"#77808B"} fontSize={"14px"} mt={"-6px"}>
                                303 -D02, Cloud Spaces Level 15,<br />
                                Al Sarab Tower ADGM Square,<br />
                                Al Maryah Island Abu Dhabi<br />
                                PO BOX 764629
                            </Text>
                        </Box>
                        <Box display={"flex"} gap={"15px"} w={"100%"}>
                            <Image src={"/icons/Mail_Icon.svg"} width={24} height={24} alt="logo"></Image>
                            <Text variant={"h4"} lineHeight={"24px"} color={"#77808B"}>
                                info@betygfi.com
                            </Text>
                        </Box>
                        <Box display={"flex"} gap={"15px"} w={"100%"}>
                            <Image src={"/icons/Call_Icon.svg"} width={24} height={24} alt="logo"></Image>
                            <Text variant={"h4"} lineHeight={"24px"} color={"#77808B"}>
                                +1 386-688-3295
                            </Text>
                        </Box>
                        <Text
                            w="100%"
                            variant={"h4"}
                            fontSize={"14px"}
                            lineHeight={"24px"}
                            textAlign={"left"}
                            color={"#77808B"}
                        >
                            @Copyright BetygFi
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} mt={"20px"} gap={"25px"} cursor={"pointer"}>
                        <a href="https://x.com/BetygFi" target="_blank">
                            <Image src={"/images/twitter_black.svg"}
                                alt="icon"
                                width={30} height={30} />
                        </a>
                        {/* <a href="https://www.reddit.com/r/betygFi/" target="_blank">
                            <Image src={"/images/reddit_black.svg"} width={30} height={30} alt="icon"></Image>
                        </a> */}
                        <a href="https://www.youtube.com/@betygfi" target="_blank">
                            <Image src={"/images/youtube_black.svg"} width={30} height={30} alt="icon"></Image>
                        </a>
                        <a href="https://www.linkedin.com/company/betygfi/" target="_blank">
                            <Image src={"/images/linkedin_black.svg"} width={30} height={30} alt="icon"></Image>
                        </a>
                    </Box>
                </Box>
            </Box>

    );
};

export default CampaignPageFooter;