import { SitemapScreen } from "@/components/screens/SetemapScreen";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.SITEMAP,
  openGraph: {
    ...METADATA.SITEMAP,
  },
};

const Page: NextPage = () => {
  return <SitemapScreen />;
};

export default Page;
