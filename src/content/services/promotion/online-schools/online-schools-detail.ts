import { TDetialServices } from "@/typing/products.type";

export const ONLINE_SCHOOL_DETAIL = {
  title: "Услуги для онлай-школ",
  services: [
    {
      id: 1,
      title: "Разработка маркетинговой стратегии",
      description:
        "Мы анализируем ваш бизнес, целевую аудиторию и конкурентов, чтобы создать индивидуальную стратегию продвижения.",
      image: "promotion-school-detail-1",
    },
    {
      id: 2,
      title: "SEO-оптимизация",
      description:
        "Повышаем видимость вашего сайта в поисковых системах, привлекая органический трафик.",

      image: "promotion-school-detail-2",
    },
    {
      id: 3,
      title: "Контент-маркетинг",
      description:
        "Создаем полезный и интересный контент, который привлекает и удерживает внимание аудитории.",

      image: "promotion-school-detail-3",
    },
    {
      id: 4,
      title: "SMM (продвижение в социальных сетях)",
      description:
        "Разрабатываем и реализуем стратегии продвижения в социальных сетях, увеличивая вовлеченность и лояльность аудитории.",

      image: "promotion-school-detail-4",
    },
    {
      id: 5,
      title: "PPC-реклама",
      description:
        "Настраиваем контекстную и таргетированную рекламу для быстрого привлечения целевой аудитории.",

      image: "promotion-school-detail-5",
    },
    {
      id: 6,
      title: "Email-маркетинг",
      description:
        "Создаем цепочки писем для повышения вовлеченности и удержания клиентов.",

      image: "promotion-school-detail-6",
    },
  ],
} satisfies TDetialServices;
