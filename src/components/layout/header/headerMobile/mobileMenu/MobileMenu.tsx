"use client";
import { IconRightArray } from "@/components/ui/icons";
import { DASHBOARD_PAGES } from "@/config/urlConfig/all-pages.config";
import { useStopScroll } from "@/hooks/useStopScroll";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { useMobileMenu } from "@/store/mobile-menu.store";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { HeadMenu } from "../headMenu/HeadMenu";
import { MobileSubMenu } from "../mobileSubMenu/MobileSubMenu";
import { SocialButtons } from "../socialButtons/SocialButtons";
import styles from "./MobileMenu.module.css";

export const MobileMenu: FC<PropsWithChildren<IGenericElementProps>> = ({
  children,
  className,
  ...rest
}) => {
  const pagesArray = DASHBOARD_PAGES.toArray();

  const { open, handleOpen, handleClose, handleOpenSubMenu } = useMobileMenu();

  useStopScroll(open);

  return (
    <>
      <button {...rest} className={clsx(className)} onClick={handleOpen}>
        {children}
      </button>

      <nav className={clsx(styles.nav, open ? styles.open : "")}>
        <HeadMenu />

        <ul className={styles.menu__list}>
          {pagesArray.map((page, index) => (
            <li className={styles.menu__item} key={index}>
              <Link
                href={page.url}
                className={styles.link}
                onClick={handleClose}
              >
                <span className={styles.page__icon}>
                  {page.icon && <page.icon />}
                </span>
                <span className={styles.page__name}>{page.name}</span>
              </Link>
              {page.childrens && (
                <>
                  <button
                    className={styles.button__shadow}
                    onClick={() => handleOpenSubMenu(page)}
                  >
                    <span className={styles.sub__btn}>
                      <IconRightArray />
                    </span>
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        <SocialButtons />
      </nav>
      <MobileSubMenu />
    </>
  );
};
