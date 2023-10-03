import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { TooltipIcon } from "../icons";

const TooltipComp = ({ label }) => {
    return (
        <>
            <Tooltip label={label}>
                <TooltipIcon
                    width={"12px"}
                    height={"12px"}
                    alt={label}
                ></TooltipIcon>
            </Tooltip>
        </>
    )
}

export default TooltipComp;