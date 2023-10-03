import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const SingleAccordionComp = ({
  ButtonComp,
  PanelComp,
  item,
  rowIndex,
  ...rest
}) => {
  return (
    <>
      <Accordion
        {...rest}
        allowToggle
        layerStyle={"spacebetween"}
        bg={useColorModeValue("#FFFFFF", "#202020")}
        border={"1px"}
        borderColor={useColorModeValue("#FFFFFF", "#272727")}
        borderRadius={"6px"}
      >
        <AccordionItem w={"100%"} border={"0px"}>
          <AccordionButton layerStyle={"spacebetween"}>
            <ButtonComp item={item} rowIndex={rowIndex} />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <PanelComp item={item} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
