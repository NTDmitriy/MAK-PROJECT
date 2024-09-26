import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { USEFUL_CONTENT } from "@/content/useful/useful.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.USEFUL,
  openGraph: {
    ...METADATA.USEFUL,
  },
};

const UsefulPage: NextPage = () => {
  return <UsefulScreen content={USEFUL_CONTENT} />;
};

export default UsefulPage;
