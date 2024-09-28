import { sendToAmo } from "@/amo";
import { IForm } from "@/components/ui/forms/FormProviders";
import { sendToTelegram } from "@/utils/sendToTelegram";

interface IUseSendForm {
  data: IForm;
  pathname: string;
  cookie: Record<string, string>;
}

export const useSendForm = async ({ data, pathname, cookie }: IUseSendForm) => {
  let leadUrl = null;

  if (!data.SIGNUP) {
    leadUrl = await sendToAmo({ data, pathname, cookie });
  }

  if(leadUrl) {
    console.log(leadUrl)
  } else {
    console.log('no lead url')
  }

  const response = await sendToTelegram(data, pathname, leadUrl);
  return response;
};
