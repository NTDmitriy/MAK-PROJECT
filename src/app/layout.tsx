import { Gtag } from "@/seo/Gtag";
import { METADATA, NO_INDEX_PAGE } from "@/seo/metadata";
import "@/styles/fonts.css";
import "@/styles/globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Footer } from "../components/layout/footer/Footer";
import { Header } from "../components/layout/header/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },

  ...METADATA.HOME,
  openGraph: {
    ...METADATA.HOME,
  },

  ...NO_INDEX_PAGE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <html lang="ru">
        <Gtag />
        <body suppressHydrationWarning>
          <div className="page">
            <Providers>
              <Header />
              <main>{children}</main>
              <Footer />
            </Providers>
          </div>
        </body>
      </html>
    </>
  );
}
