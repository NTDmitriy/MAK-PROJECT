"use client";

import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import { FC } from "react";
import { PhoneLinkButton } from "../../links/phoneLinkButton/PhoneLinkButton";
import { TelegramLinkButton } from "../../links/telegramLinkButton/TelegramLinkButton";
import { IFormContent } from "../FormController";
import { useHandlerFormContext } from "../HandleFormProvider";
import { NameInput, NicheInput, PhoneInput } from "../ui-form/MaskedInputs/MaskedInputs";
import { PrivacyNotice } from "../ui-form/privacyNotice/PrivacyNotice";
import { SubmitButton } from "../ui-form/submitButton/SubmitButton";
import styles from "./MainForm.module.css";

export const MainForm: FC<IFormContent> = ({ title, text, ...rest }) => {
  const { handleForm } = useHandlerFormContext();

  return (
    <div className={styles.content} {...rest}>
      <div className={styles.descr}>
        {title && <h5 className={styles.title}>{title}</h5>}
        {!title && (
          <h5 className={styles.title}>Хотите обсудить ваш проект?</h5>
        )}

        {text && <p className={styles.text}>{text}</p>}
        {!text && (
          <p className={styles.text}>
            Оставьте свои контактные данные, и наш менеджер свяжется с вами,
            чтобы обсудить все детали вашего проекта и предложить наилучшие
            решения. Мы готовы выслушать ваши идеи, дать профессиональные советы
            и разработать стратегию, которая поможет вам достичь поставленных
            целей. Наша команда имеет богатый опыт работы в различных отраслях и всегда стремится к максимальной удовлетворенности клиентов.
          </p>
        )}
      </div>
      <form className={styles.form} onSubmit={handleForm}>
        <NameInput />
        <PhoneInput />
        <NicheInput />
        <SubmitButton />
      </form>
      <p className={styles.contact__text}>
        Также можно оставить заявку через{" "}
        <span className={styles.contact__text_bold}>Telegram</span> или
        позвонить по телефону{" "}
        <span className={styles.contact__text_bold}>
          {CONTACTS_PUBLIC.PHONE}
        </span>
      </p>
      <div className={styles.btn__group}>
        <TelegramLinkButton className={styles.contact__btn} />
        <PhoneLinkButton className={styles.contact__btn} />
      </div>
     <PrivacyNotice />
    </div>
  );
};
