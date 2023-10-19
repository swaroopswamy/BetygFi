import { ReduxProvider } from "@/redux/provider";
import { Providers } from "./ChakraProvider";
import LayoutProvider from "./layout/LayoutProvider";
import { Web3Provider } from "./Web3Provider";
import Script from "next/script";
import "/styles/styles.scss";
export const metadata = {
  title: "BetygFi : Elevate your game",
  description: "Elevate your game",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
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
