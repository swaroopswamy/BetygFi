import Image from 'next/image';
import React from 'react';
import { useColorMode } from '@chakra-ui/react';

const CustomAvatar = ({ src, height = 48, width = 48, ...rest }) => {
    const { colorMode } = useColorMode();
    if (typeof height === 'string') {
        height = height.replace('px', '');
        height = parseInt(height);
    }
    if (typeof width === 'string') {
        width = width.replace('px', '');
        width = parseInt(width);
    }

    return (
        <Image
            unoptimized={'true'}
            src={src !== null && src !== undefined ? src : (colorMode === "light" ? "/icons/avatar_icon_light.svg" : "/icons/avatar_icon_dark.svg")}
            alt={'avatar_logo'}
            {...rest}
            width={width}
            height={height}
            style={{ borderRadius: '50%', width: width + 'px', height: height + 'px', objectFit: "cover" }}
            priority={'true'}
        />
    );
};

export default CustomAvatar;
