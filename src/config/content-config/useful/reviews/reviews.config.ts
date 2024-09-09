import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { DASHBOARD_PAGES } from "@/config/url-config/all-pages.config";
import {
  THero,
  THeroBasic,
  TReviwe
} from "@/interfaces/types/block/products.type";
import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";
import { ALL_REVIWES } from "../../all-reviwes/all-reviwes.config";

export const REVIEWS_CONFIG = {
  url: DASHBOARD_PAGES.REVIEWS.url,
  hero: {
    basic: {
      title: {
        accentAfter: "Отзывы наших клиентов",
      },
      description: "Узнайте, что наши клиенты говорят о сотрудничестве с Make All Perfect. Мы гордимся нашими достижениями и благодарными отзывами, которые подтверждают качество нашей работы.",
      image: "promotion-schools-hero",
      formBtnText: "Оставить отзыв",
      btnUrl: CONTACTS_PUBLIC.YANDEX_REVIWES,
    } satisfies THeroBasic,
  } satisfies THero,
  reviwesList: ALL_REVIWES satisfies TReviwe[],
} satisfies TUsefulScreen;
