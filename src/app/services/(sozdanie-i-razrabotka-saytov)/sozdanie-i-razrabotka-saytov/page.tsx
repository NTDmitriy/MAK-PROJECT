
import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { WEBDEV_COMMON_CONFIG } from "@/config/content-config/servises/webdev/webdev-common/webdev-common.config";
import { NextPage } from "next";

const ServisePage: NextPage = () => {
  const content = WEBDEV_COMMON_CONFIG;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default ServisePage;
