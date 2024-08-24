
import { ProductScreen } from "@/components/screens/ProductScreen";
import { ONLINE_SCHOOL_CONFIG } from "@/config/content-config/servises/promotion/online-schools/online-schools.config";
import { NextPage } from "next";

const PromotionOnlineSchoolPage: NextPage = () => {
  return (
    <>
      <ProductScreen content={ONLINE_SCHOOL_CONFIG} />
    </>
  );
};

export default PromotionOnlineSchoolPage;
