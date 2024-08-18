import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import CustomAvatar from '@components/avatar';

const CryptoDescription = () => {
    const { colorMode } = useColorMode();

    const trendingCoinTokenList = [
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "-1.8%", isNegative: true, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "-1.8%", isNegative: true, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "-1.8%", isNegative: true, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "-1.8%", isNegative: true, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
        { rank: 2, name: "Ethereum", ticker: "ETH", amount: "$180.06", percentChange: "+1.8%", isNegative: false, logo: "https://icons.llama.fi/raydium.jpg" },
    ];
    const descriptionList = [
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        }, {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        }, {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        }, {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
        {
            title: "What is Bitcoin?",
            description: "Lorem ipsum dolor sit amet consectetur. Elit lorem tempus habitasse amet amet tincidunt risus. Tellus dignissim lectus laoreet sem etiam sit. Euismod sed enim adipiscing augue mi vel praesent. Viverra consectetur nam et sit sed et lectus.",
        },
    ];
    return (
        <Box style={{ border: '1px solid red' }} display={"flex"} flexDir={{ md: "row", base: "column" }} gap={"1rem"} w={"100%"}>
            <Box bg={useColorModeValue("#FFFFFF", "#191919")} w={{ base: "100%", md: "75%" }}>
                <Box background='linear-gradient(184deg, rgba(255, 255, 255, 0.00) 4.24%, #FFF 89.89%)' p={"1.7rem 1.5rem"} height={"max-content"} maxH={"550px"} overflow={"auto"} gap={"1.5rem"} display={"flex"} flexDir={"column"}>
                    {descriptionList.map((desc, index) => (
                        <Box key={index} gap={"0.6rem"} display={"flex"} flexDir={"column"}>
                            <Text colorMode={colorMode} variant={"converter_news_description_text"}>
                                {desc.title}
                            </Text>
                            <Text colorMode={colorMode} variant={"converter_news_description_subtext"}>
                                {desc.description}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box bg={useColorModeValue("#FFFFFF", "#191919")} w={{ base: "100%", md: "25%" }}>
                <Box p={"1.7rem 1.5rem"} gap={"1.5rem"} display={"flex"} flexDir={"column"}>
                    <Text colorMode={colorMode} variant={"converter_news_heading"}>
                        Trending coins and tokens
                    </Text>
                    <Box overflow={"auto"} height={"max-content"} maxH={"450px"}>
                        {
                            trendingCoinTokenList.map((coin, index) => (
                                <Box key={index} gap={"1rem"} display={"flex"} alignItems={"start"} justifyContent={"space-between"} flexDir={"row"}>
                                    <Box>
                                        <Text colorMode={colorMode} variant={"converter_left_box_title"}>
                                            #{coin.rank}
                                        </Text>
                                    </Box>
                                    <Box colorMode={colorMode} display={"flex"} flexDir={"row"} gap={"0.25rem"}>
                                        <CustomAvatar
                                            width={"24px"}
                                            height={"24px"}
                                            style={{ borderRadius: "50%" }}
                                            name={coin?.name}
                                            src={coin?.logo}
                                        />
                                        <Text colorMode={colorMode} variant={"converter_trending_coin_name"}>
                                            {coin.name}
                                        </Text>
                                        <Box display='inline-flex'
                                            padding='2px 8px'
                                            justifyContent='center'
                                            alignItems='center'
                                            borderRadius='3.363px'
                                            background='rgba(70, 130, 180, 0.10)'
                                            gap='8.407px'>
                                            <Text colorMode={colorMode} color='#4682B4'
                                                fontFeatureSettings='salt on, liga off'
                                                fontFamily='Inter'
                                                fontSize='12px'
                                                fontStyle='normal'
                                                fontWeight='500'
                                                lineHeight='18.494px' textTransform={"uppercase"} >
                                                {coin.ticker}
                                            </Text>
                                        </Box>
                                    </Box>

                                    <Box display={"flex"} flexDir={"column"} alignItems={"end"}>
                                        <Text colorMode={colorMode} variant={"converter_news_description_subtext"}>
                                            {coin.amount}
                                        </Text>

                                        <Text colorMode={colorMode} variant={"converter_trending_coin_percent_change"} type={coin.isNegative ? "decrease" : "increase"}>
                                            {coin.percentChange}
                                        </Text>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box >
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Box >
    );
};

export default CryptoDescription;
