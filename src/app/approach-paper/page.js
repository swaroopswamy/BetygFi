"use client";
import {
  Box,
  Container,
  Image,
  useColorModeValue,
  Text,
  Heading,
  useColorMode,
  div,
  h1,
  h2,
  br,
  Flex,
  Link,
  Button,
  Sup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactReader = dynamic(
  () => import('react-reader').then((res) => res.ReactReader),
  { ssr: false }
);
import { ReactReaderStyle } from "react-reader";


const Approach = () => {
  const { colorMode } = useColorMode();
  const rendition = useRef(null);
  const [location, setLocation] = useState(0);

  useEffect(() => {
    if (rendition.current) {
      const themes = rendition.current.themes;
      console.log("call again", themes);
      themes.override('color', colorMode === 'light' ? "#000000" : "#FFFFFF");
      themes.override('background', colorMode === 'light' ? "#FFFFFF" : "#191919");
    }
  })

  return (
    <Box display={"flex"} h={"85vh"} justifyContent={"center"} p={"25px 35px"} paddingRight={"200px"} bgColor={useColorModeValue("#F0F0F5", "#191919")}>
      <Box display={"flex"} flexDir={"column"} w={"100%"} h={"95%"}>
        <ReactReader
          url="https://react-reader.metabits.no/files/alice.epub"
          showToc={false}
          location={location}
          locationChanged={(epubcfi) => setLocation(epubcfi)}
          readerStyles={colorMode === 'light' ? lightReaderTheme : darkReaderTheme}
          getRendition={(_rendition) => {
            rendition.current = _rendition;
          }}
        />

        <Box layerStyle={"center"} minH={"5%"} bg={useColorModeValue("#C6C6C6", "#333333")} px={"20px"}>
          <Slider aria-label='slider-ex-1' defaultValue={location} min={0} max={300} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        </Box>

    </Box>

  );
};

export default Approach;

const lightReaderTheme = {
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    transition: undefined,
  },
}

const darkReaderTheme = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: 'white',
  },
  arrowHover: {
    ...ReactReaderStyle.arrowHover,
    color: '#ccc',
  },
  readerArea: {
    ...ReactReaderStyle.readerArea,
    backgroundColor: '#191919',
    transition: undefined,
  },
  titleArea: {
    ...ReactReaderStyle.titleArea,
    color: '#ccc',
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: '#111',
  },
  tocButtonExpanded: {
    ...ReactReaderStyle.tocButtonExpanded,
    background: '#222',
  },
  tocButtonBar: {
    ...ReactReaderStyle.tocButtonBar,
    background: '#fff',
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: 'white',
  },
}
