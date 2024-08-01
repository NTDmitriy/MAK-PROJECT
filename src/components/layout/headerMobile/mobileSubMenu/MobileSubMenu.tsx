"use client";

import { IconRightArray } from "@/components/ui/icons";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { useMobileMenu } from "@/store/mobile-menu.store";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { HeadMenu } from "../headMenu/HeadMenu";
import { SocialButtons } from "../socialButtons/SocialButtons";
import styles from "./MobileSubMenu.module.css";

export const MobileSubMenu: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  const { subMenuContent, openSubMenu, handleClose } = useMobileMenu();
  const [openDropdown, setOpenDropdown] = useState<number | null>(0);
  const items = subMenuContent?.childrens;

  const handleOpenDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    if (items && items.length > 0) {
      setOpenDropdown(0);
    }
  }, [items]);

  return (
    <>
      {items && (
        <nav
          {...rest}
          className={clsx(
            styles.nav,
            openSubMenu ? styles.open : "",
            className
          )}
        >
          <HeadMenu children={subMenuContent.name} />

          <ul className={styles.menu__list}>
            {items.map((page, index) => (
              <li className={styles.menu__item} key={index}>
                <div className={styles.link__wrapper}>
                  <Link
                    href={`${subMenuContent.url}${page.url}`}
                    className={styles.link}
										onClick={handleClose}
                  >
                    <span className={styles.page__icon}>
                      {page.icon && <page.icon />}
                    </span>
                    <span className={styles.page__name}>{page.name}</span>
                  </Link>
                  {page.childrens && (
                    <button
                      className={styles.button__shadow}
                      onClick={() => handleOpenDropdown(index)}
                    >
                      <span className={styles.sub__btn}>
                        <IconRightArray className={styles.svg} />
                      </span>
                    </button>
                  )}
                </div>
                {page.childrens && (
                  <div
                    className={clsx(
                      styles.sub__list__wrapper,
                      openDropdown === index ? styles.open : ""
                    )}
                  >
                    <ul className={styles.sub__list}>
                      {page.childrens.map((subPage, subIndex) => (
                        <li key={subIndex} className={styles.sub__item}>
                          <Link
                            href={`${subMenuContent.url}${subPage.url}`}
                            className={styles.sub__item__link}
														onClick={handleClose}
                          >
                            {subPage.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <SocialButtons />
        </nav>
      )}
    </>
  );
};
