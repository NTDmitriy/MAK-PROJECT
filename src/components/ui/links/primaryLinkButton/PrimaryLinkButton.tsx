import { ILinkButton } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./PrimaryLinkButton.module.css";

export const PrimaryLinkButton: FC<PropsWithChildren<ILinkButton>> = ({
  children,
	href,
  className,
  ...rest
}) => {
  return ( <>
    <Link href={href} className={clsx(styles.button, className)} {...rest}>
      {children}
    </Link>
	</>
  );
};
