import clsx from "clsx";
import { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";

import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./TelegramLinkButton.module.css";

export const TelegramLinkButton: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ className, ...rest }) => {
  return (
    <a
      href={CONTACTS_PUBLIC.TELEGRAM}
      target="_blank"
      className={clsx(styles.button, className)}
      {...rest}
    >
      <DynamicSvg name="IconTelegramBlue" /> Telegram
    </a>
  );
};
