import { Box, GridItem, Grid, Heading, Text, Manrope, background } from "@chakra-ui/react";
import React from "react";

const bigbox={
  height: "264px",
  width: "1229px",
  flexShrink: "0",
  background: "linear-gradient(147deg, #009DD8 0%, #0071CE 100%)"
}

const boxtext={
  color: "#FFF",
fontFamily: "Manrope",
fontSize: "46px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "46px"
}

const rectanglebox={
  width: "222px",
height: "1131px",
flexShrink: "0",
}

const text1={
display: "flex",
width: "760px",
height: "80px",
flexDirection: "column",
justifyContent: "center",
flexShrink: "0",
color: "#191919",
fontFamily: "Manrope",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "26px",
opacity: "0.800000011920929"
}
 const heading1={
  width: "388px",
  color: "#191919",
fontFamily: "Manrope",
fontSize: "24px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "20px"
}

const text2={
  color: "#191919",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "26px" /* 162.5% */
}

const About = () => {
  return <div>
    <Box sx={bigbox} borderBottom={1306} borderTop={61} ml={211}>
    <Text sx={boxtext} p={109} paddingLeft={71} paddingRight={923}>We Betygfi</Text>
    </Box>

    <Box sx={rectanglebox} paddingTop={43} borderLeft={457} borderRight={223} borderTop={368} borderBottom={1183}>
    <Text sx={text1}>
      BetygFi is a blockchain analytics platform that enriches on-chain data with millions of wallet labels. Powered By Solvendo. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.
    </Text>
    </Box>
    
    <Heading sx={heading1} borderTop={514} borderBottom={1097} borderLeft={282} borderRight={770}>
      Why is the platform called BetygFi?
    </Heading>
    <Text sx={text2}>
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
  </div>
};

export default About;
