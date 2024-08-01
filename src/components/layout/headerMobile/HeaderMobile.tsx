
import { IconHomeNav } from "@/components/ui/icons";
import { IconLogo } from "@/components/ui/icons/genericIcons/IconLogo";
import { DASHBOARD_PAGES } from "@/config/urlConfig/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./HeaderMobile.module.css";
import { BottomNavigation } from "./bottomNavigation/BottomNavigation";

export const HeaderMobile: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <header {...rest} className={clsx(styles.header, className)}>
      <Link className={styles.button} href={DASHBOARD_PAGES.HOME.url}>
        <IconHomeNav />
      </Link>
      <IconLogo />

      <button className={styles.button}>Обсудить проект</button>

      <BottomNavigation />
    </header>
  );
};
