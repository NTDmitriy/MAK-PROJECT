"use client";

import { useNotification } from "@/hooks/useNotification";
import { useSendToTelegram } from "@/hooks/useSendToTelegram";
import { usePopupStore } from "@/store/popup.store";
import clsx from "clsx";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { IFormContent } from "../FormController";
import { IForm } from "../HookFormProvider";
import { NameInput, PhoneInput } from "../inputs/MaskedInputs";
import styles from "./ComplexForm.module.css";

export const ComplexForm: FC<IFormContent> = ({ title, text }) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();
  const { closePopup } = usePopupStore();

  const onSubmit = (data: IForm) => {
    const pathname = window.location.pathname;
    if (title) data.product = title;
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
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={clsx(styles.form__content)}>
          {title ? (
            <h5 className={styles.title}> {title}</h5>
          ) : (
            <h5 className={styles.title}>ЗАКАЗАТЬ КОМПЛЕКС УСЛУГ</h5>
          )}
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

          <div className={styles.input__group}>
            <NameInput />
            <PhoneInput />
          </div>

          <div className={styles.btn__group}>
            <PrimaryButton className={styles.submit}>Отправить</PrimaryButton>
          </div>
          <p className={styles.notice}>
            Нажимая на кнопку "Отправить" Вы даете согласие на обработку своих
            персональных данных и соглашаетесь с условиями{" "}
            <a className={styles.privacy} href={`/privacy-policy.pdf`}>
              Политики конфиденциальности
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
