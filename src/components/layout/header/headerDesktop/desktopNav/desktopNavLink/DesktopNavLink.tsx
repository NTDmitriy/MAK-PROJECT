'use client';

import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./DesktopNavLink.module.css";

const DesktopNavLink: FC<PropsWithChildren<ILink>> = ({
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
        className,
        href === "/" ? styles.button : styles.link,
        { [styles.active]: isActive }
      )}
      {...rest}
    >
      <span>{children}</span>
    </Link>
  );
};

export default DesktopNavLink;
