import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import {
  TCases,
  THero,
  THeroBasic,
} from "@/interfaces/types/block/products.type";
import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";
import { ALL_CASES_CONTENT } from "../../all-cases/all-cases.config";

export const CASES_CONFIG = {
  url: DASHBOARD_PAGES.CASES.url,
  hero: {
    basic: {
      title: {
        accentAfter: "Наши проекты",
      },
      description:
        "Посмотрите, как мы помогли различным компаниям добиться успеха. Реальные кейсы и истории успеха от Make All Perfect, демонстрирующие наш подход и результаты.",
        image: "useful-cases-hero",
      formBtnText: "Оставить отзыв",
      
    } satisfies THeroBasic,
    infoUseful: [
      "Реальные примеры успешных решений для компаний из разных отраслей",
      "Подробные описания наших стратегий, подходов и достигнутых результатов",
    ],
  } satisfies THero,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
} satisfies TUsefulScreen;
