'use client'; // Error components must be Client Components
import React, { useContext, useEffect } from "react";
import { Box, Text, Button, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import AppConfigContext from '@components/context/appConfigContext';
import Image from 'next/image';

export default function Error({ error }) {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const appConfig = useContext(AppConfigContext);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        width={"100%"}
        height={"100%"}
        _light={{ background: "#F0F0F5" }}
        _dark={{ background: "#191919" }}
      >
        <Box>
          <Box display={"flex"}>
            <Image
              width={48}
              height={53}
              src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
              alt=" "
              style={{ paddingTop: "30px", marginLeft: "150px" }}
            >
            </Image>
            <Image
              width={83}
              height={83}
              src={colorMode === 'light' ? "/images/Ellipse_Image_light.svg" : "/images/Ellipse_Image_dark.svg"}
              alt=" "
              style={{ paddingTop: "90px", marginLeft: "400px" }}
            >
            </Image>
          </Box>
          <Text
            fontFamily={"Inter"}
            fontSize={"64px"}
            fontWeight={700}
            lineHeight={"77px"}
            marginLeft={"150px"}
            mt={"-25px"}
          >
            Uh-oh!
          </Text>
          <Text variant={"contentHeading"} marginLeft={"150px"} lineHeight={"30px"} pt={"25px"}>
            It appears your transaction with this page got<br />
            lost in the digital wilderness of the blockchain.<br />
            We’re sending out a search party!
          </Text>
          <Image
            width={29}
            height={29}
            src={colorMode === 'light' ? "/images/Ellipse_Image_light.svg" : "/images/Ellipse_Image_dark.svg"}
            alt=" "
            style={{ marginLeft: "550px" }}
          >
          </Image>
          <Box layerStyle={"flexCenter"} gap={"15px"} mt={"-5px"}>
            <Image
              width={21}
              height={24}
              src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
              alt=" "
              style={{ marginLeft: "115px" }}
            ></Image>
            <Text
              variant={"baseStyle"}
              _light={{ color: "#191919" }}
              _dark={{ color: "#FFFFFF" }}
            >
              Let’s find a better place for you to go.
            </Text>
          </Box>
          <Box layerStyle={"flexCenter"} gap={"10px"} mt={"20px"} ml={"150px"}>
            <Button
              variant={"outline"}
              height={"35px"}
              width={"150px"}
              style={{ borderRadius: "24px 24px 24px 24px" }}
              borderColor={colorMode === 'light' ? "2px solid #494949" : "2px solid #FFFFFF99"}
              onClick={() => router.push("/")}
            >
              CTA 1
            </Button>
            <Button
              variant={"outline"}
              height={"35px"}
              width={"150px"}
              style={{ borderRadius: "24px 24px 24px 24px" }}
              borderColor={colorMode === 'light' ? "2px solid #494949" : "2px solid #FFFFFF99"}
              onClick={() => window.open(`${appConfig.NEXT_PUBLIC_STUDIO_URL}`)}
            >
              CTA 2
            </Button>
            <Button
              variant={"outline"}
              height={"35px"}
              width={"150px"}
              style={{ borderRadius: "24px 24px 24px 24px" }}
              borderColor={colorMode === 'light' ? "2px solid #494949" : "2px solid #FFFFFF99"}
              onClick={() => window.open(`${appConfig.NEXT_PUBLIC_COMMUNITY_URL}`)}
            >
              CTA 3
            </Button>
          </Box>
          <Image
            width={48}
            height={53}
            src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
            alt=" "
            style={{ marginLeft: "600px", marginTop: "25px" }}
          >
          </Image>
        </Box>
        <Box>
          <Image
            width={275}
            height={400}
            src={colorMode === 'light' ? "/images/BrokenWire_Image_light.svg" : "/images/BrokenWire_Image_dark.svg"}
            alt=""
          >
          </Image>
        </Box>
      </Box>

      <Box
        display={{ base: "block", md: "none" }}
        width={"100%"}
        height={"100%"}
        _light={{ background: "#F0F0F5" }}
        _dark={{ background: "#191919" }}
        position={"relative"}
      >
        <Box px={"20px"}>
          <Box pt={"150px"} ml={"35px"}>
            <Image
              width={48}
              height={53}
              src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
              alt=" "
            >
            </Image>
          </Box>
          <Text
            fontFamily={"Inter"}
            fontSize={"40px"}
            fontWeight={700}
            lineHeight={"49px"}
            textAlign={"center"}
          >
            Uh-oh!
          </Text>
          <Text variant={"h0"} fontSize={"16px"} lineHeight={"20px"} textAlign={"center"} px={"25px"} pt={"25px"} zIndex={1}>
            It appears your transaction with this page got
            lost in the digital wilderness of the blockchain.
            We’re sending out a search party!
          </Text>
          <Image
            width={29}
            height={29}
            src={colorMode === 'light' ? "/images/Ellipse_Image_light.svg" : "/images/Ellipse_Image_dark.svg"}
            alt=" "
            style={{ marginLeft: "550px" }}
          >
          </Image>
          <Box mt={"-5px"}>
            <Image
              width={21}
              height={24}
              src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
              alt=" "
              style={{ marginLeft: "115px" }}
            ></Image>
            <Text variant={"footnoteText"} lineHeight={"20px"} textAlign={"center"} zIndex={1}>
              Let’s find a better place for you to go.
            </Text>
          </Box>
          <Box flexWrap={"wrap"} alignContent={"center"} layerStyle={"FlexColumnCenter"}>
            <Button
              variant={"outline"}
              height={"35px"}
              width={"150px"}
              style={{ borderRadius: "24px 24px 24px 24px" }}
              borderColor={colorMode === 'light' ? "2px solid #494949" : "2px solid #FFFFFF99"}
              onClick={() => router.push("/")}
              mt={"20px"}
            >
              CTA 1
            </Button>
            <Button
              variant={"outline"}
              height={"35px"}
              width={"150px"}
              style={{ borderRadius: "24px 24px 24px 24px" }}
              borderColor={colorMode === 'light' ? "2px solid #494949" : "2px solid #FFFFFF99"}
              onClick={() => window.open(`${appConfig.NEXT_PUBLIC_STUDIO_URL}`)}
              mt={"10px"}
            >
              CTA 2
            </Button>
            <Button
              variant={"outline"}
              height={"35px"}
              width={"150px"}
              style={{ borderRadius: "24px 24px 24px 24px" }}
              borderColor={colorMode === 'light' ? "2px solid #494949" : "2px solid #FFFFFF99"}
              onClick={() => window.open(`${appConfig.NEXT_PUBLIC_COMMUNITY_URL}`)}
              mt={"10px"}
            >
              CTA 3
            </Button>
          </Box>
          <Box mt={"20px"} ml={"100px"}>
            <Image
              width={48}
              height={53}
              src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
              alt=" "
            >
            </Image>
          </Box>
          <Box position={"absolute"} right={0} top={0} zIndex={0}>
            <Image
              width={175}
              height={800}
              src={colorMode === 'light' ? "/images/BrokenWire_Mobile_light.svg" : "/images/BrokenWire_Mobile_dark.svg"}
              alt=""
            >
            </Image>
          </Box>
        </Box>
      </Box>
    </>
  );
}
