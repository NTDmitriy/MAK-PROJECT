"use client";

import { useNotification } from "@/hooks/useNotification";
import { useSendForm } from "@/hooks/useSendForm";
import { usePopupStore } from "@/store/popup.store";
import { getCookies } from "@/utils/cookies";
import { createContext, ReactNode, useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IForm } from "./FormProviders";

interface IHandlerFormContext {
  loading: boolean;
  onSubmit: (data: IForm) => Promise<void>;
  onError: (errors: Record<string, any>) => void;
  handleForm: () => void;
}

const HandlerFormContext = createContext<IHandlerFormContext | undefined>(
  undefined
);

export const HandlerFormProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { reset, handleSubmit } = useFormContext();
  const { closePopup } = usePopupStore();

  const onSubmit = async (data: IForm) => {
    const pathname = window.location.pathname;

    try {
      setLoading(true);

      const coockie = getCookies();
      const response = await useSendForm({ data, pathname, coockie });

      if (response?.success) {
        useNotification(response?.message || "Заявка отправлена", "success");
        closePopup();
        reset();
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "formSubmitSuccess",
          });
        }
      } else {
        useNotification(
          response?.message || "Ошибка. Повторите попытку позже",
          "error"
        );
      }
    } catch (error) {
      useNotification("Ошибка сервера. Повторите попытку позже.", "error");
      console.error("Ошибка при отправке формы:", error);
    } finally {
      setLoading(false);
    }
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

  const handleForm = handleSubmit(onSubmit, onError);

  return (
    <HandlerFormContext.Provider
      value={{ onSubmit, onError, handleForm, loading }}
    >
      {children}
    </HandlerFormContext.Provider>
  );
};

export const useHandlerFormContext = () => {
  const context = useContext(HandlerFormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
