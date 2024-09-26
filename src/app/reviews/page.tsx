import { UsefulScreen } from "@/components/screens/UsefulScreen";
import { REVIEWS_CONTENT } from "@/content/useful/reviews/reviews.content";

import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.REVIEWS,
  openGraph: {
    ...METADATA.REVIEWS,
  },
};

const UsefulPage: NextPage = () => {
  return <UsefulScreen content={REVIEWS_CONTENT} />;
};

export default UsefulPage;
