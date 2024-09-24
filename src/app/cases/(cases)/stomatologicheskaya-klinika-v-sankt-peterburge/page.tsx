import { StamotalogyClinicCase } from "@/components/screens/casesScreens/StamotalogyClinicCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.STOMATOLOGY_CLINIC,
  openGraph: {
    ...METADATA.STOMATOLOGY_CLINIC,
  },
};

const CasesPage: NextPage = () => {
  return (
    <StamotalogyClinicCase />
    );
};

export default CasesPage;

