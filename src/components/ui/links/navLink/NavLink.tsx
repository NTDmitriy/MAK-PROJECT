"use client";

import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./NavLink.module.css";


const NavLink: FC<PropsWithChildren<ILink>> = ({
  children,
  className,
  href,
  ...rest
}) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={clsx(
        href === "/"
          ? styles.button
          : isActive
          ? clsx(styles.link, styles.active)
          : styles.link
      )}
      {...rest}
    >
      <span>{children}</span>
    </Link>
  );
};

export default NavLink;
