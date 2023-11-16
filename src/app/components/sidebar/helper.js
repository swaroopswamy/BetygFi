import { RiHomeLine, RiBugLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import { BiWalletAlt, BiBulb } from 'react-icons/bi';
import { SlSocialReddit, SlSettings, SlShield } from 'react-icons/sl';
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
		icon: "",
		path: "https://twitter.com/betygFi",
		newTab: true,
	},
];

export const bottomMenu = [
	{    name: "Help",
		icon: "",
		path: "/help"
	},
	{    name: "Settings",
		icon: SlSettings,
		path: "/settings"
	},
	{    name: "Legal",
		icon: SlShield,
		path: "/legal"
	},
	{
		name: "Suggest Feature",
		icon: BiBulb,
	},
	{
		name: "Report Bug",
		icon: RiBugLine,
	},
];