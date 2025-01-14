import React from "react";
import { createIcon, Icon } from "@chakra-ui/icon";
import { useColorModeValue } from "@chakra-ui/react";

export const TooltipIcon = createIcon({
    displayName: "TooltipIcon",
    viewBox: "0 0 12 12",
    d: "M6 11C3.23857 11 1 8.7614 1 6C1 3.23857 3.23857 1 6 1C8.7614 1 11 3.23857 11 6C11 8.7614 8.7614 11 6 11ZM5.5 5.5V8.5H6.5V5.5H5.5ZM5.5 3.5V4.5H6.5V3.5H5.5Z",
});

export const SearchBoxIcon = createIcon({
    displayName: "SearchBoxIcon",
    viewBox: "0 0 32 32",
    d: "M269.46 1163.45c-6.29 0-11.389-5.01-11.389-11.2 0-6.19 5.099-11.21 11.389-11.21 6.29 0 11.39 5.02 11.39 11.21 0 6.19-5.1 11.2-11.39 11.2zm18.228 5.8l-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87 0-7.32-6.026-13.25-13.46-13.25-7.434 0-13.46 5.93-13.46 13.25 0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 008.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44z",
});

export const BetygFiSmLogo = ({ ...rest }) => {
    return (
        <Icon
            viewBox={`0 0 150 150`}
            {...rest}
        >
            <circle
                cx="75"
                cy="75"
                r="75"
                fill={useColorModeValue("#FFFFFF", "#191919")}
            />
            <path
                d="M42.6 28.8H89.3968C99.763 28.8 108 37.1669 108 47.2624V103.338C108 113.625 99.5693 121.8 89.3968 121.8H60.6254C50.6449 121.8 42.6 113.816 42.6 103.911C42.6 94.006 50.6449 86.0219 60.6254 86.0219H82.3484V98.636H60.6254C57.6646 98.636 55.3103 100.973 55.3103 103.911C55.3103 106.849 57.6646 109.186 60.6254 109.186H89.3968C92.6279 109.186 95.2898 106.581 95.2898 103.338V47.2624C95.2898 44.0558 92.6653 41.414 89.3968 41.414H55.3103V61.3672C55.3103 64.5738 57.9347 67.2155 61.2032 67.2155H82.3484V79.8296H61.2032C50.8371 79.8296 42.6 71.4627 42.6 61.3672V28.8Z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill={useColorModeValue("#191919", "#FFFFFF")}
            />
        </Icon>
    );
};
