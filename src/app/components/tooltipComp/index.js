"use client"
import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const TooltipComp = ({ label }) => {
    return (
        <React.Fragment>
            <Tooltip label={label} >
                <InfoIcon
                    width={"12px"}
                    height={"12px"}
                    color={'#888888'}
                    alt={label}
                    ml={"5px"}
                ></InfoIcon>
            </Tooltip>
        </React.Fragment>
    )
}

export default TooltipComp;