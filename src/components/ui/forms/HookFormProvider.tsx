"use client";

import { FC, PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface IForm {
  niche?: string;
  phone?: string;
  email?: string;
	checkboxes?: string[];
}

export const HookFormProvider: FC<PropsWithChildren> = ({ children }) => {
  const methods = useForm<IForm>({
    mode: "onChange",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
