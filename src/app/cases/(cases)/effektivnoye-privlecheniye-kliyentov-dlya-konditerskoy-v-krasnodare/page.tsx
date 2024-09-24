import { CandyShopCase } from "@/components/screens/casesScreens/CandyShopCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.CANDY_SHOP,
  openGraph: {
    ...METADATA.CANDY_SHOP,
  },
};

const CasesPage: NextPage = () => {
  return (
     <CandyShopCase />
    );
};

export default CasesPage;
