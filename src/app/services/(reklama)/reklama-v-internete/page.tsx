import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { ADVERTISEMENT_COMMON_CONFIG } from "@/config/content-config/services/advertisement/advertisement-common/advertisement-common.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";



export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT,
  openGraph: {
    ...METADATA.ADVERTISEMENT,
  },
};


const ServisePage: NextPage = () => {
  const content = ADVERTISEMENT_COMMON_CONFIG;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
