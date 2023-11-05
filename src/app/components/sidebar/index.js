"use client";
import React from "react";
import {
	Box,
	Flex,
	Link,
	Text,
	useColorMode,
	useColorModeValue,
	Drawer,
	DrawerOverlay,
	DrawerBody,
	DrawerContent,
	Collapse,
	useDisclosure,
	createIcon,
	Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCollapsedReducer } from "@/redux/app_data/dataSlice";
import dynamic from "next/dynamic";
import "/styles/styles.scss";
import { linkItemsDown, linkItemsUp, bottomMenu } from "@/app/components/sidebar/helper";
import { FaPeopleGroup } from "react-icons/fa6";

const DynamicIcon = dynamic(() => import("@/app/components/icons/index_new"), {
	loading: () => <span>Loading...</span>,
});

const SidebarContent = ({ ...rest }) => {
	const { colorMode } = useColorMode();
	const dispatch = useDispatch();
	const router = useRouter();
	const pathname = usePathname();

	const SidebarHandler = (value) => {
		dispatch(sidebarCollapsedReducer(value));
	};

	const isSidebarCollapsed = useSelector(
		(state) => state?.appData?.isSidebarCollapsed
	);

	return (
		<>
			<Box
				bg={useColorModeValue("#FFFFFF", "#191919")}
				borderRight="1px"
				borderRightColor={useColorModeValue("#E1E1E1", "#333333")}
				minWidth={isSidebarCollapsed ? "50px" : "210px"}
				className="sidebar-styles"
				zIndex={"999"}
				display={{ base: "none", md: "flex" }}
				{...rest}
			>
				{!isSidebarCollapsed && (
					<Box layerStyle={"spaceBetween"} flexDir={"column"}>
						<Box layerStyle={"flexColumn"} gap={"15px"}>
							<Box layerStyle={"center"} alignItems="center" cursor={"pointer"} p={"20px"}
								onClick={() => router.push("/")}
							>
								<Image
									width={180}
									height={80}
									alt="logo"
									src={colorMode === 'dark' ?
										"/icons/dark_betgyfi_sm_logo.svg" :
										"/icons/light_betgyfi_sm_icon.svg"}
								/>
							</Box>

							<Box layerStyle={"flexColumn"}>
								{linkItemsUp.map((link, i) => (
									<NavItem
										key={i}
										NavIcon={link.icon}
										path={link.path}
										newTab={link.newTab}
										isActive={pathname === link.path}
									>
										<Text fontSize={"14px"} lineHeight={"20px"} letterSpacing={"1.4px"}>
											{link.name}
										</Text>
									</NavItem>
								))}
							</Box>

							<hr style={{ margin: "5px 2px 5px 15px" }} />

							<Box display={"flex"} w="100%" px={"20px"}>
								<Text variant={"h5"} 
									opacity="0.6" 
									letterSpacing={"1.2px"}
									_light={{ color:"#16171B" }}
									_dark={{ color:"#FFFFFF" }}> BetygFi Communities </Text>
							</Box>

							<Box layerStyle={"flexColumn"}>
								{linkItemsDown.map((link, i) => (
									<NavItem
										key={i}
										NavIcon={link.icon}
										path={link.path}
										newTab={link.newTab}
										isActive={pathname === link.path}
									>
										<Text fontSize={"12px"} lineHeight={"20px"} letterSpacing={"1.4px"}>
											{link.name}
										</Text>
									</NavItem>
								))}
							</Box>
						</Box>

						{/* Bottom Half */}
						<Box layerStyle={"flexColumn"} w={"100%"} mb={"70px"}>
							{bottomMenu.map((link, i) => (
								<NavItem
									key={i}
									NavIcon={link.icon}
									path={link.path}
									newTab={link.newTab}
									isActive={pathname === link.path}
								>
									<Text fontSize={"12px"} lineHeight={"20px"} letterSpacing={"1.4px"}>
										{link.name}
									</Text>
								</NavItem>
							))}

							<hr style={{ margin: "15px 0px" }} />

							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"center"}
								flexDirection={"column"}
								w={"100%"}
							>
								<Box display={"flex"} alignItems={"center"} w={"100%"} pl={6}>
									<Image
										width={15}
										height={15}
										alt="logo"
										src={"/icons/company_sm_logo.svg"}
										style={{ marginRight: "10px" }}
									/>
									<Text
										//as={"capital"}
										//opacity={"0.5"}
										fontSize={"11px"}
										fontStyle={"normal"}
										fontWeight={400}
										letterSpacing={"1.1px"}
										lineHeight={"20px"}
										textTransform={"capitalize"}
										_dark={{
											color: "#FFF",
										}}
										_light={{
											color: "#16171B",
										}}
									>
                    Powered by Solvendo
									</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				)}

				{isSidebarCollapsed && (
					<Box layerStyle={"spaceBetween"} flexDir={"column"} width={"70px"}>
						<Box layerStyle={"flexColumn"} w={"100%"}>

							<Box layerStyle={"center"} alignItems="center" cursor={"pointer"} py={"20px"} mr={"-13px"}
								onClick={() => router.push("/")}
							>
								<Image
									width={35}
									height={35}
									alt="logo"
									src={colorMode === 'light' ? "/icons/company_sidebar_sm_logo_dark.svg" 
										: "/icons/company_sidebar_sm_logo_light.svg"}
									cursor={"pointer"}
									onClick={() => router.push("/")}
								/>
							</Box>

							<Box layerStyle={"flexColumn"} mt={"20px"}>
								{linkItemsUp.map((link, i) => (
									<CollapsedNavItem
										key={i}
										NavIcon={link.icon}
										path={link.path}
										newTab={link.newTab}
										isActive={pathname === link.path}
									></CollapsedNavItem>
								))}
							</Box>

							<hr style={{ margin: "15px -13px" }} />

							<Box layerStyle={"flexColumn"}>
								{linkItemsDown.map((link, i) => (
									<CollapsedNavItem
										key={i}
										NavIcon={link.icon}
										path={link.path}
										newTab={link.newTab}
										isActive={pathname === link.path}
									></CollapsedNavItem>
								))}
							</Box>
						</Box>

						<Box layerStyle={"flexColumn"} w={"100%"} mb={"70px"}>
							{bottomMenu.map((link, i) => (
								<CollapsedNavItem
									key={i}
									NavIcon={link.icon}
									path={link.path}
									newTab={link.newTab}
									isActive={pathname === link.path}
								></CollapsedNavItem>
							))}

							<hr style={{ margin: "25px -13px" }} />

							<Box
								display={"flex"}
								justifyContent={"center"}
								w={"100%"}
							>
								<Box
									display={"flex"}
									justifyContent="center"
									alignItems={"center"}
									height={"45px"}
									mr={"-13px"}
								>
									<Image
										width={22}
										height={22}
										alt="logo"
										src={"/icons/company_sm_logo.svg"}
									/>
								</Box>
							</Box>
						</Box>
					</Box>
				)}

				<Box display={"flex"}>
					<Flex
						mr={"-12px"}
						padding={"0px"}
						cursor={"pointer"}
						onClick={() => {
							SidebarHandler(!isSidebarCollapsed);
						}}
					>
						<Image
							width={24}
							height={24}
							alt="button"
							style={
								isSidebarCollapsed ? { rotate: "180deg" } : { rotate: "0deg" }
							}
							src={useColorModeValue(
								"/icons/collapse-sidebar-light.svg",
								"/icons/collapse-sidebar-dark.svg"
							)}
						/>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default SidebarContent;


const CollapsedNavItem = ({ NavIcon, path, newTab }) => {
	const { colorMode } = useColorMode();

	return (
		<Link
			href={path}
			target={newTab ? "_blank" : null}
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
		>
			<Box
				display={"flex"}
				justifyContent="center"
				alignItems={"center"}
				height={"45px"}
				padding={"9px 20px"}
				role="group"
				cursor="pointer"
				gap={"10px"}
				_hover={{
					bg: colorMode === "light" ? "#202020" : "#FFFFFF",
					color: colorMode === "light" ? "#FFFFFF" : "#191919",
					fontWeight: "600",
				}}
				mr={"-13px"}
			>
				<Icon 
					as={NavIcon}
					boxSize={22}
					color={colorMode === "light" ? "#6F7383" : "#676767"}
					_groupHover={{
						color: colorMode === "light" ? "#FFFFFF" : "#191919",
					}}
					alt="logo"
				/>
			</Box>
		</Link>
	);
};

const NavItem = ({ NavIcon, path, newTab, isActive, children, ...rest }) => {
	const { colorMode } = useColorMode();

	if (isActive) {
		return (
			<Link
				href={path}
				target={newTab ? "_blank" : null}
				style={{ textDecoration: "none" }}
				_focus={{ boxShadow: "none" }}
			>
				<Box
					display={"flex"}
					alignItems="center"
					justifyContent={"left"}
					height={"38px"}
					padding={"9px 20px"}
					role="group"
					cursor="pointer"
					gap={"10px"}
					bg={colorMode === "light" ? "#202020" : "#FFFFFF"}
					color={colorMode === "light" ? "#FFFFFF" : "#191919"}
					mr={"-13px"}
					{...rest}
				>
					<Icon as={NavIcon} boxSize={18} color={colorMode === "light" ? "#FFFFFF" : "#191919"}/>
					{children}
				</Box>
			</Link>
		);
	}

	return (
		<Link
			href={path}
			target={newTab ? "_blank" : null}
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
		>
			<Box
				display={"flex"}
				alignItems="center"
				justifyContent={"left"}
				height={"38px"}
				padding={"9px 20px"}
				role="group"
				cursor="pointer"
				gap={"10px"}
				_hover={{
					bg: colorMode === "light" ? "#202020" : "#FFFFFF",
					color: colorMode === "light" ? "#FFFFFF" : "#191919",
					fontWeight: "600",
				}}
				mr={"-13px"}
				{...rest}
			>
				<Icon 
					as={NavIcon}
					boxSize={18}
					color={colorMode === "light" ? "#6F7383" : "#676767"}
					_groupHover={{
						color: colorMode === "light" ? "#FFFFFF" : "#191919",
					}}
				/>
				{children}
			</Box>
		</Link>
	);
};

const MobileSidebar = ({
	isOpen,
	onClose,
	onLoginModalOpen,
}) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen: isCommunitiesOpen, onToggle: onCommunitiesToggle } =
    useDisclosure();
	const router = useRouter();
	const pathname = usePathname();

	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement={"left"}
				onClose={onClose}
				//size={"md"}
				w="80%"
			>
				<DrawerOverlay />

				<DrawerContent>
					<DrawerBody p={0}>
						<Box
							bg={useColorModeValue("white", "#191919")}
							borderRight="1px"
							borderRightColor={useColorModeValue("gray.200", "gray.700")}
							minH="100vh"
							boxShadow={useColorModeValue(
								"1px 0px 0px 0px #E1E1E1",
								"1px 0px 0px 0px #333"
							)}
							display={"flex"}
							pos={"fixed"}
							zIndex={"100"}
							w={"100%"}
							h={"100%"}
						>
							<Box
								w="100%"
								h="100%"
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"space-between"}
							>
								{/* Top Half */}
								<Box>
									<Box
										display={"flex"}
										alignItems={"center"}
										justifyContent={"space-between"}
										padding={"5px 20px"}
										borderBottom={"2px"}
										borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
									>
										<Box display={"flex"} alignItems={"center"}>
											<Box mr="10px" cursor={"pointer"} onClick={onClose}>
												<DynamicIcon
													name={colorMode === "light" ? "x_dark" : "x_light"}
												/>
											</Box>

											<Box layerStyle={"flexCenter"} cursor={"pointer"} p={"20px"}>
												<Image
													width={100}
													height={70}
													alt="logo"
													src={
														colorMode === "light"
															? "/icons/light_betgyfi_sm_icon.svg"
															: "/icons/dark_betgyfi_sm_logo.svg"
													}
													cursor={"pointer"}
													onClick={() => router.push("/")}
												/>
											</Box>
										</Box>

										<Box>
											<div className="controller-row">
												<label className="switch">
													<input
														id="toggler"
														type="checkbox"
														checked={colorMode !== "light"}
														onChange={() => {
															toggleColorMode();
														}}
													/>
													<span className="slider round"></span>
												</label>
											</div>
										</Box>
									</Box>

									<Box layerStyle={"flexColumn"}>
										{linkItemsUp.map((link, i) => (
											<NavItem
												key={i}
												NavIcon={link.icon}
												path={link.path}
												newTab={link.newTab}
												isActive={pathname === link.path}
												height={"50px"}
												mr={"0px"}
											>
												<Text fontSize={"14px"} lineHeight={"20px"} letterSpacing={"1.4px"}>
													{link.name}
												</Text>
											</NavItem>
										))}

										{/* communities */}
										<Flex
											alignItems="stretch"
											alignContent={"center"}
											justifyContent={"space-between"}
											height={"50px"}
											padding={"9px 20px"}
											role="group"
											cursor="pointer"
											_hover={{
												bg: colorMode === "light" ? "#202020" : "#FFFFFF",
												color: colorMode === "light" ? "#FFFFFF" : "#191919",
												fontWeight: "600",
											}}
											fontSize="14px"
											fontWeight={"400"}
											lineHeight="20px"
											letterSpacing="1.4px"
											onClick={onCommunitiesToggle}
										>
											<Box
												display={"flex"}
												justifyContent={"center"}
												alignItems={"center"}
												alignContent={"center"}
												gap={"10px"}
											>
												<Icon 
													as={FaPeopleGroup}
													boxSize={18}
													color={colorMode === "light" ? "#6F7383" : "#676767"}
													_groupHover={{
														color: colorMode === "light" ? "#FFFFFF" : "#191919",
													}}
												/>
												<Text>Communities</Text>
											</Box>

											<Box>
												<DirectionArrowIcon
													boxSize={25}
													color={colorMode === "light" ? "dark" : "white"}
													_groupHover={{
														color: colorMode === "light" ? "white" : "dark",
													}}
													style={{ rotate: "90deg" }}
												/>
											</Box>
										</Flex>

										<Collapse in={isCommunitiesOpen} animateOpacity={"true"}>
											<Box layerStyle={"flexColumn"}>
												{linkItemsDown.map((link, i) => (
													<NavItem
														key={i}
														NavIcon={link.icon}
														path={link.path}
														newTab={link.newTab}
														isActive={pathname === link.path}
														height={"40px"}
														pl={"20px"}
														mr={"0px"}
													>
														<Text 
															fontSize={"12px"} 
															lineHeight={"20px"} 
															letterSpacing={"1.4px"}>
															{link.name}
														</Text>
													</NavItem>
												))}
											</Box>
										</Collapse>

										{bottomMenu.map((link, i) => (
											<NavItem
												key={i}
												NavIcon={link.icon}
												path={link.path}
												newTab={link.newTab}
												isActive={pathname === link.path}
												height={"50px"}
												mr={"0px"}
											>
												<Text 
													fontSize={"14px"} 
													lineHeight={"20px"} 
													letterSpacing={"1.4px"}>
													{link.name}
												</Text>
											</NavItem>
										))}
									</Box>
								</Box>

								<Box
									display={"flex"}
									justifyContent={"center"}
									padding={"10px"}
									mb={"20px"}
								>
									<Box
										cursor={"pointer"}
										onClick={onLoginModalOpen}
										bgColor={colorMode === "light" ? "#202020" : "#FFF"}
										display={"flex"}
										alignItems={"center"}
										justifyContent={"center"}
										borderRadius={"2px"}
										p={"15px 20px"}
										width={"80%"}
									>
										<Text
											fontSize={"14px"}
											fontWeight={"600"}
											lineHeight={"10px"}
											color={colorMode === "light" ? "#FAFAFB" : "#000"}
										>
                      Connect Wallet
										</Text>
									</Box>
								</Box>
							</Box>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export { MobileSidebar };

const DirectionArrowIcon = createIcon({
	displayName: "DirectionArrow",
	viewBox: "0 0 13 13",
	path: (
		<>
			<path fill="currentColor" d="M5.8 8.6l2.4-2.4-2.4-2.4" />
			<path fill="currentColor" d="M5.8 8.6l2.4-2.4-2.4-2.4v4.8z" />
		</>
	),
});
