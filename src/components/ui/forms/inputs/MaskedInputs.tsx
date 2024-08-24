"use client";

import { TextFieldProps } from "@mui/material";
import { InputMask } from "@react-input/mask";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import PrimaryInput from "./PrimaryInput";

const PhoneInputMask = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, forwardedRef) => {
    return (
      <InputMask
        ref={forwardedRef}
        mask="+_ (___) ___-__-__"
        {...props}
        replacement={{ _: /\d/ }}
      />
    );
  }
);

const PhoneInput = ((props: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <PrimaryInput
      placeholder="+7 (999) 123-45-67"
      label="Телефон"
      autoComplete="tel"
      type="tel"
      control-id="tel"
      error={!!errors.PHONE}
      InputProps={{
        ...register("PHONE"),
        inputComponent: PhoneInputMask as any,
      }}
      {...props}
    />
  );
});

export { PhoneInput };

