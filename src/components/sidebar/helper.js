import { RiBugLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BiWalletAlt, BiBulb } from "react-icons/bi";
import { /* SlSocialReddit, */ SlSettings, SlShield } from "react-icons/sl";
import { RxDiscordLogo } from "react-icons/rx";
import { BetygFiSmLogo } from "@components/icons";
import { GoDatabase, GoGraph } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineHelp } from "react-icons/md";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { VscCommentDiscussion } from "react-icons/vsc";

export const bottomMenu = [
    { name: "Help", icon: MdOutlineHelp, path: "/help" },
    { name: "Settings", icon: SlSettings, path: "/settings" },
    {
        name: "Suggest Feature",
        icon: BiBulb,
        newTab: true,
        path: "https://docs.google.com/forms/d/e/1FAIpQLSfxE_1k10L62cK87MuZfqik3D1nWruLu4MhIpzfOwIC7rhaQQ/viewform",
    },
    {
        name: "Report Bug",
        icon: RiBugLine,
        newTab: true,
        path: "https://docs.google.com/forms/d/e/1FAIpQLSeFhdugB6onlsQizRby95DA68y_nz_jJ-OwiSndZmin7KGMLw/viewform",
    },
];

export const dashboards = (appConfig) => [
    {
        name: "Coin Ranking",
        icon: GoDatabase,
        path: "/coin",
        activePaths: ["/", "/coin"],
    },
    {
        name: "ETF Tracker",
        icon: GoGraph,
        path: "/crypto-etfs-data-tracker",
        activePaths: ["/crypto-etfs-data-tracker"],
    },
    {
        name: "DeFi Ranking",
        icon: IoIosTrendingUp,
        path: "/protocol",
        activePaths: ["/protocol"]
    },
    {
        name: "Top Wallets",
        icon: BiWalletAlt,
        path: "/top-wallets",
        activePaths: ["/top-wallets"],
    },
    {
        name: "BetygFi Studio",
        icon: AiOutlineCodeSandbox,
        path: `${appConfig.NEXT_PUBLIC_STUDIO_URL}`,
        activePaths: [`${appConfig.NEXT_PUBLIC_STUDIO_URL}`],
        newTab: true,
    },
];

export const pages = [
    {
        name: "Approach Paper",
        icon: TiDocumentText,
        path: "/approach-paper",
    },
    { name: "About", icon: BetygFiSmLogo, path: "/about" },
];

export const communities = appConfig => [
    {
        name: "BetygFi",
        icon: VscCommentDiscussion,
        path: `${appConfig.NEXT_PUBLIC_COMMUNITY_URL}`,
        newTab: true,
    },
    {
        name: "Discord",
        icon: RxDiscordLogo,
        path: "https://discord.gg/bGMmeNRJtW",
        newTab: true,
    },
    {
        name: "Twitter",
        icon: RiTwitterXFill,
        path: "https://twitter.com/betygFi",
        newTab: true,
    },
    /* {
        name: "Reddit",
        icon: SlSocialReddit,
        path: "https://www.reddit.com/r/betygFi",
        newTab: true,
    }, */
];

export const legal = { name: "Legal", icon: SlShield, path: "/legal" };
