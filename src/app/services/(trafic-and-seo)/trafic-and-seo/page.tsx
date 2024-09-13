import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { SEO_COMMON_CONFIG } from "@/config/content-config/services/seo/seo-common/seo-common.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SEO,
  openGraph: {
    ...METADATA.SEO,
  },
};


const ServisePage: NextPage = () => {
  const content = SEO_COMMON_CONFIG;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
