import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import {
  THero,
  THeroBasic
} from "@/typing/products.type";
import { TUsefulScreen } from "@/typing/screens.type";

export const USEFUL_CONTENT = {
  url: DASHBOARD_PAGES.USEFUL.url,
  hero: {
    basic: {
      title: {
        accent: "Полезное",
      },
      description:
        "Здесь вы найдете полезные статьи, информацию о наших вакансиях, партнерской программе и подробности о нашей компании. Все, что нужно для эффективного сотрудничества.",
        image: "useful-common-hero",
    } satisfies THeroBasic,
  } satisfies THero,
  blogPrev: true,
  aboutPrev: true,
  affiliatePrev: true,
  vacanciesPrev: true,
} satisfies TUsefulScreen;
