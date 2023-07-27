"use client"
import { Box, Container, Text, Flex, Accordion, AccordionItem, AccordionButton,
         AccordionPanel, AccordionIcon, useColorModeValue,Icon, Image} from "@chakra-ui/react";
import { MdArrowDropDown} from 'react-icons/md';
import { AddIcon, MinusIcon  } from '@chakra-ui/icons';
import CustomIcon1 from '../../../public/images/ellipse-dark-down.png';
import CustomIcon2 from '../../../public/images/ellipse-dark-up.png';
import CustomIcon3 from '../../../public/images/ellipse-light-down.png';
import CustomIcon4 from '../../../public/images/ellipse-light-up.png';


const Help = () => {
    return (
        <>
            <Container  padding= {"0px"} maxW="100%">
            <Box width= {"100%"}  
                 height= {"264px"} 
                 style={{ mixBlendMode: "luminosity" }}
                 background= {useColorModeValue("#E8E8E8","#222")}>
          
          <Box display={"flex"}>
            
            <Box      fontSize= {"46px"}
                      fontStyle= {"normal"}
                      fontWeight= {"400"}
                      lineHeight= {"46px"}
                      padding= {"109px 300px 0px 70px"}
                      color={useColorModeValue("#191919", "#FFFFFF")}>
                    Help
            </Box>
             <Box width={"80%"}  height={"264px"} paddingLeft={"80px"}>
              <Image src={useColorModeValue("/images/bg-logo.png","/images/bg-logo-dark.png")} height={"250px"} width={"300px"} alt=""
                      padding={"50px 0px 0px 80px"}></Image>
            </Box>
          </Box>
        </Box>

                <Text color={useColorModeValue("#191919", "#FFFFFF")}
                      fontSize= {"24px"}  
                      fontStyle= {"normal"}
                      fontWeight= {400}  
                      lineHeight= {"46px"}  
                      padding={"10px 0px 10px 70px"}>
                     FAQs   
                </Text>

                <Accordion allowToggle>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            {isExpanded ? <Icon name={CustomIcon1 } w={4} h={4} /> : <Icon name={CustomIcon2 } w={4} h={4} />}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            {/* {isExpanded ? <Icon as={<CustomIcon1 />} w={4} h={4} /> : <Icon as={<CustomIcon2 />} w={4} h={4} />} */}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>

                </Container>
            
        </>
    )
}
export default Help;