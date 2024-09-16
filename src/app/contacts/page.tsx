import { ContactsScreen } from "@/components/screens/ContactsScreen";
import { METADATA } from "@/seo/metadata";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...METADATA.CONTACTS,
  openGraph: {
    ...METADATA.CONTACTS,
  },
};

const Contact: NextPage = () => {
  return (
    <>

      <ContactsScreen />
    </>
  );
};

export default Contact;
