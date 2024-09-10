import { ContactsScreen } from "@/components/screens/ContactsScreen";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: 'Invoices',
};

const Contact: NextPage = () => {
  return (
    <>
      <Breadcrumbs pathname={DASHBOARD_PAGES.CONTACTS.url} />
      <ContactsScreen />
    </>
  );
};

export default Contact;
