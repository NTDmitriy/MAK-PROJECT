"use client";

import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { useNotification } from "@/hooks/useNotification";
import { useSendToTelegram } from "@/hooks/useSendToTelegram";
import { usePopupStore } from "@/store/popup.store";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { PhoneLinkButton } from "../../links/phoneLinkButton/PhoneLinkButton";
import { TelegramLinkButton } from "../../links/telegramLinkButton/TelegramLinkButton";
import { IFormContent } from "../FormController";
import { IForm } from "../HookFormProvider";
import { MessageInput, NameInput, PhoneInput } from "../inputs/MaskedInputs";
import styles from "./FaqForm.module.css";

export const FaqForm: FC<IFormContent> = ({
  title,
  text,
  areaVisible,
  ...rest
}) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();
  const { closePopup } = usePopupStore();

  const onSubmit = (data: IForm) => {
    const pathname = window.location.pathname;
    useSendToTelegram(data, pathname);
    useNotification("Заявка отправлена", "success");
    closePopup();
    reset();
  };

  const onError = (errors: Record<string, any>) => {
    const errorsArray = Object.entries(errors).map(([field, error]) => ({
      field,
      ...error,
    }));

    if (errorsArray.length > 1) {
      useNotification("Заполните все обязательные поля", "error");
    } else {
      useNotification(errorsArray[0].message, "error");
    }
  };

  return (
    <div className={styles.root} {...rest}>
      <h5 className={styles.title}>
        {title ? title : "Не нашли ответ на свой вопрос?"}
      </h5>
      {text ? (
        <p className={styles.descr}>{text}</p>
      ) : (
        <p className={styles.descr}>
          Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее
          время для проведения первичной консультации. Ответим на все ваши
          вопросы и предложим{" "}
          <span className={styles.accent}>
            идеальные решения для вашего бизнеса!
          </span>
        </p>
      )}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <NameInput />
        <PhoneInput />
        {areaVisible && <MessageInput />}
        <PrimaryButton className={styles.submit}>Отправить</PrimaryButton>
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
      <p className={styles.notice}>
        Нажимая на кнопку "Отправить" Вы даете согласие на обработку своих
        персональных данных и соглашаетесь с условиями{" "}
        <a className={styles.privacy} href={`/privacy-policy.pdf`}>
          Политики конфиденциальности
        </a>
      </p>
    </div>
  );
};
