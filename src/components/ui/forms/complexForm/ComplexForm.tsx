"use client";

import clsx from "clsx";
import { FC } from "react";
import { IFormContent } from "../FormController";
import { useHandlerFormContext } from "../HandleFormProvider";
import {
  HiddenInput,
  INPUT_NAMES,
  NameInput,
  PhoneInput,
} from "../ui-form/MaskedInputs/MaskedInputs";
import { PrivacyNotice } from "../ui-form/privacyNotice/PrivacyNotice";
import { SubmitButton } from "../ui-form/submitButton/SubmitButton";
import styles from "./ComplexForm.module.css";

export const ComplexForm: FC<IFormContent> = ({ title, text }) => {
  const { handleForm } = useHandlerFormContext();

  return (
    <div className={styles.content}>
      <form className={clsx(styles.form, 'form')} onSubmit={handleForm}>
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
            {title && <HiddenInput name={INPUT_NAMES.REQUEST} value={title} />}
          </div>

          <div className={styles.btn__group}>
            <SubmitButton className={styles.submit} />
          </div>
          <div className={styles.notice}>
            <PrivacyNotice />
          </div>
        </div>
      </form>
    </div>
  );
};
