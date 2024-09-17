import { IDashboardItem } from "./all-pages.config";

class ADVERTISEMENT_DASHBOARD {
  private root = "/services";

  ADVERTISEMENT_VK = {
    name: "Реклама в ВКонтакте",
    smallName: "ВКонтакте",
    url: `${this.root}/reklama-vkontakte`,
    icon: "icon-nav-advertisement-vk",
    description:
      "Реклама в ВКонтакте позволяет охватить миллионы пользователей в одной из самых популярных социальных сетей России. Мы разработаем и запустим рекламные кампании, ориентированные на вашу целевую аудиторию, чтобы увеличить узнаваемость бренда и привлечь новых клиентов. Наши услуги включают анализ аудитории, создание креативов и настройку таргетинга.",
  } satisfies IDashboardItem;

  ADVERTISEMENT_YANDEX = {
    name: "Реклама в Яндекс Директ",
    smallName: "Яндекс Директ",
    url: `${this.root}/reklama-yandex-direct`,
    icon: "icon-nav-advertisement-yandex",
    description:
      "Яндекс Директ — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России. Мы поможем настроить рекламные кампании, которые привлекут целевую аудиторию и увеличат конверсию. Наши специалисты проведут анализ ключевых слов, создадут эффективные объявления и настроят таргетинг для достижения максимального результата.",
  } satisfies IDashboardItem;

  ADVERTISEMENT_GOOGLE = {
    name: "Реклама в Google",
    smallName: "Google Ads",
    url: `${this.root}/reklama-google-ads`,
    icon: "icon-nav-advertisement-google",
    description:
      "Google Ads — это мощный инструмент для продвижения вашего бизнеса в крупнейшей поисковой системе мира. Мы настроим ваши рекламные кампании так, чтобы они приносили максимальный ROI. Наши услуги включают в себя анализ ключевых слов, создание и оптимизацию объявлений, а также настройку ретаргетинга и мониторинг эффективности.",
  } satisfies IDashboardItem;

  ADVERTISEMENT_TG = {
    name: "Реклама в Telegram",
    smallName: "Telegram Ads",
    url: `${this.root}/reklama-telegram-ads`,
    icon: "icon-nav-advertisement-tg",
    description:
      "Telegram Ads — это возможность продвигать ваш бизнес в одном из самых популярных мессенджеров. Мы поможем создать эффективные рекламные кампании, которые донесут ваше сообщение до нужной аудитории. Наши услуги включают создание контента, настройку таргетинга и анализ результатов для постоянного улучшения эффективности рекламы.",
  } satisfies IDashboardItem;

  // ADVERTISEMENT_META = {
  //   name: "Реклама в Meta: Facebook & Instagram",
  //   smallName: "Meta: Facebook & Instagram",
  //   url: `${this.root}/reklama-facebook-instagram`,
  //   icon: "icon-nav-advertisement-meta",
  //   description:
  //     "Meta (Facebook/Instagram) — это мощный инструмент для продвижения вашего бизнеса в крупнейших социальных сетях мира. Мы настроим ваши рекламные кампании так, чтобы они привлекали целевую аудиторию и обеспечивали высокую вовлеченность. Наши услуги включают в себя точный таргетинг, создание креативных объявлений и настройку Facebook Pixel.",
  // } satisfies IDashboardItem;

  ADVERTISEMENT = {
    name: "Реклама",
    url: `${this.root}/reklama-v-internete`,
    icon: "IconAdvertisementNav",
    description:
      "Ищете, где заказать рекламу в интернете? Наше рекламное агентство предоставляет комплексные услуги по настройке и запуску рекламных кампаний в Яндекс Директ, ВКонтакте, Google Ads и Telegram Ads. Мы поможем вам привлечь целевую аудиторию, увеличить конверсию и добиться максимального результата от рекламы. Доверьтесь профессионалам!",
    childrens: [
      this.ADVERTISEMENT_VK,
      this.ADVERTISEMENT_YANDEX,
      this.ADVERTISEMENT_GOOGLE,
      this.ADVERTISEMENT_TG,
    ],
  } satisfies IDashboardItem;
}

export const ADVERTISEMENT_DASHBOARD_PAGES = new ADVERTISEMENT_DASHBOARD();
