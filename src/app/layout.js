import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import { Providers } from "./ChakraProvider";
import LayoutProvider from "./layout/LayoutProvider";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ["latin"]
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ReduxProvider>
          <Providers>
            <LayoutProvider>{children}</LayoutProvider>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
