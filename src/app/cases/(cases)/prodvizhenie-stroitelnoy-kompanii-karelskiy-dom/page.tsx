import { ConstructionCompanyCase } from "@/components/screens/casesScreens/ConstructionCompanyCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.CONSTRUCTION_COMPANY,
  openGraph: {
    ...METADATA.CONSTRUCTION_COMPANY,
  },
};


const CasesPage: NextPage = () => {
  return (
    <ConstructionCompanyCase />
    );
};

export default CasesPage;

