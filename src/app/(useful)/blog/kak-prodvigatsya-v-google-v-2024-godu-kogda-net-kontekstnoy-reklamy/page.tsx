import { RedesingGuideScreen } from "@/components/screens/blogCases/redesingGuide/RedesingGuideScreen";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ADS_GOOGLE_GUIDE,
  openGraph: {
    ...METADATA.ADS_GOOGLE_GUIDE,
  },
};

const Blog: NextPage = () => {
  return <RedesingGuideScreen />;
};

export default Blog;
