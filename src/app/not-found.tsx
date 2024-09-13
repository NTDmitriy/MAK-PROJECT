import { Notfound } from "@/components/sections/notfound/Notfound";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";


export const metadata: Metadata = {
  ...METADATA.NOTFOUND,
  openGraph: {
    ...METADATA.NOTFOUND,
  },
};

const NotfoundPage: NextPage = () => {
  return <Notfound />;
};

export default NotfoundPage;
