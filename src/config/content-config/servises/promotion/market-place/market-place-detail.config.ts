import { TDetialServices } from "@/interfaces/types/block/products.type";

export const MARKET_PLACE_DETAIL = {
  title: "Услуги для магазинов на маркетплейсах",
  services: [
    {
      id: 1,
      title: "Оптимизация карточек товаров",
      description:
        "Улучшаем описание и фотографии товаров, чтобы привлечь больше покупателей и увеличить конверсию.",
      image: "promotion-schools-hero-info", 
      // promotion-marketplace-services-info1
    },
    {
      id: 2,
      title: "Управление отзывами",
      description:
        "Работаем с отзывами и рейтингами, чтобы повысить доверие к вашему магазину.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 3,
      title: "Контекстная реклама",
      description:
        "Настраиваем и управляем рекламными кампаниями для привлечения целевой аудитории и увеличения продаж.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 4,
      title: "Таргетированная реклама в соц. сетях",
      description:
        "Настраиваем рекламу в социальных сетях, чтобы привлечь больше покупателей на ваш магазин.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 5,
      title: "Анализ конкурентов",
      description:
        "Изучаем стратегии конкурентов и выявляем возможности для улучшения вашего магазина.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 6,
      title: "Контент-маркетинг",
      description:
        "Создаем полезный контент, который помогает покупателям принимать решение о покупке.",

      image: "promotion-schools-hero-info",
    },
  ],
} satisfies TDetialServices;
