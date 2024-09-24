import { DestroyRoomCase } from "@/components/screens/casesScreens/DestroyRoomCase";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.ROOM_DESTROY,
  openGraph: {
    ...METADATA.ROOM_DESTROY,
  },
};

const CasesPage: NextPage = () => {
  return (
      <DestroyRoomCase />
    );
};

export default CasesPage;
