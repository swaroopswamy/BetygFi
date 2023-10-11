import {
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from 'next/dynamic'
// const Accordion = dynamic(import('@chakra-ui/react').then(mod => mod.Accordion), { ssr: false }) // disable ssr

export const SingleAccordionComp = ( {ButtonComp, PanelComp, ...rest} ) => {
    return (
        <>
            <Accordion {...rest} allowToggle layerStyle={"spaceBetween"} bg={useColorModeValue('#FFFFFF', '#202020')} border={"1px"} borderColor={useColorModeValue('#FFFFFF', '#272727')} borderRadius={"6px"}>
                <AccordionItem w={"100%"} border={"0px"} >
                    <AccordionButton layerStyle={"spaceBetween"}>
                        <ButtonComp />
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <PanelComp />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}
