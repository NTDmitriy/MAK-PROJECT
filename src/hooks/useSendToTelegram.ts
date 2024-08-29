"use server";

import { IForm } from "@/components/ui/forms/HookFormProvider";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";

import axios from "axios";

const URI_API = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`;

const findPageByPathname = (
  pages: Record<string, any>,
  pathname: string
): string | null => {
  for (const key in pages) {
    const page = pages[key];

    if (page.url === pathname) {
      return page.name;
    }

    if (page.childrens) {
      const foundChildPage = findPageByPathname(page.childrens, pathname);
      if (foundChildPage) {
        return foundChildPage;
      }
    }
  }

  return null;
};

const formatMessageForTelegram = (data: IForm, pathname: string) => {
  const fieldLabels: Record<string, string> = {
    NAME: "Имя",
    NICHE: "Ниша",
    PHONE: "Телефон",
    CHECKBOXES: "Выбранные услуги",
    MESSAGE: "Вопрос клиента",
    product: "Продукт",
  };

  const foundPage = findPageByPathname(DASHBOARD_PAGES, pathname);
  const pageTitle = foundPage || "Неизвестная страница";

  let messageInfo = `<i><b><u>ЗАЯВКА С САЙТА (${pageTitle})</u></b></i>\n\n`;
  let messageServices = "";

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const label = fieldLabels[key as keyof IForm] || key;
      const value = data[key as keyof IForm];

      if (!Array.isArray(value)) {
        messageInfo += `<b>${label}:</b> ${value?.trim()}\n`;
      } else {
        const servicesList = value
          .map((service, index) => `${index + 1}) ${service}`)
          .join("\n");

        messageServices = `<b>${label}:</b>\n${servicesList}`;
      }
    }
  }

  return `${messageInfo} \n ${messageServices} `;
};

export const useSendToTelegram = (data: IForm, pathname: string) => {
  const formattedText = formatMessageForTelegram(data, pathname);

  axios
    .post(URI_API, {
      chat_id: process.env.CHAT_ID,
      parse_mode: "HTML",
      text: formattedText,
    })
    .catch((error) => {
      console.error("Ошибка при отправке запроса", error);
    });
};
