"use client"
import { Image } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,} from '@chakra-ui/react'
import { Box, Container, Grid, GridItem, Heading, Text, extendTheme, Manrope } from "@chakra-ui/react";
import styles from "../Help/help.module.css";
import { useControllableState } from "@chakra-ui/react-use-controllable-state";
import { mergeRefs } from "@chakra-ui/react-use-merge-refs";
import { callAllHandlers, warn } from "@chakra-ui/shared-utils";
import { useCallback, useEffect, useId, useRef, useState } from "react";


const Help = () => {
    return (
        <>
            <Container className={styles.container}>
                <Box className={styles.box1}>
                    <Grid>
                        <GridItem colSpan={2} colStart={0} colEnd={2} className={styles.helpgrid}>
                            Help
                        </GridItem>
                        {/* <GridItem colSpan={2} colStart={2} colEnd={4}>
                            <i className={styles.logo} style={{padding: '40px 10px 20px 50px'}}>
                            <Image src='../../../assests/images/solvendo-logo.svg' fallbackSrc='http://www.w3.org/1999/xlink' />
                            </i>
                        </GridItem> */}
                    </Grid>
                </Box>

                <Text className={styles.faq} padding={"10px 0px 10px 70px"}>
                     FAQs   
                </Text>

  <Accordion defaultIndex={[0]} allowMultiple  style={{padding:'10px 80px 80px 70px'}}>
  <AccordionItem>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'  >
          What is ethereum?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4} >
    In 2015, the Ethereum blockchain launched as a much more versatile version of the Bitcoin payment system’s
     underlying blockchain technology. Ethereum is a decentralized, open source, and distributed computing 
     platform that enables the creation of smart contracts and decentralized applications, also known as dapps.
    Smart contracts are computer protocols that facilitate, verify, or enforce the negotiation and performance
    of some sort of agreement. Ethereum brought the first practical solution for smart contracts to the blockchain space.

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem paddingTop={"10px"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is a blockchain system?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is distributed ledger technology?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is private blockchain?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is block time?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      .....
    </AccordionPanel>
  </AccordionItem>
</Accordion>

                </Container>
            
        </>
    )
}
export default Help;