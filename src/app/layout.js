import { ReduxProvider } from "@/redux/provider";
import { Providers } from "./ChakraProvider";
import LayoutProvider from "./layout/LayoutProvider";
import { Web3Provider } from "./Web3Provider";
import Script from "next/script";
import "/styles/styles.scss";
import Head from "next/head";
export const metadata = {
  title: "BetygFi : Elevate your game",
  description: "Elevate your game",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* Hotjar Tracking Code for https://betygfi.com/
           */}
        </Head>
        <Script id="hotjar-analytics">
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
        <body>
          <ReduxProvider>
            <Web3Provider>
              <Providers>
                <LayoutProvider>{children}</LayoutProvider>
              </Providers>
            </Web3Provider>
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
