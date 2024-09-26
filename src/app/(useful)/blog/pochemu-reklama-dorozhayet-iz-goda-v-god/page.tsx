import { RedesingGuideScreen } from "@/components/screens/blogCases/redesingGuide/RedesingGuideScreen";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.WHY_ADS_EXPENSIVE,
  openGraph: {
    ...METADATA.WHY_ADS_EXPENSIVE,
  },
};

const Blog: NextPage = () => {
  return <RedesingGuideScreen />;
};

export default Blog;
