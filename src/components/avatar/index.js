import { Avatar } from "@chakra-ui/react";
import React from "react";

const CustomAvatar = ({ src, ...rest }) => {
    return (
        <Avatar suppressHydrationWarning={true} src={src ? src : '/icons/avatar_icon_light.svg'} {...rest} />
    );
};

export default CustomAvatar;
