"use client";
import {
  Box,
  useColorModeValue,
  Text,
  useColorMode,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
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
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {

    if (rendition.current) {
      const themes = rendition.current.themes;
      themes.override('color', colorMode === 'light' ? "#000000" : "rgba(255, 255, 255, 0.8)");
      themes.override('background', colorMode === 'light' ? "#FFFFFF" : "#191919");

      rendition.current.themes.register('custom', {
        h1: {
          'font-family': 'Inter, sans-serif',
          'font-weight': '400',
          'font-size': `${scale * 24}px`,
        },
        p: {
          'font-family': 'Inter, sans-serif',
          'font-weight': '400',
          'font-size': `${scale * 14}px`,
        },
        body: {
          'font-family': 'Inter, sans-serif',
          'font-weight': '400',
          'font-size': `${scale * 14}px`,
          'color': "#FF0000 !imporant"
        },
        text_1: {
          'font-family': 'Inter, sans-serif',
          'font-weight': '400',
          'font-size': `${scale * 14}px`,
          'color': "#FF0000"
        }
      });
      rendition.current.themes.select('custom');
    }
  });

  const changePage = (epubcfi) => {
    setLocation(epubcfi);
    if (rendition.current) {
      // const { displayed, href } = rendition.current.location.start;
      // setTotalPages(displayed.total);
      // setPage(displayed.page);
    }
  };

  if (rendition.current) {
    rendition.current.on('rendered', () => {
      // const { displayed, href } = rendition.current.location.start;
      // setTotalPages(displayed.total);
      // setPage(displayed.page);
    });
  }

  return (
    <Box display={"flex"} h={"150vh"} justifyContent={"center"} p={"25px 35px"}
      paddingRight={{ base: "none", md: "200px" }} bgColor={useColorModeValue("#F0F0F5", "#191919")}>
      <Box display={"flex"} flexDir={"column"} w={"100%"} h={"95%"}
        boxShadow={useColorModeValue("0px", "0px 0px 4px 0px #FFF")}>
        <ReactReader
          url="/text/paper4.epub"
          showToc={false}
          location={location}
          locationChanged={changePage}
          readerStyles={colorMode === 'light' ?
            {
              ...ReactReaderStyle,
              readerArea: {
                ...ReactReaderStyle.readerArea,
                transition: undefined,
              }
            }
            :
            {
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
                transition: "undefined",
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
          }
          getRendition={(_rendition) => {
            rendition.current = _rendition;
          }}
          epubOptions={{ spread: "none" }}
        />

        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minH={"30px"}
          bg={useColorModeValue("#C6C6C6", "#333333")} px={"20px"}>
          {/* <Box layerStyle={"center"} mx={"20px"}>
            <Text variant="h3">
              {page}/{totalPages}
            </Text>
          </Box>

          <Box mx={"10px"} w={"70%"}>
            <Slider aria-label='slider-ex-1' min={1} max={totalPages} step={1} onChange={(e) => {
                if (e-page > 0)
                  rendition.current.next();
                else
                  rendition.current.prev();
              }}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box> */}


          <Box mx={"10px"} w={"20%"} display={"flex"} gap={"10px"}>
            <Text fontSize={"24px"} cursor={"pointer"} onClick={() => {
              let s = scale;
              if (s > 1) {
                s = s - 0.1;
                setScale(s);
              }
            }}>
              -
            </Text>
            <Slider aria-label='slider-ex-2' value={scale} min={1} max={1.5} step={0.05}
              onChange={(e) => {
                setScale(e);
              }}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize={"24px"} cursor={"pointer"} onClick={() => {
              let s = scale;
              if (s < 1.5) {
                s = s + 0.1;
                setScale(s);
              }
            }}>
              +
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Approach;
