"use client";

import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import clsx from "clsx";
import { FC } from "react";
import { PhoneLinkButton } from "../../links/phoneLinkButton/PhoneLinkButton";
import { TelegramLinkButton } from "../../links/telegramLinkButton/TelegramLinkButton";
import { IFormContent } from "../FormController";
import { useHandlerFormContext } from "../HandleFormProvider";
import {
  MessageInput,
  NameInput,
  PhoneInput,
} from "../ui-form/MaskedInputs/MaskedInputs";
import { PrivacyNotice } from "../ui-form/privacyNotice/PrivacyNotice";
import { SubmitButton } from "../ui-form/submitButton/SubmitButton";
import styles from "./FaqForm.module.css";

export const FaqForm: FC<IFormContent> = ({
  title,
  text,
  areaVisible,
  ...rest
}) => {
  const { handleForm } = useHandlerFormContext();

  return (
    <div className={styles.root} {...rest}>
      {title && <h5 className={styles.title}>{title}</h5>}
      {!title && (
        <h5 className={styles.title}>Не нашли ответ на свой вопрос?</h5>
      )}

      {text && <p className={styles.descr}>{text}</p>}
      {!text && (
        <p className={styles.descr}>
          Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее
          время для проведения первичной консультации. Ответим на все ваши
          вопросы и предложим{" "}
          <span className={styles.accent}>
            идеальные решения для вашего бизнеса!
          </span>
        </p>
      )}

      <form className={clsx(styles.form, 'form')} onSubmit={handleForm}>
        <NameInput />
        <PhoneInput />
        {areaVisible && <MessageInput />}
        <div className={styles.submit}>
          <SubmitButton />
        </div>
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
