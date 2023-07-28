"use client"
import { Box, Container, Image, useColorModeValue, Text, Heading, div,  h1, h2,br } from "@chakra-ui/react";


const Approach = () => {
  return (
    <>
      {    
       <Container maxW= {"100%"}  padding= {"0px"}>

        <Box background= {useColorModeValue("#E8E8E8","#222")}>

        <Box display={"flex"}
              flexDirection={"row"} 
              justifyContent={"space-between"}>

            <Box   fontSize={"46px"}
                   color={useColorModeValue("#191919", "#FFFFFF")}
                   padding= {"90px 0px 0px 50px"} >
            Approach Paper
            </Box>
            
            <Box paddingRight={"100px"}>
              <Image src={useColorModeValue("/images/bg-logo.png","/images/bg-logo-dark.png")} ></Image>
            </Box>
          </Box>
        </Box>


        <Box>
          <Heading fontSize={"24px"}>Overview</Heading>
          <Text fontSize={"16px"}>Fusce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare,
           libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim.
            Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus.
             Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.</Text>
        </Box>

        <Box>
          <div>
          <Heading as="h1" size="xl" fontSize={"24px"}  font-weight= {"700"}>Table of Contents</Heading>
          <Heading as="h2" size="lg" fontSize={"16px"}  font-weight= {"700"}>What’s new?</Heading>
          <Text fontSize={"16px"}>1. Abstract <br/>
                                  2. Data Collection and Processing <br/>
                                  3. Model Training Methodology <br/>
                                  4. Model Evaluation <br/>
                                  5. Scoring <br/>
                                  6. Future <br/>
          </Text>
          </div>
        </Box>
        </Container>
      }
    </>
  )
 }  
 
 export default Approach;