import { USEFUL_DASHBOARD_PAGES } from "@/dashboard/useful.dashboard";
import {
  THero,
  THeroBasic,
  TVacancies,
  TVacanciesItem,
} from "@/typing/products.type";
import { TUsefulScreen } from "@/typing/screens.type";
import { ALL_VACANCIES } from "../../all-vacancies/all-vacancies.content";

export const VACANCIES_CONTENT = {
  url: USEFUL_DASHBOARD_PAGES.VACANCIES.url,
  hero: {
    basic: {
      title: {
        accent: 'Карьера',
        accentAfter: "в Make All Perfect",
      },
      description:
        "Присоединяйтесь к нашей команде! Узнайте о текущих вакансиях и возможностях карьерного роста в Make All Perfect. Мы ищем талантливых профессионалов, готовых расти вместе с нами.",
      image: "useful-vacancies-hero",
      formText:
        "Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время, чтобы обсудить все детали и следующий шаг в процессе рассмотрения вашей кандидатуры. Мы готовы ответить на все ваши вопросы, рассказать больше о компании и условиях работы, чтобы вы могли принять обоснованное решение о сотрудничестве с нами.",
    } satisfies THeroBasic,
  } satisfies THero,
  vacancies: {
    blockTitle: "Актуальные вакансии",
    formText:
      "Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время, чтобы обсудить все детали и следующий шаг в процессе рассмотрения вашей кандидатуры. Мы готовы ответить на все ваши вопросы, рассказать больше о компании и условиях работы, чтобы вы могли принять обоснованное решение о сотрудничестве с нами.",
    items: ALL_VACANCIES satisfies TVacanciesItem[],
  } satisfies TVacancies,
} satisfies TUsefulScreen;
