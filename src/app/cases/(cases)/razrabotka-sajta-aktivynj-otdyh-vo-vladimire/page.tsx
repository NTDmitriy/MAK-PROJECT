import { ActiveVacation } from "@/components/screens/casesScreens/ActiveVacation";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ACTIVE_VACATION,
  openGraph: {
    ...METADATA.ACTIVE_VACATION,
  },
};

const CasesPage: NextPage = () => {
  return <ActiveVacation />;
};

export default CasesPage;
