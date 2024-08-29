import { ProductScreen } from "@/components/screens/ProductScreen";
import { CONSTRUCTION_COMPANY_CONFIG } from "@/config/content-config/servises/promotion/consruction-company/consruction-companyconfig";

import { NextPage } from "next";

const PromotionOnlineSchoolPage: NextPage = () => {
  return (
    <>
      <ProductScreen content={CONSTRUCTION_COMPANY_CONFIG} />
    </>
  );
};

export default PromotionOnlineSchoolPage;
