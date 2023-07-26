"use client"
import { Box, Container, Flex, Text,Image, useColorModeValue } from "@chakra-ui/react";

 const Privacy = () => {
    return (
        <>
            <Container  maxW= {"100%"}  padding= {"0px"}>
            <Box width= {"100%"}  height= {"264px"}  background= {useColorModeValue("#E8E8E8","#222")}>
            <Box display={"flex"}>
            <Box  
                      width={"100%"}
                      fontSize= {"46px"}
                      fontStyle= {"normal"}
                      fontWeight= {"400"}
                      lineHeight= {"46px"}
                      padding= {"109px 0px 0px 70px"}
                      color={useColorModeValue("#191919", "#FFFFFF")}>
            Privacy Policy
            </Box>
            <Box width={"80%"}  height={"264px"}>
              <Image src={useColorModeValue("/images/bg-logo.png","/images/bg-logo-dark.png")} height={"250px"} width={"250px"} alt=""
                      padding={"50px 0px 0px 30px"}></Image>
            </Box>
          </Box>
        </Box>

                <Box  width= {"80%"}  height= {"603px"} 
                      opacity= {"0.800000011920929"}
                      color={useColorModeValue("#191919", "#FFFFFF")}
                      flexShrink= {"0"}
                      fontSize= {"16px"}   
                      fontStyle= {"normal"}
                      lineHeight= {"26px"}
                      fontWeight= {"400"}
                      padding= {"10px 0px 0px 70px"} >

                    <Text paddingTop={"10px"}>
                        This is a common question, and the first thing to make clear is that we do not focus on personal individuals in our wallet labels.
                    </Text>

                    <Text paddingTop={"10px"}>
                        One important source of data for BetygFi is the blockchain itself. It's important to understand that blockchains are public and immutable. We have no control of what users decide to publish on them.
                        A relevant example is the Ethereum Name Service (ENS), which lets users purchase a human-readable name for their wallet. When a wallet registers such a domain (or is involved in the transfer of one), this is recorded forever on the Ethereum blockchain. And since anyone with a computer and an internet connection can run an Ethereum node, the data point representing this transaction is openly available to the world.
                    </Text>

                    <Text paddingTop={"10px"}>
                        Nansen includes information about ENS ownership of wallets (both past and present), and in some cases this might be revealing of an association between a private individual and a wallet.
                        So while we could remove data points potentially revealing personal identities from our platform,
                       
                    </Text>

                    <Text paddingTop={"10px"}>
                        We are committed to educating users of the privacy risks involved in using blockchains.‍
                        In some cases, project co-founders, advisors, and otherwise public figures have shared their addresses in the public domain.
                    </Text>

                    <Text paddingTop={"10px"}>
                        You can also review our privacy policy information about the privacy of our customers' data.
                    </Text>
                </Box>
            </Container>
        </>

    );
}
export default Privacy;