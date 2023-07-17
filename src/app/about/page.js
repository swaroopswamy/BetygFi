"use client"
import React,{useState} from "react";
import { Box, Flex, Spacer, Heading, Text, Manrope, background, Container, UnorderedList, ListItem, Grid,GridItem} from "@chakra-ui/react";
import { images } from "../../../next.config";


import styles from "../pages.module.css";




const About = () => {
  return<div>
         <Container className={styles.about}>
    <Box className={styles.mainbox} borderBottom={1306} borderTop={61} ml={211}>
    <Text className={styles.mainboxtext} p={109} paddingLeft={71} paddingRight={923}>We Betygfi</Text>
    </Box>

    <Box className={styles.solvendologo} paddingTop={20} ml={53} paddingRight={33} paddingBottom={42}>
     <Text>
      <img className={styles.logo} src={images}/>
      </Text>
    </Box>

    <Box className={styles.rectanglebox} paddingTop={43} ml={247}>
    <Text className={styles.text1}>
      BetygFi is a blockchain analytics platform that enriches on-chain data with millions of wallet labels. Powered By Solvendo. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.
    </Text>
    </Box>
    
    <Heading className={styles.heading1} borderTop={514} borderBottom={1097} borderLeft={282} borderRight={770}>
      Why is the platform called BetygFi?
    </Heading>
    <Text className={styles.text2}>
    Fsce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc.
    </Text>

    <Heading ml="150px" paddingTop="66px" paddingBottom="28px"> 
      Our core values are
    </Heading>
    <Grid templateColumns='repeat(4, 1fr)' gap="0.5" ml="170px" mr="250px">
    <GridItem w='100%' h='50' bg='whiteAlpha.900' ><Text ml="40px" p="15px">Transperency</Text></GridItem>
    <GridItem w='100%' h='50' bg='whiteAlpha.900' ><Text ml="40px" p="15px">Courage</Text></GridItem>
    <GridItem w='100%' h='50' bg='whiteAlpha.900' ><Text ml="40px" p="15px">Curiosity</Text></GridItem>
    <GridItem w='100%' h='50' bg='whiteAlpha.900' ><Text ml="40px" p="15px">Speed</Text></GridItem>
    </Grid>
    <Heading ml="150px" paddingTop="40px">
      How do you get the wallet labels?
    </Heading>
    <Text paddingTop="20px" pb="30px" ml="150px">
      We use variety of methods to use the labels
    </Text>
    </Container> 
  </div>

};

export default About;
