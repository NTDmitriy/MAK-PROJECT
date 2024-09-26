import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { ADVERTISEMENT_COMMON_CONTENT } from "@/content/services/advertisement/advertisement-common/advertisement-common.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";



export const metadata: Metadata = {
  ...METADATA.ADVERTISEMENT,
  openGraph: {
    ...METADATA.ADVERTISEMENT,
  },
};


const ServisePage: NextPage = () => {
  const content = ADVERTISEMENT_COMMON_CONTENT;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
