"use client";

import { FC, PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HandlerFormProvider } from "./HandleFormProvider";

export interface IForm {
  NICHE?: string;
  NAME?: string;
  PHONE?: string;
  EMAIL?: string;
  CHECKBOXES?: string[];
  REQUEST?: string;
  MESSAGE?: string;
  SIGNUP?: string;
}

export const FormProviders: FC<PropsWithChildren> = ({ children }) => {
  const methods = useForm<IForm>({
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <HandlerFormProvider>{children}</HandlerFormProvider>
    </FormProvider>
  );
};
