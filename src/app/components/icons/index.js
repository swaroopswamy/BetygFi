import { createIcon, Icon } from "@chakra-ui/icon";
import { useColorModeValue } from "@chakra-ui/react";

export const TooltipIcon = createIcon({
  displayName: "TooltipIcon",
  viewBox: "0 0 12 12",
  d: "M6 11C3.23857 11 1 8.7614 1 6C1 3.23857 3.23857 1 6 1C8.7614 1 11 3.23857 11 6C11 8.7614 8.7614 11 6 11ZM5.5 5.5V8.5H6.5V5.5H5.5ZM5.5 3.5V4.5H6.5V3.5H5.5Z"
});

export const SearchBoxIcon = createIcon({
  displayName: "SearchBoxIcon",
  viewBox: "0 0 32 32",
  d: "M269.46 1163.45c-6.29 0-11.389-5.01-11.389-11.2 0-6.19 5.099-11.21 11.389-11.21 6.29 0 11.39 5.02 11.39 11.21 0 6.19-5.1 11.2-11.39 11.2zm18.228 5.8l-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87 0-7.32-6.026-13.25-13.46-13.25-7.434 0-13.46 5.93-13.46 13.25 0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 008.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44z",
});

export const BetygFiSmLogo= ({ ...rest }) => {
  return (
    <Icon viewBox={`0 0 16 16`} color={useColorModeValue("#6F7383", "#676767")} {...rest}>
      <line x1="3.13426" y1="4.9893" x2="0.658369" y2="10.6485" stroke='currentColor' strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.88689 10.9885L7.6944 2.24786C7.98558 1.57941 8.75912 1.26812 9.43215 1.54855V1.54855C10.1207 1.83546 10.4407 2.63087 10.1426 3.31468L7.6476 9.03851C7.39559 9.61664 7.65865 10.2897 8.23589 10.5437V10.5437C8.79987 10.7919 9.45912 10.5492 9.72749 9.99454L10.4794 8.44041"
        stroke='currentColor' fillOpacity={'0'} strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )
};
