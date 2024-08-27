
import { ProductScreen } from "@/components/screens/ProductScreen";
import { MARKET_PLACE_CONFIG } from "@/config/content-config/servises/promotion/market-place/market-place.config";
import { NextPage } from "next";

const PromotionOnlineSchoolPage: NextPage = () => {
  return (
    <>
      <ProductScreen content={MARKET_PLACE_CONFIG} />
    </>
  );
};

export default PromotionOnlineSchoolPage;
