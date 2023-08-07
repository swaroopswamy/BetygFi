import { ReduxProvider } from "@/redux/provider";
import { Manrope } from "next/font/google";
import { Providers } from "./ChakraProvider";
import LayoutProvider from "./layout/LayoutProvider";
import { Web3Provider } from './Web3Provider';
const manrope = Manrope({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ["latin"]
});


export const metadata = {
  title: "BetygFi : Elevate your game",
  description: "Elevate your game",
  viewport: 'width=1400'
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <link rel="apple-touch-icon" sizes="180x180" href="../../../public/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../../../public/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../../../public/favicon/favicon-16x16.png" />
              <link rel="manifest" href="/public/favicon/site.webmanifest" />
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
