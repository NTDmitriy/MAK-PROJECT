import { ILinkButton } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./SeconderyLinkButton.module.css";

export const SeconderyLinkButton: FC<PropsWithChildren<ILinkButton>> = ({
  children,
  className,
  href,
  publicLink,
  ...rest
}) => {
  return (
    <>
      {!publicLink && (
        <Link href={href} className={clsx(styles.button, className)} {...rest}>
          {children}
        </Link>
      )}
      {publicLink && (
        <a href={href} className={clsx(styles.button, className)} {...rest}>
          {children}
        </a>
      )}
    </>
  );
};
