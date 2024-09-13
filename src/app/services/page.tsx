import { AllServiceScreen } from "@/components/screens/AllServicesScreen";
import { SERVICES_COMMON_CONFIG } from "@/config/content-config/services/services-common.config";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SERVICES,
  openGraph: {
    ...METADATA.SERVICES,
  },
};

const ServicePage: NextPage = () => {
  const content = SERVICES_COMMON_CONFIG;

  return <>{content && <AllServiceScreen content={content} />}</>;
};

export default ServicePage;
