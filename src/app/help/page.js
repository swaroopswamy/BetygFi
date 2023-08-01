"use client"
import { Box, Container, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, useColorModeValue, Image, useColorMode } from "@chakra-ui/react";

const Help = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Container padding={"0px"} maxW="100%">
        <Box style={{ mixBlendMode: "luminosity" }}
          background={useColorModeValue("#E8E8E8", "#222")}>

          <Box display={"flex"} flexDirection={"row"}
            justifyContent={"space-between"}>

            <Box fontSize={"46px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"46px"}
              padding={"90px 0px 80px 60px"}
              color={useColorModeValue("#191919", "#FFFFFF")}>
              Help
            </Box>
            <Box paddingRight={"100px"} >
              <Image src={useColorModeValue("/images/bg-logo.png", "/images/bg-logo-dark.png")} alt=""></Image>
            </Box>
          </Box>
        </Box>

        <Text color={useColorModeValue("#191919", "#FFFFFF")}
          fontSize={"24px"}
          fontWeight={400}
          lineHeight={"46px"}
          padding={"10px 0px 10px 60px"}>
          FAQs
        </Text>

        <Accordion allowToggle
          padding={'10px 80px 80px 60px'}
        >
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left"
                      _dark={{ color: "#FFFFFF" }}
                      _light={{ color: "#191919" }}
                      fontSize={"24px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      padding={"10px 0px 10px 0px"} >
                      What is Ethereum?
                    </Box>
                    {isExpanded ? <Image src={colorMode === 'light' ? ('/images/ellipse-light-up.png') : ('/images/ellipse-dark-up.png')} w={"24px"} h={"24px"} alt="" /> : <Image src={colorMode === 'light' ? ('/images/ellipse-light-down.png'):('/images/ellipse-dark-down.png')} w={"24px"} h={"24px"} alt="" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={"0.800000011920929"}
                  _dark={{ color: "#FFFFFF" }}
                  _light={{ color: "#191919" }}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"26px"}
                  padding={"10px 50px 20px 20px"}>
                  In 2015, the Ethereum blockchain launched as a much more versatile version of the Bitcoin payment
                  system’s underlying blockchain technology. Ethereum is a decentralized, open source, and distributed
                  computing platform of smart contracts and decentralized applications,
                  also known as dapps. Smart contracts are computer protocols that facilitate, verify, or enforce
                  the negotiation and performance of some sort of agreement. Ethereum brought the first practical
                  solution for smart contracts to the blockchain space.

                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left"
                      //color={useColorModeValue("#191919", "#FFFFFF")}
                      _dark={{ color: "#FFFFFF" }}
                      _light={{ color: "#191919" }}
                      fontSize={"24px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      padding={"10px 0px 10px 0px"}>
                      What is a blockchain system?
                    </Box>
                    {isExpanded ? <Image src={colorMode === 'light' ? ('/images/ellipse-light-up.png') : ('/images/ellipse-dark-up.png')} w={"24px"} h={"24px"} alt="" /> : <Image src={colorMode === 'light' ? ('/images/ellipse-light-down.png'):('/images/ellipse-dark-down.png')} w={"24px"} h={"24px"} alt="" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={"0.800000011920929"}
                  //color={useColorModeValue("#191919", "#FFFFFF")}
                  _dark={{ color: "#FFFFFF" }}
                  _light={{ color: "#191919" }}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"26px"}
                  padding={"10px 50px 20px 20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left"
                      //color={useColorModeValue("#191919", "#FFFFFF")}
                      _dark={{ color: "#FFFFFF" }}
                      _light={{ color: "#191919" }}
                      fontSize={"24px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      padding={"10px 0px 10px 0px"} >
                      What is a blockchain wallet?
                    </Box>
                    {isExpanded ? <Image src={colorMode === 'light' ?('/images/ellipse-light-up.png'):('/images/ellipse-dark-up.png')} w={"24px"} h={"24px"} alt="" /> : <Image src={colorMode === 'light' ? ('/images/ellipse-light-down.png'):('/images/ellipse-dark-down.png')} w={"24px"} h={"24px"} alt="" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={"0.800000011920929"}
                  //color={useColorModeValue("#191919", "#FFFFFF")}
                  _dark={{ color: "#FFFFFF" }}
                  _light={{ color: "#191919" }}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"26px"}
                  padding={"10px 50px 20px 20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left"
                      //color={useColorModeValue("#191919", "#FFFFFF")}
                      _dark={{ color: "#FFFFFF" }}
                      _light={{ color: "#191919" }}
                      fontSize={"24px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      padding={"10px 0px 10px 0px"}>
                      What is distributed ledger technology?
                    </Box>
                    {isExpanded ? <Image src={colorMode === 'light' ? ('/images/ellipse-light-up.png'):('/images/ellipse-dark-up.png')} w={"24px"} h={"24px"} alt="" /> : <Image src={colorMode === 'light' ? ('/images/ellipse-light-down.png'):('/images/ellipse-dark-down.png')} w={"24px"} h={"24px"} alt="" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={"0.800000011920929"}
                  _dark={{ color: "#FFFFFF" }}
                  _light={{ color: "#191919" }}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"26px"}
                  padding={"10px 50px 20px 20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left"
                      _dark={{ color: "#FFFFFF" }}
                      _light={{ color: "#191919" }}
                      fontSize={"24px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      padding={"10px 0px 10px 0px"}>
                      What is private blockchain?
                    </Box>
                    {isExpanded ? <Image src={colorMode === 'light' ? ('/images/ellipse-light-up.png'):('/images/ellipse-dark-up.png')} w={"24px"} h={"24px"} alt="" /> : <Image src={colorMode === 'light' ? ('/images/ellipse-light-down.png'):('/images/ellipse-dark-down.png')} w={"24px"} h={"24px"} alt="" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={"0.800000011920929"}
                  _dark={{ color: "#FFFFFF" }}
                  _light={{ color: "#191919" }}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"26px"}
                  padding={"10px 50px 20px 20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left"
                      _dark={{ color: "#FFFFFF" }}
                      _light={{ color: "#191919" }}
                      fontSize={"24px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      padding={"10px 0px 10px 0px"}>
                      What is block time?
                    </Box>
                    {isExpanded ? <Image src={colorMode === 'light' ? ('/images/ellipse-light-up.png'):('/images/ellipse-dark-up.png')} w={"24px"} h={"24px"} alt="" /> : <Image src={colorMode === 'light' ? ('/images/ellipse-light-down.png'):('/images/ellipse-dark-down.png')} w={"24px"} h={"24px"} alt="" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} opacity={"0.800000011920929"}
                  _dark={{ color: "#FFFFFF" }}
                  _light={{ color: "#191919" }}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"400"}
                  lineHeight={"26px"}
                  padding={"10px 50px 20px 20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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