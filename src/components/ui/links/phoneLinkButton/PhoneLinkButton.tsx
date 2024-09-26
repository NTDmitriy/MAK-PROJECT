import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import clsx from "clsx";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./PhoneLinkButton.module.css";

export const PhoneLinkButton: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ className, ...rest }) => {
  return (
    <a
      href={`tel:${CONTACTS_PUBLIC.PHONE}`}
      className={clsx(styles.button, className)}
      {...rest}
    >
      <DynamicSvg name="iconPhoneYellow" className={styles.svg} /> Позвонить
    </a>
  );
};
