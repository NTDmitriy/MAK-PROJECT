import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { PROMOTION_COMMON_CONTENT } from "@/content/services/promotion/promotion-common/promotion-common.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.PROMOTION,
  openGraph: {
    ...METADATA.PROMOTION,
  },
};


const ServisePage: NextPage = () => {
  const content = PROMOTION_COMMON_CONTENT;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
