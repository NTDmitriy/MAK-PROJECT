import { PrimaryLinkButton } from "@/components/ui/links/primaryLinkButton/PrimaryLinkButton";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { FC, PropsWithChildren } from "react";
import { Box } from "../box/Box";
import styles from "./ContactBlog.module.css";

interface IContactBlog extends IGenericElementProps {
  blockTitle: string;
  btnText: string;
  to: string;
}

export const ContactBlog: FC<PropsWithChildren<IContactBlog>> = ({
  blockTitle,
  to,
  btnText,
}) => {
  return (
    <Box>
      <div className={styles.root}>
        <p className={styles.title}>{blockTitle}</p>
        <div className={styles.btn__wrapper}>
          <PrimaryLinkButton href={to}>{btnText}</PrimaryLinkButton>
        </div>
      </div>
    </Box>
  );
};
