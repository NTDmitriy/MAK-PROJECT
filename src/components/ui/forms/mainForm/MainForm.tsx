"use client";

import { FC, PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import { PrimaryButton } from "../../buttons/primaryButton/PrimaryButton";
import { Container } from "../../container/Container";
import { PhoneInput } from "../inputs/MaskedInputs";
import styles from "./MainForm.module.css";

export const MainForm: FC<PropsWithChildren> = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data: Record<string, string>) => {
    console.log(data);
  };

  return (
    <>
      <Container style={{ marginTop: 100 }}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <PhoneInput />
          <PrimaryButton>Отправить</PrimaryButton>
        </form>
      </Container>
    </>
  );
};
