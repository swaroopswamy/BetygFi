"use client"
import { Box, Container, Text, Flex, Accordion, AccordionItem, AccordionButton,
         AccordionPanel, AccordionIcon, useColorModeValue, Image} from "@chakra-ui/react";

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
              <Image src="/images/bg-logo.png" height={"250px"} width={"300px"} alt=""
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

  <Accordion defaultIndex={[0]} allowMultiple  padding={'10px 80px 80px 70px'}>
  <AccordionItem>
      <AccordionButton  color={useColorModeValue("#191919", "#FFFFFF")}>
        <Box as="span" flex='1' textAlign='left' 
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontSize= {"24px"}
                                fontStyle= {"normal"}
                                fontWeight= {"400"}
                                lineHeight= {"20px"} >
          What is Ethereum?                              
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4} opacity= {"0.800000011920929"}
                           color={useColorModeValue("#191919", "#FFFFFF")}
                           fontSize= {"14px"}
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}
                          text-decoration-line= {"underline"}
                           display= {"flex"}
                          height= {"139px"}
                          flexDirection= {"column"}
                          justifyContent= {"center"}
                          flexShrink= {"0"} >
    In 2015, the Ethereum blockchain launched as a much more versatile version of the Bitcoin payment system’s
     underlying blockchain technology. Ethereum is a decentralized, open source, and distributed computing 
     platform that enables the creation of smart contracts and decentralized applications, also known as dapps.
    Smart contracts are computer protocols that facilitate, verify, or enforce the negotiation and performance
    of some sort of agreement. Ethereum brought the first practical solution for smart contracts to the blockchain space.

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem paddingTop={"10px"}>
      <AccordionButton  color={useColorModeValue("#191919", "#FFFFFF")}>
        <Box as="span" flex='1' textAlign='left'
                               color={useColorModeValue("#191919", "#FFFFFF")}
                                fontFamily= {"Manrope"}
                                fontSize= {"24px"}
                                fontStyle= {"normal"}
                                fontWeight= {"400"}
                                lineHeight= {"20px"} >
          What is a blockchain system?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}  opacity= {"0.800000011920929"}
                           color={useColorModeValue("#191919", "#FFFFFF")}
                           fontSize= {"14px"}
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}
                           height= {"139px"}>
                          
    
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
      <AccordionButton  color={useColorModeValue("#191919", "#FFFFFF")}>
        <Box as="span" flex='1' textAlign='left'
                                 color={useColorModeValue("#191919", "#FFFFFF")}
                                 fontFamily= {"Manrope"}
                                 fontSize= {"24px"}
                                 fontStyle= {"normal"}
                                 fontWeight= {"400"}
                                 lineHeight= {"20px"} >
          What is distributed ledger technology?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}  opacity= {"0.800000011920929"}
                          color={useColorModeValue("#191919", "#FFFFFF")}
                           fontSize= {"14px"}
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
      <AccordionButton  color={useColorModeValue("#191919", "#FFFFFF")}>
        <Box as="span" flex='1' textAlign='left'
                                color={useColorModeValue("#191919", "#FFFFFF")}
                                fontFamily= {"Manrope"}
                                fontSize= {"24px"}
                                fontStyle= {"normal"}
                                fontWeight= {"400"}
                                lineHeight= {"20px"} >
          What is private blockchain?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}  opacity= {"0.800000011920929"}
                           color={useColorModeValue("#191919", "#FFFFFF")}
                           fontFamily= {"Manrope"}
                           fontSize= {"14px"}
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
      <AccordionButton  color={useColorModeValue("#191919", "#FFFFFF")}>
        <Box as="span" flex='1' textAlign='left' 
                                 color={useColorModeValue("#191919", "#FFFFFF")}
                                 fontFamily= {"Manrope"}
                                 fontSize= {"24px"}
                                 fontStyle= {"normal"}
                                 fontWeight= {"400"}
                                 lineHeight= {"20px"} >
          What is block time?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}  opacity= {"0.800000011920929"}
                          color={useColorModeValue("#191919", "#FFFFFF")}
                           fontSize= {"14px"}
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}>
      .....
    </AccordionPanel>
  </AccordionItem>
</Accordion>

                </Container>
            
        </>
    )
}
export default Help;