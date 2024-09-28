import { IForm } from "@/components/ui/forms/FormProviders";

const fieldLabels: Record<string, string> = {
  NAME: "Имя",
  NICHE: "Ниша",
  PHONE: "Телефон",
  CHECKBOXES: "Выбранные услуги",
  MESSAGE: "Сообщение",
  PRODUCT: "Продукт",
  REQUEST: "Запрос",
};

export const formatMessageForTelegram = (
  data: IForm,
  pathname: string | null,
  leadUrl: string | null
) => {
  const pageTitle = pathname || "Неизвестная страница";

  const linkInMessage = `<a href="${leadUrl ? leadUrl : null}">${
    leadUrl ? "Открыть заявку в CRM" : "Заявка не попала в CRM"
  }</a>`;

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