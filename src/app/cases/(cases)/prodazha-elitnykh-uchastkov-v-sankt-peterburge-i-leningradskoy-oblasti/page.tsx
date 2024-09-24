import { RealEstateCaseSale } from "@/components/screens/casesScreens/RealEstateCaseSale";
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
      <RealEstateCaseSale />
    );
};

export default CasesPage;
