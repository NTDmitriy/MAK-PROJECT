import {
	IconDownArray,
	IconHome,
	IconUsefulBellNav,
} from "@/components/ui/icons";

import NavLink from "@/components/ui/links/navLink/NavLink";
import { DASHBOARD_PAGES } from "@/config/urlConfig/all-pages.config";
import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { NavDropdown } from "../navDropdown/NavDropdown";
import { ServicesMenu } from "../navDropdown/servicesMenu/ServicesMenu";
import { UsefulMenu } from "../navDropdown/usefulMenu/UsefulMenu";
import styles from "./DesktopNav.module.css";

interface IDesktopNav extends HTMLAttributes<HTMLElement> {}

export const DesktopNav: FC<PropsWithChildren<IDesktopNav>> = ({
  className,
  ...rest
}) => {
  return (
    <nav {...rest} className={clsx(styles.nav, className)}>
      <NavLink href={DASHBOARD_PAGES.HOME.url}>
        <IconHome />
      </NavLink>
      <NavLink href={DASHBOARD_PAGES.CASES.url}>
        {DASHBOARD_PAGES.CASES.name}
      </NavLink>
      <NavDropdown centered={true} content={<ServicesMenu />}>
        <NavLink href={DASHBOARD_PAGES.SERVICES.url}>
          {DASHBOARD_PAGES.SERVICES.name} <IconDownArray />
        </NavLink>
      </NavDropdown>
      <NavLink href={DASHBOARD_PAGES.REVIEWS.url}>
        {DASHBOARD_PAGES.REVIEWS.name}
      </NavLink>

      <NavDropdown centered={false} content={<UsefulMenu />}>
        <NavLink href={DASHBOARD_PAGES.USEFUL.url}>
          {DASHBOARD_PAGES.USEFUL.name} <IconDownArray />
          <IconUsefulBellNav className={styles.bell} />
        </NavLink>
      </NavDropdown>

      <NavLink href={DASHBOARD_PAGES.CONTACTS.url}>
        {DASHBOARD_PAGES.CONTACTS.name}
      </NavLink>
    </nav>
  );
};
