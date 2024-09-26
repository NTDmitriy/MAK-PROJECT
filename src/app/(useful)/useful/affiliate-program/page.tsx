import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { AFFILIATE_CONTENT } from "@/content/useful/affiliate/affiliate.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.AFFILIATE,
  openGraph: {
    ...METADATA.AFFILIATE,
  },
};


const UsefulPage: NextPage = () => {
  return <UsefulScreen content={AFFILIATE_CONTENT} />;
};

export default UsefulPage;
