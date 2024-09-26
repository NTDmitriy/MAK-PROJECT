
import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { WEBDEV_COMMON_CONTENT } from "@/content/services/webdev/webdev-common/webdev-common.content";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.WEBDEV,
  openGraph: {
    ...METADATA.WEBDEV,
  },
};


const ServisePage: NextPage = () => {
  const content = WEBDEV_COMMON_CONTENT;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
