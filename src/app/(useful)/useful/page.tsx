import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { USEFUL_CONFIG } from "@/config/content-config/useful/useful.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.USEFUL,
  openGraph: {
    ...METADATA.USEFUL,
  },
};

const UsefulPage: NextPage = () => {
  return <UsefulScreen content={USEFUL_CONFIG} />;
};

export default UsefulPage;
