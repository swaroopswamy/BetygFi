"use client"
import { Box, Container, Text, Image, useColorModeValue } from "@chakra-ui/react";

const Privacy = () => {
    return (
        <>
            <Box
                display={{ base: "none", md: "block" }}
                width={"80%"}
                background={useColorModeValue("#F0F0F5", "#191919")}
                padding={"35px 0px 70px 72px"}>

                <Text
                    _light={{ color: "#191919" }}
                    _dark={{ color: "#FFFFFF" }}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"26px"}
                    opacity={"0.8"}
                    paddingTop={"20px"}>
                    This is a common question, and the first thing to make clear is that we do not focus on personal individuals in our wallet labels.<br /><br />
                    One important source of data for BetygFi is the blockchain itself. It's important to understand that blockchains are public and immutable. We have no control of what users decide to publish on them.
                    A relevant example is the Ethereum Name Service (ENS), which lets users purchase a human-readable name for their wallet. When a wallet registers such a domain (or is involved in the transfer of one), this is recorded forever on the Ethereum blockchain. And since anyone with a computer and an internet connection can run an Ethereum node, the data point representing this transaction is openly available to the world.<br /><br />
                    Nansen includes information about ENS ownership of wallets (both past and present), and in some cases this might be revealing of an association between a private individual and a wallet.<br />
                    So while we could remove data points potentially revealing personal identities from our platform,we think it's better that they're made aware that this information is already in the public domain - accessible to anyone.‍<br /><br />
                    We are committed to educating users of the privacy risks involved in using blockchains.‍
                    In some cases, project co-founders, advisors, and otherwise public figures have shared their addresses in the public domain (e.g. in transparency reports, or news articles). In these cases we might add wallet labels with their names, as the information is already in the public domain.<br /><br />
                    You can also review our privacy policy information about the privacy of our customers' data.
                </Text>
            </Box>

            {/* Mobile Optimization Part */}
            <Box
                display={{ base: "block", md: "none" }}
                background={useColorModeValue("#F0F0F5", "#191919")}
                padding={"22px 15px 95px 15px"}>
                <Text
                    _light={{ color: "#191919" }}
                    _dark={{ color: "#FFFFFF" }}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"26px"}
                    opacity={"0.8"}
                >
                    This is a common question, and the first thing to make clear is that we do not focus on personal individuals in our wallet labels.<br /><br />
                    One important source of data for BetygFi is the blockchain itself. It's important to understand that blockchains are public and immutable. We have no control of what users decide to publish on them.
                    A relevant example is the Ethereum Name Service (ENS), which lets users purchase a human-readable name for their wallet. When a wallet registers such a domain (or is involved in the transfer of one), this is recorded forever on the Ethereum blockchain. And since anyone with a computer and an internet connection can run an Ethereum node, the data point representing this transaction is openly available to the world.<br /><br />
                    Nansen includes information about ENS ownership of wallets (both past and present), and in some cases this might be revealing of an association between a private individual and a wallet.<br />
                    So while we could remove data points potentially revealing personal identities from our platform,we think it's better that they're made aware that this information is already in the public domain - accessible to anyone.‍<br /><br />
                    We are committed to educating users of the privacy risks involved in using blockchains.‍
                    In some cases, project co-founders, advisors, and otherwise public figures have shared their addresses in the public domain (e.g. in transparency reports, or news articles). In these cases we might add wallet labels with their names, as the information is already in the public domain.<br /><br />
                    You can also review our privacy policy information about the privacy of our customers' data.
                </Text>
            </Box>
        </>

    );
}
export default Privacy;