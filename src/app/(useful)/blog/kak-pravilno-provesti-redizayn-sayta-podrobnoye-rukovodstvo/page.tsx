import { RedesingGuideScreen } from "@/components/screens/blogCases/redesingGuide/RedesingGuideScreen";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.REDESIGN_GUIDE,
  openGraph: {
    ...METADATA.REDESIGN_GUIDE,
  },
};

const Blog: NextPage = () => {
  return <RedesingGuideScreen />;
};

export default Blog;
