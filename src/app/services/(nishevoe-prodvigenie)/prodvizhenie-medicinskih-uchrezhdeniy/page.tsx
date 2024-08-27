
import { ProductScreen } from "@/components/screens/ProductScreen";
import { MEDICAL_CONFIG } from "@/config/content-config/servises/promotion/medical/medical.config";
import { NextPage } from "next";

const PromotionOnlineSchoolPage: NextPage = () => {
  return (
    <>
      <ProductScreen content={MEDICAL_CONFIG} />
    </>
  );
};

export default PromotionOnlineSchoolPage;
