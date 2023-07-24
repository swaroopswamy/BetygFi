"use client"
import { Box, Container, Grid, GridItem,  Text } from "@chakra-ui/react";
import styles from "../page.module.css";

 const Privacy = () => {
    return (
        <>
            <Container  maxW= {"100%"}  padding= {"0px"}>
                <Box width= {"100%"}  height= {"264px"}  background= {"#E8E8E8"}>
                    <Grid>
                        <GridItem colSpan={2} colStart={0} colEnd={2}
                        height= {"250px"}
                        flexShrink= {"0"}
                        background= {"#E8E8E8"}
                        mix-blend-mode= {"luminosity"}
                        padding= {"109px 0px 0px 70px"}  
                        color= {"#000"}  
                        fontFamily= {"Manrope"}  
                        fontSize= {"46px"}  
                        fontStyle= {"normal"}  
                        fontWeight= {"400"}  
                        lineHeight= {"46px"}>
                            Privacy Policy
                        </GridItem>
                        <GridItem colSpan={2} colStart={2} colEnd={4}>
                            <i className={styles.logo}></i>
                        </GridItem>
                    </Grid>
                </Box>

                <Box  width= {"75%"}  height= {"603px"}>
                    <Text  opacity= {"0.800000011920929"}
                           color= {"#191919"}
                           fontFamily= {"Manrope"}
                           fontSize= {"14px"}   
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}
                           padding= {"10px 0px 0px 70px"} >
                        This is a common question, and the first thing to make clear is that we do not focus on personal individuals in our wallet labels.
                    </Text>

                    <Text  opacity= {"0.800000011920929"}
                           color= {"#191919"}
                           fontFamily= {"Manrope"}
                           fontSize= {"14px"}   
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}
                           padding= {"10px 0px 0px 70px"} >
                        One important source of data for BetygFi is the blockchain itself. It's important to understand that blockchains are public and immutable. We have no control of what users decide to publish on them.
                        A relevant example is the Ethereum Name Service (ENS), which lets users purchase a human-readable name for their wallet. When a wallet registers such a domain (or is involved in the transfer of one), this is recorded forever on the Ethereum blockchain. And since anyone with a computer and an internet connection can run an Ethereum node, the data point representing this transaction is openly available to the world.
                    </Text>

                    <Text  opacity= {"0.800000011920929"}
                           color= {"#191919"}
                           fontFamily= {"Manrope"}
                           fontSize= {"14px"}   
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}
                           padding= {"10px 0px 0px 70px"} >
                        Nansen includes information about ENS ownership of wallets (both past and present), and in some cases this might be revealing of an association between a private individual and a wallet.
                        So while we could remove data points potentially revealing personal identities from our platform,
                        we think it's better that they're made aware that this information is already in the public domain - accessible to anyone.‍
                    </Text>

                    <Text  opacity= {"0.800000011920929"}
                           color= {"#191919"}
                           fontFamily= {"Manrope"}
                           fontSize= {"14px"}   
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}
                           padding= {"10px 0px 0px 70px"} >
                        We are committed to educating users of the privacy risks involved in using blockchains.‍
                        In some cases, project co-founders, advisors, and otherwise public figures have shared their addresses in the public domain (e.g. in transparency reports, or news articles). In these cases we might add wallet labels with their names, as the information is already in the public domain.
                    </Text>

                    <Text  opacity= {"0.800000011920929"}
                           color= {"#191919"}
                           fontFamily= {"Manrope"}
                           fontSize= {"14px"}   
                           fontStyle= {"normal"}
                           fontWeight= {"400"}
                           lineHeight= {"26px"}
                           padding= {"10px 0px 0px 70px"} >
                        You can also review our privacy policy information about the privacy of our customers' data.
                    </Text>
                </Box>
            </Container>
        </>

    );
}
export default Privacy;