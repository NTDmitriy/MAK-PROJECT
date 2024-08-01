import { IconEMail, IconTelegram, IconWhatsApp } from "@/components/ui/icons";
import { SocialLink } from "@/components/ui/links/socialLink/SocialLink";
import { CONTACTS_PUBLIC } from "@/config/contact.config";
import Link from "next/link";
import { FC } from "react";
import styles from "./SocialButtons.module.css";

export const SocialButtons: FC = () => {
  return (
    <div className={styles.menu_bottom}>
      <div className={styles.social__btns}>
        <SocialLink
          href={`${CONTACTS_PUBLIC.TELEGRAM}`}
          tooltip={"Написать в Telegram"}
          icon={<IconTelegram />}
        />
        <SocialLink
          href={`${CONTACTS_PUBLIC.WHATSAPP}`}
          tooltip={"Написать в WhatsApp"}
          icon={<IconWhatsApp />}
        />
        <SocialLink
          href={`mailto:${CONTACTS_PUBLIC.EMAIL}`}
          tooltip={"Написать на E-mail"}
          icon={<IconEMail />}
        />
      </div>
      <div className={styles.contact__info}>
        <p className={styles.work__schedule}>с 09:00 до 21:00 МСК</p>
        <Link className={styles.phone} href={`tel:${CONTACTS_PUBLIC.PHONE}`}>
          {CONTACTS_PUBLIC.PHONE}
        </Link>
      </div>
    </div>
  );
};
