"use server";

import { IForm } from "@/components/ui/forms/FormProviders";
import { Client } from "amocrm-js";

const client = new Client({
  domain: `${process.env.AMO_DOMAIN}`,
  auth: {
    client_id: `${process.env.AMO_CLIENT_ID}`,
    client_secret: `${process.env.AMO_CLIENT_SECRET}`,
    redirect_uri: `${process.env.SITE_URL}`,
    bearer: `${process.env.AMO_BEARER}`,
  },
});

export const sendToAmo = async (data: IForm, page: string | null) => {
  try {
    const leadData = processData(data, page);

    if (
      !leadData.custom_fields_values ||
      leadData.custom_fields_values.length === 0
    ) {
      throw new Error("Отсутствуют данные для передачи");
    }

    await client.request.post("/api/v4/leads", [leadData]);
  } catch (error: any) {
    console.error("API Request Error:", error.message);
  }
};

const processData = (data: IForm, page: string | null) => {
  const customFields = [];

  if (data.PHONE) {
    customFields.push({
      field_id: 1151127, // ID поля Телефон
      values: [
        {
          value: data.PHONE.trim(), // Телефон клиента
        },
      ],
    });
  }

  if (data.NAME) {
    customFields.push({
      field_id: 1151129, // ID поля Имя
      values: [
        {
          value: data.NAME.trim(), // Имя клиента
        },
      ],
    });
  }

  if (data.NICHE) {
    customFields.push({
      field_id: 1151131, // ID поля Ниша
      values: [
        {
          value: data.NICHE.trim(), // Ниша клиента
        },
      ],
    });
  }

  if (data.REQUEST) {
    customFields.push({
      field_id: 1151133, // ID поля запрос
      values: [
        {
          value: data.REQUEST.trim(), // запрос клиента
        },
      ],
    });
  }

  if (data.REQUEST) {
    customFields.push({
      field_id: 1151133, // ID поля запрос
      values: [
        {
          value: data.REQUEST.trim(), // запрос клиента
        },
      ],
    });
  }

  if (data.CHECKBOXES) {
    customFields.push({
      field_id: 1151139, // ID поля услуги
      values: [
        {
          value: data.CHECKBOXES.join(", ").trim(), // услуги
        },
      ],
    });
  }

  if (data.MESSAGE) {
    customFields.push({
      field_id: 1151141, // ID поля Сообщение
      values: [
        {
          value: data.MESSAGE.trim(), // Сообщение клиента
        },
      ],
    });
  }

  return {
    name: page || "Неизвестная страница", // Название лида
    custom_fields_values: customFields,
  };
};
