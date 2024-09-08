import { USEFUL_DASHBOARD_PAGES } from "@/config/url-config/useful-pages.config";
import {
  THero,
  THeroBasic,
  THeroInfo,
  TReviwe,
} from "@/interfaces/types/block/products.type";
import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";
import { ALL_REVIWES } from "../../all-reviwes/all-reviwes.config";

export const ABOUT_US_CONFIG = {
  url: USEFUL_DASHBOARD_PAGES.ABOUT.url,
  hero: {
    basic: {
      title: {
        accentAfter: "О компании Make All Perfect",
      },
      description:
        "Узнайте больше о нашем маркетинговом агентстве, наших ценностях, подходах и истории успеха. Познакомьтесь с нашей командой и миссией.",
      image: "promotion-schools-hero",
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
