import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const HeaderComponent = ({ walletBalanceData, walletAddress }) => {
  return (
    <Box
      layerStyles={"flexSpaceBetween"}
      padding={{ base: "17px 13px 50px", md: "20px 30px 50px 30px" }}
    >
      <Box layerStyles={"flexCenter"}>
        <Box mr={"22px"}>
          <Image
            w={{ base: "35px", md: "47px" }}
            h={{ base: "35px", md: "47px" }}
            borderRadius={"50%"}
            src="/images/basic_profile.svg"
            alt="proifile_img"
          />
        </Box>
        <Box layerStyles={"flexColumn"}>
          {walletBalanceData?.name === undefined && (
            <Text
              fontSize={{ base: "18px", md: "24px" }}
              fontWeight={"400"}
              lineHeight={"20px"}
              opacity={"0.5"}
              _dark={{
                color: "#FFFFFF",
              }}
              _light={{
                color: "#191919",
              }}
              letterSpacing={"2.4px"}
            >
              No Name
            </Text>
          )}
          <Box
            display={"flex"}
            alignItems={"center"}
            mt={{ base: "5px", md: "13px" }}
          >
            <Text
              display={{ base: "none", md: "flex" }}
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight={"400"}
              color={useColorModeValue("#000000", "#A8ADBD")}
              //borderRight={useColorModeValue("1px solid #000000", "1px solid #A8ADBD")}
              paddingRight={"15px"}
            >
              {walletAddress}
            </Text>
            <Text
              display={{ base: "flex", md: "none" }}
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight={"400"}
              color={useColorModeValue("#000000", "#A8ADBD")}
              //borderRight={useColorModeValue("1px solid #000000", "1px solid #A8ADBD")}
              paddingRight={"15px"}
            >
              {walletAddress?.split("").join("").substring(0, 6) +
                "......" +
                walletAddress?.slice(-5)}
            </Text>
            {/* <Text
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    lineHeight={"20px"}
                                    color={useColorModeValue("#3A3A3A", "#A8ADBD")}
                                    paddingLeft={"15px"}
                                    marginRight={"13px"}
                                >
                                    AGE
                                </Text>
                                <Text
                                    fontSize={"14px"}
                                    fontWeight={"500"}
                                    lineHeight={"20px"}
                                    color={useColorModeValue("#191919", "#FFF")}

                                >
                                    850 Days
                                </Text> */}
          </Box>
        </Box>
      </Box>
      <Box position={"relative"}>
        {/*  <SplineAreaChart /> */}
        {/*  {(<Box
                            position={"relative"}
                            bottom={0}
                            right={0}
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <Text
                                fontSize={"12px"}
                                fontWeight={"300"}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                            >
                                Net Worth
                            </Text>
                            <Text
                                fontSize={"24px"}
                                fontWeight={"400"}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                letterSpacing={"2.4px"}
                            //  mt="15px"
                            >
                                {"$ "}{walletBalanceData?.totalAssetValue !== undefined ? millify(walletBalanceData?.totalAssetValue, {
                                    precision: 2,
                                    locales: "en-US"
                                }) : '-'}
                            </Text>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                mt="6px"
                            >
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    _dark={{
                                        color: "#FFFFFF"
                                    }}
                                    _light={{
                                        color: "#16171B"
                                    }}
                                    mr={'2px'}
                                >
                                    Last Updated
                                </Text>
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    _dark={{
                                        color: "#FFFFFF"
                                    }}
                                    _light={{
                                        color: "#16171B"
                                    }}
                                >
                                    {" "} 3 mins ago
                                </Text>
                            </Box>
                        </Box>)} */}
      </Box>
    </Box>
  );
};

export default HeaderComponent;
