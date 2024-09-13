

import { ADVERTISEMENT_DASHBOARD_PAGES } from "@/config/url-config/advertisement-pages.config";
import { TServiceProducts } from "@/interfaces/types/block/products.type";

export const ADVERTISEMENT_PRODUCTS = {
  blockTitle: "Наши услуги по рекламе",

  items: [
    {
      name: "Яндекс Директ",
      description: 'Яндекс Директ — это инструмент для запуска контекстной рекламы в одной из крупнейших поисковых систем России. Мы поможем настроить рекламные кампании, которые привлекут целевую аудиторию и увеличат конверсию. Наши специалисты проведут анализ ключевых слов, создадут эффективные объявления и настроят таргетинг для достижения максимального результата.',
      priceFrom: 50000,
      image: "advertisement-yandex-prev",
      url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_YANDEX.url,
    },
    {
      name: 'ВКонтакте',
      description: 'Реклама в ВКонтакте позволяет охватить миллионы пользователей в одной из самых популярных социальных сетей России. Мы разработаем и запустим рекламные кампании, ориентированные на вашу целевую аудиторию, чтобы увеличить узнаваемость бренда и привлечь новых клиентов. Наши услуги включают анализ аудитории, создание креативов и настройку таргетинга.',
      priceFrom: 50000,
      image: "advertisement-vk-prev",
      url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_VK.url,
    },
    {
      name: 'GOOGLE ADS',
      description: 'Google Ads — это мощный инструмент для продвижения вашего бизнеса в крупнейшей поисковой системе мира. Мы настроим ваши рекламные кампании так, чтобы они приносили максимальный ROI. Наши услуги включают в себя анализ ключевых слов, создание и оптимизацию объявлений, а также настройку ретаргетинга и мониторинг эффективности.',
      priceFrom: 50000,
      image: "advertisement-google-prev",
      url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_GOOGLE.url,
    },
    {
      name: 'Telegram ads',
      description: 'Telegram Ads — это возможность продвигать ваш бизнес в одном из самых популярных мессенджеров. Мы поможем создать эффективные рекламные кампании, которые донесут ваше сообщение до нужной аудитории. Наши услуги включают создание контента, настройку таргетинга и анализ результатов для постоянного улучшения эффективности рекламы.',
      priceFrom: 50000,
      image: "advertisement-telegram-prev",
      url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_TG.url,
    },
    {
      name: 'Meta: Facebook & Instagram',
      description: 'Meta (Facebook/Instagram) — это мощный инструмент для продвижения вашего бизнеса в крупнейших социальных сетях мира. Мы настроим ваши рекламные кампании так, чтобы они привлекали целевую аудиторию и обеспечивали высокую вовлеченность. Наши услуги включают в себя точный таргетинг, создание креативных объявлений и настройку Facebook Pixel.',
      priceFrom: 50000,
      image: "advertisement-meta-prev",
      url: ADVERTISEMENT_DASHBOARD_PAGES.ADVERTISEMENT_META.url,
    },
  ],
} satisfies TServiceProducts;
