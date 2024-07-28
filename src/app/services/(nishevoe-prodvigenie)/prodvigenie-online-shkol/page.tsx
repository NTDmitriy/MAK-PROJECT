import { PromotionOnlineSchoolPage } from "@/components/screens/promotion/promotionOnlineSchool/PromotionOnlineSchoolPage";
import { onlineSchoolsPromotion } from "@/config/contentConfig/servises/promotion/onlineSchools.config";
import { NextPage } from "next";

const PromotionOnlineSchool: NextPage = () => {
  return (
    <>
      <PromotionOnlineSchoolPage content={onlineSchoolsPromotion} />
    </>
  );
};

export default PromotionOnlineSchool;
