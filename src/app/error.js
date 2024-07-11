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
    <Box
      width={"100%"}
      height={"100%"}
      _light={{ background: "#F0F0F5" }}
      _dark={{ background: "#191919" }}
      display={"flex"}
      pl={{ md: "150px" }}
    >
      <Box px={{ base: "15px" }} justifyContent={{ base: "center" }}>
        <Box display={"flex"}>
          <Image
            width={48}
            height={53}
            src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
            alt=" "
            style={{ paddingTop: "25px" }}
          >
          </Image>
          <Image
            width={83}
            height={83}
            src={colorMode === 'light' ? "/images/Ellipse_Image_light.svg" : "/images/Ellipse_Image_dark.svg"}
            alt=" "
            style={{ paddingTop: "85px", marginLeft: "250px" }}
          >
          </Image>
        </Box>
        <Text
          fontFamily={"Inter"}
          fontSize={{ base: "40px", md: "64px" }}
          fontWeight={700}
          lineHeight={{ base: "49px", md: "77px" }}
          marginLeft={{ base: "50px", md: "0px" }}
          mt={"-25px"}
        >
          Uh-oh!
        </Text>
        <Text variant={"contentHeading"} lineHeight={{ base: "20px", md: "30px" }} mt={"25px"} fontSize={{ base: "16px" }}>
          It appears your transaction with this page got<br />
          lost in the digital wilderness of the blockchain.<br />
          We’re sending out a search party!
        </Text>
        <Image
          width={29}
          height={29}
          src={colorMode === 'light' ? "/images/Ellipse_Image_light.svg" : "/images/Ellipse_Image_dark.svg"}
          alt=" "
          style={{ marginLeft: "400px" }}
        >
        </Image>
        <Box layerStyle={"flexCenter"} gap={"15px"} mt={"5px"}>
          <Image
            width={21}
            height={24}
            src={colorMode === 'light' ? "/images/Wrong_Image_light.svg" : "/images/Wrong_Image_dark.svg"}
            alt=" "
            style={{ marginLeft: "-35px" }}
          ></Image>
          <Text
            variant={"baseStyle"}
            _light={{ color: "#191919" }}
            _dark={{ color: "#FFFFFF" }}
          >
            Let’s find a better place for you to go.
          </Text>
        </Box>
        <Box layerStyle={{ base: "flexColumn", md: "flexCenter" }} gap={"10px"} mt={"25px"}>
          <Button
            variant={"outline"}
            height={"35px"}
            width={"150px"}
            style={{ borderRadius: "24px 24px 24px 24px" }}
            borderColor={"2px solid #191919"}
            onClick={() => router.push("/")}
          >
            CTA 1
          </Button>
          <Button
            variant={"outline"}
            height={"35px"}
            width={"150px"}
            style={{ borderRadius: "24px 24px 24px 24px" }}
            borderColor={"2px solid #191919"}
            onClick={() => window.open(`${appConfig.NEXT_PUBLIC_STUDIO_URL}`)}
          >
            CTA 2
          </Button>
          <Button
            variant={"outline"}
            height={"35px"}
            width={"150px"}
            style={{ borderRadius: "24px 24px 24px 24px" }}
            borderColor={"2px solid #191919"}
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
          style={{ marginLeft: "450px", marginTop: "25px" }}
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
  );
}
