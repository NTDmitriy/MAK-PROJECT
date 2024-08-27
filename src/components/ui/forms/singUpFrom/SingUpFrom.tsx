"use client";

import { useNotification } from "@/hooks/useNotification";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import { IForm } from "../HookFormProvider";
import { EmailInput } from "../inputs/MaskedInputs";
import styles from "./SingUpFrom.module.css";

export const SingUpFrom: FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();

  const onSubmit = (data: IForm) => {
    useNotification("Вы подписались на новостную рассылку!", "success");
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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
      <EmailInput />
      <PrimaryButton className={styles.submit}>
        <DynamicSvg name="IconSend" />
      </PrimaryButton>
    </form>
  );
};
