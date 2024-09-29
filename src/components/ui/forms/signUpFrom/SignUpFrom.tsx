"use client";

import clsx from "clsx";
import { FC } from "react";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import { useHandlerFormContext } from "../HandleFormProvider";
import { EmailInput, HiddenInput, INPUT_NAMES } from "../ui-form/MaskedInputs/MaskedInputs";
import styles from "./SignUpFrom.module.css";

export const SignUpFrom: FC = () => {
  const { handleForm } = useHandlerFormContext();

  return (
    <form className={styles.form} onSubmit={handleForm}>
      
      <HiddenInput name={INPUT_NAMES.SIGNUP} value={'SIGNUP'} />
      <EmailInput />
      <PrimaryButton className={clsx(styles.submit, styles.inner)}>
        <DynamicSvg name="IconSend" />
      </PrimaryButton>
    </form>
  );
};
