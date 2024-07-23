import {
	IconDownArray,
	IconHome,
	IconUsefulBellNav,
} from "@/components/ui/icons";
import NavLink from "@/components/ui/links/navLink/NavLink";
import { DASHBOARD_PAGES } from "@/config/pages.config";
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
      <NavLink href={DASHBOARD_PAGES.HOME}>
        <IconHome />
      </NavLink>
      <NavLink href={DASHBOARD_PAGES.CASES}>Кейсы</NavLink>
      <NavDropdown content={<ServicesMenu />}>
        <NavLink href={DASHBOARD_PAGES.SERVICES}>
          Услуги <IconDownArray />
        </NavLink>
      </NavDropdown>
      <NavLink href={DASHBOARD_PAGES.REVIEWS}>Отзывы</NavLink>

      <NavDropdown centered={false} content={<UsefulMenu />}>
        <NavLink href={DASHBOARD_PAGES.USEFUL}>
          Полезное <IconDownArray />
          <IconUsefulBellNav className={styles.bell} />
        </NavLink>
      </NavDropdown>

      <NavLink href={DASHBOARD_PAGES.CONTACTS}>Контакты</NavLink>
    </nav>
  );
};
