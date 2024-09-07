import { Box, Text, useColorMode } from '@chakra-ui/react';

const CoinRankRepresentator = ({ coinDetails }) => {
    const score = coinDetails?.score * 100;
    const { colorMode } = useColorMode();
    return (
        <Box height={"3.5rem"}>
            <Box position={"relative"} height={"1rem"} width={"100%"} borderRadius='0.25rem' flexShrink={0} background='#F0F0F5'>
                <Box position={"absolute"} height={"2rem"} width={`${score}%`} borderRadius='4px 4px 0px 0px' background='#4682B4' flexShrink={0}>
                    <Box top={"2rem"} borderLeft={"2px solid #4682B4"} borderRight={"2px solid #4682B4"} pos={"absolute"} width={"100%"}>
                        <Box display={"flex"} justifyContent={"start"} alignItems={"center"} p={"0.35rem"}>
                            <Text color={colorMode === "light" ? '#585858' : 'rgba(255, 255, 255, 0.50)'}
                                fontFamily='Inter'
                                fontSize='12px'
                                fontStyle='normal'

                                fontWeight='400'
                                lineHeight='18.494px'>out of 100
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CoinRankRepresentator;
