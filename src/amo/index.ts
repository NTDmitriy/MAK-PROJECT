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

interface ISendToAmo {
  data: IForm;
  page: string | null;
  coockie: Record<string, string>;
}

export const sendToAmo = async ({ data, page, coockie }: ISendToAmo) => {
  try {
    const leadData = processData({ data, page, coockie });

    if (
      !leadData.custom_fields_values ||
      leadData.custom_fields_values.length === 0
    ) {
      throw new Error("Отсутствуют данные для передачи");
    }

    const response = await client.request.post("/api/v4/leads", [leadData]);
    // Проверка на наличие данных в ответе
    if (
      response &&
      response.data &&
      //@ts-ignore
      response.data._embedded &&
      //@ts-ignore
      response.data._embedded.leads
    ) {
      //@ts-ignore
      const createdLead = response.data._embedded.leads[0]; // Получаем первый созданный лид

      const leadId = createdLead.id;
      const leadUrl = `https://${process.env.AMO_DOMAIN}/leads/detail/${leadId}` ;
      return leadUrl;
    } else {
      console.log("Не удалось создать лид или получить данные о лиде.");
    }
  } catch (error: any) {
    console.error("API Request Error:", error.message);
  }
};

const processData = ({ data, page, coockie }: ISendToAmo) => {
  const customFields = [];

  if (data.PHONE) {
    customFields.push({
      field_id: 1151127, // ID поля Телефон
      values: [
        {
          value: data.PHONE.trim(),
        },
      ],
    });
  }

  if (data.NAME) {
    customFields.push({
      field_id: 1151129, // ID поля Имя
      values: [
        {
          value: data.NAME.trim(),
        },
      ],
    });
  }

  if (data.NICHE) {
    customFields.push({
      field_id: 1151131, // ID поля Ниша
      values: [
        {
          value: data.NICHE.trim(),
        },
      ],
    });
  }

  if (data.REQUEST) {
    customFields.push({
      field_id: 1151133, // ID поля запрос
      values: [
        {
          value: data.REQUEST.trim(),
        },
      ],
    });
  }

  if (data.CHECKBOXES) {
    customFields.push({
      field_id: 1151139, // ID поля услуги
      values: [
        {
          value: data.CHECKBOXES.join(", ").trim(),
        },
      ],
    });
  }

  if (data.MESSAGE) {
    customFields.push({
      field_id: 1151141, // ID поля Сообщение
      values: [
        {
          value: data.MESSAGE.trim(),
        },
      ],
    });
  }

  // analytics

  customFields.push({
    field_id: 857949, // ID поля utm_content
    values: [
      {
        value: coockie.utm_content || "",
      },
    ],
  });

  customFields.push({
    field_id: 857951, // ID поля utm_medium
    values: [
      {
        value: coockie.utm_medium || "",
      },
    ],
  });

  customFields.push({
    field_id: 857953, // ID поля utm_campaign
    values: [
      {
        value: coockie.utm_campaign || "",
      },
    ],
  });

  customFields.push({
    field_id: 857955, // ID поля utm_source
    values: [
      {
        value: coockie.utm_source || "",
      },
    ],
  });

  customFields.push({
    field_id: 857957, // ID поля utm_term
    values: [
      {
        value: coockie.utm_term || "",
      },
    ],
  });

  customFields.push({
    field_id: 857959, // ID поля utm_referrer
    values: [
      {
        value: coockie.utm_referrer || "",
      },
    ],
  });

  customFields.push({
    field_id: 857979, // ID поля _ym_counter
    values: [
      {
        value: coockie._ym_counter || "",
      },
    ],
  });

  customFields.push({
    field_id: 857977, // ID поля _ym_uid
    values: [
      {
        value: coockie._ym_uid || "",
      },
    ],
  });

  customFields.push({
    field_id: 857975, // ID поля gclientid
    values: [
      {
        value: coockie.gclientid || "",
      },
    ],
  });

  customFields.push({
    field_id: 857983, // ID поля yclid
    values: [
      {
        value: coockie.yclid || "",
      },
    ],
  });

  customFields.push({
    field_id: 857981, // ID поля gclid
    values: [
      {
        value: coockie.gclid || "",
      },
    ],
  });

  return {
    name: page || "Неизвестная страница", // Название лида
    custom_fields_values: customFields,
  };
};