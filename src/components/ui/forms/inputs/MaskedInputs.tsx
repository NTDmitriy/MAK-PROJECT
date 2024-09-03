"use client";

import { useFormContext } from "react-hook-form";
import { PrimaryInput } from "./primaryInput/PrimaryInput";

enum INPUT_NAMES {
  NAME = "NAME",
  EMAIL = "EMAIL",
  NICHE = "NICHE",
  PHONE = "PHONE",
  MESSAGE = "MESSAGE",
}

export const PhoneInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <PrimaryInput
        label="Телефон"
        id={INPUT_NAMES.PHONE}
        maskParams={{ mask: "+_ (___) ___-__-__", replacement: { _: /\d/ } }}
        InputProps={{
          placeholder: "+7 (___) ___-__-__",
          autoComplete: "tel",
          type: "tel",
          ...register(INPUT_NAMES.PHONE, {
            required: `Поле "Телефон" не может быть пустым`,
            pattern: {
              value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/,
              message: "Некорректный номер телефона",
            },
          }),
        }}
        error={!!errors[INPUT_NAMES.PHONE]}
      />
    </>
  );
};

export const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <PrimaryInput
        id={INPUT_NAMES.EMAIL}
        InputProps={{
          placeholder: "E-mail",
          autoComplete: "email",
          type: "email",
          ...register(INPUT_NAMES.EMAIL, {
            required: `Поле "E-mail" не может быть пустым`,
            pattern: {
              value:
                /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~\-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~\-]+)*@[a-zA-Z0-9а-яА-Я\-]+(\.[a-zA-Z]{2,})+$/iu,
              message: `Некорректный адрес электронной почты`,
            },
          }),
        }}
        error={!!errors[INPUT_NAMES.EMAIL]}
      />
    </>
  );
};

export const NameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <PrimaryInput
        id={INPUT_NAMES.NAME}
        label="Ваше имя"
        InputProps={{
          placeholder: "Ваше имя",
          autoComplete: "name",
          type: "text",
          ...register(INPUT_NAMES.NAME, {
            required: `Поле "Ваше Имя" не может быть пустым`,
            pattern: {
              value: /^[a-zA-Zа-яА-Я\s-]{2,}$/,
              message: `Поле "Ваше Имя" заполнено не корректно`,
            },
          }),
        }}
        error={!!errors[INPUT_NAMES.NAME]}
      />
    </>
  );
};

export const NicheInput = () => {
  const { register } = useFormContext();

  return (
    <>
      <PrimaryInput
        id={INPUT_NAMES.NICHE}
        label="Ваша ниша"
        InputProps={{
          placeholder: "Ваша ниша",
          autoComplete: "off",
          type: "text",
          ...register(INPUT_NAMES.NICHE),
        }}
      />
    </>
  );
};
export const MessageInput = () => {
  const { register } = useFormContext();

  return (
    <>
      <PrimaryInput
        isTextarea={true}
        id={INPUT_NAMES.MESSAGE}
        label="Напишите ваш вопрос тут"
        InputProps={{ autoComplete: "off" }}
        TextareaProps={{
          placeholder: "Напишите ваш вопрос тут",
          autoComplete: "off",
          ...register(INPUT_NAMES.MESSAGE),
        }}
      />
    </>
  );
};
