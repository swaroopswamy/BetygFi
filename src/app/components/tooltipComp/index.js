import { Tooltip } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const TooltipComp = ({ label }) => {
    return (
        <>
            <Tooltip label={label}>
                <InfoIcon
                    width={"12px"}
                    height={"12px"}
                    color={'#888888'}
                    alt={label}
                ></InfoIcon>
            </Tooltip>
        </>
    )
}

export default TooltipComp;