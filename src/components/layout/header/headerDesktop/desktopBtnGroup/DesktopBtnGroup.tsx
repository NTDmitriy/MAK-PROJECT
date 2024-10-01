import { SeconderyButton } from "@/components/ui/buttons/seconderyButton/SeconderyButton";
import { DynamicSvg } from "@/components/ui/dynamicSvg/DynamicSvg";
import {
  FORM_TYPE,
  FormController,
} from "@/components/ui/forms/FormController";
import { SocialLink } from "@/components/ui/links/socialLink/SocialLink";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import { TGenericElementProps } from "@/typing/elements.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./DesktopBtnGroup.module.css";

export const DesktopBtnGroup: FC<PropsWithChildren<TGenericElementProps>> = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(styles.btn__group, className)}>
      <div className={styles.social__btns}>
        <SocialLink
          href={`${CONTACTS_PUBLIC.TELEGRAM}`}
          tooltip={"Telegram"}
          icon={<DynamicSvg name="IconTelegram" />}
        />
        <SocialLink
          href={`${CONTACTS_PUBLIC.WHATSAPP}`}
          tooltip={"Написать в WhatsApp"}
          icon={<DynamicSvg name="IconWhatsApp" />}
        />
        <SocialLink
          href={`mailto:${CONTACTS_PUBLIC.EMAIL}`}
          tooltip={"Написать на E-mail"}
          icon={<DynamicSvg name="IconEMail" />}
        />
        <SocialLink
          href={`tel:${CONTACTS_PUBLIC.PHONE}`}
          tooltip={"Позвонить"}
          icon={<DynamicSvg name="IconPhone" />}
        />
      </div>

      <div className={styles.button__wrapper}>
        <Popup
          initComponent={<SeconderyButton> Обсудить проект</SeconderyButton>}
          contentComponent={<FormController formType={FORM_TYPE.MAIN_FORM} />}
        />
      </div>
    </div>
  );
};
