

import { FrontentDevUniversityCase } from "@/components/screens/casesScreens/FrontentDevUniversityCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.FRONTEND_DEVELOPMENT_UNIVERSITY,
  openGraph: {
    ...METADATA.FRONTEND_DEVELOPMENT_UNIVERSITY,
  },
};

const CasesPage: NextPage = () => {
  return (
      <FrontentDevUniversityCase />
    );
};

export default CasesPage;
