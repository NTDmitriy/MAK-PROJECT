
import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { DynamicSvg } from "../../../../ui/dynamicSvg/DynamicSvg";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import styles from "./BottomNavigation.module.css";

export const BottomNavigation: FC<
  PropsWithChildren<IGenericElementProps>
> = () => {
  const pages = DASHBOARD_PAGES.toArray();

  return (
    <div className={styles.nav}>
      <div className={styles.btn__group}>
        <MobileMenu pages={pages}>
          <button className={styles.button}>
            <DynamicSvg name="IconMenu" className={styles.icon} />
            Меню
          </button>
        </MobileMenu>
        <button className={styles.button}>
          <DynamicSvg name="IconTelegram" className={styles.icon} />
          Оставить заявку
        </button>
        <Link href={`tel:${CONTACTS_PUBLIC.PHONE}`} className={styles.button}>
          <DynamicSvg name="IconPhone" className={styles.icon} />
          Позвонить
        </Link>
      </div>
    </div>
  );
};
