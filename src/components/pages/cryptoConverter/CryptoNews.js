import { Box, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { truncateText } from '@util/utility';
import Image from 'next/image';


const CryptoNews = () => {
    const { colorMode } = useColorMode();

    const heroNews = [
        {
            tag: "crypto basic", title: "What is cryptocurrency? all you need to know", image: "/images/news_hero.png", isHero: true
        }];
    const newsList = [
        { tag: "crypto basic", title: "What is cryptocurrency? all you need to know", description: "Cryptocurrencies are basically digital assets. It is secured by...", image: "/images/news_title.jpeg" },

        { tag: "crypto basic", title: "What is cryptocurrency? all you need to know", description: "Cryptocurrencies are basically digital assets. It is secured by...", image: "/images/news_title.jpeg" },

        { tag: "crypto basic e", title: "What is cryptocurrency? all you need to know", description: "Cryptocurrencies are basically digital assets. It is secured by...", image: "/images/news_title.jpeg" },
        { tag: "crypto basic d", title: "What is cryptocurrency? all you need to know", description: "Cryptocurrencies are basically digital assets. It is secured by...", image: "/images/news_title.jpeg" },

        { tag: "crypto basic sdg", title: "What is cryptocurrency? all you need to know", description: "Cryptocurrencies are basically digital assets. It is secured by...", image: "/images/news_title.jpeg" },
        { tag: "crypto basic sdg", title: "What is cryptocurrency? all you need to know", description: "Cryptocurrencies are basically digital assets. It is secured by...", image: "/images/news_title.jpeg" },

    ];
    const heroNewsList = [...heroNews, ...newsList.filter((news, index) => index < 2)];
    const restNewsList = newsList.filter((news, index) => index > 1);
    const renderNewsCard = (news, index) => {
        return (
            <>
                {
                    news.isHero ?
                        <Box key={index} display={"flex"} flex={"1 0 0"}>
                            <Box borderRadius='4px 4px 0px 0px'   >
                                <Image height={200} width={880} src={news.image} alt={news.tag} />
                            </Box>
                        </Box>
                        :
                        <Box key={index} display={"flex"} borderRadius='0.25rem' border='0.841px solid rgba(0, 0, 0, 0.10)' background='rgba(255, 255, 255, 0.02)'>
                            <Box borderRadius='4px 4px 0px 0px'   >
                                <Image height={163} width={430} src={news.image} alt={news.tag} />
                                <Box display={"flex"} flexDir={"column"} gap={"0.6rem"} p={"1rem"}>
                                    <Text colorMode={colorMode} textTransform={"uppercase"} variant={"converter_left_box_title"}>{news.tag}</Text>
                                    <Text colorMode={colorMode} variant={"converter_news_title"}>{news.title}</Text>
                                    <Text colorMode={colorMode} variant={"converter_rank"}>{news.description && truncateText(news.description, 60)}</Text>
                                </Box>
                            </Box>
                        </Box>
                }
            </>
        );
    };
    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} >
            <Box p={"1.7rem 1.5rem"} gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                <Box gap={"1rem"} layerStyle={"flexColumn"}>
                    <Text colorMode={colorMode} variant={"converter_news_heading"}>
                        Bitcoin news today
                    </Text>
                    <Box gap={"1.25rem"} display={"grid"} gridTemplateColumns={"2fr 1fr 1fr"}  >
                        {
                            heroNewsList.map((news, index) => (
                                <>
                                    {renderNewsCard(news, index)}
                                </>
                            ))
                        }
                    </Box>
                    <Box gap={"1.25rem"} display={"grid"} gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
                        {
                            restNewsList.map((news, index) => (
                                <>
                                    {renderNewsCard(news, index)}
                                </>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CryptoNews;