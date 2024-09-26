import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { SEO_COMMON_CONTENT } from "@/content/services/seo/seo-common/seo-common.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SEO,
  openGraph: {
    ...METADATA.SEO,
  },
};


const ServisePage: NextPage = () => {
  const content = SEO_COMMON_CONTENT;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
