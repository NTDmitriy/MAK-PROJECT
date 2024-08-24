import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./DesktopNav.module.css";
import { DesktopNavItem } from "./desktopNavItem/DesktopNavItem";

export const DesktopNav: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const pages = DASHBOARD_PAGES.toArray();

  return (
    <nav {...rest} className={clsx(styles.nav, className)}>
      <ul className={clsx(styles.nav__list, className)}>
        {pages &&
          pages.map((page, index) => (
            <DesktopNavItem page={page} key={index} 	/>
          ))}
      </ul>
    </nav>
  );
};
