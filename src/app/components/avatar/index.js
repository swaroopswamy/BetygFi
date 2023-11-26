import { Avatar } from "@chakra-ui/react";
import React from "react";

const CustomAvatar = ({ src, ...rest }) => {
    return (
        <Avatar suppressHydrationWarning={true} src={src} {...rest} />
    );
};

export default CustomAvatar;
