import { METADATA, NO_INDEX_PAGE } from "@/seo/metadata";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";
import { Footer } from "../components/layout/footer/Footer";
import { Header } from "../components/layout/header/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  ...METADATA.HOME,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    ...METADATA.HOME,
    siteName: "Make All Perfect",
  },
  ...NO_INDEX_PAGE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">


      <body suppressHydrationWarning>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSL5TXVP');
          `,
        }}
      />
        <div className="page">
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
