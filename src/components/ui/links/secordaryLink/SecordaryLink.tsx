"use client";

import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./SecordaryLink.module.css";


export const SecordaryLink: FC<PropsWithChildren<ILink>> = ({
  children,
  className,
  href,
  ...rest
}) => {

  return (
    <Link
      href={href}
      className={clsx(styles.link, className)}
      {...rest}
    >
      {children}
    </Link>
  );
};




