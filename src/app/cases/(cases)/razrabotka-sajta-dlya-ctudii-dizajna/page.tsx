import { InteriorDesignStudio } from "@/components/screens/casesScreens/InteriorDesignStudio";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.INTERIOR_DESIGN_STUDIO,
  openGraph: {
    ...METADATA.INTERIOR_DESIGN_STUDIO,
  },
};

const CasesPage: NextPage = () => {
  return <InteriorDesignStudio />;
};

export default CasesPage;
