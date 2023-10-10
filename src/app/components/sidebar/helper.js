import { Icon, Image } from '@chakra-ui/react';
import { RiHomeLine, RiTwitterXLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import { BiWalletAlt } from 'react-icons/bi';
import { SlSocialReddit } from 'react-icons/sl';
import { RxDiscordLogo } from 'react-icons/rx';
import { BetygFiSmLogo } from '../icons';

export const linkItemsUp = [
    {
        name: "Home",
        icon: RiHomeLine,
        path: "/"
    },
    {
        name: "Approach Paper",
        icon: TiDocumentText,
        path: "/approach-paper",
    },
    {
        name: "Top Wallets",
        icon: BiWalletAlt,
        path: "/top-wallets",
    },
    {   name: "About",
        icon: BetygFiSmLogo,
        path: "/about" },
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
        icon: RiTwitterXLine,
        path: "https://twitter.com/betygFi",
        newTab: true,
    },
];

export const bottomMenu = [
    // { name: "Help", icon: QuestionIcon, path: '#' },
    // { name: "Settings", icon: SettingIcon, path: '#' },
    { name: "Settings", icon: "icons/settings-icon.svg", path: "/settings" },
    {
        name: "Suggest Feature",
        icon: RiHomeLine,
        newTab: true,
        path: "https://docs.google.com/forms/d/e/1FAIpQLSfxE_1k10L62cK87MuZfqik3D1nWruLu4MhIpzfOwIC7rhaQQ/viewform",
    },
    {
        name: "Report Bug",
        icon: RiHomeLine,
        newTab: true,
        path: "https://docs.google.com/forms/d/e/1FAIpQLSeFhdugB6onlsQizRby95DA68y_nz_jJ-OwiSndZmin7KGMLw/viewform",
    },
];