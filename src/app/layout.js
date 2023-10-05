
import { ReduxProvider } from "@/redux/provider";
import { Manrope } from "next/font/google";
import { Providers } from "./ChakraProvider";
import LayoutProvider from "./layout/LayoutProvider";
import { Web3Provider } from './Web3Provider';
import '/styles/styles.scss';
import Script from "next/script";
const manrope = Manrope({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ["latin"]
});

export const metadata = {
  title: "BetygFi : Elevate your game",
  description: "Elevate your game",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          {/* Hotjar Tracking Code for https://betygfi.com/ 
          */}
          <Script id="hotjar-analytics" >
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

        </head>
        <body className={manrope.className}>
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
