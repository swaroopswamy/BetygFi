import React from "react";
import { ReduxProvider } from "@redux/provider";
import Script from "next/script";
import "/styles/styles.scss";
import { Providers } from "@app/ChakraProvider";
import LayoutProvider from "@app/LayoutProvider";
import SessionProvider from "@app/SessionProvider";
import { getServerSession } from "next-auth";
import { DefiLandingPageMetas } from "@util/metaHelper";
import { getAppConfig } from "@services/appService";
import { getAppConfigMappedToGlobalEnv } from "@util/utility";
import { Web3Provider } from '@app/Web3Provider';

export const metadata = DefiLandingPageMetas('');

export const dynamic = 'auto';
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
export const maxDuration = 5;

export default async function RootLayout({ children }) {
	const session = await getServerSession();
	let appConfig = await getAppConfig();
	if (!appConfig) {
		return (
			<p>Error happend, failed to fetch config</p>
		);
	} else {
		if (appConfig.NEXTAUTH_URL_DASHBOARD) {
			appConfig.NEXTAUTH_URL = appConfig.NEXTAUTH_URL_DASHBOARD;
		}
		getAppConfigMappedToGlobalEnv(appConfig);
		return (
			<html lang={"en"}>
				<head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
					{/* 	<link href="https://fonts.cdnfonts.com/css/guardian-sans" rel="stylesheet" />	*/}
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
							<Web3Provider>
								<Providers>
									<LayoutProvider appConfig={appConfig}>{children}</LayoutProvider>
								</Providers>
							</Web3Provider>
						</ReduxProvider>
					</SessionProvider>
				</body>
			</html>
		);
	}
}
