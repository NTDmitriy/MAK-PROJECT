import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { NO_INDEX_PAGE } from "@/seo/seo.constants";
import "@/styles/globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title:
    "Make All Perfect – маркетинговое агентство полного цикла | Digital маркетинг",
  description: "The official Next.js Learn Dashboard built with App Router.",
  icons: {
    icon: "/favicon.svg",
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
