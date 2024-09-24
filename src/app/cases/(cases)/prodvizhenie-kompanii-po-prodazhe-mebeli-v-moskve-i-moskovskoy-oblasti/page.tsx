import { FurnitureStoreCase } from "@/components/screens/casesScreens/FurnitureStoreCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.FURNITURE_STORE,
  openGraph: {
    ...METADATA.FURNITURE_STORE,
  },
};


const CasesPage: NextPage = () => {
  return (
    <FurnitureStoreCase />
    );
};

export default CasesPage;
