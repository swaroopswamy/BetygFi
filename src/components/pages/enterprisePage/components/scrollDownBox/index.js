import { Box } from "@chakra-ui/react";
import React from "react";


const ScrollDownBox = () => {
    return (
        <Box className="ent-scroll-down" layerStyle={"center"} w="100%">
            <a href="#section_2">
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </Box>
    );
};

export default ScrollDownBox;