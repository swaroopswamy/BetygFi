import Image from "next/image";
import React from "react";

const CustomAvatar = ({ src, ...rest }) => {
    return (
        <Image
            unoptimized={"true"}
            src={src !== null ? src : '/icons/avatar_icon_light.svg'}
            alt={"avatar_logo"}
            {...rest}
            width={48}
            height={48}
            style={{ borderRadius: "50%" }}
            priority={"true"}
        />
    );
};

export default CustomAvatar;
