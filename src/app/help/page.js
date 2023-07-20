"use client"
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
                        <GridItem colSpan={2} colStart={2} colEnd={4}>
                            <i className={styles.logo}></i>
                        </GridItem>
                    </Grid>
                </Box>

                <Text className={styles.faq}>
                     FAQs   
                </Text>


 <Accordion defaultIndex={[0]} allowMultiple padding={"10px", "50px", "80px","70px" }>
  <AccordionItem paddingTop={"10px"}>
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
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is a blockChain system?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is distributed ledger technology?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is private blockchain?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      .....
    </AccordionPanel>
  </AccordionItem>

<AccordionItem paddingTop={"10px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          What is block time?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
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