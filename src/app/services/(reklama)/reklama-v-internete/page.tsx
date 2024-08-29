import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { ADVERTISEMENT_COMMON_CONFIG } from "@/config/content-config/servises/advertisement/advertisement-common/advertisement-common.config";
import { NextPage } from "next";

const ServisePage: NextPage = () => {
  const content = ADVERTISEMENT_COMMON_CONFIG;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
