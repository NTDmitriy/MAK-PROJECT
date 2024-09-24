import { TaxOptimizationCase } from "@/components/screens/casesScreens/TaxOptimizationCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.TAX_OPTIMIZATION,
  openGraph: {
    ...METADATA.TAX_OPTIMIZATION,
  },
};

const CasesPage: NextPage = () => {
  return (
    <TaxOptimizationCase />
    );
};

export default CasesPage;

