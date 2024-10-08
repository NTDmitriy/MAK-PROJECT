
import { Gtag } from "@/seo/Gtag";
import { METADATA } from "@/seo/metadata";
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
          <Providers>
            <div className="page">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
