'use client'
import { ReduxProvider } from "@/redux/provider";

import { Manrope } from "next/font/google";
import { Providers } from "./ChakraProvider";
import LayoutProvider from "./layout/LayoutProvider";
import { Web3Provider } from './Web3Provider';
import { useColorModeValue } from "@chakra-ui/react";
const manrope = Manrope({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ["latin"]
});




export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body style={{ background: useColorModeValue("#F0F0F5", "#191919") }}>
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
