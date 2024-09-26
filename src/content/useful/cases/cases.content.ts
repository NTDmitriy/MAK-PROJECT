import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import {
  TCase,
  THero,
  THeroBasic,
} from "@/typing/products.type";
import { TUsefulScreen } from "@/typing/screens.type";
import { ALL_CASES_CONTENT } from "../../all-cases/all-cases.content";

export const CASES_CONTENT = {
  url: DASHBOARD_PAGES.CASES.url,
  hero: {
    basic: {
      title: {
        accent: "Наши кейсы",
        accentAfter: "и истории успеха",
      },
      description:
        "Посмотрите, как мы помогли различным компаниям добиться успеха. Реальные кейсы и истории успеха от Make All Perfect, демонстрирующие наш подход и результаты.",
      image: "useful-cases-hero",
 
    } satisfies THeroBasic,
    infoUseful: [
      "Реальные примеры успешных решений для компаний из разных отраслей",
      "Подробные описания наших стратегий, подходов и достигнутых результатов",
    ],
  } satisfies THero,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCase[],
} satisfies TUsefulScreen;
