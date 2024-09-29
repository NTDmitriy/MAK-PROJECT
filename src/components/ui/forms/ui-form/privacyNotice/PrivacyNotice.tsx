import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import { FC } from "react";
import styles from "./PrivacyNotice.module.css";

export const PrivacyNotice: FC = () => {
  return (
    <p className={styles.root}>
      Нажимая на кнопку "Отправить" Вы даете согласие на обработку своих
      персональных данных и соглашаетесь с условиями{" "}
      <a
        className={styles.link}
        href={CONTACTS_PUBLIC.PRIVACY_POLICY}
        target="_blank"
      >
        Политики конфиденциальности
      </a>
    </p>
  );
};
