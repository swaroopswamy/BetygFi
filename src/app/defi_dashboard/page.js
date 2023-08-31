
"use client"
import Governance from "./governance";
import BarChart from "./BarChart";
import PerformanceMultiLineChart from "../wallet_dashboard/PerformanceMultiLineChart";

import React, { useCallback, useEffect, useState } from "react";
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Tooltip, Menu, MenuButton, MenuList, MenuItem, Checkbox, Container } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer, fetchWalletBalanceData, fetchWalletTransactionsData, walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from "../../../util/constant";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import millify from "millify";
import TVLBox from "./TVLBox";
import DonutChart from "./DonutChart";
import TrendGraph from "./TrendGraph";
import DefiUsersSmallTableComponent from "./DefiUsersSmallTable";
import DefiAssetCompositionSmallTable from './DefiAssetCompositionSmallTable';
import DefiHotContractsSmallTableComponent from './DefiHotContractsSmallTable';
import DefiInflowOutflowSmallTableComponent from './DefiInflowOutflowSmallTable';
import GovernanceTable from "./governance";
import { fetchDefiUsersTableData, fetchDefiData, fetchDefiHotContractsTableData } from "../../redux/defi_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import { getDefiHotContractsTableData } from "@/services/defiDashboardService";

const DefiDashboardPage = () => {
    const searchParam = useSearchParams();
    const pathname = usePathname();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const defi = searchParam.get("defi");
    const id = searchParam.get("id");

    const defiData = useSelector(
        (state) => state?.defiDashboardData?.DefiData?.data
    )
    // const defiUsersTableData = useSelector(
    //     (state) => state?.defiDashboardData?.DefiUsersTableData?.data
    // )
    const [tabIndex, setTabIndex] = useState(0)

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );

    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };
    const blockchains = useSelector(
        (state) => state?.appData?.BlockchainListData?.data
    );

    const getDefiDataHandler = () => {
        const payload = {
            id: id,
        };
        dispatch(fetchDefiData(payload));
    }

    const getDefiUsersTableDataHandler = () => {
        const payload = {
            defi: defi,
            blockchain: "",
        };
        dispatch(fetchDefiUsersTableData(payload));
    };
    const getDefiHotContractsDataHandler = () => {
        const payload = {
            defi: defi,
            blockchain: "",
        };
        dispatch(fetchDefiHotContractsTableData(payload));
    };


    useEffect(() => {
        getDefiDataHandler();
        getDefiUsersTableDataHandler();
        getDefiHotContractsDataHandler();
    }, []);

    useEffect(() => {
        dispatch(fetchBlockchainListData());
    }, []);
    const renderIcon = (item) => {
        return (
            <Image
                src={`/icons/${item}_sm_icon.svg`}
                alt={`${item}_icon`}
                width={18}
                height={18}
            />
        );
    }; 
    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      

    return (
        <>
            <Box
                bgColor={useColorModeValue("#F0F0F5", "#191919")}
                display={"flex"}
                flexDirection={"column"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    margin={"10px 30px 50px 30px"}
                    paddingBottom={"33px"}
                    borderBottom={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")}
                    bgColor={useColorModeValue("#F0F0F5", "#191919")}

                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        bgColor={useColorModeValue("#F0F0F5", "#191919")}
                    >
                        <Box
                            marginRight={"22px"}
                        >
                            <Image
                                w="47px"
                                h="47px"
                                borderRadius={"50%"}
                                src={defiData?.logo ?? "/images/basic_profile.png"}
                                alt="proifile_img"
                            />
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            paddingTop={"15px"}
                        >
                            {
                                defiData?.name !== undefined && (
                                    <Text
                                        fontSize={"24px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        //opacity={"0.5"}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        letterSpacing={"2.4px"}
                                    >
                                        {defiData?.name}
                                    </Text>
                                )}
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                mt={"13px"}
                            >
                                <Box
                                    h="100%"
                                    py={"11px"}
                                    cursor={"pointer"}
                                    borderRight={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")}
                                    onClick={() => {
                                        defiData(item.link);
                                    }}
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        paddingRight={"20px"}
                                    >
                                        {defiData?.url}
                                    </Text>
                                </Box>
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    h="100%"
                                    paddingRight={"20px"}
                                    borderRight={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")}

                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        color={useColorModeValue("#3A3A3A", "#A8ADBD")}
                                        paddingLeft={"20px"}
                                        marginRight={"13px"}
                                    >
                                        {defiData?.chains?.length ?? 0} chains
                                    </Text>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        ml={"15px"}

                                    >
                                        {blockchains?.map((item, i) => (
                                            <>
                                                {defiData?.chains?.includes(toCapitalize(item.name)) &&
                                                    <Tooltip
                                                        key={i} label={item.name}
                                                    // <>
                                                    //     <div style={{ display:'flex',alignItems:'center',paddingTop:'10px'}}>
                                                    //         {renderIcon(item)}
                                                    //         <span style={{paddingLeft:"5px",paddingTop:"2px"}}>{item}</span>
                                                    //     </div>
                                                    //     <Text
                                                    //     _light={{color:"#191919"}}
                                                    //     _dark={{color:"#FFF"}}
                                                    //     fontSize={"16px"}
                                                    //     fontWeight={400}
                                                    //     lineHeight={"20px"}
                                                    //     mt={"10px"}
                                                    //     ml={"5px"}
                                                    //     >
                                                    //         37% of TVL</Text>
                                                    // </>

                                                    // width={"168px"}
                                                    // height={"78px"}
                                                    // _light={{ bgColor: "#FFF", color: "#191919" }}
                                                    // _dark={{ bgColor: "#202020", color: "#FFF" }}
                                                    >

                                                        <Box
                                                            display={"flex"}
                                                            cursor={"pointer"}
                                                            alignItems={"center"}
                                                            justifyContent={"center"}

                                                            flexDirection={"row"}
                                                            bg={"#D9D9D9"}
                                                            borderRadius="50%"
                                                            border={blockchainSelected.includes(item.name) ? "3px solid #55A406" : ""}
                                                            boxShadow={!blockchainSelected.includes(item.name) ? "-2px 0px 5px 1px rgba(0, 0, 0, 0.10)" : ""}
                                                            w="40px"
                                                            h="40px"
                                                            ml={i !== 0 && '-10px'}
                                                            onClick={() => {
                                                                BlockchainTypeHandler(item.name);
                                                            }}
                                                            _hover={{ borderColor: "blue" }}
                                                            /* bgColor={
                                                              blockchainSelected.includes(item)
                                                                ? useColorModeValue("#F5F5F7", "#191919")
                                                                : useColorModeValue("#FFFFFF", "#202020")
                                                            }
                                                            border={useColorModeValue(
                                                              "1px solid #E0E0E0",
                                                              "1px solid #333"
                                                            )}  */
                                                        >
                                                            <Image
                                                                width={18}
                                                                height={18}
                                                                src={item.logoUrl}
                                                                alt={`${item.id}_icon`}

                                                            ></Image>
                                                            {/* <Text
                     fontSize={"10px"}
                     fontWeight={"400"}
                     lineHeight={"20px"}
                     letterSpacing={"1px"}
                     color={useColorModeValue("#16171B", "#FFF")}
                   >
                     {item}
                   </Text> */}
                                                        </Box>

                                                    </Tooltip>
                                                }
                                            </>
                                        ))}
                                        {/*   <Menu closeOnSelect={false}>
                                            <MenuButton
                                                bg={"#D9D9D9"}
                                                borderRadius="50%"
                                                w="40px"
                                                h="40px"
                                                transition='all 0.2s'

                                                border="2px solid #191919"
                                                ml='-10px'
                                                _focus={{ boxShadow: 'outline' }}
                                                color="#000"
                                            >
                                                +4
                                            </MenuButton>
                                            <MenuList
                                                boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
                                                bgColor={useColorModeValue("#FFF", "#191919")}
                                            >
                                                {blockchains?.map((item, i) => {
                                                    return (
                                                        <>
                                                            {i >= 4 &&
                                                                <MenuItem key={i}
                                                                    _light={{
                                                                        bgColor: "#FFF",
                                                                    }}
                                                                    _dark={{
                                                                        bgColor: "#191919",
                                                                    }}
                                                                    _hover={{ bg: colorMode === 'light' ? "#F5F5F7" : "#202020" }}
                                                                >
                                                                    <Checkbox colorScheme='green'
                                                                        value={item.name}
                                                                        checked={blockchainSelected.includes(item.name)} onChange={(e) => {
                                                                            BlockchainTypeHandler(item.name);
                                                                        }}>
                                                                        <Box
                                                                            display={"flex"}
                                                                            cursor={"pointer"}
                                                                            alignItems={"center"}
                                                                            justifyContent={"center"}
                                                                        >
                                                                            <Image
                                                                                width={18}
                                                                                height={18}
                                                                                src={item.logoUrl}
                                                                                alt={`${item.id}_icon`}

                                                                                style={{ marginRight: "20px", marginLeft: "14px" }}
                                                                            ></Image>
                                                                            <Text
                                                                                fontSize={"12px"}
                                                                                fontWeight={"400"}
                                                                                lineHeight={"20px"}
                                                                                letterSpacing={"1px"}
                                                                                _light={{
                                                                                    color: "#16171B",
                                                                                }}
                                                                                _dark={{
                                                                                    color: "#FFF",
                                                                                }}
                                                                            >
                                                                                {item.name}
                                                                            </Text>
                                                                        </Box>
                                                                    </Checkbox>
                                                                </MenuItem>
                                                            }
                                                        </>)
                                                })}
                                            </MenuList>
                                        </Menu> */}
                                    </Box>
                                </Box>
                                <Box
                                    h="100%"
                                    py={"11px"}
                                    pl="20px"
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        paddingRight={"15px"}
                                    >
                                        Token
                                    </Text>
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={600}
                                        lineHeight={"20px"}
                                        letterSpacing={"1px"}
                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        paddingRight={"15px"}
                                    >
                                        {defiData?.symbol}
                                    </Text>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        position={"relative"}
                        bgColor={useColorModeValue("#FFF", "#202020")}
                        padding={"10px 10px"}
                        h="fit-content"
                        borderRadius={"6px"}
                        _after={{
                            position: "absolute",
                            content: '""',
                            bottom: "0px",
                            left: "10px",
                            width: "85%",
                            height: "1px",
                            bgColor: "#00B913",

                        }}
                    >
                        Safety Score
                        <Text
                            ml="10px"
                            fontWeight={"600"}
                            fontSize={"16px"}

                        >
                            {defiData?.safety_score}
                        </Text>
                    </Box>
                </Box>
                {/* <hr style={colorMode === 'light' ? ({background:"#BFBFBF", margin:"10px 30px"}) : ({background:"#2F2F2F", margin:"10px 30px"})} /> */}
            </Box>
            <Box
                _light={{
                    bgColor: "#F0F0F5"
                }}
                _dark={{
                    bgColor: "#191919"
                }}
            >
                <Box
                    mb="10px"
                    display={"flex"}
                    justifyContent={"space-between"}
                    mx={"20px"}
                    padding={"10px 0 0 10px"}
                >
                    <TVLBox />
                    <TrendGraph />
                </Box>

                <Box
                    my="10px"
                    display={"flex"}
                    justifyContent={"space-between"}
                    mx={"20px"}
                    padding={"10px 0 0 10px"}
                    gap={"25px"}
                >
                    <DefiUsersSmallTableComponent
                    />
                    <BarChart />

                </Box>

                <Box
                    my="10px"
                    display={"flex"}
                    justifyContent={"space-between"}
                    mx={"20px"}
                    padding={"10px 0 0 10px"}
                    gap={"25px"}
                >
                    <DefiAssetCompositionSmallTable />
                    <DonutChart />

                </Box>
                <Box
                    my="10px"
                    display={"flex"}
                    justifyContent={"space-between"}
                    mx={"20px"}
                    padding={"10px 0 0 10px"}
                    gap={"25px"}
                >
                    <DefiHotContractsSmallTableComponent />
                    <DefiInflowOutflowSmallTableComponent />

                </Box>

                <Box
                    mt="20px"
                >
                    <GovernanceTable />
                </Box>
            </Box>

        </>
    );
};

export default DefiDashboardPage;
