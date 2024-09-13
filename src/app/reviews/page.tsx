import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { REVIEWS_CONFIG } from "@/config/content-config/useful/reviews/reviews.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.REVIEWS,
  openGraph: {
    ...METADATA.REVIEWS,
  },
};

const UsefulPage: NextPage = () => {
  return <UsefulScreen content={REVIEWS_CONFIG} />;
};

export default UsefulPage;
