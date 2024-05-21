import { Box, Button, } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const EnterpriseHeader = () => {
    const router = useRouter();

    return (
        <Box
            layerStyle={"flexCenter"}
            justifyContent={"space-between"}
            alignItems={"center"}
            px={"38px"}
            height={"70px"}
            bgColor={"#000000"}
        >
            <i className="icon ent_logo" onClick={() => {
                router.push('/');
            }} />
            <Box
                layerStyle={"flexCenter"}
                gap={"50px"}
            >
                <Button variant={"ent_header_button"} onClick={() => router.push(`/research-paper`)}>Features</Button>
                <Button variant={"ent_header_button"} onClick={() => router.push(`/aboutus`)}>About us</Button>
                <Link href={"https://platfrom.betygfi.com"} target="_blank">
                    <Button variant={"ent_header_launch_button"} >
                        Launch Platform
                    </Button>
                </Link>

            </Box>
        </Box>
    );
};

export default EnterpriseHeader;