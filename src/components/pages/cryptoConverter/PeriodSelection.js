/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { renderSVG } from "@util/utility";

export const PeriodSelection = ({ periods, currPeriod, renderComponent, periodSelectionHandler }) => {
    const { colorMode } = useColorMode();

    const getWhatModeToRender = (period, isActive) => {
        if (colorMode === 'light') {
            return isActive ? "light" : "dark";
        } else {
            return isActive ? "dark" : "light";
        }
    };

    return (
        <Box display={"flex"}>
            {periods.map((period, i, array) => {
                return (
                    period.startsWith("comp-calendar") ?
                        <Box pos={"relative"}>
                            <Box pos={"absolute"} style={{ border: '1px solid red' }} >
                                {renderSVG("calendar")}
                            </Box>
                            {renderComponent && renderComponent()}
                        </Box>
                        :
                        <Button
                            key={i}
                            borderRadius={i == 0 ? "5px 0px 0px 5px" : (i == array.length - 1 ? "0px 5px 5px 0px" : "0px 0px 0px 0px")}
                            variant="converterPeriodButton"
                            onClick={() => {
                                periodSelectionHandler(period);
                            }}
                            isActive={period === currPeriod}
                        >
                            {
                                period.startsWith("icon-") ?
                                    <Box p={"0.25rem"}>
                                        {renderSVG(period.replace('icon-', ''), getWhatModeToRender(period, period === currPeriod))}
                                    </Box>
                                    :
                                    <Box p={"0.25rem"}>
                                        {period}
                                    </Box>
                            }
                        </Button>
                );
            })}
        </Box>
    );
};

export default PeriodSelection;