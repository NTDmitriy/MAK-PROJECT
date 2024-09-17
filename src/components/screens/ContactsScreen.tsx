import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import { Contacts } from "../sections/contacts/Contacts";
import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";

export const ContactsScreen: FC<
  PropsWithChildren<IGenericElementProps>
> = () => {
  return (
    <>
      <Breadcrumbs pathname={DASHBOARD_PAGES.CONTACTS.url} />
      <Contacts />
    </>
  );
};
