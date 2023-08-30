"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode, colorMode
} from "@chakra-ui/react";
// import { blockchains } from "../../../util/constant";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import BackIconWhite from '../../../public/icons/backIconWhite.svg';
import BackIconBlack from '../../../public/icons/backIconBlack.svg';
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import SortWhiteIcon from '../../../public/icons/sort_white.svg';
import SortBlackIcon from '../../../public/icons/sort_black.svg';
import SmallPageButtons from '/src/app/components/smallTable_pagebutton';


const GenericSmallTableComponent = ({ tableName, thread, tableData, RowComponent }) => {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const router = useRouter();

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };

    return (
        <>
            <Box
                height={"100%"}
                border={"2px"}
                borderColor={useColorModeValue('#FFFFFF', '#202020')}
                borderRadius={"6px"}
                //mb={"30px"}
            >
                <Flex
                    borderRadius={"6px"}
                    _dark={{
                        bg: "#202020",
                        color: "#FFFFFF"
                    }}
                    _light={{
                        bg: "#FFFFFF",
                        color: "#16171B"
                    }}
                >
                        <Text
                            _light={{ color: "#16171B" }}
                            _dark={{ color: "#FFFFFF" }}
                            fontSize={"18px"}
                            fontWeight={600}
                            lineHeight={"20px"}
                            ml={"22px"}
                            mt={"15px"}
                            mb={"15px"}
                        >
                            {tableName}
                        </Text>
                        <Tooltip label="#Frame">
                        <Image width={"12px"}
                            height={"12px"}
                            flexShrink={"0"}
                            mt={"22px"}
                            ml={"5px"}
                            alt=''
                            src="/images/Frame.svg">
                        </Image>
                    </Tooltip>
                    <Spacer />
                    <Button
                        variant={"outline"}
                        size={"xs"}
                        _light={{ colorScheme: "#D9D9D9", stroke: "#D9D9D9" }}
                        _dark={{ colorScheme: "#333", stroke: "#333" }}
                        strokeWidth={"1px"}
                        mt={"15px"}
                        mr={"20px"}
                        onClick={() => {
                            router.push(`/defi_dashboard/asset_composition`)
                        }}
                    >
                        <Text
                            _light={{ color: "#16171B" }}
                            _dark={{ color: "#FFFFFF" }}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            lineHeight={"10px"}
                        >
                            View More
                        </Text>
                    </Button>
                </Flex>

                <Table variant='unstyled'
                    size={'sm'}
                    border={"1px"}
                    borderColor={useColorModeValue("#FFFFFF", "#272727")}
                    borderRadius={"6px"}
                    height={"80%"}
                >
                    <Thead>
                        <Tr
                            bg={useColorModeValue("#F5F5F7", "#131313")}
                            width={"20%"}
                            fontSize={"14px"}
                            fontWeight={400}
                            flex-shrink={"0"}
                            borderRadius={'6px'}
                        >
                            {thread.map((item, i) => {
                                return (
                                    <ThreadItem
                                        key={i}
                                        name={item}
                                    />
                                );
                            })}

                        </Tr>
                    </Thead>

                    <Tbody
                    >
                        <RowComponent
                            tableData={tableData}
                        />
                    </Tbody>


                </Table>
                <SmallPageButtons />
            </Box>
        </>
    )
};

export default GenericSmallTableComponent;

function ThreadItem({ key, name }) {

   

//     const [sortKey, setSortKey] = useState(null);
//   const [sortOrder, setSortOrder] = useState("asc");

//   const handleSort = (key) => {
//     if (sortKey === key) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortKey(key);
//       setSortOrder("asc");
//     }
//   };

//   const sortedData = data.slice().sort((a, b) => {
//     const aValue = a[sortKey];
//     const bValue = b[sortKey];
//     if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//     if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//     return 0;
//   });


    return (
        <>
            <Th
                key={key}
                color={useColorModeValue("#434347", "#A8ADBD")}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
                letterSpacing={"1px"}
                textTransform={"capitalize"}
                textAlign={"left"}
            >
                <Flex>
                    {name}
                    {/* Add an image next to the text */}
                    <Image src={useColorModeValue("/images/Arrowdown(light).svg", "/images/Arrowdown(dark).svg")} alt="Users" ml="5px" mt={"3px"} />
                
{/* <Image
src={useColorModeValue(
                sortOrder === "asc"
                  ? "/images/Arrowdown(light).svg"
                  : "/images/Arrowup(light).svg",
                sortOrder === "asc"
                  ? "/images/Arrowdown(dark).svg"
                  : "/images/Arrowup(dark).svg"
              )}
              alt="Sort"
              ml="5px"
              mt="5px"
              /> */}
                </Flex>
            </Th>
        </>
    )
}

// function SelectionBox({ blockchainSelected, colorMode, BlockchainTypeHandler }) {
//     const dispatch = useDispatch();
//     const blockchainListData = useSelector((state) => state?.appData?.BlockchainListData);
//     var blockchains = [];

//     if (blockchainListData.isSuccess) {
//         blockchains = blockchainListData.data;
//     }
    
//     useEffect(() => {
//         dispatch(fetchBlockchainListData());
//     }, []);

//     return <>
//         <Box
//             display={"flex"}
//             flexDirection={"column"}
//         >
//             <Box
//                 w={"100%"}
//                 display={"flex"}
//                 alignItems={"center"}
//             >
//                 <Box
//                     position={"relative"}
//                     cursor={"pointer"}
//                     fontSize={"14px"}
//                     fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
//                     letterSpacing={"1px"}
//                     lineHeight={"20px"}
//                     color={useColorModeValue("#3A3A3A", "#FFFFFF")}
//                     _after={
//                         blockchainSelected.length === 0 && {
//                             position: "absolute",
//                             content: '""',
//                             bottom: "-14px",
//                             left: 0,
//                             width: "100%",
//                             height: "1px",
//                             bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",

//                         }
//                     }
//                     onClick={() => {
//                         BlockchainTypeHandler("All");
//                     }}
//                     mr={"18px"}
//                     //textTransform={"lowercase"}
//                 >
//                     All
//                 </Box>
//                 {blockchains.map((item, i) => {
//                     if (i >= 4) return;
//                     return (
//                         <Box
//                             position={"relative"}
//                             cursor={"pointer"}
//                             key={i}
//                             _after={
//                                 blockchainSelected.includes(item.name) && {
//                                     position: "absolute",
//                                     content: '""',
//                                     bottom: "-14px",
//                                     left: 0,
//                                     width: "100%",
//                                     height: "1px",
//                                     bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
//                                 }
//                             }
//                             onClick={() => {
//                                 BlockchainTypeHandler(item.name);
//                             }}
//                             mr={"10px"}
//                             display={"flex"}
//                             alignItems={"center"}
//                         >
//                             <Image
//                                 w={"20px"}
//                                 h={"20px"}
//                                 mr={"11px"}
//                                 src={`/icons/${item.name}_sm_icon.svg`}
//                                 alt=""
//                             ></Image>
//                             <Text
//                                 fontSize={"14px"}
//                                 fontWeight={blockchainSelected.includes(item.name) ? "700" : "400"}
//                                 lineHeight={"21.826px"}
//                                 letterSpacing={"1.4px"}
//                                 color={colorMode === 'light' ?
//                                     blockchainSelected.includes(item.name) ? "#191919" : "#191919"
//                                     :
//                                     blockchainSelected.includes(item.name) ? "#FFFFFF" : "#FFFFFF"
//                                 }
//                                 //textTransform="uppercase"
//                             >
//                                 {item.name}
//                             </Text>
//                         </Box>
//                     );
//                 })}
//             </Box>
//         </Box>
//     </>
// }


