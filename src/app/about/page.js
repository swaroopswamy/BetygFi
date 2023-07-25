"use client"
import React,{useState} from "react";
import { Box, Flex, Spacer, Heading, Text, Manrope, background, Container, UnorderedList, ListItem, Grid,GridItem, Center, Image} from "@chakra-ui/react";
import { images } from "../../../next.config";

const About = () => {
  return (
    <Container
    maxWidth={"100%"}
    background={"#F0F0F5"}
    padding={"0px"}
    >
      <Box
      height={"264px"}
      flexShrink={"0"}
      marginBottom={"10px"}
      background={"linear-gradient(147deg, #009DD8 0%, #0071CE 100%)"}>
      <Flex> 
      <Box>
        <Text 
         color={"#FFF"}
         fontFamily={"Manrope"}
         fontSize={"46px"}
         fontStyle={"normal"}
         fontWeight={"400"}
         lineHeight={"46px"}
        p={109}
        paddingLeft={71}
        paddingRight={923}
        >
          We Betygfi
          </Text>
      </Box>
      </Flex>
      </Box>

    <Flex>
    <Center w='200px'>
    <Image src="/images/solvendo-logo.svg" width={"161px"} height={"127px"}></Image>
    </Center>
    <Box flex='1'>
    <Text
     color={"#191919"}
     fontFamily={"Manrope"}
     fontSize={"16px"}
     fontStyle={"normal"}
     fontWeight={"400"}
     lineHeight={"26px"}
     opacity={"0.800000011920929"}
     padding={"20px  70px  0px  30px"}
    mt={17}>
      BetygFi is a blockchain analytics platform that enriches on-chain data with millions of wallet labels. Powered By Solvendo. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.
    </Text>
    </Box>
    </Flex>

    <Heading
    color={"#191919"}
    fontFamily={"Manrope"}
    fontSize={"24px"}
    fontStyle={"normal"}
    fontWeight={"400"}
    lineHeight={"20px"}
     ml={59} 
     mt={20}>
      Why is the platform called BetygFi?
    </Heading>

      <Text
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"16px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"26px"} 
      opacity={"0.800000011920929"}
      ml={59}
      mt={5}
      mr={40}>
      Fsce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc.
      </Text>

    
      <Heading
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"24px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"20px"}
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

    <Heading
    color={"#191919"}
    fontFamily={"Manrope"}
    fontSize={"24px"}
    fontStyle={"normal"}
    fontWeight={"400"}
    lineHeight={"20px"}
    ml={59}>
    How do you get the wallet labels?
    </Heading>
      <Box 
      ml={59}
      mt={5} mr={40}> 
      <Text 
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"16px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"26px"}
      opacity={"0.800000011920929"}
      paddingTop={"0px"}
      paddingBottom={"15px"}
      >
      We use a variety of methods to label wallets, including
      </Text>
      <UnorderedList>
      <ListItem 
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"16px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"26px"}
      opacity={"0.800000011920929"}
      padding-bottom={"10px"}
      >
      Heuristics and algorithms
      </ListItem>
      <ListItem
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"16px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"26px"}
      opacity={"0.800000011920929"}
      paddingBottom={"10px"}
      >
      Smart-contract parsing and analysis
      </ListItem>
      <ListItem 
      color={"#191919"}
fontFamily={"Manrope"}
fontSize={"16px"}
fontStyle={"normal"}
fontWeight={"400"}
lineHeight={"26px"}
opacity={"0.800000011920929"}
paddingBottom={"10px"}
>
      Investigations and research by our team
      </ListItem>
      <ListItem 
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"16px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"26px"}
      opacity={"0.800000011920929"}
      paddingBottom={"10px"}
      >
      User submissions  .... and more
      </ListItem>
      </UnorderedList>
      <Text
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"16px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"26px"}
      opacity={"0.800000011920929"}
      paddingTop={"5px"}
      paddingBottom={"7.5px"}
      >
      We aim for extremely high precision, meaning we'd rather not label an address than label it incorrectly.
      </Text>
      <Text
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"16px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"26px"}
      opacity={"0.800000011920929"}
      padding-top={"7.5px"}
      >
      One key thing to realize is that there is a very strong network effect in adding wallet labels. If we know that wallet X is of type A, and wallet Y is of type B, then if wallet Z interacts with X and Y in a certain way, we can sometimes infer that Z is of type C. The consequence is that every wallet label we add to our platform can help us infer even more wallet labels.For the on-chain data itself, we rely heavily on the open source project Ethereum ETL. The main contributors to Ethereum ETL are members of the Nansen core team.
      </Text>
      </Box>
    
      <Heading
      color={"#191919"}
      fontFamily={"Manrope"}
      fontSize={"24px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"20px"}
      ml={59}
      mt={12}>
      Backed by the best
      </Heading>

    <Box
    ml={59}
    mt={10}
    mb={20}
    >

    </Box>

  </Container> 

    /* //     <Box className={styles.headingbox4} ml={282} mr={770} mt={30} mb={25}>
    //       <Text className={styles.headingtext4}>
    //         Backed by the best
    //       </Text>
    //     </Box>

    //     <Box className={styles.lastbox} ml={282} mb={77}>

    //     </Box>
    //   </Container>
    // </> */
    )
};

export default About;
