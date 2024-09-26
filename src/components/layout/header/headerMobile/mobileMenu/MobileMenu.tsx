"use client";

import { IDashboardItem } from "@/dashboard/app.dashboard";
import { useStopScroll } from "@/hooks/useStopScroll";
import { useMobileMenu } from "@/store/mobile-menu.store";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import {
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from "react";
import styles from "./MobileMenu.module.css";
import { MobileMenuHead } from "./mobileMenuHead/MobileMenuHead";
import { MobileMenuItem } from "./mobileMenuItem/MobileMenuItem";
import { MobileMenuSocials } from "./mobileMenuSocials/MobileMenuSocials";

interface IMobileMenu extends TGenericElementProps {
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

  useEffect(() => {
    if (!menuOpen) {
      setOpen(false);
    }
  }, [menuOpen]);

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
