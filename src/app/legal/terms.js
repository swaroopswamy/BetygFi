"use client"
import { Box, Container, Image, useColorModeValue, Text, Tab, TabList, TabPanels, Tabs, TabPanel } from "@chakra-ui/react";

const Terms = () => {
    return (
        <>
            <Box
                display={{ base: "none", md: "block" }}
                width={"80%"}
                background={useColorModeValue("#F0F0F5", "#191919")}
                padding={"35px 0px 70px 72px"}
            >
                <Text
                    _light={{ color: "#191919" }}
                    _dark={{ color: "#FFFFFF" }}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"26px"}
                    opacity={"0.8"}
                    paddingTop={"20px"}>
                    Fusce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.<br /><br />
                    Donec mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc. Vivamus ut pellentesque est. Ut at dignissim mi, sit amet rutrum tortor.
                    Nunc dictum enim at risus aliquam hendrerit. Mauris pretium tristique tempus.<br /><br />
                    Vestibulum vitae est quis libero mollis posuere eget gravida lacus. Pellentesque vitae efficitur tortor, vitae euismod tortor. Fusce ut dictum elit. Donec nisi erat, vulputate a elementum non, mollis id nisl. Donec hendrerit nulla enim, ut facilisis orci lobortis in. Aliquam gravida augue ut diam dignissim sollicitudin at at tortor. In ipsum arcu, suscipit nec ornare vel, sagittis quis elit. Quisque sed elit semper, ultrices diam quis, interdum eros.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique hendrerit tortor et tempor. Fusce scelerisque, risus id rhoncus ultricies, arcu nisl sagittis sapien, quis cursus augue sapien tincidunt ipsum. Cras eget felis vel enim posuere porta. Integer condimentum pellentesque nisi vel iaculis. Donec eget finibus mi, vitae ultrices turpis. Nulla orci sapien, viverra quis placerat id, pellentesque ac tellus. Fusce nec finibus erat.
                </Text>
            </Box>

            {/* Mobile Optimization Part */}
            <Box
                display={{ base: "block", md: "none" }}
                background={useColorModeValue("#F0F0F5", "#191919")}
                p={"22px 15px 90px 15px"}
            >
                <Text
                    _light={{ color: "#191919" }}
                    _dark={{ color: "#FFFFFF" }}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"26px"}
                    opacity={"0.8"}
                >
                    Fusce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.<br /><br />
                    Donec mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc. Vivamus ut pellentesque est. Ut at dignissim mi, sit amet rutrum tortor.
                    Nunc dictum enim at risus aliquam hendrerit. Mauris pretium tristique tempus.<br /><br />
                    Vestibulum vitae est quis libero mollis posuere eget gravida lacus. Pellentesque vitae efficitur tortor, vitae euismod tortor. Fusce ut dictum elit. Donec nisi erat, vulputate a elementum non, mollis id nisl. Donec hendrerit nulla enim, ut facilisis orci lobortis in. Aliquam gravida augue ut diam dignissim sollicitudin at at tortor. In ipsum arcu, suscipit nec ornare vel, sagittis quis elit. Quisque sed elit semper, ultrices diam quis, interdum eros.<br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique hendrerit tortor et tempor. Fusce scelerisque, risus id rhoncus ultricies, arcu nisl sagittis sapien, quis cursus augue sapien tincidunt ipsum. Cras eget felis vel enim posuere porta. Integer condimentum pellentesque nisi vel iaculis. Donec eget finibus mi, vitae ultrices turpis. Nulla orci sapien, viverra quis placerat id, pellentesque ac tellus. Fusce nec finibus erat.
                </Text>
            </Box>
        </>
    );
}
export default Terms;