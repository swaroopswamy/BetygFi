"use client";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import LastUpdate from "/src/app/components/lastUpdate";

let USDollar = new Intl.NumberFormat('en-US', {
  currency: 'USD',
});

const TVLBox = () => {
  const defiData = useSelector(
    (state) => state?.defiDashboardData?.DefiData
  );

  return (
    <Box w={{ base: "100%", lg: "40%" }} borderRadius={"6px"} bg={useColorModeValue("#FFFFFF", "#202020")}>
      <Box layerStyle={"flexColumn"} justifyContent={"space-between"} p={"20px"} gap={"10px"} h={"100%"}>
        <Box>
          <Box py={"10px"}>
            <Text
              _light={{ color: "#16171B" }}
              _dark={{ color: "#FFFFFF" }}
              fontSize={"24px"}
              fontWeight={600}
              lineHeight={"20px"}
              letterSpacing={"2.4px"}
              textTransform={"uppercase"}>
                            ${" "}{defiData?.isSuccess ? (millify(defiData?.data?.tvl, {
                precision: 2,
                locales: "en-US"
              })) :
                "-"}
            </Text>

            <Text
              _light={{ color: "#16171B" }}
              _dark={{ color: "#FFFFFF" }}
              textAlign={"left"}
              fontSize={"12px"}
              fontWeight={400}
              lineHeight={"10px"}
              pt={"10px"}
            >
                            Total Value Locked
            </Text>
          </Box>

          <hr />

          <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} py={"10px"} gap={"5px"}>
            <TVLRow
              name={"Market Cap"}
              value={defiData?.isSuccess && defiData?.data?.mcap !== null ? "$" + (millify(defiData?.data?.mcap, {
                precision: 2,
                locales: "en-US"
              })) : "-"}
            />
            <TVLRow
              name={"Token Price"}
              value={defiData?.isSuccess && defiData?.data?.price !== null ?
                "$" + defiData?.data?.price?.toFixed(2) : "-"}
            />
            <TVLRow
              name={"User Count"}
              value={defiData?.isSuccess && defiData?.data?.userCount !== null &&
                                defiData?.data?.userCount !== 0 ? USDollar.format(defiData?.data?.userCount) : "-"}
            />
          </Box>
        </Box>

        <LastUpdate time={"3"} />
      </Box>
    </Box >
  );

};

export default TVLBox;

const TVLRow = ({ name, value }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Text variant={'h3'}> {name} </Text>
      <Text variant={'h3'}> {value} </Text>
    </Box>
  );
};