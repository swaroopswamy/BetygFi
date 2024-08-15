import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-json'; // for cURL
import 'ace-builds/src-noconflict/theme-twilight';
import { codeSnippets, languageModes } from "../helper";

const TabBox = React.memo(() => {
    const [selectedTab, setSelectedTab] = useState('cURL');

    return (
        <Box
            layerStyle={"flexColumn"}
            maxW={"575px"}
            borderRadius={'12px'}
            bgColor={"#060606"}
            p={"0px"}
            h="100%"
        >
            <Tabs onChange={(index) => setSelectedTab(Object.keys(codeSnippets)[index])} p={"0px"}>
                <TabList
                    padding={"12px 14px"}
                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                    bg="transparent"
                    gap={"18px"}
                    overflowX={"scroll"}
                    overflowY={"hidden"}
                >
                    {Object.keys(codeSnippets).map((tab) => {
                        return (
                            <Tab
                                key={tab}
                                padding="2px 8px"
                                bg="transparent"
                                borderRadius={"8px"}
                                border={selectedTab === tab ? "1px solid #FFFFFF!important" : "transparent"}

                                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                            >
                                <Text variant={"campaign_sm_text"}>
                                    {tab}
                                </Text>
                            </Tab>
                        );
                    })}
                </TabList>
                <TabPanels p={"0px"}>
                    {Object.keys(codeSnippets).map((tab) => (
                        <TabPanel key={tab} p={0}>
                            <AceEditor
                                readOnly={true}
                                style={{
                                    borderBottomLeftRadius: "12px",
                                    borderBottomRightRadius: "12px"
                                }}
                                mode={languageModes[tab]}
                                theme="twilight"
                                name="editor"
                                fontSize={16}
                                width="100%"
                                height="418px"
                                wrapEnabled={true}
                                value={codeSnippets[tab]}
                                showPrintMargin={true}
                                showGutter={false}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: false,
                                    enableSnippets: false,
                                    showLineNumbers: false,
                                    tabSize: 2,
                                }}
                            />
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box >
    );
});

TabBox.displayName = TabBox;
export default TabBox;
