"use client";

import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { IconRightArray } from "../../icons/genericIcons/IconRightArray";
import styles from "./NavLinkDropdown.module.css";

interface INavLinkDropdown extends ILink {
  arrayRight: boolean;
  isActive?: boolean;
}

const NavLinkDropdown: FC<PropsWithChildren<INavLinkDropdown>> = ({
  children,
  className,
  href,
  arrayRight,
  isActive,
  ...rest
}) => {
  return (
    <Link
      className={clsx(styles.button, isActive ? styles.active : "", className)}
      href={href}
      {...rest}
    >
      {children}

      {arrayRight && (
        <span className={styles.array}>
          <IconRightArray />
        </span>
      )}
    </Link>
  );
};

export default NavLinkDropdown;
