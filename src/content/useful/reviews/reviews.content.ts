import { CONTACTS_PUBLIC } from "@/content/contacts.data";
import { DASHBOARD_PAGES } from "@/dashboard/app.dashboard";
import {
  THero,
  THeroBasic,
  TReviwe,
} from "@/typing/products.type";
import { TUsefulScreen } from "@/typing/screens.type";
import { ALL_REVIWES } from "../../all-reviwes/all-reviwes.content";

export const REVIEWS_CONTENT = {
  url: DASHBOARD_PAGES.REVIEWS.url,
  hero: {
    basic: {
      title: {
        accent: "Отзывы",
        accentAfter: "наших клиентов",
      },
      description:
        "Узнайте, что наши клиенты говорят о сотрудничестве с Make All Perfect. Мы гордимся нашими достижениями и благодарными отзывами, которые подтверждают качество нашей работы.",
      image: "useful-reviews-hero",
      formBtnText: "Оставить отзыв",
      btnUrl: CONTACTS_PUBLIC.YANDEX_REVIWES,
    } satisfies THeroBasic,
  } satisfies THero,
  reviwesList: ALL_REVIWES satisfies TReviwe[],
} satisfies TUsefulScreen;
