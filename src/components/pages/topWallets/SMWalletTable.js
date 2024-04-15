import { Table, Tbody, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import TableData from "@util/whales.json";
import SMWalletTableRow from "./SMWalletTableRow";

const SMWalletTable = () => {
    return (
        <Table
            variant="unstyled"
            display={{ base: "table", md: "none" }}
            size={"sm"}
            border={"1px"}
            borderColor={useColorModeValue("#FFFFFF", "#272727")}
            borderRadius={"6px"}
        >
            <Thead>
                <Tr
                    bg={useColorModeValue("#F5F5F7", "#131313")}
                    width={"20%"}
                    flex-shrink={"0"}
                    borderRadius={"6px"}
                    position="sticky"
                    top={0}
                >
                    <Th _light={{ bgColor: "#FFFFFF", }} _dark={{ bgColor: "#202020", }}>
                        <Text variant={"tableHead"}>
                            Wallet Address
                        </Text>
                    </Th>
                    <Th _light={{ bgColor: "#FFFFFF", }} _dark={{ bgColor: "#202020", }}>
                        <Text variant={"tableHead"}>Net Worth</Text>
                    </Th>
                </Tr>
            </Thead>

            <Tbody>
                {TableData.whales.map((item, index) => {
                    return (
                        <SMWalletTableRow
                            key={index}
                            item={item}
                        />
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default SMWalletTable;