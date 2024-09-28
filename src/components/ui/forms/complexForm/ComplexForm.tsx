"use client";

import clsx from "clsx";
import { FC } from "react";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { IFormContent } from "../FormController";
import { useHandlerFormContext } from "../HandleFormProvider";
import {
  HiddenInput,
  INPUT_NAMES,
  NameInput,
  PhoneInput,
} from "../inputs/MaskedInputs";
import styles from "./ComplexForm.module.css";

export const ComplexForm: FC<IFormContent> = ({ title, text }) => {
  const { handleForm } = useHandlerFormContext();

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleForm}>
        <div className={clsx(styles.form__content)}>
          {title && <h5 className={styles.title}> {title}</h5>}
          {!title && <h5 className={styles.title}>ЗАКАЗАТЬ КОМПЛЕКС УСЛУГ</h5>}

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

          <div className={styles.input__group}>
            <NameInput />
            <PhoneInput />
            {title && (
              <HiddenInput name={INPUT_NAMES.REQUEST} value={title} />
            )}
          </div>

          <div className={styles.btn__group}>
            <PrimaryButton className={styles.submit}>Отправить</PrimaryButton>
          </div>
          <p className={styles.notice}>
            Нажимая на кнопку "Отправить" Вы даете согласие на обработку своих
            персональных данных и соглашаетесь с условиями{" "}
            <a className={styles.privacy} href={`/privacy-policy.pdf`}>
              Политики конфиденциальности
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
