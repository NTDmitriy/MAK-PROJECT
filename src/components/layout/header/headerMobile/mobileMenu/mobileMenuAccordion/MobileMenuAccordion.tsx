import { IDashboardItem } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { useMobileMenu } from "@/store/mobile-menu.store";
import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./MobileMenuAccordion.module.css";

interface IMobileMenuAccordion extends IGenericElementProps {
  isOpen: boolean;
  className?: string;
  page: IDashboardItem;
}

export const MobileMenuAccordion: FC<
  PropsWithChildren<IMobileMenuAccordion>
> = ({ page, isOpen }) => {
  const { childrens } = page;
  const { handleClose } = useMobileMenu();

  return (
    <div className={clsx(styles.accordion__wrapper, isOpen ? styles.open : "")}>
      <ul className={styles.accordion}>
        {childrens &&
          childrens.map((page, index) => (
            <li key={index} className={styles.accordion__item}>
              <Link href={`${page.url}`} className={styles.accordion__link} onClick={handleClose}>
                {page.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
