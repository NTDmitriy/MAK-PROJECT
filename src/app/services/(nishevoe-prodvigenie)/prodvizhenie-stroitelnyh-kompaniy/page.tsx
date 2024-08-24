
import { ProductScreen } from "@/components/screens/ProductScreen";
import { STROITELNIE_COMPANII_CONFIG } from "@/config/content-config/servises/promotion/stroitelnye-kompanii/stroitelnie-companii.config";
import { NextPage } from "next";

const PromotionOnlineSchoolPage: NextPage = () => {
  return (
    <>
      <ProductScreen content={STROITELNIE_COMPANII_CONFIG} />
    </>
  );
};

export default PromotionOnlineSchoolPage;
