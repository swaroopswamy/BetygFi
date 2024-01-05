import Image from 'next/image';
import React from 'react';

const CustomAvatar = ({ src,height=48,width=48, ...rest }) => {
    if(typeof height === 'string') {
        height=height.replace('px','');
        height=parseInt(height);
    }
    if(typeof width === 'string') {
        width=width.replace('px','');
        width=parseInt(width);
    }
    return (
        <Image
            unoptimized={'true'}
            src={src !== null ? src : '/icons/avatar_icon_light.svg'}
            alt={'avatar_logo'}
            {...rest}
            width={width}
            height={height}
            style={{ borderRadius: '50%' }}
            priority={'true'}
        />
    );
};

export default CustomAvatar;
