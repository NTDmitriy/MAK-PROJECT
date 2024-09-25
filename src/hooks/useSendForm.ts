"use server";

import { sendToAmo } from "@/amo";
import { IForm } from "@/components/ui/forms/FormProviders";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import { findPageByPathname } from "@/utils/findPageByPathname";
import { formatMessageForTelegram } from "@/utils/formatMessageForTelegram";
import { sendToTelegram } from "@/utils/sendToTelegram";

export const useSendForm = async (data: IForm, pathname: string) => {
  const foundPage = findPageByPathname(DASHBOARD_PAGES, pathname);
  const formattedText = formatMessageForTelegram(data, foundPage);

  await sendToAmo(data, foundPage);
  const response = await sendToTelegram(formattedText);

  return response;
};
