"use server";
import { IForm } from "@/components/ui/forms/FormProviders";
import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import { findPageByPathname } from "@/utils/findPageByPathname";
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
  pathname: string | null;
  cookie: Record<string, string>;
}

export const sendToAmo = async ({ data, pathname, cookie }: ISendToAmo) => {
  try {
    const leadData = processData({ data, pathname, cookie });

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
      console.log("Не удалось создать лид или получить данные о лиде.");
      return null;
    }
  } catch (error: any) {
    console.error("API Request Error:", error.message);
    return null;
  }
};

const createCustomField = (field_id: number, value: string) => ({
  field_id,
  values: [{ value: value.trim() }],
});

const processData = ({ data, pathname, cookie }: ISendToAmo) => {
  const page =
    findPageByPathname(DASHBOARD_PAGES, pathname) || "Неизвестная страница";
  const customFields = [];

  if (data.PHONE)
    customFields.push(createCustomField(FIELD_IDS.PHONE, data.PHONE));
  if (data.NAME)
    customFields.push(createCustomField(FIELD_IDS.NAME, data.NAME));
  if (data.NICHE)
    customFields.push(createCustomField(FIELD_IDS.NICHE, data.NICHE));
  if (data.REQUEST)
    customFields.push(createCustomField(FIELD_IDS.REQUEST, data.REQUEST));
  if (data.CHECKBOXES)
    customFields.push(
      createCustomField(FIELD_IDS.CHECKBOXES, data.CHECKBOXES.join(", "))
    );
  if (data.MESSAGE)
    customFields.push(createCustomField(FIELD_IDS.MESSAGE, data.MESSAGE));

  customFields.push(
    createCustomField(FIELD_IDS.UTM_CONTENT, cookie.utm_content || "")
  );
  customFields.push(
    createCustomField(FIELD_IDS.UTM_MEDIUM, cookie.utm_medium || "")
  );
  customFields.push(
    createCustomField(FIELD_IDS.UTM_CAMPAIGN, cookie.utm_campaign || "")
  );
  customFields.push(
    createCustomField(FIELD_IDS.UTM_SOURCE, cookie.utm_source || "")
  );
  customFields.push(
    createCustomField(FIELD_IDS.UTM_TERM, cookie.utm_term || "")
  );
  customFields.push(
    createCustomField(FIELD_IDS.UTM_REFERRER, cookie.utm_referrer || "")
  );
  customFields.push(
    createCustomField(FIELD_IDS.YM_COUNTER, cookie._ym_counter || "")
  );
  customFields.push(createCustomField(FIELD_IDS.YM_UID, cookie._ym_uid || ""));
  customFields.push(
    createCustomField(FIELD_IDS.GCLIENTID, cookie.gclientid || "")
  );
  customFields.push(createCustomField(FIELD_IDS.YCLID, cookie.yclid || ""));
  customFields.push(createCustomField(FIELD_IDS.GCLID, cookie.gclid || ""));

  return {
    name: page || "Неизвестная страница",
    custom_fields_values: customFields,
  };
};
