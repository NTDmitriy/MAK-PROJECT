import { sendToAmo } from "@/amo";
import { IForm } from "@/components/ui/forms/FormProviders";
import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import { findPageByPathname } from "@/utils/findPageByPathname";
import { formatMessageForTelegram } from "@/utils/formatMessageForTelegram";
import { sendToTelegram } from "@/utils/sendToTelegram";

interface IUseSendForm {
  data: IForm;
  pathname: string;
  coockie: Record<string, string>;
}

export const useSendForm = async ({
  data,
  pathname,
  coockie,
}: IUseSendForm) => {
  const foundPage = findPageByPathname(DASHBOARD_PAGES, pathname);
  const leadUrl = (await sendToAmo({ data, page: foundPage, coockie })) || null;
  const formattedText = formatMessageForTelegram(data, foundPage, leadUrl);
  const response = await sendToTelegram(formattedText);

  return response;
};
