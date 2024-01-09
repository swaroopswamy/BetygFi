import React from "react";
import { ReduxProvider } from "@redux/provider";
import Script from "next/script";
import "/styles/styles.scss";
import { Providers } from "@/app/ChakraProvider";
// import { WagmiProvider } from "@/app/Web3Provider";
import LayoutProvider from "@/app/LayoutProvider";
import SessionProvider from "@/app/SessionProvider";
import { getServerSession } from "next-auth";
import { DefiLandingPageMetas } from "@util/metaHelper";
import { getAppConfig } from "@services/appService";
import { GET_LOCAL_SERVER_HOST } from "@util/utility";

export const metadata = DefiLandingPageMetas('');

export const dynamic = 'auto';
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
export const maxDuration = 5;

export default async function RootLayout({ children }) {
	const session = await getServerSession();

	const appConfig = await getAppConfig(GET_LOCAL_SERVER_HOST());
	let modifiedConfig = { ...appConfig };
	modifiedConfig = modifiedConfig?.values;
	if (!modifiedConfig) {
		return (
			<p>Error happend, failed to fetch config</p>
		);
	} else {
		if (process.env.NODE_ENV === "development") {
			modifiedConfig.NEXTAUTH_URL = GET_LOCAL_SERVER_HOST();
		}

		process.env.GOOGLE_CLIENT_ID = modifiedConfig.GOOGLE_CLIENT_ID;
		process.env.GOOGLE_CLIENT_SECRET = modifiedConfig.GOOGLE_CLIENT_SECRET;
		process.env.NEXTAUTH_SECRET = modifiedConfig.NEXTAUTH_SECRET;
		process.env.NEXT_PUBLIC_BETYGFI_URL = modifiedConfig.NEXT_PUBLIC_BETYGFI_URL;
		process.env.NEXT_PUBLIC_STUDIO_URL = modifiedConfig.NEXT_PUBLIC_STUDIO_URL;
		process.env.NEXT_PUBLIC_COMMUNITY_URL = modifiedConfig.NEXT_PUBLIC_COMMUNITY_URL;
		process.env.NEXTAUTH_URL = modifiedConfig.NEXTAUTH_URL;

		return (
			<html lang={"en"}>
				<head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					{/* Hotjar Tracking Code for https://betygfi.com/ */}
					<Script rel="preconnect" id="hotjar-analytics">
						{`(function(h,o,t,j,a,r){
				h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
				h._hjSettings={hjid:3667973,hjsv:6}; 
				a=o.getElementsByTagName('head')[0]; 
				r=o.createElement('script');r.async=1;
				r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; 
				a.appendChild(r);
				})
				(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
				`}
					</Script>
					<Script
						rel="preconnect"
						src="https://www.googletagmanager.com/gtag/js?id=G-Q0B2YDZPET"
						strategy="afterInteractive"
					></Script>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){window.dataLayer.push(arguments);}
			  gtag('js', new Date());
			  gtag('config', 'G-Q0B2YDZPET');
			`}
					</Script>
				</head>
				<body>
					<SessionProvider session={session}>
						<ReduxProvider>
							{/* <WagmiProvider> */}
							<Providers>
								<LayoutProvider appConfig={modifiedConfig}>{children}</LayoutProvider>
							</Providers>
							{/* </WagmiProvider> */}
						</ReduxProvider>
					</SessionProvider>
				</body>
			</html>
		);
	}
}
