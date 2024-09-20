import { CreativeAdvertisingScreen } from "@/components/screens/blogCases/creativeAdvertising/CreativeAdvertisingScreen";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.CREATIVE_ADVERTISING,
  openGraph: {
    ...METADATA.CREATIVE_ADVERTISING,
  },
};

const Blog: NextPage = () => {
  return <CreativeAdvertisingScreen />;
};

export default Blog;
