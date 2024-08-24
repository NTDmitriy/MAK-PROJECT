"use client";

import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import {
	cloneElement,
	FC,
	PropsWithChildren,
	ReactElement,
	useState,
} from "react";

import clsx from "clsx";

import styles from "./MobileMenu.module.css";
import { MobileMenuHead } from "./mobileMenuHead/MobileMenuHead";

import { useStopScroll } from "@/hooks/useStopScroll";
import { useMobileMenu } from "@/store/mobile-menu.store";
import { MobileMenuItem } from "./mobileMenuItem/MobileMenuItem";
import { MobileMenuSocials } from "./mobileMenuSocials/MobileMenuSocials";

interface IMobileMenu extends IGenericElementProps {
  pages?: IDashboardItem[];
  menuName?: string;
  isSubMenu?: boolean;
}

export const MobileMenu: FC<PropsWithChildren<IMobileMenu>> = ({
  children,
  className,
  pages,
  menuName,
  isSubMenu,
  ...rest
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const { menuOpen, handleOpen } = useMobileMenu();

  useStopScroll(menuOpen);

  return (
    <>
      {children && (
        <>
          {cloneElement(children as ReactElement, {
            onClick: () => {
              setOpen(true), handleOpen();
            },
          })}
        </>
      )}

      <nav
        className={clsx(styles.nav, open && menuOpen ? styles.open : "")}
        {...rest}
      >
        <div className={styles.nav__content}>
          <MobileMenuHead closeSubMenu={() => setOpen(false)}>
            {menuName && menuName}
          </MobileMenuHead>
          {pages && (
            <ul className={styles.menu__list}>
              {pages.map((page, index) => (
                <MobileMenuItem
                  key={index}
                  index={index}
                  page={page}
                  isSubMenuItem={isSubMenu}
                />
              ))}
            </ul>
          )}
          <MobileMenuSocials />
        </div>
      </nav>
    </>
  );
};
