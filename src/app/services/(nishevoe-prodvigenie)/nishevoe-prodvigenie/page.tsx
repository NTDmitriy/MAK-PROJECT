import { ServiceScreen } from "@/components/screens/ServiceScreen";
import { PROMOTION_COMMON_CONFIG } from "@/config/content-config/servises/promotion/promotion-common/promotion-common.config";
import { NextPage } from "next";

const PromotionPage: NextPage = () => {
  const content = PROMOTION_COMMON_CONFIG;

  return <>{content && <ServiceScreen content={content} />}</>;
};

export default PromotionPage;
