import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import {
	IconEMail,
	IconPhone,
	IconTelegram,
	IconWhatsApp,
} from "@/components/ui/icons";
import { SocialLink } from "@/components/ui/links/socialLink/SocialLink";
import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./DesktopBtnGroup.module.css";

export const DesktopBtnGroup: FC<PropsWithChildren<IGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(styles.btn__group, className)}>
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
        <SocialLink
          href={`tel:${CONTACTS_PUBLIC.PHONE}`}
          tooltip={"Позвонить"}
          icon={<IconPhone />}
        />
      </div>

      <div className={styles.button__wrapper}>
        <SeconderyButton> Обсудить проект</SeconderyButton>
      </div>
    </div>
  );
};
