"use client"
import React,{useState} from "react";
import { Box, Flex, Spacer, Heading, Text, Manrope, background, Container, UnorderedList, ListItem, Grid,GridItem, Center} from "@chakra-ui/react";
import { images } from "../../../next.config";


import styles from "../pages.module.css";




const About = () => {
  return<div>
    <Container className={styles.about}>
    <Box className={styles.mainbox} ml={0} mt={0} mr={0}>
    <Text className={styles.mainboxtext} p={109} paddingLeft={71} paddingRight={923}>We Betygfi</Text>
    </Box>

    <Flex>
    <Center w='200px'>
    <Text>LOGO</Text>
    </Center>
    <Box flex='1'>
    <Text
     color= {"#191919"}
     font-family={"Manrope"}
     font-size={"16px"}
     font-style={"normal"}
     font-weight={"400"}
     line-height={"26px"}
     opacity={"0.800000011920929"}
     padding={"20px  70px  0px  30px"}
    mt={17}>
      BetygFi is a blockchain analytics platform that enriches on-chain data with millions of wallet labels. Powered By Solvendo. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.
    </Text>
    </Box>
    </Flex>

    <Heading className={styles.headingtext1}
     ml={59} 
     mt={20}>
      Why is the platform called BetygFi?
    </Heading>

      <Text className={styles.contenttext2}
      ml={59}
      mt={5}
      mr={40}>
      Fsce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc.
      </Text>

    
      <Heading className={styles.headingtext2}
      ml={59}
      mt={10}>
      Our core values  are
      </Heading>

    <Flex h={59}
    ml={59}
    mt={5}
    mb={10}
    mr={20}
    justify="space-around"
    bg={"white"}>
    <Box p={4}>
    <Text>Transparency</Text>
    </Box>
    <Box p={4}>
    <Text>Courage</Text>
    </Box>
    <Box p={4}>
    <Text>Curiosity</Text>
    </Box>
    <Box p={4}>
    <Text>Speed</Text>
    </Box>
    </Flex>

    <Heading className={styles.headingtext3}
    ml={59}>
    How do you get the wallet labels?
    </Heading>
      <Box 
      ml={59}
      mt={5} mr={40}> 
      <Text className={styles.contenttext4line1}>
      We use a variety of methods to label wallets, including
      </Text>
      <UnorderedList>
      <ListItem className={styles.contenttext4line2}>
      Heuristics and algorithms
      </ListItem>
      <ListItem className={styles.contenttext4line2}>
      Smart-contract parsing and analysis
      </ListItem>
      <ListItem className={styles.contenttext4line2}>
      Investigations and research by our team
      </ListItem>
      <ListItem className={styles.contenttext4line2}>
      User submissions  .... and more
      </ListItem>
      </UnorderedList>
      <Text className={styles.contenttext4line3}>
      We aim for extremely high precision, meaning we'd rather not label an address than label it incorrectly.
      </Text>
      <Text className={styles.contenttext4line4}>
      One key thing to realize is that there is a very strong network effect in adding wallet labels. If we know that wallet X is of type A, and wallet Y is of type B, then if wallet Z interacts with X and Y in a certain way, we can sometimes infer that Z is of type C. The consequence is that every wallet label we add to our platform can help us infer even more wallet labels.For the on-chain data itself, we rely heavily on the open source project Ethereum ETL. The main contributors to Ethereum ETL are members of the Nansen core team.
      </Text>
      </Box>
    
      <Heading className={styles.headingtext4}
      ml={59}
      mt={12}>
      Backed by the best
      </Heading>

    <Box className={styles.lastbox} ml={59} mt={10} mb={20}></Box>

  </Container>
  </div>

};

export default About;
