import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { AFFILIATE_CONFIG } from "@/config/content-config/useful/affiliate/affiliate.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.AFFILIATE,
  openGraph: {
    ...METADATA.AFFILIATE,
  },
};


const UsefulPage: NextPage = () => {
  return <UsefulScreen content={AFFILIATE_CONFIG} />;
};

export default UsefulPage;
