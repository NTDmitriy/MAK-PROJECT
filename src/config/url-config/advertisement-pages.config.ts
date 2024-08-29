import { IDashboardItem } from "./all-pages.config";

class ADVERTISEMENT_DASHBOARD {
  private root = "/services";

  ADVERTISEMENT_VK = {
    name: "Реклама в ВКонтакте",
    smallName: "ВКонтакте",
    url: `${this.root}/reklama-vkontakte`,
    image: "promotion-construction-company-700x300",
    icon: "hero-info",
    description:
      "Реклама в ВКонтакте позволяет охватить миллионы пользователей в одной из самых популярных социальных сетей России. Мы разработаем и запустим рекламные кампании, ориентированные на вашу целевую аудиторию, чтобы увеличить узнаваемость бренда и привлечь новых клиентов. Наши услуги включают анализ аудитории, создание креативов и настройку таргетинга.",
  } satisfies IDashboardItem;

  ADVERTISEMENT_YANDEX_DIRECT = {
    name: "Реклама в Яндекс Директ",
    smallName: "Яндекс Директ",
    url: `${this.root}/reklama-yandex-direct`,
    image: "promotion-construction-company-700x300",
    icon: "hero-info",
    description:
      "Яндекс Директ — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России. Мы поможем настроить рекламные кампании, которые привлекут целевую аудиторию и увеличат конверсию. Наши специалисты проведут анализ ключевых слов, создадут эффективные объявления и настроят таргетинг для достижения максимального результата.",
  } satisfies IDashboardItem;

  ADVERTISEMENT_GOOGLE_ADS = {
    name: "Реклама в Google",
    smallName: "Google Ads",
    url: `${this.root}/reklama-google-ads`,
    image: "promotion-construction-company-700x300",
    icon: "hero-info",
    description:
      "Google Ads — это мощный инструмент для продвижения вашего бизнеса в крупнейшей поисковой системе мира. Мы настроим ваши рекламные кампании так, чтобы они приносили максимальный ROI. Наши услуги включают в себя анализ ключевых слов, создание и оптимизацию объявлений, а также настройку ретаргетинга и мониторинг эффективности.",
  } satisfies IDashboardItem;

  ADVERTISEMENT_TG = {
    name: "Реклама в Telegram",
    smallName: "Telegram Ads",
    url: `${this.root}/reklama-telegram-ads`,
    image: "promotion-construction-company-700x300",
    icon: "hero-info",
    description:
      "Telegram Ads — это возможность продвигать ваш бизнес в одном из самых популярных мессенджеров. Мы поможем создать эффективные рекламные кампании, которые донесут ваше сообщение до нужной аудитории. Наши услуги включают создание контента, настройку таргетинга и анализ результатов для постоянного улучшения эффективности рекламы.",
  } satisfies IDashboardItem;

  ADVERTISEMENT_FACEBOOk = {
    name: "Реклама в Meta: Facebook & Instagram",
    smallName: "Meta: Facebook & Instagram",
    url: `${this.root}/reklama-facebook-instagram`,
    image: "promotion-construction-company-700x300",
    icon: "hero-info",
    description:
      "Meta (Facebook/Instagram) — это мощный инструмент для продвижения вашего бизнеса в крупнейших социальных сетях мира. Мы настроим ваши рекламные кампании так, чтобы они привлекали целевую аудиторию и обеспечивали высокую вовлеченность. Наши услуги включают в себя точный таргетинг, создание креативных объявлений и настройку Facebook Pixel.",
  } satisfies IDashboardItem;

  ADVERTISEMENT = {
    name: "Реклама",
    url: `${this.root}/reklama-v-internete`,
    childrens: [
      this.ADVERTISEMENT_VK,
      this.ADVERTISEMENT_YANDEX_DIRECT,
      this.ADVERTISEMENT_GOOGLE_ADS,
      this.ADVERTISEMENT_TG,
      this.ADVERTISEMENT_FACEBOOk,
    ],
  } satisfies IDashboardItem;
}

export const ADVERTISEMENT_DASHBOARD_PAGES = new ADVERTISEMENT_DASHBOARD();
