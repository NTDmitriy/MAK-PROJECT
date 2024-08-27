import { CONTACTS_PUBLIC } from "@/config/contact.config";
import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./PhoneLinkButton.module.css";

export const PhoneLinkButton: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ className, ...rest }) => {
  return (
    <Link
      href={`tel:${CONTACTS_PUBLIC.PHONE}`}
      className={clsx(styles.button, className)}
      {...rest}
    >
      <DynamicSvg name="iconPhoneYellow" className={styles.svg} /> Позвонить
    </Link>
  );
};
