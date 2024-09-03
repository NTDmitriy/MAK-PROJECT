"use client";

import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { useNotification } from "@/hooks/useNotification";
import { useSendToTelegram } from "@/hooks/useSendToTelegram";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { PhoneLinkButton } from "../../links/phoneLinkButton/PhoneLinkButton";
import { TelegramLinkButton } from "../../links/telegramLinkButton/TelegramLinkButton";
import { IFormContent } from "../FormController";
import { IForm } from "../HookFormProvider";
import { NameInput, NicheInput, PhoneInput } from "../inputs/MaskedInputs";
import styles from "./MainForm.module.css";

export const MainForm: FC<IFormContent> = ({ title, text, ...rest }) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();

  const onSubmit = (data: IForm) => {
    const pathname = window.location.pathname;
    useSendToTelegram(data, pathname);
    useNotification("Заявка отправлена", "success");
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
    <div className={styles.content} {...rest}>
      <div className={styles.descr}>
        {title ? (
          <h5 className={styles.title}>{title}</h5>
        ) : (
          <h5 className={styles.title}>Хотите обсудить ваш проект?</h5>
        )}

        {text ? (
          <p className={styles.text}>{text}</p>
        ) : (
          <p className={styles.text}>
            Оставьте свои контактные данные, и наш менеджер свяжется с вами,
            чтобы обсудить все детали вашего проекта и предложить наилучшие
            решения. Мы готовы выслушать ваши идеи, дать профессиональные советы
            и разработать стратегию, которая поможет вам достичь поставленных
            целей. Наша команда имеет богатый опыт работы в различных отраслях и
            всегда стремится к максимальной удовлетворенности клиентов.
          </p>
        )}
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <NameInput />
        <PhoneInput />
        <NicheInput />
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
        <a className={styles.privacy}   href={`/privacy-policy.pdf`}>
          Политики конфиденциальности
        </a>
      </p>
    </div>
  );
};
