import { METADATA, NO_INDEX_PAGE } from "@/seo/metadata";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from "next";
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
      <GoogleAnalytics gaId="GTM-WSL5TXVP" />
      <body suppressHydrationWarning={true}>
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
