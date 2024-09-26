import { USEFUL_DASHBOARD_PAGES } from "@/dashboard/useful.dashboard";
import {
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
} from "@/typing/products.type";
import { TUsefulScreen } from "@/typing/screens.type";
import { ALL_REVIWES } from "../../all-reviwes/all-reviwes.content";

export const ABOUT_US_CONTENT = {
  url: USEFUL_DASHBOARD_PAGES.ABOUT.url,
  hero: {
    basic: {
      title: {
        accent: 'Make All Perfect',
        accentBefore: "О компании",
      },
      description:
        "Узнайте больше о нашем маркетинговом агентстве, наших ценностях, подходах и истории успеха. Познакомьтесь с нашей командой и миссией.",
      image: "useful-about-hero",
    } satisfies THeroBasic,
    infoUseful: [
      "Надежный партнер в мире digital маркетинга.",
      "Мы нацелены на долгосрочное сотрудничество.",
    ] satisfies THeroInfo,
  } satisfies THero,
  aboutUs: true,
  ourStatistic: true,
  ourClients: true,
  ourTeam: true,
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TUsefulScreen;
