import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import { TGenericElementProps } from "@/typing/elements.type";
import { FC, PropsWithChildren } from "react";
import { Contacts } from "../sections/contacts/Contacts";
import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";

export const ContactsScreen: FC<
  PropsWithChildren<TGenericElementProps>
> = () => {
  return (
    <>
      <Breadcrumbs pathname={DASHBOARD_PAGES.CONTACTS.url} />
      <Contacts />
    </>
  );
};
