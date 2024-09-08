import { TDetialServices } from "@/interfaces/types/block/products.type";

export const CONSTRUCTION_COMPANY_DETAIL = {
  title: "Услуги для строительных компаний",
  services: [
    {
      id: 1,
      title: "Разработка маркетинговой стратегии",
      description:
        "Анализируем ваш бизнес, целевую аудиторию и конкурентов, чтобы создать индивидуальную стратегию продвижения.",
      image: "promotion-schools-hero-info", 
    },
    {
      id: 2,
      title: "SEO-оптимизация",
      description:
        "Повышаем видимость вашего сайта в поисковых системах, привлекая органический трафик и потенциальных клиентов.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 3,
      title: "Контент-маркетинг",
      description:
        "Создаем информативный и полезный контент, который помогает клиентам принимать решения и доверять вашей компании.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 4,
      title: "SMM (продвижение в социальных сетях)",
      description:
        "Разрабатываем и реализуем стратегии продвижения в социальных сетях, увеличивая вовлеченность и узнаваемость бренда.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 5,
      title: "PPC-реклама",
      description:
        "Настраиваем таргетированную и контекстную рекламу, чтобы быстро привлекать целевую аудиторию и увеличивать количество заказов.",

      image: "promotion-schools-hero-info",
    },
    {
      id: 6,
      title: "Email-маркетинг",
      description:
        "Создаем цепочки писем для поддержания контакта с клиентами и повышения их лояльности.",

      image: "promotion-schools-hero-info",
    },
  ],
} satisfies TDetialServices;
