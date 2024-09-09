import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import { ContactsSection } from "../sections/contacts/ContactsSection";



export const ContactsScreen: FC<PropsWithChildren<IGenericElementProps>> = (props) => {
    return (
        <ContactsSection />
    );
}