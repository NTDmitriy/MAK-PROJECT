"use client";

import { useNotification } from "@/hooks/useNotification";
import { useSendToTelegram } from "@/hooks/useSendToTelegram";

import clsx from "clsx";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { IFormContent } from "../FormController";
import { IForm } from "../HookFormProvider";
import { Checkbox } from "../inputs/checkbox/Checkbox";
import { NameInput, PhoneInput } from "../inputs/MaskedInputs";
import styles from "./StepForm.module.css";

export const StepForm: FC<IFormContent> = ({ subServices }) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();

  console.log(subServices);

  const [step, setStep] = useState<number>(1);

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

  const toggleStep = (e: any) => {
    e.preventDefault();
    setStep(step === 1 ? 2 : 1);
  };

  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div
          className={clsx(styles.step__one, step === 1 && styles.in__step)}
          inert={step !== 1 ? "" : undefined}
        >
          <h5 className={styles.title}>ЗаКАЗАТЬ услугу(и)</h5>
          <p className={styles.descr}>
            Вы можете выбрать конкретную услугу или несколько. Для этого
            ознакомьтесь с перечнем доступных услуг и отметьте те, которые вас
            интересуют. Затем нажмите кнопку "Далее".
          </p>
          <div className={styles.checkbox__group}>
            {subServices &&
              subServices.map((item, index) => (
                <Checkbox key={index} id={`${index}`} value={item} />
              ))}
          </div>
          <PrimaryButton
            className={clsx(styles.form__nav, styles.form__nav__next)}
            onClick={toggleStep}
          >
            Далее
          </PrimaryButton>
        </div>
        <div
          className={clsx(styles.step__two, step === 2 && styles.in__step)}
          inert={step !== 2 ? "" : undefined}
        >
          <h5 className={styles.title}>ОСТАЛСЯ ПОСЛЕДНИЙ ШАГ</h5>
          <p className={styles.descr}>
            Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее
            время для проведения первичной консультации. Ответим на все ваши
            вопросы и предложим идеальные решения для вашего бизнеса!
          </p>
          <div className={styles.input__group}>
            <NameInput />
            <PhoneInput />
          </div>

          <div className={styles.btn__group}>
            <PrimaryButton
              className={clsx(styles.form__nav, styles.form__nav__prev)}
              onClick={toggleStep}
            >
              Назад
            </PrimaryButton>
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
