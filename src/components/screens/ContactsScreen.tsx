import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import { Contacts } from "../sections/contacts/Contacts";



export const ContactsScreen: FC<PropsWithChildren<IGenericElementProps>> = (props) => {
    return (
        <Contacts />
    );
}