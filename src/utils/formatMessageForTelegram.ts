"use server";

import { IForm } from "@/components/ui/forms/FormProviders";
import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import { findPageByPathname } from "./findPageByPathname";

const fieldLabels: Record<string, string> = {
  NAME: "Имя",
  NICHE: "Ниша",
  PHONE: "Телефон",
  CHECKBOXES: "Выбранные услуги",
  MESSAGE: "Сообщение",
  PRODUCT: "Продукт",
  REQUEST: "Запрос",
  SIGNUP: "Подписался на новостную рассылку",
};

export const formatMessageForTelegram = async (
  data: IForm,
  pathname: string | null,
  leadUrl: string | null
) => {
  if (data.SIGNUP) {
    return `<i><b><u>Пользователь подписался на новости:</u></b></i>\nEmail: ${data.EMAIL}`;
  }

  const pageTitle =
    findPageByPathname(DASHBOARD_PAGES, pathname) || "Неизвестная страница";

  const linkInMessage = leadUrl
    ? `<a href="${leadUrl}">Открыть заявку в CRM➡️</a>`
    : "Заявка не попала в CRM";

  let messageInfo = `<i><b><u>ЗАЯВКА С САЙТА (${pageTitle})</u></b></i>\n${linkInMessage}\n\n`;
  let messageServices = "";

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const label = fieldLabels[key as keyof IForm] || key;
      const value = data[key as keyof IForm];

      if (!Array.isArray(value)) {
        messageInfo += value && `<b>${label}:</b> ${value?.trim()}\n`;
      } else {
        const servicesList = value
          .map((service, index) => `${index + 1}) ${service}`)
          .join("\n");

        messageServices = `<b>${label}:</b>\n${servicesList}`;
      }
    }
  }

  return `${messageInfo}\n${messageServices}`.trim();
};
