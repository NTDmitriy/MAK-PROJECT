import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import {
  THero,
  THeroBasic
} from "@/interfaces/types/block/products.type";
import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";

export const USEFUL_CONFIG = {
  url: DASHBOARD_PAGES.USEFUL.url,
  hero: {
    basic: {
      title: {
        accent: "Полезное",
      },
      description:
        "Здесь вы найдете полезные статьи, информацию о наших вакансиях, партнерской программе и подробности о нашей компании. Все, что нужно для эффективного сотрудничества.",
        image: "useful-common-hero",
    } satisfies THeroBasic,
  } satisfies THero,
  blogPrev: true,
  aboutPrev: true,
  affiliatePrev: true,
  vacanciesPrev: true,
} satisfies TUsefulScreen;
