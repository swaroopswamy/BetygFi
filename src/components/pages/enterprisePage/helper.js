export const features = [
    {
        id: '1',
        icon: "ent_feature_1",
        title: "Event Alerts",
        subTitle: "Event Alerts",
        desc: "Stay informed with notifications for specific on-chain events. Customize alerts based on your requirements to ensure you never miss critical updates.",
    },
    {
        id: '2',
        icon: "ent_feature_2",
        title: "Query Editor",
        subTitle: "Query Editor",
        desc: "Our query editor allows you to efficiently query public blockchain data. Aggregate this data into visually appealing dashboards for deeper insights.",
    },
    {
        id: '3',
        icon: "ent_feature_3",
        title: "Entity Analytics",
        subTitle: "Entity Analytics",
        desc: "Connect blockchain addresses to entities like individuals, funds, exchanges, and whales. Gain valuable analytics and data to support informed decision-making.",
    },
    {
        id: '4',
        icon: "ent_feature_4",
        title: "ChainPal",
        subTitle: "ChainPal",
        desc: "Get instant answers to your blockchain-related questions with our AI-driven chatbot. Simply ask your queries and receive accurate, real-time responses.",
    },
    {
        id: '5',
        icon: "ent_feature_5",
        title: "Transaction Visualizer",
        subTitle: "Transaction Visualizer",
        desc: "Explore and analyze blockchain transactions in real-time with our transaction visualizer. Enjoy unparalleled transparency and insights into digital ledger activities.",
    },
    {
        id: '6',
        icon: "ent_feature_6",
        title: "Customizable Dashboards",
        subTitle: "Customizable Dashboards",
        desc: "Tailor your data visualization and analysis experience with customizable dashboards. Access the most relevant information, personalized to your specific needs and preferences.",
    }
];


export const directionAnimations = [
    { initial: { opacity: 0, scale: 0, x: '-100%', y: '-100%' }, animate: { opacity: 1, scale: 1, x: 0, y: 0 } }, // top-left
    { initial: { opacity: 0, scale: 0, x: 0, y: '-100%' }, animate: { opacity: 1, scale: 1, x: 0, y: 0 } }, // top
    { initial: { opacity: 0, scale: 0, x: '100%', y: '-100%' }, animate: { opacity: 1, scale: 1, x: 0, y: 0 } }, // top-right
    { initial: { opacity: 0, scale: 0, x: '-100%', y: '100%' }, animate: { opacity: 1, scale: 1, x: 0, y: 0 } }, // bottom-left
    { initial: { opacity: 0, scale: 0, x: 0, y: '100%' }, animate: { opacity: 1, scale: 1, x: 0, y: 0 } }, // bottom
    { initial: { opacity: 0, scale: 0, x: '100%', y: '100%' }, animate: { opacity: 1, scale: 1, x: 0, y: 0 } }, // bottom-right
];

export const words = ['Banks', 'Investors', 'Institutions', 'Individuals'];

export const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

