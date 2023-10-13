import Dashboard from "./dashboard/page";
import Script from 'next/script';
import "/styles/styles.scss";

export default function Home() {


  return (
    <>
      <main>

        {/* <!-- Google tag (gtag.js) -->  */}

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

        <Dashboard />
      </main>
    </>
  );
}
