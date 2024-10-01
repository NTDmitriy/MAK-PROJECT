import { TGenericElementProps } from "@/typing/elements.type";
import { FC, PropsWithChildren } from "react";
import { Contacts } from "../sections/contacts/Contacts";

export const ContactsScreen: FC<
  PropsWithChildren<TGenericElementProps>
> = () => {
  return (
    <>
      <Contacts />
    </>
  );
};
