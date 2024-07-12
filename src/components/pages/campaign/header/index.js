"use client";
import { Box, Button } from "@chakra-ui/react";
import AppConfigContext from "@components/context/appConfigContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { LaunchPlatformButtonText } from "../helper";


const CampaignHeader = () => {
    const appConfig = useContext(AppConfigContext);
    const router = useRouter();

    return (
        <Box
            layerStyle={"flexCenter"}
            justifyContent={"space-between"}
            alignItems={"center"}
            px={{
                sm: "15px",
                md: "38px"
            }}
            height={"70px"}
            bgColor={"#060606"}
            w="100%"
        >
            <i className="icon ent_logo" onClick={() => {
                router.push('/');
            }} />
            <Box
                layerStyle={"flexCenter"}
                gap={"50px"}
            >
                {/* <Button variant={"ent_header_button"}
                    onClick={() => router.push(`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}/about`)}
                    display={{
                        sm: "none",
                        md: "flex"
                    }}
                >
                    About us
                </Button> */}
                <Link href={`${appConfig.NEXT_PUBLIC_PLATFORM_BETYGFI_URL}`} target="_blank">
                    <Button variant={"ent_header_launch_button"}>
                        {LaunchPlatformButtonText}
                    </Button>
                </Link>

            </Box>
        </Box>
    );
};

export default CampaignHeader;