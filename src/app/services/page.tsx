import { AllServiceScreen } from "@/components/screens/AllServicesScreen";
import { SERVICES_COMMON_CONTENT } from "@/content/services/services-common.content";

import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.SERVICES,
  openGraph: {
    ...METADATA.SERVICES,
  },
};

const ServicePage: NextPage = () => {
  const content = SERVICES_COMMON_CONTENT;

  return <>{content && <AllServiceScreen content={content} />}</>;
};

export default ServicePage;
