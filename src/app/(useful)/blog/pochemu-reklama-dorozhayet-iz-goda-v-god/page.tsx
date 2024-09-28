import { WhyAdsExpensiveScreen } from "@/components/screens/blogCases/whyAdsExpensive/WhyAdsExpensiveScreen";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.WHY_ADS_EXPENSIVE,
  openGraph: {
    ...METADATA.WHY_ADS_EXPENSIVE,
  },
};

const Blog: NextPage = () => {
  return <WhyAdsExpensiveScreen />;
};

export default Blog;
