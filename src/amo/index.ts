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

const FIELD_IDS = {
  PHONE: 1151127,
  NAME: 1151129,
  NICHE: 1151131,
  REQUEST: 1151133,
  CHECKBOXES: 1151139,
  MESSAGE: 1151141,
  UTM_CONTENT: 857949,
  UTM_MEDIUM: 857951,
  UTM_CAMPAIGN: 857953,
  UTM_SOURCE: 857955,
  UTM_TERM: 857957,
  UTM_REFERRER: 857959,
  YM_COUNTER: 857979,
  YM_UID: 857977,
  GCLIENTID: 857975,
  YCLID: 857983,
  GCLID: 857981,
};

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
   
      //@ts-ignore
      const createdLead = response?.data?._embedded?.leads[0]; 
      if (createdLead) {
      const leadId = createdLead.id;
      const leadUrl = `https://${process.env.AMO_DOMAIN}/leads/detail/${leadId}`;
      return leadUrl;
    } else {
      console.log("Не удалось создать лид или получить данные о лиде.");
    }
  } catch (error: any) {
    console.error("API Request Error:", error.message);
  }
};

const createCustomField = (field_id: number, value: string) => ({
  field_id,
  values: [{ value: value.trim() }],
});

const processData = ({ data, page, coockie }: ISendToAmo) => {
  const customFields = [];

  if (data.PHONE) customFields.push(createCustomField(FIELD_IDS.PHONE, data.PHONE));
  if (data.NAME) customFields.push(createCustomField(FIELD_IDS.NAME, data.NAME));
  if (data.NICHE) customFields.push(createCustomField(FIELD_IDS.NICHE, data.NICHE));
  if (data.REQUEST) customFields.push(createCustomField(FIELD_IDS.REQUEST, data.REQUEST));
  if (data.CHECKBOXES) customFields.push(createCustomField(FIELD_IDS.CHECKBOXES, data.CHECKBOXES.join(", ")));
  if (data.MESSAGE) customFields.push(createCustomField(FIELD_IDS.MESSAGE, data.MESSAGE));


  customFields.push(createCustomField(FIELD_IDS.UTM_CONTENT, coockie.utm_content || ""));
  customFields.push(createCustomField(FIELD_IDS.UTM_MEDIUM, coockie.utm_medium || ""));
  customFields.push(createCustomField(FIELD_IDS.UTM_CAMPAIGN, coockie.utm_campaign || ""));
  customFields.push(createCustomField(FIELD_IDS.UTM_SOURCE, coockie.utm_source || ""));
  customFields.push(createCustomField(FIELD_IDS.UTM_TERM, coockie.utm_term || ""));
  customFields.push(createCustomField(FIELD_IDS.UTM_REFERRER, coockie.utm_referrer || ""));
  customFields.push(createCustomField(FIELD_IDS.YM_COUNTER, coockie._ym_counter || ""));
  customFields.push(createCustomField(FIELD_IDS.YM_UID, coockie._ym_uid || ""));
  customFields.push(createCustomField(FIELD_IDS.GCLIENTID, coockie.gclientid || ""));
  customFields.push(createCustomField(FIELD_IDS.YCLID, coockie.yclid || ""));
  customFields.push(createCustomField(FIELD_IDS.GCLID, coockie.gclid || ""));

  return {
    name: page || "Неизвестная страница",
    custom_fields_values: customFields,
  };
};
