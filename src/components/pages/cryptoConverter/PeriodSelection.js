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
    // renderComponent
    return (
        <Box display={"flex"}>
            {periods.map((period, i) => {
                return (
                    <Button
                        key={i}
                        borderRadius={"5px"}
                        variant="converterPeriodButton"
                        onClick={() => {
                            // if (renderComponent) {
                            //     renderComponent();
                            // } else {
                            periodSelectionHandler(period);
                            // }
                        }}
                        isActive={period === currPeriod}
                    >
                        {
                            period.startsWith("icon-") ?
                                <Box p={"0.25rem"}>
                                    {renderSVG(period.replace('icon-', ''), getWhatModeToRender(period, period === currPeriod))}
                                </Box>
                                : (period.startsWith("comp-") ?
                                    <>
                                        <Box p={"0.25rem"}>
                                            {renderComponent()}
                                            {/* {renderSVG(period.replace('icon-', ''), getWhatModeToRender(period, period === currPeriod))} */}
                                        </Box>
                                    </>
                                    :
                                    <Box p={"0.25rem"}>
                                        {period}
                                    </Box>
                                )

                        }
                    </Button>
                );
            })}
        </Box>
    );
};

export default PeriodSelection;