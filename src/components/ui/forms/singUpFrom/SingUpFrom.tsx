"use client";

import clsx from "clsx";
import { FC } from "react";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import { useHandlerFormContext } from "../HandleFormProvider";
import { EmailInput } from "../inputs/MaskedInputs";
import styles from "./SingUpFrom.module.css";

export const SingUpFrom: FC = () => {
  const { handleForm } = useHandlerFormContext();

  return (
    <form className={styles.form} onSubmit={handleForm}>
      <EmailInput />
      <PrimaryButton className={clsx(styles.submit, styles.inner)}>
        <DynamicSvg name="IconSend" />
      </PrimaryButton>
    </form>
  );
};
