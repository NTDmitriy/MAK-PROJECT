import { IconMenu, IconPhone, IconTelegram } from "@/components/ui/icons";
import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import styles from "./BottomNavigation.module.css";

export const BottomNavigation: FC<
  PropsWithChildren<IGenericElementProps>
> = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.btn__group}>
        <MobileMenu className={styles.button}>
          <IconMenu className={styles.icon} />
          Меню
        </MobileMenu>

 
        <button className={styles.button}>
          <IconTelegram className={styles.icon} height={24} />
          Оставить заявку
        </button>
        <Link href={`tel:${CONTACTS_PUBLIC.PHONE}`} className={styles.button}>
          <IconPhone className={styles.icon} />
          Позвонить
        </Link>
      </div>
    </div>
  );
};
