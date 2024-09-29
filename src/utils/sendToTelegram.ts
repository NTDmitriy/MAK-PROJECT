"use server";

import { IForm } from "@/components/ui/forms/FormProviders";
import axios from "axios";
import { formatMessageForTelegram } from "./formatMessageForTelegram";
const URI_API = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`;

export const sendToTelegram = async (
  data: IForm,
  pathname: string,
  leadUrl: string | null
) => {
  
  const formattedText = await formatMessageForTelegram(data, pathname, leadUrl);

  try {
    const response = await axios.post(URI_API, {
      chat_id: process.env.CHAT_ID,
      parse_mode: "HTML",
      text: formattedText,
    });

    if (response.status === 200) {
      return {
        success: true,
        message: data.SIGNUP
          ? "Вы подписались на новостную рассылку"
          : "Заявка отправлена",
        data: response.data,
      };
    } else {
      return { success: false, message: "Запрос выполнен, но не успешен." };
    }
  } catch (error: any) {
    console.error("Ошибка при отправке запроса в Telegram", error);
    return { success: false, message: error.message };
  }
};
