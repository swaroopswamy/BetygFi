"use client"
import React, { useState } from "react";
import { Box, Flex, Spacer, Heading, Text, Manrope, background, Container, UnorderedList, ListItem, Grid, GridItem } from "@chakra-ui/react";
import { images } from "../../../next.config";


import styles from "../pages.module.css";

const About = () => {
  return (
    <>
      <Container className={styles.about}>
        <Box className={styles.mainbox} ml={0} mt={0} mr={0}>
          <Text className={styles.mainboxtext} p={109} paddingLeft={71} paddingRight={923}>We Betygfi</Text>
        </Box>

        <Box className={styles.contentbox1} ml={457} mt={43} mr={223} mb={33}>
          <Text className={styles.contenttext1}>
            BetygFi is a blockchain analytics platform that enriches on-chain data with millions of wallet labels. Powered By Solvendo. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.
          </Text>
        </Box>

        <Box className={styles.headingbox1} ml={282} mt={33} mr={770} mb={10}>
          <Text className={styles.headingtext1}>
            Why is the platform called BetygFi?
          </Text>
        </Box>

        <Box className={styles.contentbox2} ml={282} mt={10} mr={295} mb={33}>
          <Text className={styles.contenttext2}>
            Fsce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc.
          </Text>
        </Box>

        <Box className={styles.headingbox2} ml={282} mt={33} mr={804} mb={14}>
          <Text className={styles.headingtext2}>
            Our core values  are
          </Text>
        </Box>

        <Box className={styles.contentbox3} ml={282} mt={14} mr={297} mb={33}>
          <Text className={styles.contenttext3} ml={41} mt={20} mr={719} mb={21}>

          </Text>
          <Text className={styles.contenttext3} ml={294} mt={20} mr={503} mb={21}>

          </Text>
          <Text className={styles.contenttext3} ml={510} mt={20} mr={284} mb={21}>

          </Text>
          <Text className={styles.contenttext3} ml={729} mt={20} mr={84} mb={21}>

          </Text>
        </Box>

        <Box className={styles.headingbox3} ml={282} mt={33} mr={770} mb={10}>
          <Text className={styles.headingtext3}>
            How do you get the wallet labels?
          </Text>
        </Box>

        <Box className={styles.contentbox4} ml={282} mt={10} mr={295} mb={33}>
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

        <Box className={styles.headingbox4} ml={282} mr={770} mt={30} mb={25}>
          <Text className={styles.headingtext4}>
            Backed by the best
          </Text>
        </Box>

        <Box className={styles.lastbox} ml={282} mb={77}>

        </Box>
      </Container>
    </>
    )
};

export default About;
