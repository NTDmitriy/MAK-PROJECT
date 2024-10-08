import { RealEstateSaleCase } from "@/components/screens/casesScreens/RealEstateSaleCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.REAL_ESTATE_SALE,
  openGraph: {
    ...METADATA.REAL_ESTATE_SALE,
  },
};

const CasesPage: NextPage = () => {
  return (
      <RealEstateSaleCase />
    );
};

export default CasesPage;
