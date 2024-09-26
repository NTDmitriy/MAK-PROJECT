import { sendToAmo } from "@/amo";
import { IForm } from "@/components/ui/forms/FormProviders";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
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
  const formattedText = formatMessageForTelegram(data, foundPage);

  await sendToAmo({ data, page: foundPage, coockie });
  const response = await sendToTelegram(formattedText);

  return response;
};
