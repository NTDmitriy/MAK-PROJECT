"use server";

import axios from "axios";
const URI_API = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`;

export const sendToTelegram = async (formattedText: string) => {
  try {
    const response = await axios.post(URI_API, {
      chat_id: process.env.CHAT_ID,
      parse_mode: "HTML",
      text: formattedText,
    });

    if (response.status === 200) {
      return {
        success: true,
        message: "Заявка отправлена",
        data: response.data,
      };
    } else {
      return { success: false, message: "Запрос выполнен, но не успешен." };
    }
  } catch (error: any) {
    console.error("Ошибка при отправке запроса в Telegram", error);
    return { success: false, message: error.message };
  }
};
