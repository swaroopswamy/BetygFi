import { RiHomeLine, RiBugLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BiWalletAlt, BiBulb } from "react-icons/bi";
import { SlSocialReddit, SlSettings, SlShield } from "react-icons/sl";
import { RxDiscordLogo } from "react-icons/rx";
import { BetygFiSmLogo } from "@/app/components/icons";
import { GoDatabase } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";

export const linkItemsUp = [
    {
        name: "Home",
        icon: RiHomeLine,
        path: "/",
    },
    {
        name: "Approach Paper",
        icon: TiDocumentText,
        path: "/approach-paper",
    },
    {
        name: "Top Wallets",
        icon: BiWalletAlt,
        path: "/wallet",
    },
    { name: "About", icon: BetygFiSmLogo, path: "/about" },
];

export const linkItemsDown = [
    {
        name: "Reddit",
        icon: SlSocialReddit,
        path: "https://www.reddit.com/r/betygFi",
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
];

export const bottomMenu = [
    { name: "Help", icon: GrHelpBook, path: "/help" },
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

export const dashboards = [
    {
        name: "Coin Ranking",
        icon: GoDatabase,
        path: "/coin",
    },
    {
        name: "Defi Market Analytics",
        icon: IoIosTrendingUp,
        path: "/protocol",
    },
    {
        name: "Top Wallets",
        icon: BiWalletAlt,
        path: "/top-wallets",
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

export const communities = [
    {
        name: "Reddit",
        icon: SlSocialReddit,
        path: "https://www.reddit.com/r/betygFi",
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
];

export const legal = { name: "Legal", icon: SlShield, path: "/legal" };
