import { ILinkButton } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./PrimaryLinkButton.module.css";

export const PrimaryLinkButton: FC<PropsWithChildren<ILinkButton>> = ({
  children,
  href,
  className,
  publicLink,
  ...rest
}) => {
  return (
    <>
      {!publicLink && (
        <Link href={href} className={clsx(styles.button, className)} {...rest}>
          <span>{children}</span>
        </Link>
      )}
      {publicLink && (
        <a href={href} className={clsx(styles.button, className)} {...rest}>
          <span>{children}</span>
        </a>
      )}
    </>
  );
};
