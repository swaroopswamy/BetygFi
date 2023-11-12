import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CustomUpload = ({ name, value, handleChange }) => {
    return (
        <>
            <Box layerStyle={"flexColumn"}>
                <Text variant={"boldHeader"} pb="8px">
                    Upload files (If any)
                </Text>
                <Text variant={"secondaryContent"} pb="16px" >
                    Max file size is 500kb. Supported file types are .jpg and .png.
                </Text>
                <Box border={"1px dashed #8D8D8D"}
                    w="100%"
                    p={"10px 16px"}
                    h="80px"
                    cursor={"pointer"}
                    position={"relative"}
                    zIndex={"10"}
                >
                    <Text variant="linkPrimary">
                        {value === null ? "Drag and drop files here or click to upload" : value.name}
                    </Text>
                    <input type="file" name={name} onChange={handleChange} style={{ width: "100%", height: "100%", opacity: 0, position: "absolute", top: 0, left: 0, cursor: "pointer" }}></input>
                </Box>

            </Box>
        </>
    );
};

export default CustomUpload;