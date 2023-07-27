"use client"
import { Box, Container, Image, useColorModeValue, Text } from "@chakra-ui/react";

const Terms = () => {
  return (
    <>
      {    
       <Container maxW= {"100%"}  padding= {"0px"}>
        <Box width= {"100%"}  height= {"264px"}  background= {useColorModeValue("#E8E8E8","#222")}>
        <Box display={"flex"}>
            <Box  
                      width={"100%"}
                      fontWeight= {"400"}
                      lineHeight= {"46px"}
                      padding= {"109px 0px 0px 50px"}>
            <Image src={useColorModeValue("/images/terms-light-mode.png","/images/terms-dark-mode.png")}></Image>
            </Box>
            <Box width={"60%"}  height={"264px"}>
              <Image src={useColorModeValue("/images/bg-logo.png","/images/bg-logo-dark.png")} height={"250px"} width={"250px"} alt=""
                      padding={"40px 0px 0px 20px"}></Image>
            </Box>
          </Box>
        </Box>

        <Box width= {"80%"}
            height= {"603px"}
            flexShrink= {"0"}
            color={useColorModeValue("#191919", "#FFFFFF")}
            fontSize= {"16px"}
             fontStyle= {"normal"}
             fontWeight= {"400"}
             lineHeight= {"26px"}
             margin= {"30px 60px 60px 50px"}
             marginBottom ="10px" 
             opacity= {"0.800000011920929"}
             >

          <Text  paddingTop= {"10px"}>
            Fusce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.
            </Text>

            <Text paddingTop= {"15px"}>
            Donec mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc. Vivamus ut pellentesque est. Ut at dignissim mi, sit amet rutrum tortor.
            Nunc dictum enim at risus aliquam hendrerit. Mauris pretium tristique tempus. </Text>

            <Text  paddingTop= {"15px"}>
            Vestibulum vitae est quis libero mollis posuere eget gravida lacus. Pellentesque vitae efficitur tortor, vitae euismod tortor. Fusce ut dictum elit. Donec nisi erat, vulputate a elementum non, mollis id nisl. Donec hendrerit nulla enim, ut facilisis orci lobortis in. Aliquam gravida augue ut diam dignissim sollicitudin at at tortor. In ipsum arcu, suscipit nec ornare vel, sagittis quis elit. Quisque sed elit semper, ultrices diam quis, interdum eros.             </Text>

            <Text paddingTop= {"15px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique hendrerit tortor et tempor. Fusce scelerisque, risus id rhoncus ultricies, arcu nisl sagittis sapien, quis cursus augue sapien tincidunt ipsum. Cras eget felis vel enim posuere porta. Integer condimentum pellentesque nisi vel iaculis. Donec eget finibus mi, vitae ultrices turpis. Nulla orci sapien, viverra quis placerat id, pellentesque ac tellus. Fusce nec finibus erat.
          </Text>
        </Box>
      </Container>
    }
    </>
  );
}
export default Terms;