"use client";

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, useColorMode } from "@chakra-ui/react";
import { faq } from "../helper";

const FaqSection = () => {
    const { colorMode } = useColorMode();
    return (
        <Box display={"flex"} flexDir={"column"} mx={"20px"}>
            <Text
                fontSize={"32px"}
                lineHeight={"36px"}
                color={"text.primary"}
                mb={"20px"}
            >
                {" "}
                Frequently Asked Questions (FAQs){" "}
            </Text>

            {faq.questions.map((item, i) => {
                return (
                    <Accordion
                        key={i}
                        allowMultiple
                        flexDir={"column"}
                        bg={"background.primary"}
                        borderBottom={"1px"}
                        borderColor={
                            colorMode === "light"
                                ? "rgba(25,25,25, 0.1)"
                                : "#494949"
                        }
                    >
                        <AccordionItem w={"100%"} border={0}>
                            <AccordionButton
                                layerStyle={"spaceBetween"}
                                py={"25px"}
                            >
                                {item.question}
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>{item.answer}</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                );
            })}
        </Box>
    );
};

export default FaqSection;