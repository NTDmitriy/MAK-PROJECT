import { WildberriesShopCase } from "@/components/screens/casesScreens/WildberriesShopCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.WILDBERRIES_SHOP,
  openGraph: {
    ...METADATA.WILDBERRIES_SHOP,
  },
};


const CasesPage: NextPage = () => {
  return (
    <WildberriesShopCase />
    );
};

export default CasesPage;